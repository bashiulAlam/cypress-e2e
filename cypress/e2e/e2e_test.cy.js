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

    // amazonPage.getProductColor().then((color) => {
    //   var text = color.text();
    //   cy.log('Product color : ' + text);
    //   expect(text === testData.productColor).to.be.true;
    // });

    // amazonPage.getAvailability().then((availability) => {
    //   var text = availability.text();
    //   cy.log('Availability : ' + text);
    //   expect(text === 'In Stock').to.be.true;

    //   if (text === 'In Stock') {
    //     amazonPage.addToCart();
    //   }
    // });

    amazonPage.addToCart();
  });
});