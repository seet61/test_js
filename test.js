/**
 * Это набор спек по которым будет происходить тестирование
 * Created by seet on 26.12.16.
 */

describe("pow", function () {

    /*
    //1. пример 2 в 3 степени
    it("при возведении 2 в 3-ю степень результат равен 8", function () {
       assert.equal(pow(2, 3), 8);
    });

    //2. пример 3 в 4 степени
    it("при возведении 3 в 4-ю степень результат равен 81", function () {
        assert.equal(pow(3, 4), 81);
    });
    */

    describe("возводит x в n-ю степень", function () {
        function makeTest(x) {
            var expected = x * x * x;
            it("при возведении " + x + " в 3-ю степень результат равен: " + expected, function () {
                assert.equal(pow(x, 3), expected);
            });
        }

        for (var x=1; x<=5; x++) {
            makeTest(x);
        }
    });

    it ("при вовзедении в отрицательную степень получаем NaN", function () {
       assert(isNaN(pow(2, -1)), "pow(2, -1) не NaN");
    });

    it ("при вовзедении в дробную степень получаем NaN", function () {
        assert(isNaN(pow(2, 1.5)), "pow(2, 1.5) не NaN");
    });

    describe("любое число в 0 степени равно 1", function () {
        function makeTest(x) {
            it("при возведении " + x + " в 0-ю степень результат равен: 1", function () {
                assert.equal(pow(x, 0), 1);
            });
        }

        for (var x=-5; x<=5; x+=2) {
            makeTest(x);
        }
    });

    it("ноль в нулевой степени дает NaN", function () {
       assert(isNaN(pow(0, 0)), "0 в 0 степени дает NaN")
    });


});
