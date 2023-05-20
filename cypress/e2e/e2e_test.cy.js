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
      let text = title.text();
      cy.log('Product title : ' + text);
      expect(text.includes(testData.productTitle)).to.be.true;
      expect(text.includes(testData.productModel)).to.be.true;
    });

    let productPrice;
    amazonPage.getProductPrice().then((price) => {
      productPrice = price.text();
      cy.log('Product price : ' + productPrice);
    });

    amazonPage.addToCart();
    amazonPage.getAddToCartMessage().then((message) => {
      let text = message.text();
      cy.log('Add to cart message : ' + text);
      expect(text.trim() === testData.addToCartMessage).to.be.true;
    });

    amazonPage.openCartPage();
    amazonPage.getProductPriceFromCart().then((price) => {
      let text = price.text();
      cy.log('Product price from cart : ' + text);
      expect(text === productPrice).to.be.true;
    });

    amazonPage.getSubTotalPrice().then((price) => {
      let text = price.text();
      cy.log('Sub total price from cart : ' + text);
      expect(text === productPrice).to.be.true;
    });
  });

  it('Validate price range', () => {
    amazonPage.getPriceListFromSearch();
  });
});

describe('Price filter test', () => {
  beforeEach(() => {
    amazonPage.openHomePage();
    amazonPage.searchWithText(testData.searchText);
  });

  it('Test with price with decimal point', () => {
    amazonPage.filterWithMinMaxPrice(700.99, 800.99);
    amazonPage.validateMinAndMaxFieldAreEmpty();
  });

  it('Test with zero price', () => {
    amazonPage.filterWithMinMaxPrice(0, 0);
    amazonPage.validateMinAndMaxFieldAreEmpty();
  });

  it('Test with blank input', () => {
    amazonPage.filterWithMinMaxPrice(' ', ' ');
    amazonPage.validateMinAndMaxFieldAreEmpty();
  });

  it('Test with negative price', () => {
    amazonPage.filterWithMinMaxPrice(-700, -800);
    amazonPage.validateMinAndMaxFieldAreEmpty();
  });

  it('Test with min price greater than max price', () => {
    amazonPage.filterWithMinMaxPrice(800, 700);
    amazonPage.validateMinAndMaxFieldAreEmpty();
  });

  it('Test with character input in price', () => {
    amazonPage.filterWithMinMaxPrice('ABC', 'DEF');
    amazonPage.validateMinAndMaxFieldAreEmpty();
  });
});