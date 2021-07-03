<?php


    declare(strict_types = 1);


    namespace WPEmerge\Application;

    use Contracts\ContainerAdapter;
    use Nyholm\Psr7Server\ServerRequestCreator;
    use Psr\Http\Message\ResponseFactoryInterface;
    use Psr\Http\Message\ServerRequestFactoryInterface;
    use Psr\Http\Message\ServerRequestInterface;
    use Psr\Http\Message\StreamFactoryInterface;
    use Psr\Http\Message\UploadedFileFactoryInterface;
    use Psr\Http\Message\UriFactoryInterface;
    use WPEmerge\ExceptionHandling\Exceptions\ConfigurationException;
    use WPEmerge\Http\Psr7\Request;
    use WPEmerge\Events\EventServiceProvider;
    use WPEmerge\ExceptionHandling\ExceptionServiceProvider;
    use WPEmerge\Factories\FactoryServiceProvider;
    use WPEmerge\Http\HttpServiceProvider;
    use WPEmerge\Mail\MailServiceProvider;
    use WPEmerge\Middleware\MiddlewareServiceProvider;
    use WPEmerge\Routing\RoutingServiceProvider;
    use WPEmerge\View\ViewServiceProvider;
    use WPEmerge\Facade\WpFacade;

    class Application
    {

        use ManagesAliases;
        use LoadsServiceProviders;
        use HasContainer;
        use SetPsrFactories;

        const CORE_SERVICE_PROVIDERS = [

            ApplicationServiceProvider::class,
            ExceptionServiceProvider::class,
            EventServiceProvider::class,
            FactoryServiceProvider::class,
            RoutingServiceProvider::class,
            HttpServiceProvider::class,
            MiddlewareServiceProvider::class,
            ViewServiceProvider::class,
            MailServiceProvider::class,

        ];

        private $bootstrapped = false;

        /**
         * @var ApplicationConfig
         */
        private $config;

        /**
         * @var bool
         */
        private $running_unit_test = false;

        /**
         * @var string
         */
        private $base_path;

        public function __construct(ContainerAdapter $container)
        {

            $this->setContainer($container);
            $this->container()->instance(Application::class, $this);
            $this->container()->instance(ContainerAdapter::class, $this->container());
            WpFacade::setFacadeContainer($container);

        }

        public static function generateKey() : string
        {

            return 'base64:'.base64_encode(random_bytes(32));

        }

        public static function create(string $base_path, ContainerAdapter $container_adapter) : Application
        {

            $app = new static($container_adapter);
            $app->setBasePath($base_path);

            return $app;

        }

        public function boot(bool $load = true) : void
        {

            if ($this->bootstrapped) {

                throw new ConfigurationException(static::class.' already bootstrapped.');

            }

            $this->config = ((new LoadConfiguration))->bootstrap($this);
            $this->container()->instance(ApplicationConfig::class, $this->config);
            $this->container()->instance(ServerRequestCreator::class, $this->serverRequestCreator());

            if ( ! $load ) {
                return;
            }

            $this->registerErrorHandler();

            $this->captureRequest();

            $this->loadServiceProviders();

            $this->bootstrapped = true;

        }

        public function config(?string $key = null, $default = null)
        {

            if ( ! $key) {

                return $this->config;

            }

            return $this->config->get($key, $default);

        }

        public function basePath() : string
        {
            return $this->base_path;
        }

        public function storagePath($path = '') : string
        {

            $storage_dir = $this->config->get('app.storage_dir');

            if ( !$storage_dir) {
                throw new \RuntimeException('No storage directory was set for the application.');
            }

            return $storage_dir.($path ? DIRECTORY_SEPARATOR.$path : $path);

        }

        public function configPath($path = '') : string
        {
            return $this->base_path.DIRECTORY_SEPARATOR.'config'.($path ? DIRECTORY_SEPARATOR.$path : $path);
        }

        public function runningUnitTest()
        {

            $this->running_unit_test = true;

        }

        public function isRunningUnitTest() : bool
        {

            return $this->running_unit_test;
        }

        private function captureRequest()
        {

            $psr_request = $this->serverRequestCreator()->fromGlobals();

            $request = new Request($psr_request);

            $this->container()->instance(Request::class, $request);


        }

        private function setBasePath(string $base_path)
        {

            $this->base_path = rtrim($base_path, '\/');
        }

        private function registerErrorHandler()
        {

            /** @todo Instead of booting the error handler in the config boot it here but lazy load it from the container */


        }

    }
