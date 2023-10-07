/// <reference types="Cypress" />
describe('login', () => {
    it('login with standard user', () => {
        cy.visit("https://www.saucedemo.com")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
    });
    it('try to add items to card', () => {
        cy.visit("https://www.saucedemo.com")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
      
        // this is the first way to add all items 
        // cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        // cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        // cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
        // cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
        // cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
        // cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
        // __________________________________________________________________________
        // this is the second way to add all items 
        
        
    //    let excptectedItems=6
    //     for(let i=0 ;i<excptectedItems;i++){
    //         let mybuttons=cy.get("div#inventory_container").find(".btn").eq(i).click()
              
    //     }

    //  this is for homework to add first three items 
    // let excptectedItems=3
    // for(let i=0 ;i<excptectedItems;i++){
    //     let mybuttons=cy.get("div#inventory_container").find(".btn").eq(i).click()
          
    // }
        //  this is for homework too to add item and the other no 
        let excptectedItems=6
        for(let i=0 ;i<6;i++){
            if(i%2==0){
                let mybuttons=cy.get("div#inventory_container").find(".btn").eq(i).click()
            }
            
              
        }



    });
});