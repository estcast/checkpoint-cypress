/// <reference types="Cypress" />

describe("TC-02", ()=>{

  it('Try log in with invalid credentials', ()=>{

    cy.visit('https://www.giant-bicycles.com/us')

    //Assert text on first image
    cy.get('.container-fluid h1').should('have.text','Shift into Spring')

    //Navigate to my account
    cy.navigate('My Account ')

    //Insert invalid email and password
    cy.get('#Email').type('test-email@yopmail.com')

    cy.get('#Password').type('abc1234')

    cy.get('#btnLogin').click()

    //Assert error message
    cy.get('#loginErrorDescription').should('have.text', 'Wrong username or password')
      

  })


})