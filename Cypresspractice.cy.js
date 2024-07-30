//Write a Cypress command to visit the URL
describe('Cypress Practice', () => {
    it('visit the URL', () => {
      cy.visit('https://example.com')
    })
    it('Find an element with the ID', () => {
        cy.visit('https://example.com')
        cy.get('#submit-button')
      })
      it('Find an element containing the text ', () => {
        cy.visit('https://example.com')
        cy.contains('Login').click();
      }) 
      it('Type "Cypress Testing" into an input field', () => {
        cy.visit('https://example.com')
        cy.get('.search-box').type('Cypress Testing')
      })
})