describe('try to log in to anywebsite',()=>{
it('try to log into websitre use password and username',()=>{

    // cy.visit("https://www.google.com/")
    // cy.visit("https://www.facebook.com/")

    // cy.visit("https://canvas.instructure.com/")
    

    cy.visit("https://www.saucedemo.com")
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()
    
    
})
})