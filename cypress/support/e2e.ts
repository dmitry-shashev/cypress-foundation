import './commands'

// do not stop in case of errors in the console
Cypress.on('uncaught:exception', () => {
  return false
})

function login(): void {
  // it will run only once
  // the idea is to preserve cookie and local storage
  // between tests
  cy.session(
    'main-session',
    () => {
      // block some requests
      cy.intercept('GET', '/123', {
        statusCode: 200,
        body: {},
      })

      // may set up some cookies
      cy.setCookie('some', 'thing')

      // fill and submit the form

      // for example, we can check the location
      // cy.location.then(location => location.host)
    },
    {
      cacheAcrossSpecs: true,
    }
  )

  // it will run each time
  cy.visit('/home')
}

beforeEach(() => {
  login()
})
