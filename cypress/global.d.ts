declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      clickIfExists(element: string): Chainable<Subject>
    }
  }
}

export {}
