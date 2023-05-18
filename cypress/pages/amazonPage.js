class amazonPage {
    openHomePage() {
        cy.visit(Cypress.env("url"));
    }

    searchWithText(searchText) {
        cy.get('input[type="text"]').type(searchText);
        cy.get('#nav-search-submit-button').click();
    }

    filterWithBrand(brandName) {
        cy.get('#brandsRefinements ul li a').each(($element, index, $list) => {
            //cy.log($element.text());
            if($element.text().trim() === brandName) {
                cy.wrap($element).click();
            }
        });
    }

    filterWithMinMaxPrice(minPrice, maxPrice) {
        cy.get('#low-price').type(minPrice);
        cy.get('#high-price').type(maxPrice);
        cy.get('.a-button-input').click();
    }

    sortResults(option) {
        cy.get('#a-autoid-0-announce').click();
        cy.get('.a-popover-inner ul li').each(($element, index, $list) => {
            //cy.log($element.text());
            if($element.text().trim() === option) {
                cy.wrap($element).click();
            }
        });
    }

    openProductPage(productTitle) {
        cy.get('.sg-row h2 a').each(($element, index, $list) => {
            //cy.log($element.text());
            if($element.text().includes(productTitle)) {
                //cy.log('element found');
                cy.wrap($element).click();
                cy.wait(3000);
            }
        });
    }

    getProductPrice() {
        return cy.get('.a-spacing-none.aok-align-center > .a-price > [aria-hidden="true"]');
    }

    getProductTitle() {
        return cy.get('#productTitle');
    }

    getProductColor() {
        return cy.get('.a-list-item > :nth-child(2)');
    }

    addToCart() {
        cy.get('#add-to-cart-button').click();
        cy.get("#addToCart").submit();
    }

    getAddToCartMessage() {
        return cy.get('.a-size-medium-plus');
    }

    openCartPage() {
        cy.get('#sw-gtc > .a-button-inner > .a-button-text').click();
    }

    getProductPriceFromCart() {
        return cy.get('.sc-item-price-block > .a-spacing-mini > .a-size-medium');
    }

    getSubTotalPrice() {
        return cy.get('#sc-subtotal-amount-activecart > .a-size-medium');
    }
}

export default new amazonPage();