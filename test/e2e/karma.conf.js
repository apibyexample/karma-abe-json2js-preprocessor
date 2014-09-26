module.exports = function (karma) {
    karma.set({
        basePath: '',
        files: [
            '*.js',
            '*.spec.js',
            '**/*.json'
        ],
        exclude: [],
        browsers: ['PhantomJS'],
        frameworks: ['jasmine', 'abeJson'],
        port: 9876,
        runnerPort: 9100,
        singleRun: true,
        captureTimeout: 60000,
        preprocessors: {
            '**/*.json': 'json2js'
        }
    });
};
