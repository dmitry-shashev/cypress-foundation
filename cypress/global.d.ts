declare global {
  namespace Cypress {
    interface Chainable<Subject> {
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
    }
  }
}

export {}
