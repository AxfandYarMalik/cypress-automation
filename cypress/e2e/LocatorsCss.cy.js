// Locators

// CSS Seletor
//xpath

// cy.get(Locators)

// CSS Selector
// ============
// Tag id
// Tag Class
// Tag Attribute
// Tag Class Attributes


// # Tag#id
// # tag.class
// # tag[attribute='value']
// # tag.class[attribute='value']


describe('Forms', () => {
    it('Name Text Field', () => {
        cy.visit('https://practice-automation.com/form-fields/')
        cy.get('#name-input').type('Asfand Yar Malik')
        cy.get("input[type='password']").type('PAKi@12345')
        cy.get('#drink1').check().should('be.checked')
        cy.get('#color5').check().should('be.checked')
        cy.get("select").select('Undecided').should('have.value', 'undecided')
        cy.get('#email').type('Asfandy103@gmail.com')
        cy.get('#message').type('Learning cypress')
        cy.get('#submit-btn').click()
        cy.on('window:alert', (str) => {
      expect(str).to.equal('Message received!')
    })
    })
//     describe('Radio Button Test', () => {
//   it('Selects Water option', () => {
//     cy.visit('https://practice-automation.com/form-fields/')

//     // Select by ID
//     cy.get('#drink1').check().should('be.checked')
//   })
// })

    // it('Password Text Field', () => {
    //     cy.visit('https://practice-automation.com/form-fields/')
    //     cy.get("input[type='password']").type('')
    // })
})
 