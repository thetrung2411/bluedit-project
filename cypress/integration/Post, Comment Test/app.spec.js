describe('Testing post', function() {
    beforeEach(function (){
        cy.visit('https://asd-bluedit.herokuapp.com/home')
        cy.get('#login').click()
        cy.get('#email').type('test@email.com').should('have.value', 'test@email.com')
        cy.get('#password').type('123456').should('have.value', '123456')
        cy.get('#login').click()
        cy.location('pathname', {timeout: 30000}).should('include', '/post');
        cy.wait(5000);
        cy.get('#postButton').click()
    })
    describe('Testing post edit function ', function() {
        it('Edit post with empty body', function(){
        cy.get('#textField').type('This post is used for testing empty text field').should('have.value', 'This post is used for testing empty text field')
        cy.get('#submit').click()
        cy.wait(5000)
        cy.get('#postMenu').click()
        cy.get('#editButton').click()
        cy.get('#editTextField').clear()
        cy.get('#submitEdit').should('be.disabled')
        
    })
        it('Edit post with non empty body', function(){
        cy.get('#textField').type('This content is going to be edited').should('have.value', 'This content is going to be edited')
        cy.get('#submit').click()
        cy.wait(5000)
        cy.get('#postMenu').click()
        cy.get('#editButton').click()
        cy.get('#editTextField').clear()
        cy.get('#editTextField').type('Get the job done').should('have.value', 'Get the job done')
        cy.get('#submitEdit').click()
   
})
    })
    describe('Testing post delete function ', function() {
        it('Delete post', function(){
        cy.get('#textField').type('This content is going to be deleted').should('have.value', 'This content is going to be deleted')
        cy.get('#submit').click()
        cy.wait(5000)
        cy.get('#postMenu').click()
        cy.get('#deleteButton').click()
        cy.get('#submitDelete').click()
        cy.wait(3000)
    })
    })
    describe('Testing post hide function ', function() {
    it('Hide post', function(){
        cy.get('#textField').type('This content is going to be hidden').should('have.value', 'This content is going to be hidden')
        cy.get('#submit').click()
        cy.wait(5000)
        cy.get('#postMenu').click()
        cy.get('#hideButton').click()
        cy.get('#submitHide').click()
        cy.wait(3000)
    })
})
})

describe('Testing comment', function() {
 describe('Testing comment delete function', function() {   
    beforeEach(function (){
        cy.visit('https://asd-bluedit.herokuapp.com/home')  
        cy.get('#login').click()
        cy.get('#email').type('test@email.com').should('have.value', 'test@email.com')
        cy.get('#password').type('123456').should('have.value', '123456')
        cy.get('#login').click()
        cy.location('pathname', {timeout: 30000}).should('include', '/post');
        cy.get('#postButton').click()
        cy.get('#textField').type('This post is used for testing delete comment function').should('have.value', 'This post is used for testing delete comment function')
        cy.get('#submit').click()
        cy.wait(5000)
        cy.get('#showDetail').click()
        cy.wait(5000)   
    })
    it('Delete comment', function(){
        cy.get('#dialog').find('#commentField').type('This comment should be deleted').should('have.value', 'This comment should be deleted')
        cy.get('#submitComment').click()
        cy.get('#commentItem').find('#postMenu').click()
        cy.get('#deleteButton').click()
        cy.get('#submitDelete').click()
        cy.wait(3000) 
    })
 })

 describe('Testing comment hide function', function() {   
    beforeEach(function (){
        cy.visit('https://asd-bluedit.herokuapp.com/home')  
        cy.get('#login').click()
        cy.get('#email').type('test@email.com').should('have.value', 'test@email.com')
        cy.get('#password').type('123456').should('have.value', '123456')
        cy.get('#login').click()
        cy.location('pathname', {timeout: 30000}).should('include', '/post');
        cy.get('#postButton').click()
        cy.get('#textField').type('This post is used for testing hide comment function').should('have.value', 'This post is used for testing hide comment function')
        cy.get('#submit').click()
        cy.wait(5000)
        cy.get('#showDetail').click()
        cy.wait(5000)   
    })
    it('Hide comment', function(){
        cy.get('#dialog').find('#commentField').type('This comment should be hidden').should('have.value', 'This comment should be hidden')
        cy.get('#submitComment').click()
        cy.get('#commentItem').find('#postMenu').click()
        cy.get('#hideButton').click()
        cy.get('#submitHide').click()
        cy.wait(3000) 
    })
 })

 describe('Testing comment edit function', function() {
    beforeEach(function (){
        cy.visit('https://asd-bluedit.herokuapp.com/home')  
        cy.get('#login').click()
        cy.get('#email').type('test@email.com').should('have.value', 'test@email.com')
        cy.get('#password').type('123456').should('have.value', '123456')
        cy.get('#login').click()
        cy.location('pathname', {timeout: 30000}).should('include', '/post');
        cy.get('#postButton').click()
        cy.get('#textField').type('This post is used for testing edit comment function').should('have.value', 'This post is used for testing edit comment function')
        cy.get('#submit').click()
        cy.wait(5000)
        cy.get('#showDetail').click()
        cy.wait(5000)   
    })

    describe('Edit comment', function(){
        it('Edit comment with non empty body', function(){
        cy.get('#dialog').find('#commentField').type('This comment should have its content changed').should('have.value', 'This comment should have its content changed')
        cy.get('#submitComment').click()
        cy.get('#commentItem').find('#postMenu').click()
        cy.get('#editButton').click()
        cy.get('#editTextField').clear()
        cy.get('#editTextField').type('Get the comment job done').should('have.value', 'Get the comment job done')
        cy.get('#submitEdit').click()
        cy.wait(5000)
    })
    it('Edit comment with emty body', function(){
    cy.get('#dialog').find('#commentField').type('Comment test empty edit body').should('have.value', 'Comment test empty edit body')
    cy.get('#submitComment').click()
    cy.get('#commentItem').find('#postMenu').click()
    cy.get('#editButton').click()
    cy.get('#editTextField').clear()
    cy.get('#submitEdit').should('be.disabled')
})
    })

    })
    
})