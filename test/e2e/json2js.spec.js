describe('json2js', function () {

    describe('__abe__', function () {

        it('should have __abe__', function () {
            expect(__abe__.json['json/test.json']).toBeDefined();
        });
    });

    describe('AbeJson', function () {

        var abeJson;

        beforeEach(function () {
            abeJson = new AbeJson('json/test.json');
        });

        it('should have be able to load JSON', function () {
            expect(abeJson.get().description)
                .toEqual('Sample for ABE implementations');
        });

        it('should be able to load json', function () {
            var json = abeJson.example('OK');

            expect(json.description).toEqual('Sample successful POST');
        });
    });
});
