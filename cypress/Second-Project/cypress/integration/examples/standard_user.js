describe('this is test for the login in standard user',()=>{
    it('use correct username and password for the standard user to login',()=>{
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        

    })
})