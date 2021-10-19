describe("Home Form Test", () => {
    it("Has the Welcome title", () => {
        cy.visit("localhost:3000/");
        cy.get('p').should('contain', 'Welcome! This can be used to test a deployment.');
    })
});