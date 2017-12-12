var expect = require("chai").expect
var shop = require("../src/shop-tools")
console.log(shop.getPrices())
describe('Hello world testing !', function() {
    it('good prices', function() {
        expect(shop.getPrices()).to.eql({ banana: 1, potato: 2, tomato: 3, cucumber: 4, salad: 5, apple: 6 });
    })
});