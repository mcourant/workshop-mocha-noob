var expect = require("chai").expect
var shop = require("../src/shop-tools")


describe('Hello world testing !', function() {
    it('good prices', function() {
        expect(shop.getPrices()).to.eql({ banana: 1, potato: 2, tomato: 3, cucumber: 4, salad: 5, apple: 6 });
    })
    const products = [ 'tomato', 'cucumber', 'tomato', 'salad', 'potato', 'cucumber', 'potato', 'potato', 'tomato', 'potato' ];
    it('count articles', function() {
        expect(shop.countArticle(products)).to.eql(10);
    })
});
