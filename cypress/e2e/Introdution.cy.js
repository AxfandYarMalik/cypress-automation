describe('My First Test', () => {
  it('should visit OrangeHRM', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com')
  })
  it('should visit OrangeHRM and check the title', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com')
    cy.title().should('eq', 'OrangeHRM')
  })
  it('should visit OrangeHRM and check the title', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com')
    cy.title().should('not.eq', 'OrangeHRM123')
  })
})
