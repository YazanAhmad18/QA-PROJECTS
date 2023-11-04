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

    it('test the contact us form with assertion ', () => {
        cy.visit("https://automationteststore.com/")
        cy.get('a[href="https://automationteststore.com/index.php?rt=content/contact"]').click()
        cy.get('#ContactUsFrm_first_name').type("yazan ahmad")
        cy.get('#ContactUsFrm_email').type("test@gmail.com")
        cy.get('#ContactUsFrm_enquiry').type("this message is only for test ")
        cy.get('button[class="btn btn-primary lock-on-click"]').click()
        cy.get('.mb40 > :nth-child(3)').should("have.text","Your enquiry has been successfully sent to the store owner!")
        // assertion part   
        cy.get("a[title='Continue']").should('have.a.property',"title")
        cy.get('.mb40 > .btn').should('have.a.property',"title")
        cy.document().should('have.a.property',"title").and("eq","Contact Us")
        cy.title().should('include',"Us")
        cy.title().should('eq',"Contact Us")
        cy.location('href').should('include',"contact")
        cy.location().its('href').should('eq',"https://automationteststore.com/index.php?rt=content/contact/success")
        cy.url().should('include',"contact")


        // promise code 
        cy.get(".prdocutname").contains("Benefit Bella Bamba").click().then(function(print){
            console.log(print.text()+"has been added")
        })

        


    });
    it.only('home work promise code',()=>{
        cy.visit("https://automationteststore.com/")    
        cy.get(".dropdown").contains("Shipping").click().then(function(print){
            console.log(print.text() +' ' +"has been click")
            })
        cy.get(".active").contains("Home").click()
        cy.get('.info_links_footer > :nth-child(5) > a').contains("Contact Us").click().then(function(print2){
        console.log(print2.text() +' ' +"has been click")
            })
        cy.get(".active").contains("Home").click()
        cy.get('.info_links_footer > :nth-child(6) > a').contains("Site Map").click().then(function(print3){
        console.log(print3.text() +' ' +"has been click")
            })
    })
});