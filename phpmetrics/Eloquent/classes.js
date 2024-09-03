var classes = [
    {
        "name": "Snicco\\Component\\Eloquent\\Illuminate\\WPConnectionResolver",
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
                "name": "__call",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "connection",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDefaultConnection",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setDefaultConnection",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "resolveConnection",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 6,
        "nbMethods": 4,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 1,
        "nbMethodsSetters": 1,
        "wmc": 7,
        "ccn": 4,
        "ccnMethodMax": 3,
        "externals": [
            "Illuminate\\Database\\ConnectionResolverInterface",
            "Illuminate\\Database\\ConnectionResolverInterface",
            "Snicco\\Component\\Eloquent\\Mysqli\\MysqliFactory",
            "Illuminate\\Database\\ConnectionInterface",
            "Illuminate\\Database\\ConnectionInterface"
        ],
        "parents": [],
        "implements": [
            "Illuminate\\Database\\ConnectionResolverInterface"
        ],
        "lcom": 1,
        "length": 49,
        "vocabulary": 11,
        "volume": 169.51,
        "difficulty": 13.33,
        "effort": 2260.16,
        "level": 0.08,
        "bugs": 0.06,
        "time": 126,
        "intelligentContent": 12.71,
        "number_operators": 17,
        "number_operands": 32,
        "number_operators_unique": 5,
        "number_operands_unique": 6,
        "cloc": 32,
        "loc": 76,
        "lloc": 44,
        "mi": 90.22,
        "mIwoC": 48,
        "commentWeight": 42.21,
        "kanDefect": 0.36,
        "relativeStructuralComplexity": 16,
        "relativeDataComplexity": 1.43,
        "relativeSystemComplexity": 17.43,
        "totalStructuralComplexity": 96,
        "totalDataComplexity": 8.6,
        "totalSystemComplexity": 104.6,
        "package": "Snicco\\Component\\Eloquent\\Illuminate\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 3,
        "instability": 0.75,
        "violations": {}
    },
    {
        "name": "Snicco\\Component\\Eloquent\\Illuminate\\MysqliConnection",
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
                "name": "lastInsertId",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "selectOne",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "select",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "selectFromWriteConnection",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "insert",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "statement",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "update",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "affectingStatement",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "delete",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "unprepared",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "cursor",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "run",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "reconnectIfMissingConnection",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 14,
        "nbMethods": 14,
        "nbMethodsPrivate": 2,
        "nbMethodsPublic": 12,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 25,
        "ccn": 12,
        "ccnMethodMax": 4,
        "externals": [
            "Illuminate\\Database\\MySqlConnection",
            "Snicco\\Component\\Eloquent\\Mysqli\\MysqliDriverInterface",
            "Snicco\\Component\\Eloquent\\WPDatabaseSettingsAPI",
            "Generator",
            "Closure",
            "Illuminate\\Database\\QueryException"
        ],
        "parents": [
            "Illuminate\\Database\\MySqlConnection"
        ],
        "implements": [],
        "lcom": 1,
        "length": 180,
        "vocabulary": 29,
        "volume": 874.44,
        "difficulty": 14.58,
        "effort": 12752.2,
        "level": 0.07,
        "bugs": 0.29,
        "time": 708,
        "intelligentContent": 59.96,
        "number_operators": 40,
        "number_operands": 140,
        "number_operators_unique": 5,
        "number_operands_unique": 24,
        "cloc": 111,
        "loc": 229,
        "lloc": 118,
        "mi": 76.66,
        "mIwoC": 32.59,
        "commentWeight": 44.06,
        "kanDefect": 0.94,
        "relativeStructuralComplexity": 625,
        "relativeDataComplexity": 0.92,
        "relativeSystemComplexity": 625.92,
        "totalStructuralComplexity": 8750,
        "totalDataComplexity": 12.88,
        "totalSystemComplexity": 8762.88,
        "package": "Snicco\\Component\\Eloquent\\Illuminate\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 6,
        "instability": 0.86,
        "violations": {}
    },
    {
        "name": "Snicco\\Component\\Eloquent\\Illuminate\\WithFactory",
        "interface": false,
        "abstract": true,
        "final": false,
        "methods": [
            {
                "name": "newFactory",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Database\\Eloquent\\Factories\\Factory",
            "Illuminate\\Support\\Str",
            "factory"
        ],
        "parents": [],
        "implements": [],
        "lcom": 1,
        "length": 17,
        "vocabulary": 7,
        "volume": 47.73,
        "difficulty": 3.75,
        "effort": 178.97,
        "level": 0.27,
        "bugs": 0.02,
        "time": 10,
        "intelligentContent": 12.73,
        "number_operators": 7,
        "number_operands": 10,
        "number_operators_unique": 3,
        "number_operands_unique": 4,
        "cloc": 4,
        "loc": 16,
        "lloc": 12,
        "mi": 99.54,
        "mIwoC": 64.57,
        "commentWeight": 34.97,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 0.5,
        "relativeSystemComplexity": 1.5,
        "totalStructuralComplexity": 1,
        "totalDataComplexity": 0.5,
        "totalSystemComplexity": 1.5,
        "package": "Snicco\\Component\\Eloquent\\Illuminate\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Snicco\\Component\\Eloquent\\Illuminate\\WPModel",
        "interface": false,
        "abstract": true,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "Illuminate\\Database\\Eloquent\\Model"
        ],
        "parents": [
            "Illuminate\\Database\\Eloquent\\Model"
        ],
        "implements": [],
        "lcom": 0,
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
        "cloc": 3,
        "loc": 8,
        "lloc": 5,
        "mi": 211.63,
        "mIwoC": 171,
        "commentWeight": 40.63,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "Snicco\\Component\\Eloquent\\Illuminate\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Snicco\\Component\\Eloquent\\WPEloquentStandalone",
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
                "name": "withDatabaseFactories",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "withEvents",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "bootstrap",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "bindEventDispatcher",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "bindConfig",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "bindTransactionManager",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "newConnectionResolver",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "bindDBFacade",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 9,
        "nbMethods": 9,
        "nbMethodsPrivate": 5,
        "nbMethodsPublic": 4,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 15,
        "ccn": 7,
        "ccnMethodMax": 4,
        "externals": [
            "Illuminate\\Container\\Container",
            "RuntimeException",
            "Illuminate\\Support\\Facades\\Facade",
            "Illuminate\\Support\\Facades\\Facade",
            "RuntimeException",
            "Faker\\Factory",
            "Illuminate\\Database\\Eloquent\\Factories\\Factory",
            "Illuminate\\Database\\Eloquent\\Factories\\Factory",
            "Illuminate\\Contracts\\Events\\Dispatcher",
            "Snicco\\Component\\Eloquent\\Illuminate\\WPConnectionResolver",
            "Illuminate\\Database\\Eloquent\\Model",
            "Illuminate\\Contracts\\Events\\Dispatcher",
            "Illuminate\\Database\\Eloquent\\Model",
            "Illuminate\\Support\\Fluent",
            "Illuminate\\Database\\DatabaseTransactionsManager",
            "Snicco\\Component\\Eloquent\\Illuminate\\WPConnectionResolver",
            "Illuminate\\Database\\Connectors\\ConnectionFactory",
            "Illuminate\\Database\\DatabaseManager",
            "Snicco\\Component\\Eloquent\\Mysqli\\MysqliFactory",
            "Snicco\\Component\\Eloquent\\Illuminate\\WPConnectionResolver",
            "Illuminate\\Database\\ConnectionResolverInterface"
        ],
        "parents": [],
        "implements": [],
        "lcom": 1,
        "length": 117,
        "vocabulary": 29,
        "volume": 568.38,
        "difficulty": 9.06,
        "effort": 5150.98,
        "level": 0.11,
        "bugs": 0.19,
        "time": 286,
        "intelligentContent": 62.72,
        "number_operators": 30,
        "number_operands": 87,
        "number_operators_unique": 5,
        "number_operands_unique": 24,
        "cloc": 9,
        "loc": 96,
        "lloc": 87,
        "mi": 60.3,
        "mIwoC": 37.46,
        "commentWeight": 22.84,
        "kanDefect": 0.5,
        "relativeStructuralComplexity": 256,
        "relativeDataComplexity": 0.41,
        "relativeSystemComplexity": 256.41,
        "totalStructuralComplexity": 2304,
        "totalDataComplexity": 3.65,
        "totalSystemComplexity": 2307.65,
        "package": "Snicco\\Component\\Eloquent\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 14,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Snicco\\Component\\Eloquent\\WPDatabaseSettingsAPI",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "dbHost",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "dbUser",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "dbName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "dbPassword",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "dbCharset",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "dbCollate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "tablePrefix",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "wpdb",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "mysqli",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 9,
        "nbMethods": 9,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 9,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 10,
        "ccn": 2,
        "ccnMethodMax": 2,
        "externals": [
            "Snicco\\Component\\BetterWPAPI\\BetterWPAPI",
            "wpdb",
            "mysqli"
        ],
        "parents": [
            "Snicco\\Component\\BetterWPAPI\\BetterWPAPI"
        ],
        "implements": [],
        "lcom": 7,
        "length": 20,
        "vocabulary": 7,
        "volume": 56.15,
        "difficulty": 3,
        "effort": 168.44,
        "level": 0.33,
        "bugs": 0.02,
        "time": 9,
        "intelligentContent": 18.72,
        "number_operators": 12,
        "number_operands": 8,
        "number_operators_unique": 3,
        "number_operands_unique": 4,
        "cloc": 10,
        "loc": 55,
        "lloc": 45,
        "mi": 82.1,
        "mIwoC": 51.42,
        "commentWeight": 30.68,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 3.33,
        "relativeSystemComplexity": 7.33,
        "totalStructuralComplexity": 36,
        "totalDataComplexity": 30,
        "totalSystemComplexity": 66,
        "package": "Snicco\\Component\\Eloquent\\",
        "pageRank": 0,
        "afferentCoupling": 2,
        "efferentCoupling": 3,
        "instability": 0.6,
        "violations": {}
    },
    {
        "name": "Snicco\\Component\\Eloquent\\Mysqli\\MysqliDriver",
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
                "name": "doSelect",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "doStatement",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "doUnprepared",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "doCursorSelect",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "lastInsertId",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isStillConnected",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "reconnect",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "commit",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "beginTransaction",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "exec",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "doAffectingStatement",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "rollback",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createPreparedStatement",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "lastException",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "executeStatement",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getMysqliResult",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 17,
        "nbMethods": 17,
        "nbMethodsPrivate": 4,
        "nbMethodsPublic": 13,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 48,
        "ccn": 32,
        "ccnMethodMax": 9,
        "externals": [
            "Snicco\\Component\\Eloquent\\Mysqli\\MysqliDriverInterface",
            "mysqli",
            "Snicco\\Component\\Eloquent\\Mysqli\\MysqliReconnect",
            "Illuminate\\Database\\QueryException",
            "Illuminate\\Database\\QueryException",
            "mysqli_result",
            "Illuminate\\Database\\QueryException",
            "Illuminate\\Database\\QueryException",
            "Illuminate\\Database\\QueryException",
            "Illuminate\\Database\\QueryException",
            "mysqli_stmt",
            "Illuminate\\Database\\QueryException",
            "Illuminate\\Database\\QueryException",
            "Illuminate\\Database\\QueryException",
            "Illuminate\\Database\\QueryException",
            "mysqli_sql_exception",
            "mysqli_sql_exception",
            "mysqli_stmt",
            "Illuminate\\Database\\QueryException",
            "mysqli_result",
            "mysqli_stmt",
            "Illuminate\\Database\\QueryException"
        ],
        "parents": [],
        "implements": [
            "Snicco\\Component\\Eloquent\\Mysqli\\MysqliDriverInterface"
        ],
        "lcom": 1,
        "length": 293,
        "vocabulary": 39,
        "volume": 1548.62,
        "difficulty": 27.1,
        "effort": 41962.68,
        "level": 0.04,
        "bugs": 0.52,
        "time": 2331,
        "intelligentContent": 57.15,
        "number_operators": 83,
        "number_operands": 210,
        "number_operators_unique": 8,
        "number_operands_unique": 31,
        "cloc": 20,
        "loc": 213,
        "lloc": 193,
        "mi": 46.36,
        "mIwoC": 23.5,
        "commentWeight": 22.85,
        "kanDefect": 1.66,
        "relativeStructuralComplexity": 256,
        "relativeDataComplexity": 1.19,
        "relativeSystemComplexity": 257.19,
        "totalStructuralComplexity": 4352,
        "totalDataComplexity": 20.18,
        "totalSystemComplexity": 4372.18,
        "package": "Snicco\\Component\\Eloquent\\Mysqli\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 7,
        "instability": 0.88,
        "violations": {}
    },
    {
        "name": "Snicco\\Component\\Eloquent\\Mysqli\\MysqliFactory",
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
            },
            {
                "name": "getReconnect",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 3,
        "ccn": 2,
        "ccnMethodMax": 2,
        "externals": [
            "Snicco\\Component\\Eloquent\\Illuminate\\MysqliConnection",
            "Snicco\\Component\\Eloquent\\WPDatabaseSettingsAPI",
            "Snicco\\Component\\Eloquent\\Mysqli\\MysqliReconnect",
            "Snicco\\Component\\Eloquent\\Mysqli\\MysqliDriver",
            "Snicco\\Component\\Eloquent\\Illuminate\\MysqliConnection",
            "Snicco\\Component\\Eloquent\\WPDatabaseSettingsAPI",
            "RuntimeException"
        ],
        "parents": [],
        "implements": [],
        "lcom": 1,
        "length": 21,
        "vocabulary": 8,
        "volume": 63,
        "difficulty": 4.2,
        "effort": 264.6,
        "level": 0.24,
        "bugs": 0.02,
        "time": 15,
        "intelligentContent": 15,
        "number_operators": 7,
        "number_operands": 14,
        "number_operators_unique": 3,
        "number_operands_unique": 5,
        "cloc": 8,
        "loc": 28,
        "lloc": 20,
        "mi": 95.58,
        "mIwoC": 58.75,
        "commentWeight": 36.83,
        "kanDefect": 0.22,
        "relativeStructuralComplexity": 16,
        "relativeDataComplexity": 0.7,
        "relativeSystemComplexity": 16.7,
        "totalStructuralComplexity": 32,
        "totalDataComplexity": 1.4,
        "totalSystemComplexity": 33.4,
        "package": "Snicco\\Component\\Eloquent\\Mysqli\\",
        "pageRank": 0,
        "afferentCoupling": 2,
        "efferentCoupling": 5,
        "instability": 0.71,
        "violations": {}
    },
    {
        "name": "Snicco\\Component\\Eloquent\\Mysqli\\MysqliReconnect",
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
                "name": "getMysqli",
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
        "wmc": 2,
        "ccn": 2,
        "ccnMethodMax": 2,
        "externals": [
            "Closure",
            "mysqli",
            "RuntimeException"
        ],
        "parents": [],
        "implements": [],
        "lcom": 1,
        "length": 15,
        "vocabulary": 8,
        "volume": 45,
        "difficulty": 3,
        "effort": 135,
        "level": 0.33,
        "bugs": 0.02,
        "time": 8,
        "intelligentContent": 15,
        "number_operators": 5,
        "number_operands": 10,
        "number_operators_unique": 3,
        "number_operands_unique": 5,
        "cloc": 15,
        "loc": 33,
        "lloc": 18,
        "mi": 104.01,
        "mIwoC": 60.77,
        "commentWeight": 43.23,
        "kanDefect": 0.22,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 1.5,
        "relativeSystemComplexity": 1.5,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 3,
        "totalSystemComplexity": 3,
        "package": "Snicco\\Component\\Eloquent\\Mysqli\\",
        "pageRank": 0,
        "afferentCoupling": 2,
        "efferentCoupling": 3,
        "instability": 0.6,
        "violations": {}
    }
]