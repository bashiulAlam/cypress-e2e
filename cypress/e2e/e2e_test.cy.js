import amazonPage from "../pages/amazonPage";
import testData from "../fixtures/testData.json";

describe('E2E Tests', () => {
  before(() => {
    amazonPage.openHomePage();
  });
  
  it('Place an order', () => {
    amazonPage.searchWithText(testData.searchText);
    amazonPage.filterWithBrand(testData.brandName);
    amazonPage.filterWithMinMaxPrice(testData.minPrice, testData.maxPrice);
    amazonPage.sortResults(testData.sortFilter);
    amazonPage.openProductPage(testData.productTitle);

    amazonPage.getProductTitle().then((title) => {
      var text = title.text();
      cy.log('Product title : ' + text);
      expect(text.includes(testData.productTitle)).to.be.true;
      expect(text.includes(testData.productModel)).to.be.true;
    });

    amazonPage.getProductColor().then((color) => {
      var text = color.text();
      cy.log('Product color : ' + text);
      expect(text === testData.productColor).to.be.true;
    });
  });
});