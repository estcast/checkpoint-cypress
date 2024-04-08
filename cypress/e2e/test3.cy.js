/// <reference types="Cypress" />

describe("TC-03", ()=>{

  it('Compare products', ()=>{

  cy.visit('https://www.giant-bicycles.com/us')
  cy.viewport(1200,860)

  //Assert text on first image
  cy.get('.container-fluid h1').should('have.text','Shift into Spring')

  //Accept cookies.
  cy.get('.btn-success').click()

  //Select first buyable element
  cy.get('#productsContainer img').eq(0).click()

  cy.hideBigPopUp()

  //Click in compare
  cy.navigate('Compare')


  cy.hideSmallPopUp()
    
  //Assert if item was added succesfully
  cy.get('#text h1').eq(0).invoke('text').then((text) => {
    cy.get('.compare-bike > .name').should('contain',text)
  });

  cy.go('back');

  //Select second buyable element
  cy.get('#productsContainer img').eq(1).click()

  //Click in compare
  cy.navigate('Compare')

  cy.hideSmallPopUp()

  //Assert if item was added succesfully
  cy.get('#text h1').eq(0).invoke('text').then((text) => {
    cy.get('#compare-2 > .compare-bike > .name').should('contain',text)
  });

  //Compare button
  cy.get('#compare-bikes').click()

  //Assert page name, left image and right image.
  cy.get('h1').should('have.text','Bike Comparison')
  cy.get('.table-bikes-compare img').eq(0).should('be.visible')
  cy.get('.table-bikes-compare img').eq(1).should('be.visible')


  })


})