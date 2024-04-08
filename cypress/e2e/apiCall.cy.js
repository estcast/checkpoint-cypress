/// <reference types="Cypress" />



describe("API call", ()=>{

  it('Call api', ()=>{

  cy.request('GET', 'https://jsonplaceholder.typicode.com/todos')
    .then((response) => {

    //Assert status code
    expect(response.status).to.eq(200)

    //Assert data property
    expect(response.body[0]).to.have.property('userId')

    //Asssert response time
    const time = response.duration
    expect(time).to.be.lessThan(400)
    });


  })

  })