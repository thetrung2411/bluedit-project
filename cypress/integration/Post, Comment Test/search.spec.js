describe('Testing search', function() {
        cy.visit('https://asd-bluedit.herokuapp.com/searching')
        cy.get('#name Search…').type('Test User').should('have.value', 'Test User')
        cy.get('search').click()
        cy.wait(5000);
    })
describe('Testing search', function() {
    cy.visit('https://asd-bluedit.herokuapp.com/searching')
        cy.get('#body Search…').type('123').should('have.value', '123')
        cy.get('#search').click()
        cy.wait(5000);
    })
describe('Testing search', function() {
    cy.visit('https://asd-bluedit.herokuapp.com/searching')
        cy.get('#input block name').type('Test User').should('have.value', 'Test User')
        cy.get('#block').click()
        cy.wait(5000);
})