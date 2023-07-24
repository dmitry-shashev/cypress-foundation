declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      tableRowsAmount(selector: string, amount: number): Chainable<Subject>
      clickIfExists(element: string): Chainable<Subject>
      checkTableTextContent(
        selector: string,
        row: number,
        column: number,
        value: string
      ): Chainable<Subject>
      checkTableImgAltContent(
        selector: string,
        row: number,
        column: number,
        value: string
      ): Chainable<Subject>
      checkTableImgSrcContent(
        selector: string,
        row: number,
        column: number,
        value: string
      ): Chainable<Subject>
      typeInInput(value: string): Chainable<Subject>
      hasText(value: string | number): Chainable<Subject>
      setCheckbox(value: string | number | boolean): Chainable<Subject>
      textShouldExist(
        selector: string,
        value: string | number
      ): Chainable<Subject>
      textShouldNotExist(
        selector: string,
        value: string | number
      ): Chainable<Subject>
    }
  }
}

export {}
