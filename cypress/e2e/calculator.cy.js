describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })
  
  it('should give the result of a calculation', () => {
    cy.get('#number3').click();
    cy.get('#operator_add').click();
    cy.get('#number6').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '9')
  })

  it('should be able to chain together multiple operations', () => {
    cy.get('#number3').click();
    cy.get('#operator_add').click();
    cy.get('#number6').click();
    cy.get('#operator-subtract').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '7')
  })

  it('should be able to calculate positive large numbers with expected output', ()=>{
    cy.get('#number1').click();
    cy.get('#number2').click();
    cy.get('#number5').click();
    cy.get('#number5').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '2510000')
  })

  it('should be able to give output of negative decimal numbers', () => {
    cy.get('#number2').click();
    cy.get('#decimal').click();
    cy.get('#number5').click();
    cy.get('#operator-subtract').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-2.5')
  })

  it('should return error message if divide by 0', () =>{
    cy.get('#number2').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', "Error can't divide by zero.");

  })
})