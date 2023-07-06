import './commands'

// do not stop in case of errors in the console
Cypress.on('uncaught:exception', () => {
  return false
})

before(() => {
  // block some requests
  cy.intercept('GET', '/123', {
    statusCode: 200,
    body: {},
  })

  // some login process
})
