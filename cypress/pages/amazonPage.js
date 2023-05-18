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
            }
        });
    }

    getProductTitle() {
        return cy.get('#productTitle');
    }

    getProductColor() {
        return cy.get('.selection');
    }

    getAvailability() {
        return cy.get('#availability > .a-size-medium');
    }

    addToCart() {
        //cy.get('#buy-now-button').should('be.visible').click();
        // cy.get('#buy-now-button').click();
        cy.get('#add-to-cart-button').click();
    }
}

export default new amazonPage();