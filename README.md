karma-abe-json2js-preprocessor
==============================

A Karma Plugin -  Convert JSON files into JS

## Installation

Install the plugin from npm:
```bash
npm install karma-abe-json2js-preprocessor --save-dev
```

Example configuration:

```js
// karma.conf.js
module.exports = function(karma) {
  karma.set({
    files: [
      '*.js',
      '*.json'
    ],
    frameworks: ['abeJson']
    preprocessors: {
      '*.json': ['json2js']
    }
  });
};
```

Add the `json2js` preprocessor and `abeJson` as a framework within
your Karma configuration file.

## Usage

So you want to incorporate the following json file into your tests:

- `tests/json/example.json`
```json
{
    "description": "Sample for ABE implementations",
    "url": "/",
    "method": "POST",
    "examples": {
        "OK": {
            "description": "Sample successful POST",
            "request": {
                "queryParams": { "verbose": "0" },
                "headers": { "Content-type": "application/json" },
                "body": { "payload": "Sample" }
            },
            "response": {
                "status": 201,
                "headers": { "Content-type": "application/json" },
                "body": { "id": 1, "payload": "Sample" }
            }
        }
    }
}
```

You can use `new AbeJson('json/example.json')` to load that specific file:

```js
describe('Test JSON', function () {

    var json;

    beforeEach(function () {
        abeJson = new AbeJSON('json/example.json');
    });

    it('has the correct description', function () {
        expect(abeJson.get().description)
            .toEqual('Sample for ABE implementations');
    });
});
```
Note: that we use the parent directory and file name.

## API

* `abeJson.get`

    Returns the json

* `abeJson.example(exampleName)`

    Returns a specific example

    In the case above, `abeJson.example('OK')`

* `abeJson.load(file)`

    Loads in a new json file
