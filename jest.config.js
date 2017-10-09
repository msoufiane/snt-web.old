module.exports = {
    roots: [
        'src/',
    ],
    collectCoverage: true,
    collectCoverageFrom: ["src/**/*.js"],
    globals: {
        __DEV__: true,
        __WEB__: true,
    },
    coverageReporters: [
        'html',
        'lcov',
    ],
    testPathIgnorePatterns: [
        '/node_modules',
        '/coverage/',
    ],
};
