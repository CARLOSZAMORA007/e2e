describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.contains('iniciar sesión').click
    cy.contains('Regístrate').click
  })
})

