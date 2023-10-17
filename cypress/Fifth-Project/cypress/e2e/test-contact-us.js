///<reference types="Cypress"/>
describe('test the website', () => {
    it('test the contact us form', () => {
        cy.visit("https://automationteststore.com/")
        cy.get('a[href="https://automationteststore.com/index.php?rt=content/contact"]').click()
        cy.get('#ContactUsFrm_first_name').type("yazan ahmad")
        cy.get('#ContactUsFrm_email').type("test@gmail.com")
        cy.get('#ContactUsFrm_enquiry').type("this message is only for test ")
        cy.get('button[class="btn btn-primary lock-on-click"]').click()
    });

    it.only('test the contact us form with assertion ', () => {
        cy.visit("https://automationteststore.com/")
        cy.get('a[href="https://automationteststore.com/index.php?rt=content/contact"]').click()
        cy.get('#ContactUsFrm_first_name').type("yazan ahmad")
        cy.get('#ContactUsFrm_email').type("test@gmail.com")
        cy.get('#ContactUsFrm_enquiry').type("this message is only for test ")
        cy.get('button[class="btn btn-primary lock-on-click"]').click()
        cy.get('.mb40 > :nth-child(3)').should("have.text","Your enquiry has been successfully sent to the store owner!")
    });
});