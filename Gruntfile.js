module.exports = function (grunt) {

    'use strict';

    require('load-grunt-tasks')(grunt);

    var path = 'node_modules/karma-abe-json2js-preprocessor/';

    grunt.initConfig({
        copy: {
            all: {
                files: [
                    {expand: true, src: 'lib/*', dest: path},
                    {expand: true, src: 'package.json', dest: path}
                ]
            }
        },
        jscs: {
            options: {
                config: '.jscsrc'
            },
            src: ['**/*.js', '!node_modules/**']
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            src: ['**/*.js', '!node_modules/**']
        },
        karma: {
            e2e: {
                configFile: 'test/e2e/karma.conf.js'
            }
        },
        mkdir: {
            all: {
                options: {
                    create: [path]
                }
            }
        }
    });

    grunt.registerTask('setup', [
        'mkdir',
        'copy'
    ]);

    grunt.registerTask('lint', [
        'jshint:src',
        'jscs:src'
    ]);

    grunt.registerTask('test', [
        'lint',
        'setup',
        'karma:e2e'
    ]);
};
