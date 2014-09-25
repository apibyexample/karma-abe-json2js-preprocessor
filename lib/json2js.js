var util = require('util'),
    path = require('path'),
    TEMPLATE = 'window.__abe__ = window.__abe__ || {};' +
        '__abe__.json = __abe__.json || {};' +
        '__abe__.json[\'%s\'] = %s';

function createJson2JsPreprocessor (logger, basePath) {
    var log = logger.create('karma.abe.json2js.preprocessor');

    return function (content, file, done) {
        var fileName = path.basename(file.originalPath),
            dirArray = path.dirname(file.originalPath).split('/'),
            parentDir = dirArray[dirArray.length - 1],
            filePath = parentDir + '/' + fileName,
            template = util.format(TEMPLATE, filePath, content);

        log.debug('Processing:', path);
        done(template);
    };
}

createJson2JsPreprocessor.$inject = ['logger', 'config.basePath'];

module.exports = createJson2JsPreprocessor;
