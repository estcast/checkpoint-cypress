/// <reference types="Cypress" />

describe("TC-01", ()=>{

  it('Add to cart case', ()=>{
    cy.visit('https://www.giant-bicycles.com/us')
    

    //Assert text on first image
    cy.get('.container-fluid h1').should('have.text','Shift into Spring')

    //Accept cookies.
    cy.get('.btn-success').click()

    //Select first buyable element
    cy.get('#productsContainer img').eq(0).click()

    //Hide pop up (simulate)
    cy.get('.needsclick').eq(0).invoke('css', 'display', 'none');

    //Select size of product
    cy.get('#2201078104').click()

    //Add to cart
    cy.get('.btn-addtocart').click()

    //Open cart
    cy.get('#cart-summary-container2').click()

    //Assert element added has the same name as in cart.
    cy.get('#text h1').eq(0).invoke('text').then((text) => {
      cy.get('.summary-popup a').should('contain',text)
    });
    
  })

})