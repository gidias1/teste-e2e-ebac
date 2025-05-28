Cypress.Commands.add('login', (usuario, senha) => {
    cy.visit('/minha-conta')
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha)
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá')
});

Cypress.Commands.add('adicionarProduto', (id_produto, tamanho, cor) => {

  cy.visit('/produtos')
 
  cy.get(`.post-${id_produto} > .product-block > .block-inner > .image > .product-image > .image-hover`).click()
 
  cy.get(`.button-variable-item-${tamanho}`).click()
 
  cy.get(`.button-variable-item-${cor}`).click()
 
  cy.get('.single_add_to_cart_button').click()
 
 });

Cypress.Commands.add('limparCarrinho', () => {
    cy.visit('/carrinho');
  
    cy.get('body').then($body => {
      if ($body.find('.remove').length > 0) {
        // Se tiver item no carrinho, removemos
        cy.get('.remove').each(() => {
          cy.get('.remove').first().click({ force: true });
          cy.wait(500); // Aguarda um pouco para garantir a remoção
        });
  
        // Garantir que o carrinho está vazio agora
        cy.get('body').then($body2 => {
          // Verifica se não há mais botão .remove (pois o carrinho está vazio)
          expect($body2.find('.remove').length).to.eq(0);
        });
      }
    });
  });