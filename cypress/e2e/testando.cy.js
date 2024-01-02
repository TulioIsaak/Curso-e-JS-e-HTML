describe('Página de cadastro', () => {
  it('Preencher os campos do formulário para cadastrar um novo usuário', () => {
    cy.visit('http://localhost:4200/#/home')
    cy.contains('a', 'Register now').click()
    cy.get('[data-test="email"]').type('tisaak@gmail.com')
    cy.get('[data-test="fullName"]').type('Túlio Isaak da Silva Barbosa')
    cy.get('[data-test="registerUserName"]').type('tisaak')
    cy.get('[data-test="registerPassword"]').type('12345678')
    cy.contains('button', 'Register').click()
  })
})