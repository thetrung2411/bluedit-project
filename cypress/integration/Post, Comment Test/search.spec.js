describe('Testing search', function() {
    beforeEach(function() {
        cy.visit('https://asd-bluedit.herokuapp.com/searching')
    })
    it('Testing search', function() {
        cy.get('search').click()
        cy.wait(5000);
    })
    it('Testing search', function() {
        cy.get('#search').click()
        cy.wait(5000);
    })
    it('Testing search', function() {
        cy.get('#block').click()
        cy.wait(5000);
})
})