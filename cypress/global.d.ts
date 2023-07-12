declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      tableRowsAmount(selector: string, amount: number): Chainable<Subject>
      clickIfExists(element: string): Chainable<Subject>
      checkTableTextContent(
        selector: string,
        column: number,
        row: number,
        value: string
      ): Chainable<Subject>
      checkTableImgAltContent(
        selector: string,
        column: number,
        row: number,
        value: string
      ): Chainable<Subject>
      checkTableImgSrcContent(
        selector: string,
        column: number,
        row: number,
        value: string
      ): Chainable<Subject>
      typeInInput(value: string): Chainable<Subject>
      haveText(value: string | number): Chainable<Subject>
    }
  }
}

export {}
