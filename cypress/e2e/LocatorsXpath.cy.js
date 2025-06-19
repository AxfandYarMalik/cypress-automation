// Locators

// Xpath Locators

// npm install -D cypress-xpath

// cy.xpath(xpath)              
 
// cypress/support/commands.js
// Add this line at the top:
// require('cypress-xpath');
// If you're using ES modules (.ts or type: module in package.json), use:
// import 'cypress-xpath';

import 'cypress-xpath';

describe('Forms', () => {
    it('xpath locator', () => {
        cy.visit('https://practice-automation.com/form-fields/')
        cy.xpath("//input[@id='name-input']").type("Khan")
    })
    })

//input[@id='name-input']/li discribe