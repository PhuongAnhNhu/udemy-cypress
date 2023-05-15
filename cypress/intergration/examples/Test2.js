/// <reference types="Cypress" />

describe('My first test suite', function() {
    it('My first test case', function() {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    cy.xpath('//input[@class="search-keyword"]').type('ca');
    cy.wait(2000);
    cy.xpath('//div[@class="product"]').should('have.length', 4)
    })
})