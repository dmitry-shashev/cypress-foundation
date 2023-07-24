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
    prev.clear().wait(50).clear().wait(100)
    if (value) {
      prev.type(value)
    }
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

Cypress.Commands.add(
  'setCheckbox',
  {
    prevSubject: true,
  },
  (prevSubject, value: string | number | boolean) => {
    const prev = cy.wrap(prevSubject)
    if (value === 'true' || value === true || value === 1) {
      prev.check()
    } else {
      prev.uncheck()
    }
  }
)

Cypress.Commands.add(
  'textShouldExist',
  (selector: string, value: string | number) => {
    cy.get(selector).contains(String(value)).should('exist')
  }
)

Cypress.Commands.add(
  'textShouldNotExist',
  (selector: string, value: string | number) => {
    cy.get(selector).contains(String(value)).should('not.exist')
  }
)
