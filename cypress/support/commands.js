// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('navigate',(pageName)=>{
    cy.contains(pageName).click()
})

//Hide big Pop up
Cypress.Commands.add('hideBigPopUp',()=>{
    cy.get('.needsclick').eq(0).invoke('css', 'display', 'none')
})

//Hide small pop up
Cypress.Commands.add('hideSmallPopUp',()=>{
    cy.get('.go681896951').eq(0).invoke('css', 'display', 'none')
})