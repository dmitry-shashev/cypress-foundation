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

Cypress.Commands.add(
  'checkTableTextContent',
  (selector: string, row: number, column: number, value: string) => {
    cy.get(selector)
      .find('tbody tr')
      .eq(row)
      .find('td')
      .eq(column)
      .contains(value, { matchCase: false })
  }
)

Cypress.Commands.add(
  'checkTableImgAltContent',
  (selector: string, row: number, column: number, value: string) => {
    cy.get(selector)
      .find('tbody tr')
      .eq(row)
      .find('td')
      .eq(column)
      .find(`img[alt="${value}"]`)
      .should('exist')
  }
)

Cypress.Commands.add(
  'checkTableImgSrcContent',
  (selector: string, row: number, column: number, value: string) => {
    cy.get(selector)
      .find('tbody tr')
      .eq(row)
      .find('td')
      .eq(column)
      .find(`img[src*="${value}"]`)
      .should('exist')
  }
)
