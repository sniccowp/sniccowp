var classes = [
    {
        "name": "Snicco\\Component\\EventDispatcher\\BaseEventDispatcher",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "dispatch",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "remove",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "subscribe",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "listen",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "transform",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getListenersForEvent",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "mergeReflectionListeners",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "callListener",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "resetListenerCache",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "parseListenerId",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validatedListener",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 12,
        "nbMethods": 12,
        "nbMethodsPrivate": 7,
        "nbMethodsPublic": 5,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 44,
        "ccn": 33,
        "ccnMethodMax": 8,
        "externals": [
            "Snicco\\Component\\EventDispatcher\\EventDispatcher",
            "Snicco\\Component\\EventDispatcher\\ListenerFactory\\NewableListenerFactory",
            "Snicco\\Component\\EventDispatcher\\Exception\\CantRemoveListener",
            "InvalidArgumentException",
            "Snicco\\Component\\EventDispatcher\\ClosureTypeHint",
            "InvalidArgumentException",
            "Snicco\\Component\\EventDispatcher\\Event",
            "Snicco\\Component\\EventDispatcher\\GenericEvent",
            "ReflectionClass",
            "Snicco\\Component\\EventDispatcher\\Event",
            "Snicco\\Component\\EventDispatcher\\Exception\\InvalidListener",
            "Snicco\\Component\\EventDispatcher\\Exception\\InvalidListener",
            "Snicco\\Component\\EventDispatcher\\Exception\\InvalidListener",
            "Snicco\\Component\\EventDispatcher\\Exception\\InvalidListener",
            "Snicco\\Component\\EventDispatcher\\Exception\\InvalidListener"
        ],
        "parents": [],
        "implements": [
            "Snicco\\Component\\EventDispatcher\\EventDispatcher"
        ],
        "lcom": 1,
        "length": 248,
        "vocabulary": 35,
        "volume": 1272.06,
        "difficulty": 18.83,
        "effort": 23949.86,
        "level": 0.05,
        "bugs": 0.42,
        "time": 1331,
        "intelligentContent": 67.56,
        "number_operators": 66,
        "number_operands": 182,
        "number_operators_unique": 6,
        "number_operands_unique": 29,
        "cloc": 27,
        "loc": 175,
        "lloc": 148,
        "mi": 55.06,
        "mIwoC": 26.48,
        "commentWeight": 28.58,
        "kanDefect": 2.31,
        "relativeStructuralComplexity": 289,
        "relativeDataComplexity": 1.02,
        "relativeSystemComplexity": 290.02,
        "totalStructuralComplexity": 3468,
        "totalDataComplexity": 12.28,
        "totalSystemComplexity": 3480.28,
        "package": "Snicco\\Component\\EventDispatcher\\",
        "pageRank": 0,
        "afferentCoupling": 2,
        "efferentCoupling": 9,
        "instability": 0.82,
        "violations": {}
    },
    {
        "name": "Snicco\\Component\\EventDispatcher\\GenericEvent",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fromObject",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "payload",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "name",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 2,
        "nbMethodsSetters": 0,
        "wmc": 2,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Snicco\\Component\\EventDispatcher\\Event",
            "Snicco\\Component\\EventDispatcher\\GenericEvent"
        ],
        "parents": [],
        "implements": [
            "Snicco\\Component\\EventDispatcher\\Event"
        ],
        "lcom": 2,
        "length": 16,
        "vocabulary": 6,
        "volume": 41.36,
        "difficulty": 2.75,
        "effort": 113.74,
        "level": 0.36,
        "bugs": 0.01,
        "time": 6,
        "intelligentContent": 15.04,
        "number_operators": 5,
        "number_operands": 11,
        "number_operators_unique": 2,
        "number_operands_unique": 4,
        "cloc": 3,
        "loc": 26,
        "lloc": 23,
        "mi": 83.96,
        "mIwoC": 58.84,
        "commentWeight": 25.11,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 3.75,
        "relativeSystemComplexity": 3.75,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 15,
        "totalSystemComplexity": 15,
        "package": "Snicco\\Component\\EventDispatcher\\",
        "pageRank": 0,
        "afferentCoupling": 7,
        "efferentCoupling": 3,
        "instability": 0.3,
        "violations": {}
    },
    {
        "name": "Snicco\\Component\\EventDispatcher\\Exception\\CantRemoveListener",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "thatIsMarkedAsUnremovable",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "LogicException"
        ],
        "parents": [
            "LogicException"
        ],
        "implements": [],
        "lcom": 1,
        "length": 7,
        "vocabulary": 5,
        "volume": 16.25,
        "difficulty": 0.75,
        "effort": 12.19,
        "level": 1.33,
        "bugs": 0.01,
        "time": 1,
        "intelligentContent": 21.67,
        "number_operators": 1,
        "number_operands": 6,
        "number_operators_unique": 1,
        "number_operands_unique": 4,
        "cloc": 3,
        "loc": 11,
        "lloc": 8,
        "mi": 107.87,
        "mIwoC": 71.69,
        "commentWeight": 36.18,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 3,
        "relativeSystemComplexity": 3,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 3,
        "totalSystemComplexity": 3,
        "package": "Snicco\\Component\\EventDispatcher\\Exception\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 1,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "Snicco\\Component\\EventDispatcher\\Exception\\CantCreateListener",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "becauseTheListenerWasNotInstantiatable",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fromPrevious",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 2,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "RuntimeException",
            "Throwable",
            "Psr\\Container\\ContainerExceptionInterface"
        ],
        "parents": [
            "RuntimeException"
        ],
        "implements": [],
        "lcom": 2,
        "length": 24,
        "vocabulary": 11,
        "volume": 83.03,
        "difficulty": 2.33,
        "effort": 193.73,
        "level": 0.43,
        "bugs": 0.03,
        "time": 11,
        "intelligentContent": 35.58,
        "number_operators": 3,
        "number_operands": 21,
        "number_operators_unique": 2,
        "number_operands_unique": 9,
        "cloc": 0,
        "loc": 13,
        "lloc": 13,
        "mi": 62.13,
        "mIwoC": 62.13,
        "commentWeight": 0,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 1.67,
        "relativeSystemComplexity": 5.67,
        "totalStructuralComplexity": 8,
        "totalDataComplexity": 3.33,
        "totalSystemComplexity": 11.33,
        "package": "Snicco\\Component\\EventDispatcher\\Exception\\",
        "pageRank": 0,
        "afferentCoupling": 2,
        "efferentCoupling": 3,
        "instability": 0.6,
        "violations": {}
    },
    {
        "name": "Snicco\\Component\\EventDispatcher\\Exception\\InvalidListener",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "becauseListenerClassDoesntExist",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "becauseListenerCantBeInvoked",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "becauseTheClosureDoesntHaveATypeHintedObject",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "becauseProvidedClassMethodDoesntExist",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 4,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 4,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 4,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "InvalidArgumentException",
            "Snicco\\Component\\EventDispatcher\\Exception\\InvalidListener",
            "Snicco\\Component\\EventDispatcher\\Exception\\InvalidListener",
            "Snicco\\Component\\EventDispatcher\\Exception\\InvalidListener",
            "Snicco\\Component\\EventDispatcher\\Exception\\InvalidListener",
            "Snicco\\Component\\EventDispatcher\\Exception\\InvalidListener",
            "Snicco\\Component\\EventDispatcher\\Exception\\InvalidListener",
            "Snicco\\Component\\EventDispatcher\\Exception\\InvalidListener",
            "Snicco\\Component\\EventDispatcher\\Exception\\InvalidListener"
        ],
        "parents": [
            "InvalidArgumentException"
        ],
        "implements": [],
        "lcom": 4,
        "length": 17,
        "vocabulary": 8,
        "volume": 51,
        "difficulty": 0.93,
        "effort": 47.36,
        "level": 1.08,
        "bugs": 0.02,
        "time": 3,
        "intelligentContent": 54.92,
        "number_operators": 4,
        "number_operands": 13,
        "number_operators_unique": 1,
        "number_operands_unique": 7,
        "cloc": 3,
        "loc": 23,
        "lloc": 20,
        "mi": 86.07,
        "mIwoC": 59.53,
        "commentWeight": 26.54,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 4.75,
        "relativeSystemComplexity": 4.75,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 19,
        "totalSystemComplexity": 19,
        "package": "Snicco\\Component\\EventDispatcher\\Exception\\",
        "pageRank": 0.01,
        "afferentCoupling": 4,
        "efferentCoupling": 3,
        "instability": 0.43,
        "violations": {}
    },
    {
        "name": "Snicco\\Component\\EventDispatcher\\ClassAsPayload",
        "interface": false,
        "abstract": true,
        "final": false,
        "methods": [
            {
                "name": "payload",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [],
        "parents": [],
        "implements": [],
        "lcom": 1,
        "length": 2,
        "vocabulary": 2,
        "volume": 2,
        "difficulty": 0.5,
        "effort": 1,
        "level": 2,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 4,
        "number_operators": 1,
        "number_operands": 1,
        "number_operators_unique": 1,
        "number_operands_unique": 1,
        "cloc": 0,
        "loc": 8,
        "lloc": 8,
        "mi": 78.06,
        "mIwoC": 78.06,
        "commentWeight": 0,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 1,
        "relativeSystemComplexity": 1,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 1,
        "totalSystemComplexity": 1,
        "package": "Snicco\\Component\\EventDispatcher\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "Snicco\\Component\\EventDispatcher\\ListenerFactory\\NewableListenerFactory",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "create",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 2,
        "ccn": 2,
        "ccnMethodMax": 2,
        "externals": [
            "Snicco\\Component\\EventDispatcher\\ListenerFactory\\ListenerFactory",
            "listener_class",
            "Snicco\\Component\\EventDispatcher\\Exception\\CantCreateListener"
        ],
        "parents": [],
        "implements": [
            "Snicco\\Component\\EventDispatcher\\ListenerFactory\\ListenerFactory"
        ],
        "lcom": 1,
        "length": 9,
        "vocabulary": 5,
        "volume": 20.9,
        "difficulty": 2.33,
        "effort": 48.76,
        "level": 0.43,
        "bugs": 0.01,
        "time": 3,
        "intelligentContent": 8.96,
        "number_operators": 2,
        "number_operands": 7,
        "number_operators_unique": 2,
        "number_operands_unique": 3,
        "cloc": 3,
        "loc": 15,
        "lloc": 12,
        "mi": 98.88,
        "mIwoC": 66.95,
        "commentWeight": 31.94,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 1.5,
        "relativeSystemComplexity": 2.5,
        "totalStructuralComplexity": 1,
        "totalDataComplexity": 1.5,
        "totalSystemComplexity": 2.5,
        "package": "Snicco\\Component\\EventDispatcher\\ListenerFactory\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 3,
        "instability": 0.75,
        "violations": {}
    },
    {
        "name": "Snicco\\Component\\EventDispatcher\\ListenerFactory\\PsrListenerFactory",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "__construct",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "create",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 1,
        "wmc": 3,
        "ccn": 3,
        "ccnMethodMax": 3,
        "externals": [
            "Snicco\\Component\\EventDispatcher\\ListenerFactory\\ListenerFactory",
            "Psr\\Container\\ContainerInterface",
            "InvalidArgumentException",
            "Snicco\\Component\\EventDispatcher\\Exception\\CantCreateListener"
        ],
        "parents": [],
        "implements": [
            "Snicco\\Component\\EventDispatcher\\ListenerFactory\\ListenerFactory"
        ],
        "lcom": 1,
        "length": 21,
        "vocabulary": 11,
        "volume": 72.65,
        "difficulty": 4.57,
        "effort": 332.11,
        "level": 0.22,
        "bugs": 0.02,
        "time": 18,
        "intelligentContent": 15.89,
        "number_operators": 5,
        "number_operands": 16,
        "number_operators_unique": 4,
        "number_operands_unique": 7,
        "cloc": 0,
        "loc": 21,
        "lloc": 21,
        "mi": 57.72,
        "mIwoC": 57.72,
        "commentWeight": 0,
        "kanDefect": 0.22,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 0.83,
        "relativeSystemComplexity": 4.83,
        "totalStructuralComplexity": 8,
        "totalDataComplexity": 1.67,
        "totalSystemComplexity": 9.67,
        "package": "Snicco\\Component\\EventDispatcher\\ListenerFactory\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 4,
        "instability": 0.8,
        "violations": {}
    },
    {
        "name": "Snicco\\Component\\EventDispatcher\\ClosureTypeHint",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "first",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 4,
        "ccn": 4,
        "ccnMethodMax": 4,
        "externals": [
            "Closure",
            "ReflectionFunction",
            "Snicco\\Component\\EventDispatcher\\Exception\\InvalidListener",
            "Snicco\\Component\\EventDispatcher\\Exception\\InvalidListener"
        ],
        "parents": [],
        "implements": [],
        "lcom": 1,
        "length": 24,
        "vocabulary": 11,
        "volume": 83.03,
        "difficulty": 6.25,
        "effort": 518.91,
        "level": 0.16,
        "bugs": 0.03,
        "time": 29,
        "intelligentContent": 13.28,
        "number_operators": 9,
        "number_operands": 15,
        "number_operators_unique": 5,
        "number_operands_unique": 6,
        "cloc": 8,
        "loc": 26,
        "lloc": 18,
        "mi": 96.51,
        "mIwoC": 58.64,
        "commentWeight": 37.87,
        "kanDefect": 0.29,
        "relativeStructuralComplexity": 16,
        "relativeDataComplexity": 0.4,
        "relativeSystemComplexity": 16.4,
        "totalStructuralComplexity": 16,
        "totalDataComplexity": 0.4,
        "totalSystemComplexity": 16.4,
        "package": "Snicco\\Component\\EventDispatcher\\",
        "pageRank": 0,
        "afferentCoupling": 2,
        "efferentCoupling": 3,
        "instability": 0.6,
        "violations": {}
    },
    {
        "name": "Snicco\\Component\\EventDispatcher\\ClassAsName",
        "interface": false,
        "abstract": true,
        "final": false,
        "methods": [
            {
                "name": "name",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [],
        "parents": [],
        "implements": [],
        "lcom": 1,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 0,
        "loc": 8,
        "lloc": 8,
        "mi": 171,
        "mIwoC": 171,
        "commentWeight": 0,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 1,
        "relativeSystemComplexity": 1,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 1,
        "totalSystemComplexity": 1,
        "package": "Snicco\\Component\\EventDispatcher\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "Snicco\\Component\\EventDispatcher\\Testing\\TestableEventDispatcher",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "__construct",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "listen",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "dispatch",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "remove",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "subscribe",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fake",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fakeAll",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fakeExcept",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "assertNotingDispatched",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "assertDispatched",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "assertNotDispatched",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "assertDispatchedTimes",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "resetDispatchedEvents",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "shouldFakeEvent",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDispatched",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 15,
        "nbMethods": 14,
        "nbMethodsPrivate": 2,
        "nbMethodsPublic": 12,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 1,
        "wmc": 32,
        "ccn": 19,
        "ccnMethodMax": 7,
        "externals": [
            "Snicco\\Component\\EventDispatcher\\EventDispatcher",
            "Snicco\\Component\\EventDispatcher\\EventDispatcher",
            "Snicco\\Component\\EventDispatcher\\GenericEvent",
            "InvalidArgumentException",
            "PHPUnit\\Framework\\Assert",
            "Snicco\\Component\\EventDispatcher\\ClosureTypeHint",
            "PHPUnit\\Framework\\Assert",
            "PHPUnit\\Framework\\Assert",
            "Snicco\\Component\\EventDispatcher\\ClosureTypeHint",
            "PHPUnit\\Framework\\Assert",
            "PHPUnit\\Framework\\Assert",
            "Closure",
            "LogicException"
        ],
        "parents": [],
        "implements": [
            "Snicco\\Component\\EventDispatcher\\EventDispatcher"
        ],
        "lcom": 1,
        "length": 185,
        "vocabulary": 30,
        "volume": 907.77,
        "difficulty": 17.25,
        "effort": 15659.11,
        "level": 0.06,
        "bugs": 0.3,
        "time": 870,
        "intelligentContent": 52.62,
        "number_operators": 47,
        "number_operands": 138,
        "number_operators_unique": 6,
        "number_operands_unique": 24,
        "cloc": 31,
        "loc": 157,
        "lloc": 126,
        "mi": 62.68,
        "mIwoC": 30.92,
        "commentWeight": 31.76,
        "kanDefect": 1.22,
        "relativeStructuralComplexity": 196,
        "relativeDataComplexity": 0.55,
        "relativeSystemComplexity": 196.55,
        "totalStructuralComplexity": 2940,
        "totalDataComplexity": 8.2,
        "totalSystemComplexity": 2948.2,
        "package": "Snicco\\Component\\EventDispatcher\\Testing\\",
        "pageRank": 0,
        "afferentCoupling": 2,
        "efferentCoupling": 7,
        "instability": 0.78,
        "violations": {}
    }
]