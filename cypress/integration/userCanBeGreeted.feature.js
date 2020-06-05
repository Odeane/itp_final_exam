describe('user can be greeted', () => {
    it('test', () => {
        cy.visit('http://localhost:3001')
        cy.get('#btn').click()
        cy.get('h1').contains('Greetings')
    })

    it('A greeting message should be shown', () => {
        cy.get('#message').should('contain', 'hello how are you' )
    })
})
