/// <reference types="cypress" />

  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

      describe('Fluxo de compra ponta a ponta na Loja EBAC', () => {
        it('Deve fazer um pedido de 4 produtos com sucesso', () => {
            // Login
            cy.login('giovanna2001.teste@gmail.com', '123456');

            cy.limparCarrinho();
    
            // Adicionar primeiro produto
            cy.adicionarProduto('.post-2559 > .product-block > .block-inner > .image > .product-image > .image-hover', 'XS', 'Green');
    
            // Adicionar segundo produto
            cy.adicionarProduto('.post-3374 > .product-block > .block-inner > .image > .product-image > .image-hover', '32', 'Black');
    
            // Adicionar terceiro produto
            cy.adicionarProduto('.post-3647 > .product-block > .block-inner > .image > .product-image > .image-hover', 'S', 'Gray');
    
            // Adicionar quarto produto
            cy.adicionarProduto('.post-3964 > .product-block > .block-inner > .image > .product-image > .image-hover', 'XS', 'Purple');
    
            // Ir para o carrinho
            cy.get('.dropdown-toggle > .mini-cart-items').click();
    
            // Ir para o checkout
            cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click();
    
            // checkout
            cy.get('#billing_first_name').clear().type('Giovanna');
            cy.get('#billing_last_name').clear().type('Teste');
            cy.get('#billing_address_1').clear().type('Rua das Flores, 123');
            cy.get('#billing_city').clear().type('São Paulo');
            cy.get('#billing_postcode').clear().type('12345000');
            cy.get('#billing_phone').clear().type('11999999999');
            cy.get('#billing_email').clear().type('giovanna2001.teste@gmail.com');
    
            // Finalizar pedido
            cy.get('#terms').click();
            cy.get('#place_order').click();
    
            // Validar pedido concluído
            cy.get('.woocommerce-notice').should('contain', 'Obrigado');
        });
    });
    