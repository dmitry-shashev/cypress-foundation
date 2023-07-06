// !!! Engine independent features

// definitions in - global.d.ts

Cypress.Commands.add('clickIfExists', (content: string) => {
  cy.contains(content)
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    .should((_) => {})
    .then(($element) => {
      if (!($element || []).length) {
      } else {
        cy.contains(content).click()
      }
    })
})
