module.exports = function (grunt) {

    'use strict';

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        jscs: {
            options: {
                config: '.jscsrc'
            },
            src: [
                '**/*.js',
                '!node_modules/**'
            ]
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            src: [
                '**/*.js',
                '!node_modules/**'
            ]
        },
        karma: {
            e2e: {
                configFile: 'test/e2e/karma.conf.js'
            }
        }
    });

    grunt.registerTask('lint', [
        'jshint:src',
        'jscs:src'
    ]);

    grunt.registerTask('test', [
        'lint',
        'karma:e2e'
    ]);
};
