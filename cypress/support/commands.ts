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

Cypress.Commands.add('tableRowsAmount', (selector: string, amount: number) => {
  cy.get(selector).find('tbody tr').its('length').should('equal', amount)
})

Cypress.Commands.add(
  'checkTableTextContent',
  (selector: string, row: number, column: number, value: string) => {
    cy.get(selector)
      .find('tbody tr')
      .eq(row)
      .find('td')
      .eq(column)
      .contains(value)
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

Cypress.Commands.add(
  'typeInInput',
  {
    prevSubject: true,
  },
  (prevSubject, value: string) => {
    const prev = cy.wrap(prevSubject)
    prev.focus()
    if (!value) {
      prev.wait(50).clear().wait(50)
      return
    }
    prev.wait(50).clear().wait(50).type(value)
  }
)

Cypress.Commands.add(
  'hasText',
  {
    prevSubject: true,
  },
  (prevSubject, value: string | number) => {
    const prev = cy.wrap(prevSubject)
    prev.contains(value)
  }
)
