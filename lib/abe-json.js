function AbeJson (file) {
    this.file = file;
    this.json = {};
    this.load(file);
}

AbeJson.prototype = {

    get: function () {
        return this.json;
    },

    example: function (example) {
        if (this.json.examples &&
            (example in this.json.examples)) {

            return this.json.examples[example];
        } else {
            throw 'Example Not Found: "' + example + '" in ' + this.file;
        }
    },

    load: function (file) {
        if (file in __abe__.json) {
            this.json = __abe__.json[file];
        }
        return this.json;
    }
};
