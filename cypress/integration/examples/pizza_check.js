describe("user app", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })
    
    it('inputs', () => {
    cy.get('[for="name"] > input')
    .type("Adam")
    .should("have.value", "Adam")
    })

    it('multiple toppings', () => {
        cy.get('[for="toppings"] > input')
        .check()
        .should('be.checked')
    })


    it('submit', () => {
        cy.get("form").submit()
    })

})

