
    assert = chai.assert;

    describe('Testing functions', function () {

        
        it('Test 1: boundary value 1 for upTo', () => {
            assert.isnumber();
        });

        it('Test 2: generateNum(5) returns >= 1', () => {
            for (var i = 1; i <= 1000; i++) {
                assert(generateNum(5)>=1);
            }
        });

        it('Test 3: generateNum(5) returns <= 5', () => {
            for (var i = 1; i <= 1000; i++) {
                assert(generateNum(5)<=5);
            }
        });
        it('Test 3: generateNum(10) and returned values are in [1,10]', () => {
            for (var i = 1; i <= 1000; i++) {
                assert(generateNum(10)>1<10);
            }
        });
        

    });