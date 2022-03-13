var classes = [
    {
        "name": "Snicco\\Bridge\\SignedUrlMiddleware\\CollectGarbage",
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
                "name": "process",
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
        "wmc": 3,
        "ccn": 2,
        "ccnMethodMax": 2,
        "externals": [
            "Psr\\Http\\Server\\MiddlewareInterface",
            "Snicco\\Component\\SignedUrl\\Storage\\SignedUrlStorage",
            "Psr\\Log\\LoggerInterface",
            "Psr\\Http\\Message\\ResponseInterface",
            "Psr\\Http\\Message\\ServerRequestInterface",
            "Psr\\Http\\Server\\RequestHandlerInterface",
            "Snicco\\Component\\SignedUrl\\GarbageCollector"
        ],
        "parents": [],
        "lcom": 1,
        "length": 25,
        "vocabulary": 11,
        "volume": 86.49,
        "difficulty": 3.75,
        "effort": 324.32,
        "level": 0.27,
        "bugs": 0.03,
        "time": 18,
        "intelligentContent": 23.06,
        "number_operators": 5,
        "number_operands": 20,
        "number_operators_unique": 3,
        "number_operands_unique": 8,
        "cloc": 0,
        "loc": 22,
        "lloc": 22,
        "mi": 56.88,
        "mIwoC": 56.88,
        "commentWeight": 0,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 16,
        "relativeDataComplexity": 0.7,
        "relativeSystemComplexity": 16.7,
        "totalStructuralComplexity": 32,
        "totalDataComplexity": 1.4,
        "totalSystemComplexity": 33.4,
        "package": "Snicco\\Bridge\\SignedUrlMiddleware\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 7,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Snicco\\Bridge\\SignedUrlMiddleware\\ValidateSignature",
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
                "name": "process",
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
        "wmc": 5,
        "ccn": 4,
        "ccnMethodMax": 4,
        "externals": [
            "Psr\\Http\\Server\\MiddlewareInterface",
            "Snicco\\Component\\SignedUrl\\SignedUrlValidator",
            "Psr\\Http\\Message\\ResponseInterface",
            "Psr\\Http\\Message\\ServerRequestInterface",
            "Psr\\Http\\Server\\RequestHandlerInterface"
        ],
        "parents": [],
        "lcom": 1,
        "length": 37,
        "vocabulary": 16,
        "volume": 148,
        "difficulty": 4.83,
        "effort": 715.33,
        "level": 0.21,
        "bugs": 0.05,
        "time": 40,
        "intelligentContent": 30.62,
        "number_operators": 8,
        "number_operands": 29,
        "number_operators_unique": 4,
        "number_operands_unique": 12,
        "cloc": 6,
        "loc": 28,
        "lloc": 22,
        "mi": 87.84,
        "mIwoC": 54.98,
        "commentWeight": 32.86,
        "kanDefect": 0.22,
        "relativeStructuralComplexity": 16,
        "relativeDataComplexity": 0.9,
        "relativeSystemComplexity": 16.9,
        "totalStructuralComplexity": 32,
        "totalDataComplexity": 1.8,
        "totalSystemComplexity": 33.8,
        "package": "Snicco\\Bridge\\SignedUrlMiddleware\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 5,
        "instability": 1,
        "violations": {}
    }
]