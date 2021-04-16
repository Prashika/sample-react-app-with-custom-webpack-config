describe('Testing in PT App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080');
    });

    it('Sample Login Page Testing', () => {
        cy.get('#firstName').type('John');
        cy.get('.lastName').type('Doe');
        cy.get('#login').click();
    });
});
