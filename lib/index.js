var path = require('path'),
    abeJsonPath = path.join(__dirname, 'abe-json.js');

function pattern (file) {
    return {
        pattern: file,
        included: true,
        served: true,
        watched: false
    };
}

function abeJson (files) {
    files.unshift(pattern(abeJsonPath));
}

abeJson.$inject = ['config.files'];

module.exports = {
    'preprocessor:json2js': ['factory', require('./json2js')],
    'framework:abeJson': ['factory', abeJson]
};
