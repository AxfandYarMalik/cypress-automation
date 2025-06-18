// Assertions

// 1 Implicit Assertions bdd approach framework
// Should
// and

// 2 Explixit Assertions tdd approach framework
// Expect 
// Assert

//  Common Assertion Types
// Type	Example
// Existence	should('exist')
// Visibility	should('be.visible')
// Text Match	should('have.text', 'Login Successful')
// Contain Text	should('contain', 'Welcome')
// Length Check	should('have.length', 3)
// CSS Check	should('have.css', 'color', 'rgb(0, 0, 0)')
// Attribute Check	should('have.attr', 'type', 'submit')
// Value Check	should('have.value', 'John')

// Commonly Used Implicit Assertions
// Assertion	Description	Example
// be.visible	Element is visible	cy.get('.btn').should('be.visible')
// exist	Element exists in DOM	cy.get('#logo').should('exist')
// contain	Contains partial text	cy.get('p').should('contain', 'hello')
// have.text	Exact text match	cy.get('h1').should('have.text', 'Dashboard')
// have.value	Input field value	cy.get('input').should('have.value', 'Asfand')
// have.class	Has a specific class	cy.get('.btn').should('have.class', 'active')
// have.attr	Has attribute with value	cy.get('a').should('have.attr', 'href', '/login')
// have.length	Number of elements	cy.get('.row').should('have.length', 3)
// be.checked	Radio/checkbox is checked	cy.get('#male').should('be.checked')
// be.enabled / be.disabled	Input or button state	cy.get('button').should('be.disabled')
import 'cypress-xpath';
describe('Assertions',() => {
    it('Implicit Assertion', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('include','orangehrmlive.com')
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('contain','orangehrm')

    })
    it('Implicit Assertion', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('include','orangehrmlive.com')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain','orangehrm')

    })
    it('Implicit Assertion on login page', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[placeholder='Username']", { timeout: 10000 }).type('Admin');
        cy.get("input[placeholder='Password']").type('admin123');
        cy.get("button[type='submit']").click()

    })

})

