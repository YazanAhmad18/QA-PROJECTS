///<reference types="Cypress"/>
describe('test log in', () => {
    it('test login - standard user', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        //cy.get("button.btn_inventory").click({multiple:true})
        //cy.get("[data-test='add-to-cart-sauce-labs-backpack']").click()
        cy.get("[data-test='add-to-cart-sauce-labs-backpack']").click({multiple:true})
    });
});