var classes = [
    {
        "name": "Snicco\\Middleware\\WPNonce\\Exception\\InvalidWPNonce",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "forPath",
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
            "Snicco\\Component\\Psr7ErrorHandler\\HttpException"
        ],
        "parents": [
            "Snicco\\Component\\Psr7ErrorHandler\\HttpException"
        ],
        "implements": [],
        "lcom": 1,
        "length": 5,
        "vocabulary": 4,
        "volume": 10,
        "difficulty": 0.67,
        "effort": 6.67,
        "level": 1.5,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 15,
        "number_operators": 1,
        "number_operands": 4,
        "number_operators_unique": 1,
        "number_operands_unique": 3,
        "cloc": 0,
        "loc": 8,
        "lloc": 8,
        "mi": 73.16,
        "mIwoC": 73.16,
        "commentWeight": 0,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 2,
        "relativeSystemComplexity": 2,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 2,
        "totalSystemComplexity": 2,
        "package": "Snicco\\Middleware\\WPNonce\\Exception\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 1,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "Snicco\\Middleware\\WPNonce\\VerifyWPNonce",
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
                "name": "inputKey",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "handle",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 3,
        "nbMethods": 3,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 4,
        "ccn": 2,
        "ccnMethodMax": 2,
        "externals": [
            "Snicco\\Component\\HttpRouting\\Middleware\\Middleware",
            "Snicco\\Component\\BetterWPAPI\\BetterWPAPI",
            "Snicco\\Component\\BetterWPAPI\\BetterWPAPI",
            "Snicco\\Middleware\\WPNonce\\Middleware\\CheckWPNonce",
            "Psr\\Http\\Message\\ResponseInterface",
            "Snicco\\Component\\HttpRouting\\Http\\Psr7\\Request",
            "Snicco\\Component\\HttpRouting\\Middleware\\NextMiddleware",
            "Snicco\\Middleware\\WPNonce\\Middleware\\CheckWPNonce",
            "Snicco\\Middleware\\WPNonce\\Middleware\\AddWPNonceToView",
            "Snicco\\Component\\HttpRouting\\Middleware\\NextMiddleware"
        ],
        "parents": [
            "Snicco\\Component\\HttpRouting\\Middleware\\Middleware"
        ],
        "implements": [],
        "lcom": 2,
        "length": 24,
        "vocabulary": 8,
        "volume": 72,
        "difficulty": 3.17,
        "effort": 228,
        "level": 0.32,
        "bugs": 0.02,
        "time": 13,
        "intelligentContent": 22.74,
        "number_operators": 5,
        "number_operands": 19,
        "number_operators_unique": 2,
        "number_operands_unique": 6,
        "cloc": 4,
        "loc": 25,
        "lloc": 21,
        "mi": 86.92,
        "mIwoC": 57.88,
        "commentWeight": 29.04,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 9,
        "relativeDataComplexity": 0.75,
        "relativeSystemComplexity": 9.75,
        "totalStructuralComplexity": 27,
        "totalDataComplexity": 2.25,
        "totalSystemComplexity": 29.25,
        "package": "Snicco\\Middleware\\WPNonce\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 7,
        "instability": 0.88,
        "violations": {}
    },
    {
        "name": "Snicco\\Middleware\\WPNonce\\WPNonce",
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
                "name": "__invoke",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createNonce",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "noHtml",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 4,
        "nbMethodsPrivate": 2,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 6,
        "ccn": 3,
        "ccnMethodMax": 3,
        "externals": [
            "Snicco\\Component\\HttpRouting\\Routing\\UrlGenerator\\UrlGenerator",
            "Snicco\\Component\\BetterWPAPI\\BetterWPAPI",
            "Snicco\\Middleware\\WPNonce\\VerifyWPNonce"
        ],
        "parents": [],
        "implements": [],
        "lcom": 1,
        "length": 52,
        "vocabulary": 19,
        "volume": 220.89,
        "difficulty": 8.54,
        "effort": 1886.08,
        "level": 0.12,
        "bugs": 0.07,
        "time": 105,
        "intelligentContent": 25.87,
        "number_operators": 15,
        "number_operands": 37,
        "number_operators_unique": 6,
        "number_operands_unique": 13,
        "cloc": 6,
        "loc": 42,
        "lloc": 36,
        "mi": 76.87,
        "mIwoC": 49.23,
        "commentWeight": 27.63,
        "kanDefect": 0.22,
        "relativeStructuralComplexity": 16,
        "relativeDataComplexity": 0.95,
        "relativeSystemComplexity": 16.95,
        "totalStructuralComplexity": 64,
        "totalDataComplexity": 3.8,
        "totalSystemComplexity": 67.8,
        "package": "Snicco\\Middleware\\WPNonce\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 3,
        "instability": 0.75,
        "violations": {}
    },
    {
        "name": "Snicco\\Middleware\\WPNonce\\Middleware\\CheckWPNonce",
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
                "name": "inputKey",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "handle",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 3,
        "nbMethods": 3,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 6,
        "ccn": 4,
        "ccnMethodMax": 3,
        "externals": [
            "Snicco\\Component\\HttpRouting\\Middleware\\Middleware",
            "Snicco\\Component\\BetterWPAPI\\BetterWPAPI",
            "Psr\\Http\\Message\\ResponseInterface",
            "Snicco\\Component\\HttpRouting\\Http\\Psr7\\Request",
            "Snicco\\Component\\HttpRouting\\Middleware\\NextMiddleware",
            "Snicco\\Middleware\\WPNonce\\Exception\\InvalidWPNonce"
        ],
        "parents": [
            "Snicco\\Component\\HttpRouting\\Middleware\\Middleware"
        ],
        "implements": [],
        "lcom": 2,
        "length": 28,
        "vocabulary": 11,
        "volume": 96.86,
        "difficulty": 3.75,
        "effort": 363.24,
        "level": 0.27,
        "bugs": 0.03,
        "time": 20,
        "intelligentContent": 25.83,
        "number_operators": 8,
        "number_operands": 20,
        "number_operators_unique": 3,
        "number_operands_unique": 8,
        "cloc": 0,
        "loc": 25,
        "lloc": 25,
        "mi": 55.06,
        "mIwoC": 55.06,
        "commentWeight": 0,
        "kanDefect": 0.29,
        "relativeStructuralComplexity": 36,
        "relativeDataComplexity": 0.57,
        "relativeSystemComplexity": 36.57,
        "totalStructuralComplexity": 108,
        "totalDataComplexity": 1.71,
        "totalSystemComplexity": 109.71,
        "package": "Snicco\\Middleware\\WPNonce\\Middleware\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 6,
        "instability": 0.86,
        "violations": {}
    },
    {
        "name": "Snicco\\Middleware\\WPNonce\\Middleware\\AddWPNonceToView",
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
                "name": "handle",
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
        "wmc": 4,
        "ccn": 3,
        "ccnMethodMax": 2,
        "externals": [
            "Snicco\\Component\\HttpRouting\\Middleware\\Middleware",
            "Snicco\\Component\\BetterWPAPI\\BetterWPAPI",
            "Psr\\Http\\Message\\ResponseInterface",
            "Snicco\\Component\\HttpRouting\\Http\\Psr7\\Request",
            "Snicco\\Component\\HttpRouting\\Middleware\\NextMiddleware",
            "Snicco\\Middleware\\WPNonce\\WPNonce"
        ],
        "parents": [
            "Snicco\\Component\\HttpRouting\\Middleware\\Middleware"
        ],
        "implements": [],
        "lcom": 1,
        "length": 20,
        "vocabulary": 9,
        "volume": 63.4,
        "difficulty": 3.75,
        "effort": 237.74,
        "level": 0.27,
        "bugs": 0.02,
        "time": 13,
        "intelligentContent": 16.91,
        "number_operators": 5,
        "number_operands": 15,
        "number_operators_unique": 3,
        "number_operands_unique": 6,
        "cloc": 0,
        "loc": 18,
        "lloc": 18,
        "mi": 59.6,
        "mIwoC": 59.6,
        "commentWeight": 0,
        "kanDefect": 0.22,
        "relativeStructuralComplexity": 9,
        "relativeDataComplexity": 0.88,
        "relativeSystemComplexity": 9.88,
        "totalStructuralComplexity": 18,
        "totalDataComplexity": 1.75,
        "totalSystemComplexity": 19.75,
        "package": "Snicco\\Middleware\\WPNonce\\Middleware\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 6,
        "instability": 0.86,
        "violations": {}
    }
]