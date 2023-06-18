/// <reference types="Cypress" />

describe("My first test suite", function () {
    it("My first test case", function () {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.wait(2000);
        cy.get(".products").as("productVariable");
        cy.get("@productVariable")
            .find(".product")
            .each(($el) => {
                const textVeg = $el.find("h4.product-name").text();
                if (textVeg.includes("Cashews")) {
                    cy.wrap($el).find("button").click();
                }
            });
        cy.get('.cart-icon').click();
        cy.get('button').contains('PROCEED TO CHECKOUT').click();
        cy.xpath('//button[contains(., "Place Order")]').click();
    });
});
