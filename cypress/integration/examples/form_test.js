describe('Form- testing our form inputs', function(){

    beforeEach(() => {
        cy.visit("http://localhost:3001/");
    });
    it("Add text to inputs and submit form", function(){
       cy.get('[data-cy="name"]').type("Sofia").should("have.value", "Sofia");
       cy.get('[data-cy="email"').type("sofia@sophiethedeveloper.com").should("have.value", "sofia@sophiethedeveloper.com");
       cy.get('[data-cy="password"]').type('123456').should("have.value", "123456");
       cy.get('[type="checkbox"]').check().should('be.checked');
       cy.get('[data-cy="submit"').click();
    });

    // it("Adds text to the texarea", () => {
    //     cy.get("textarea").type("hey");
    // })
});