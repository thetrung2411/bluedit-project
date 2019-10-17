describe('Testing search', function() {
    beforeEach(function() {
        cy.visit('https://asd-bluedit.herokuapp.com/searching')
    })
    it('Testing search', function() {
        cy.get('#name').type('Test User').should('have.value', 'Test User')
        cy.get('search').click()
        cy.wait(5000);
    })
    it('Testing search', function() {
        cy.get('#value').type('123').should('have.value', '123')
        cy.get('#search').click()
        cy.wait(5000);
    })
    it('Testing search', function() {
        cy.get('#input block name').type('Test User').should('have.value', 'Test User')
        cy.get('#block').click()
        cy.wait(5000);
})
})