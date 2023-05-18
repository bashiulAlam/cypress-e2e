import amazonPage from "../pages/amazonPage";
import testData from "../fixtures/testData.json";

describe('E2E Tests', () => {
  beforeEach(() => {
    amazonPage.openHomePage();
    amazonPage.searchWithText(testData.searchText);
    amazonPage.filterWithBrand(testData.brandName);
    amazonPage.filterWithMinMaxPrice(testData.minPrice, testData.maxPrice);
    amazonPage.sortResults(testData.sortFilter);
  });
  
  it('Add to cart', () => {
    
    amazonPage.openProductPage(testData.productTitle);

    amazonPage.getProductTitle().then((title) => {
      var text = title.text();
      cy.log('Product title : ' + text);
      expect(text.includes(testData.productTitle)).to.be.true;
      expect(text.includes(testData.productModel)).to.be.true;
    });

    var productPrice;
    amazonPage.getProductPrice().then((price) => {
      productPrice = price.text();
      cy.log('Product price : ' + productPrice);
    });

    amazonPage.addToCart();
    // amazonPage.getAddToCartMessage().then((message) => {
    //   var text = message.text();
    //   cy.log('Add to cart message : ' + text);
    //   expect(text === testData.addToCartMessage).to.be.true;
    // });

    amazonPage.openCartPage();

    // amazonPage.getProductColor().then((color) => {
    //   var text = color.text();
    //   cy.log('Product color : ' + text);
    //   expect(text === testData.productColor).to.be.true;
    // });

    amazonPage.getProductPriceFromCart().then((price) => {
      var text = price.text();
      cy.log('Product price from cart : ' + text);
      expect(text === productPrice).to.be.true;
    });

    amazonPage.getSubTotalPrice().then((price) => {
      var text = price.text();
      cy.log('Sub total price from cart : ' + text);
      expect(text === productPrice).to.be.true;
    });
  });
});