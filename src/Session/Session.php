<?php


    declare(strict_types = 1);


    namespace WPEmerge\Session;

    use Carbon\Carbon;
    use Closure;
    use Illuminate\Support\ViewErrorBag;
    use WPEmerge\Support\Arr;
    use WPEmerge\Support\Str;
    use stdClass;
    use SessionHandlerInterface;

    class Session
    {

        /**
         * @var string
         */
        private $id;

        /**
         * @var string
         */
        private $name;

        /**
         * @var array
         */
        private $attributes = [];

        /**
         * @var SessionHandlerInterface
         */
        private $handler;

        /**
         * @var bool
         */
        private $started = false;

        /**
         * @var array
         */
        private $initial_attributes;

        /**
         * @var array
         */
        private $loaded_data_from_handler = [];

        /**
         * @var int
         */
        private $token_strength_in_bytes;

        public function __construct(string $cookie_name, SessionDriver $handler, int $token_strength_in_bytes = 32)
        {

            $this->handler = $handler;
            $this->name = $cookie_name;
            $this->token_strength_in_bytes = $token_strength_in_bytes;

        }

        public function start(string $session_id) : bool
        {

            $this->setId($session_id);

            $this->loadDataFromDriver();

            if ( ! $this->sessionExisted() ) {

                $this->id = $this->generateSessionId();

            }

            $this->started = true;

            $this->initial_attributes = $this->attributes;

            return $this->started;

        }

        public function save() : void
        {

            $this->ageFlashData();

            $this->handler->write(
                $this->getId(),
                $this->prepareForStorage(serialize($this->attributes))
            );


        }

        public function wasChanged() : bool
        {
            return $this->initial_attributes !== $this->attributes;
        }

        public function all() : array
        {

            return $this->attributes;
        }

        public function only($keys) : array
        {

            return Arr::only($this->attributes, $keys);

        }

        public function exists($key) : bool
        {

            $placeholder = new stdClass;

            return ! collect(is_array($key) ? $key : func_get_args())->contains(function ($key) use ($placeholder) {

                return $this->get($key, $placeholder) === $placeholder;
            });
        }

        public function missing($key) : bool
        {

            return ! $this->exists($key);
        }

        public function has($key) : bool
        {

            return ! collect(is_array($key) ? $key : func_get_args())->contains(function ($key) {

                return is_null($this->get($key));
            });
        }

        public function get(string $key, $default = null)
        {

            return Arr::get($this->attributes, $key, $default);
        }

        public function pull(string $key, $default = null)
        {

            return Arr::pull($this->attributes, $key, $default);
        }

        public function hasOldInput(string $key = null) : bool
        {

            $old = $this->getOldInput($key);

            return is_null($key) ? count($old) > 0 : ! is_null($old);
        }

        public function getOldInput(string $key = null, $default = null)
        {

            return Arr::get($this->get('_old_input', []), $key, $default);
        }

        public function replace(array $attributes) : void
        {

            $this->put($attributes);
        }

        public function put($key, $value = null) : void
        {

            if ( ! is_array($key)) {
                $key = [$key => $value];
            }

            foreach ($key as $arrayKey => $arrayValue) {
                Arr::set($this->attributes, $arrayKey, $arrayValue);
            }
        }

        public function remember(string $key, Closure $callback)
        {

            if ( ! is_null($value = $this->get($key))) {
                return $value;
            }

            return tap($callback(), function ($value) use ($key) {

                $this->put($key, $value);

            });
        }

        public function push(string $key, $value) : void
        {

            $array = $this->get($key, []);

            $array[] = $value;

            $this->put($key, $array);
        }

        public function increment(string $key, int $amount = 1, int $start_value = 0) : int
        {

            if ( ! $this->has($key)) {
                $this->put($key, $start_value);
            }

            $this->put($key, $value = $this->get($key, 0) + $amount);

            return $value;
        }

        public function decrement($key, $amount = 1) : int
        {

            return $this->increment($key, $amount * -1);
        }

        public function flash(string $key, $value = true) : void
        {

            $this->put($key, $value);

            $this->push('_flash.new', $key);

            $this->removeFromOldFlashData([$key]);
        }

        public function now(string $key, $value) : void
        {

            $this->put($key, $value);

            $this->push('_flash.old', $key);
        }

        public function reflash() : void
        {

            $this->mergeNewFlashes($this->get('_flash.old', []));

            $this->put('_flash.old', []);
        }

        public function keep($keys = null) : void
        {

            $this->mergeNewFlashes($keys = is_array($keys) ? $keys : func_get_args());

            $this->removeFromOldFlashData($keys);
        }

        public function flashInput(array $value) : void
        {
            $this->flash('_old_input', $value);
        }

        public function remove(string $key)
        {

            return Arr::pull($this->attributes, $key);
        }

        public function forget($keys) : void
        {

            Arr::forget($this->attributes, $keys);
        }

        public function flush() : void
        {
            $this->attributes = [];
        }

        public function invalidate() : bool
        {

            $this->flush();

            return $this->migrate(true);
        }

        public function regenerate(bool $destroy = false) : bool
        {

            return $this->migrate($destroy);
        }

        public function migrate(bool $destroy = false) : bool
        {

            if ($destroy) {
                $this->handler->destroy($this->getId());
            }

            $this->setId($this->generateSessionId());

            return true;
        }

        public function isStarted() : bool
        {
            return $this->started;
        }

        public function getId() : string
        {

            return $this->id;
        }

        public function getName() : string
        {

            return $this->name;
        }

        public function setName(string $name) : void
        {

            $this->name = $name;
        }

        public function setId(string $id) : Session
        {

            $this->id = $this->isValidId($id) ? $id : $this->generateSessionId();

            return $this;

        }

        public function isValidId(string $id) : bool
        {

            return ( strlen($id) === 2 * $this->token_strength_in_bytes)
                && ctype_alnum($id)
                && $this->getDriver()->isValid($id);

        }

        public function getPreviousUrl( ?string $fallback = '/') : ?string
        {
            return $this->get('_url.previous', $fallback);
        }

        public function setPreviousUrl(string $url) : void
        {

            $this->put('_url.previous', $url);
        }

        public function getIntendedUrl(string $default = '')
        {

            return $this->pull('_url.intended', $default);


        }

        public function confirmAuthUntil(int $duration_in_minutes)
        {

            $this->put(
                'auth.confirm.until',
                Carbon::now()->addMinutes($duration_in_minutes)->getTimestamp()
            );

        }

        public function hasValidAuthConfirmToken() : bool
        {

            return Carbon::now()->getTimestamp() < $this->get('auth.confirm.until', 0);

        }

        public function setIntendedUrl(string $url)
        {

            $this->put('_url.intended', $url);

        }

        public function getDriver() : SessionDriver
        {

            return $this->handler;
        }

        public function errors() : ViewErrorBag
        {

            $errors = $this->get('errors', new ViewErrorBag);

            if ( ! $errors instanceof ViewErrorBag) {
                $errors = new ViewErrorBag;
            }

            return $errors;
        }

        protected function prepareForUnserialize(string $data) : string
        {

            return $data;

        }

        protected function prepareForStorage(string $data) : string
        {

            return $data;
        }

        private function generateSessionId() : string
        {

            return bin2hex(random_bytes($this->token_strength_in_bytes));

        }

        private function ageFlashData() : void
        {

            $this->forget($this->get('_flash.old', []));

            $this->put('_flash.old', $this->get('_flash.new', []));

            $this->put('_flash.new', []);


        }

        private function readFromDriver() : array
        {

            if ($data = $this->handler->read($this->getId())) {

                $data = @unserialize($this->prepareForUnserialize($data));

                if ($data !== false && ! is_null($data) && is_array($data)) {
                    return $data;
                }
            }

            return [];
        }

        private function mergeNewFlashes(array $keys) : void
        {

            $values = array_unique(array_merge($this->get('_flash.new', []), $keys));

            $this->put('_flash.new', $values);
        }

        private function removeFromOldFlashData(array $keys) : void
        {

            $this->put('_flash.old', array_diff($this->get('_flash.old', []), $keys));
        }

        private function loadDataFromDriver()
        {

            $data = $this->readFromDriver();

            $this->loaded_data_from_handler = $data;

            $this->attributes = Arr::mergeRecursive($this->attributes, $data);

        }

        private function sessionExisted() : bool
        {
            return $this->loaded_data_from_handler !== [];
        }


    }