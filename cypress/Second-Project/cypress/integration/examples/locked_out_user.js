beforeEach(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    cy.log('Cache and cookies cleared');
    cy.reload();
  });
  describe('this is test for the login in standard user',()=>{
    it('use correct username and password for the standard user to login for the locked out user ',()=>{

        
          
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("locked_out_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        if(cy.get('[data-test="error"]')=="Epic sadface: Sorry, this user has been locked out."){
            console.log(error)
        }
       
    })

})