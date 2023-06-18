/// <reference types="Cypress" />

describe("My first test suite", function () {
    it("My first test case", function () {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.xpath('//input[@class="search-keyword"]').type("ca");
        cy.wait(2000);
        // cy.get('.product:visible').should('have.length', 4)
        cy.xpath('//div[@class="product"]').should("have.length", 4);

        // Parent child chaining
        cy.get('.products').as('productVariable'); // alias .products as peoductVariable 
        cy.get('@productVariable').find('.product').should('have.length', 4);

        /** get element by index nummer */
        // cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click();
        cy.xpath('//div[@class="product"][2]//button').click();

        /** get element by name */
        cy.xpath('//div[@class="product"]')
            .should("have.length", 4)
            .each(($element, index, list) => {
                const productName = $element.find(".product-name").text();
                if (productName.includes("Cashews")) {
                    // need to use wrap cause $element is a promise
                    cy.wrap($element).find(`button`).click({ force: true });
                }
            });

       /** it will not work because cypress is asynchron by nature
         const logo= cy.get('.brand');
        cy.log(logo.text()); */ 
        cy.get('.brand').then(function(logo) {
            cy.log(logo.text())
        })

        cy.get('.brand').should('have.text', 'GREENKART');
    });
});
