var classes = [
    {
        "name": "Snicco\\Component\\SignedUrl\\Testing\\SignedUrlStorageTests",
        "interface": false,
        "abstract": true,
        "final": false,
        "methods": [
            {
                "name": "garbage_collection_works",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "the_url_is_removed_from_storage_after_the_last_max_usages",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "decrementing_a_missing_signature_throws_an_exception",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createSignedUrl",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "advanceTime",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createStorage",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 6,
        "nbMethods": 6,
        "nbMethodsPrivate": 3,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 10,
        "ccn": 5,
        "ccnMethodMax": 3,
        "externals": [
            "Snicco\\Component\\TestableClock\\TestClock",
            "PHPUnit\\Framework\\Assert",
            "PHPUnit\\Framework\\Assert",
            "PHPUnit\\Framework\\Assert",
            "PHPUnit\\Framework\\Assert",
            "Snicco\\Component\\TestableClock\\TestClock",
            "PHPUnit\\Framework\\Assert",
            "PHPUnit\\Framework\\Assert",
            "Snicco\\Component\\TestableClock\\TestClock",
            "PHPUnit\\Framework\\Assert",
            "PHPUnit\\Framework\\Assert",
            "Snicco\\Component\\SignedUrl\\SignedUrl",
            "Snicco\\Component\\SignedUrl\\SignedUrl",
            "Snicco\\Component\\TestableClock\\TestClock",
            "Snicco\\Component\\SignedUrl\\Storage\\SignedUrlStorage",
            "Snicco\\Component\\TestableClock\\Clock"
        ],
        "parents": [],
        "lcom": 1,
        "length": 127,
        "vocabulary": 34,
        "volume": 646.11,
        "difficulty": 9.48,
        "effort": 6126.88,
        "level": 0.11,
        "bugs": 0.22,
        "time": 340,
        "intelligentContent": 68.14,
        "number_operators": 17,
        "number_operands": 110,
        "number_operators_unique": 5,
        "number_operands_unique": 29,
        "cloc": 19,
        "loc": 86,
        "lloc": 67,
        "mi": 73.09,
        "mIwoC": 39.82,
        "commentWeight": 33.28,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 121,
        "relativeDataComplexity": 0.18,
        "relativeSystemComplexity": 121.18,
        "totalStructuralComplexity": 726,
        "totalDataComplexity": 1.08,
        "totalSystemComplexity": 727.08,
        "package": "Snicco\\Component\\SignedUrl\\Testing\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 5,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Snicco\\Component\\SignedUrl\\HMAC",
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
                "name": "create",
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
            "Snicco\\Component\\SignedUrl\\Secret",
            "RuntimeException"
        ],
        "parents": [],
        "lcom": 1,
        "length": 21,
        "vocabulary": 11,
        "volume": 72.65,
        "difficulty": 4.29,
        "effort": 311.35,
        "level": 0.23,
        "bugs": 0.02,
        "time": 17,
        "intelligentContent": 16.95,
        "number_operators": 6,
        "number_operands": 15,
        "number_operators_unique": 4,
        "number_operands_unique": 7,
        "cloc": 7,
        "loc": 26,
        "lloc": 19,
        "mi": 94.81,
        "mIwoC": 58.8,
        "commentWeight": 36,
        "kanDefect": 0.22,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 1.25,
        "relativeSystemComplexity": 2.25,
        "totalStructuralComplexity": 2,
        "totalDataComplexity": 2.5,
        "totalSystemComplexity": 4.5,
        "package": "Snicco\\Component\\SignedUrl\\",
        "pageRank": 0,
        "afferentCoupling": 2,
        "efferentCoupling": 2,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "Snicco\\Component\\SignedUrl\\SignedUrlValidator",
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
                "name": "validate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "parse",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "queryStringWithoutSignature",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validateExpiration",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validateSignature",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validateUsage",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 7,
        "nbMethods": 7,
        "nbMethodsPrivate": 5,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 19,
        "ccn": 13,
        "ccnMethodMax": 6,
        "externals": [
            "Snicco\\Component\\SignedUrl\\Storage\\SignedUrlStorage",
            "Snicco\\Component\\SignedUrl\\HMAC",
            "Snicco\\Component\\TestableClock\\Clock",
            "Snicco\\Component\\TestableClock\\SystemClock",
            "Snicco\\Component\\SignedUrl\\Exception\\InvalidSignature",
            "Snicco\\Component\\SignedUrl\\Exception\\InvalidSignature",
            "ParagonIE\\ConstantTime\\Base64UrlSafe",
            "RuntimeException",
            "Snicco\\Component\\SignedUrl\\Exception\\SignedUrlExpired",
            "Snicco\\Component\\SignedUrl\\Exception\\InvalidSignature",
            "Snicco\\Component\\SignedUrl\\Exception\\SignedUrlUsageExceeded"
        ],
        "parents": [],
        "lcom": 1,
        "length": 166,
        "vocabulary": 49,
        "volume": 932.04,
        "difficulty": 14.29,
        "effort": 13316.55,
        "level": 0.07,
        "bugs": 0.31,
        "time": 740,
        "intelligentContent": 65.23,
        "number_operators": 39,
        "number_operands": 127,
        "number_operators_unique": 9,
        "number_operands_unique": 40,
        "cloc": 20,
        "loc": 90,
        "lloc": 70,
        "mi": 70.57,
        "mIwoC": 37.21,
        "commentWeight": 33.35,
        "kanDefect": 0.5,
        "relativeStructuralComplexity": 121,
        "relativeDataComplexity": 0.33,
        "relativeSystemComplexity": 121.33,
        "totalStructuralComplexity": 847,
        "totalDataComplexity": 2.33,
        "totalSystemComplexity": 849.33,
        "package": "Snicco\\Component\\SignedUrl\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 9,
        "instability": 0.9,
        "violations": {}
    },
    {
        "name": "Snicco\\Component\\SignedUrl\\Secret",
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
                "name": "generate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fromHexEncoded",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "asString",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "asBytes",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 5,
        "nbMethods": 3,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 1,
        "nbMethodsSetters": 1,
        "wmc": 6,
        "ccn": 2,
        "ccnMethodMax": 2,
        "externals": [
            "Snicco\\Component\\SignedUrl\\Secret",
            "Webmozart\\Assert\\Assert",
            "ParagonIE\\ConstantTime\\Hex",
            "Snicco\\Component\\SignedUrl\\Secret",
            "Snicco\\Component\\SignedUrl\\Secret",
            "Webmozart\\Assert\\Assert",
            "Webmozart\\Assert\\Assert",
            "Webmozart\\Assert\\Assert",
            "ParagonIE\\ConstantTime\\Binary",
            "Webmozart\\Assert\\Assert",
            "ParagonIE\\ConstantTime\\Hex"
        ],
        "parents": [],
        "lcom": 3,
        "length": 54,
        "vocabulary": 19,
        "volume": 229.39,
        "difficulty": 7.32,
        "effort": 1679.45,
        "level": 0.14,
        "bugs": 0.08,
        "time": 93,
        "intelligentContent": 31.33,
        "number_operators": 13,
        "number_operands": 41,
        "number_operators_unique": 5,
        "number_operands_unique": 14,
        "cloc": 14,
        "loc": 51,
        "lloc": 37,
        "mi": 85.27,
        "mIwoC": 48.99,
        "commentWeight": 36.27,
        "kanDefect": 0.22,
        "relativeStructuralComplexity": 9,
        "relativeDataComplexity": 1.15,
        "relativeSystemComplexity": 10.15,
        "totalStructuralComplexity": 45,
        "totalDataComplexity": 5.75,
        "totalSystemComplexity": 50.75,
        "package": "Snicco\\Component\\SignedUrl\\",
        "pageRank": 0,
        "afferentCoupling": 3,
        "efferentCoupling": 5,
        "instability": 0.63,
        "violations": {}
    },
    {
        "name": "Snicco\\Component\\SignedUrl\\UrlSigner",
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
                "name": "sign",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "normalizeTarget",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "parseUrl",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validateUrlParts",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPath",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getQueryString",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getExpiryTimestamp",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "appendExpiryQueryParam",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDomainAndSchema",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 10,
        "nbMethods": 10,
        "nbMethodsPrivate": 8,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 28,
        "ccn": 19,
        "ccnMethodMax": 7,
        "externals": [
            "Snicco\\Component\\SignedUrl\\Storage\\SignedUrlStorage",
            "Snicco\\Component\\SignedUrl\\HMAC",
            "Snicco\\Component\\SignedUrl\\SignedUrl",
            "Webmozart\\Assert\\Assert",
            "ParagonIE\\ConstantTime\\Base64UrlSafe",
            "ParagonIE\\ConstantTime\\Base64UrlSafe",
            "Snicco\\Component\\SignedUrl\\SignedUrl",
            "InvalidArgumentException",
            "LogicException",
            "LogicException",
            "InvalidArgumentException"
        ],
        "parents": [],
        "lcom": 1,
        "length": 227,
        "vocabulary": 48,
        "volume": 1267.79,
        "difficulty": 17.88,
        "effort": 22673.87,
        "level": 0.06,
        "bugs": 0.42,
        "time": 1260,
        "intelligentContent": 70.89,
        "number_operators": 72,
        "number_operands": 155,
        "number_operators_unique": 9,
        "number_operands_unique": 39,
        "cloc": 28,
        "loc": 119,
        "lloc": 91,
        "mi": 67.12,
        "mIwoC": 32.98,
        "commentWeight": 34.14,
        "kanDefect": 0.78,
        "relativeStructuralComplexity": 169,
        "relativeDataComplexity": 0.97,
        "relativeSystemComplexity": 169.97,
        "totalStructuralComplexity": 1690,
        "totalDataComplexity": 9.71,
        "totalSystemComplexity": 1699.71,
        "package": "Snicco\\Component\\SignedUrl\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 7,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Snicco\\Component\\SignedUrl\\Exception\\SignedUrlExpired",
        "interface": false,
        "abstract": false,
        "final": true,
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
            "Snicco\\Component\\SignedUrl\\Exception\\SignedUrlException"
        ],
        "parents": [
            "Snicco\\Component\\SignedUrl\\Exception\\SignedUrlException"
        ],
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
        "cloc": 0,
        "loc": 4,
        "lloc": 4,
        "mi": 171,
        "mIwoC": 171,
        "commentWeight": 0,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "Snicco\\Component\\SignedUrl\\Exception\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 1,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "Snicco\\Component\\SignedUrl\\Exception\\SignedUrlException",
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
            "RuntimeException"
        ],
        "parents": [
            "RuntimeException"
        ],
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
        "cloc": 0,
        "loc": 4,
        "lloc": 4,
        "mi": 171,
        "mIwoC": 171,
        "commentWeight": 0,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "Snicco\\Component\\SignedUrl\\Exception\\",
        "pageRank": 0,
        "afferentCoupling": 4,
        "efferentCoupling": 1,
        "instability": 0.2,
        "violations": {}
    },
    {
        "name": "Snicco\\Component\\SignedUrl\\Exception\\UnavailableStorage",
        "interface": false,
        "abstract": false,
        "final": true,
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
            "RuntimeException"
        ],
        "parents": [
            "RuntimeException"
        ],
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
        "cloc": 0,
        "loc": 4,
        "lloc": 4,
        "mi": 171,
        "mIwoC": 171,
        "commentWeight": 0,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "Snicco\\Component\\SignedUrl\\Exception\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 1,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "Snicco\\Component\\SignedUrl\\Exception\\SignedUrlUsageExceeded",
        "interface": false,
        "abstract": false,
        "final": true,
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
            "Snicco\\Component\\SignedUrl\\Exception\\SignedUrlException"
        ],
        "parents": [
            "Snicco\\Component\\SignedUrl\\Exception\\SignedUrlException"
        ],
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
        "cloc": 0,
        "loc": 4,
        "lloc": 4,
        "mi": 171,
        "mIwoC": 171,
        "commentWeight": 0,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "Snicco\\Component\\SignedUrl\\Exception\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 1,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "Snicco\\Component\\SignedUrl\\Exception\\BadIdentifier",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "for",
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
            "Snicco\\Component\\SignedUrl\\Exception\\SignedUrlException",
            "Snicco\\Component\\SignedUrl\\Exception\\BadIdentifier",
            "Throwable"
        ],
        "parents": [
            "Snicco\\Component\\SignedUrl\\Exception\\SignedUrlException"
        ],
        "lcom": 1,
        "length": 12,
        "vocabulary": 8,
        "volume": 36,
        "difficulty": 0.79,
        "effort": 28.29,
        "level": 1.27,
        "bugs": 0.01,
        "time": 2,
        "intelligentContent": 45.82,
        "number_operators": 1,
        "number_operands": 11,
        "number_operators_unique": 1,
        "number_operands_unique": 7,
        "cloc": 0,
        "loc": 8,
        "lloc": 8,
        "mi": 69.13,
        "mIwoC": 69.13,
        "commentWeight": 0,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 1.5,
        "relativeSystemComplexity": 2.5,
        "totalStructuralComplexity": 1,
        "totalDataComplexity": 1.5,
        "totalSystemComplexity": 2.5,
        "package": "Snicco\\Component\\SignedUrl\\Exception\\",
        "pageRank": 0,
        "afferentCoupling": 5,
        "efferentCoupling": 4,
        "instability": 0.44,
        "violations": {}
    },
    {
        "name": "Snicco\\Component\\SignedUrl\\Exception\\InvalidSignature",
        "interface": false,
        "abstract": false,
        "final": true,
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
            "Snicco\\Component\\SignedUrl\\Exception\\SignedUrlException"
        ],
        "parents": [
            "Snicco\\Component\\SignedUrl\\Exception\\SignedUrlException"
        ],
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
        "cloc": 0,
        "loc": 4,
        "lloc": 4,
        "mi": 171,
        "mIwoC": 171,
        "commentWeight": 0,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "Snicco\\Component\\SignedUrl\\Exception\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 1,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "Snicco\\Component\\SignedUrl\\Storage\\SessionStorage",
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
                "name": "consume",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "store",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "gc",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "remainingUsage",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getStored",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 6,
        "nbMethods": 6,
        "nbMethodsPrivate": 2,
        "nbMethodsPublic": 4,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 17,
        "ccn": 12,
        "ccnMethodMax": 4,
        "externals": [
            "Snicco\\Component\\SignedUrl\\Storage\\SignedUrlStorage",
            "Snicco\\Component\\TestableClock\\Clock",
            "InvalidArgumentException",
            "Snicco\\Component\\TestableClock\\SystemClock",
            "Snicco\\Component\\SignedUrl\\Exception\\BadIdentifier",
            "Snicco\\Component\\SignedUrl\\SignedUrl"
        ],
        "parents": [],
        "lcom": 1,
        "length": 101,
        "vocabulary": 24,
        "volume": 463.08,
        "difficulty": 14.62,
        "effort": 6769.16,
        "level": 0.07,
        "bugs": 0.15,
        "time": 376,
        "intelligentContent": 31.68,
        "number_operators": 30,
        "number_operands": 71,
        "number_operators_unique": 7,
        "number_operands_unique": 17,
        "cloc": 19,
        "loc": 81,
        "lloc": 62,
        "mi": 74.72,
        "mIwoC": 40.62,
        "commentWeight": 34.09,
        "kanDefect": 0.73,
        "relativeStructuralComplexity": 64,
        "relativeDataComplexity": 0.43,
        "relativeSystemComplexity": 64.43,
        "totalStructuralComplexity": 384,
        "totalDataComplexity": 2.56,
        "totalSystemComplexity": 386.56,
        "package": "Snicco\\Component\\SignedUrl\\Storage\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 6,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Snicco\\Component\\SignedUrl\\Storage\\InMemoryStorage",
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
                "name": "gc",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "store",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "consume",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "all",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 5,
        "nbMethods": 4,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 4,
        "nbMethodsGetter": 1,
        "nbMethodsSetters": 0,
        "wmc": 10,
        "ccn": 6,
        "ccnMethodMax": 3,
        "externals": [
            "Snicco\\Component\\SignedUrl\\Storage\\SignedUrlStorage",
            "Snicco\\Component\\TestableClock\\SystemClock",
            "Snicco\\Component\\SignedUrl\\SignedUrl",
            "Snicco\\Component\\SignedUrl\\Exception\\BadIdentifier"
        ],
        "parents": [],
        "lcom": 1,
        "length": 51,
        "vocabulary": 17,
        "volume": 208.46,
        "difficulty": 10.36,
        "effort": 2160.41,
        "level": 0.1,
        "bugs": 0.07,
        "time": 120,
        "intelligentContent": 20.11,
        "number_operators": 13,
        "number_operands": 38,
        "number_operators_unique": 6,
        "number_operands_unique": 11,
        "cloc": 3,
        "loc": 42,
        "lloc": 39,
        "mi": 68.36,
        "mIwoC": 48.25,
        "commentWeight": 20.12,
        "kanDefect": 0.59,
        "relativeStructuralComplexity": 36,
        "relativeDataComplexity": 0.23,
        "relativeSystemComplexity": 36.23,
        "totalStructuralComplexity": 180,
        "totalDataComplexity": 1.14,
        "totalSystemComplexity": 181.14,
        "package": "Snicco\\Component\\SignedUrl\\Storage\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 4,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Snicco\\Component\\SignedUrl\\GarbageCollector",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "clean",
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
            "Snicco\\Component\\SignedUrl\\Storage\\SignedUrlStorage",
            "Webmozart\\Assert\\Assert"
        ],
        "parents": [],
        "lcom": 1,
        "length": 11,
        "vocabulary": 7,
        "volume": 30.88,
        "difficulty": 1.8,
        "effort": 55.59,
        "level": 0.56,
        "bugs": 0.01,
        "time": 3,
        "intelligentContent": 17.16,
        "number_operators": 2,
        "number_operands": 9,
        "number_operators_unique": 2,
        "number_operands_unique": 5,
        "cloc": 0,
        "loc": 11,
        "lloc": 11,
        "mi": 66.58,
        "mIwoC": 66.58,
        "commentWeight": 0,
        "kanDefect": 0.22,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 0.67,
        "relativeSystemComplexity": 4.67,
        "totalStructuralComplexity": 4,
        "totalDataComplexity": 0.67,
        "totalSystemComplexity": 4.67,
        "package": "Snicco\\Component\\SignedUrl\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 2,
        "instability": 0.67,
        "violations": {}
    },
    {
        "name": "Snicco\\Component\\SignedUrl\\SignedUrl",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "create",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "asString",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__toString",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "identifier",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "expiresAt",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "maxUsage",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "protects",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 8,
        "nbMethods": 2,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 6,
        "nbMethodsSetters": 0,
        "wmc": 8,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Snicco\\Component\\SignedUrl\\SignedUrl",
            "Webmozart\\Assert\\Assert",
            "Webmozart\\Assert\\Assert",
            "Webmozart\\Assert\\Assert",
            "Webmozart\\Assert\\Assert",
            "Webmozart\\Assert\\Assert",
            "Snicco\\Component\\SignedUrl\\SignedUrl"
        ],
        "parents": [],
        "lcom": 2,
        "length": 51,
        "vocabulary": 11,
        "volume": 176.43,
        "difficulty": 4.33,
        "effort": 764.53,
        "level": 0.23,
        "bugs": 0.06,
        "time": 42,
        "intelligentContent": 40.71,
        "number_operators": 12,
        "number_operands": 39,
        "number_operators_unique": 2,
        "number_operands_unique": 9,
        "cloc": 0,
        "loc": 52,
        "lloc": 52,
        "mi": 46.7,
        "mIwoC": 46.7,
        "commentWeight": 0,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 4.13,
        "relativeSystemComplexity": 5.13,
        "totalStructuralComplexity": 8,
        "totalDataComplexity": 33,
        "totalSystemComplexity": 41,
        "package": "Snicco\\Component\\SignedUrl\\",
        "pageRank": 0,
        "afferentCoupling": 8,
        "efferentCoupling": 3,
        "instability": 0.27,
        "violations": {}
    }
]