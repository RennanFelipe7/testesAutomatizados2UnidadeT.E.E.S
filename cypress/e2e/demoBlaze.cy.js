/// <reference types="cypress" />
describe('Testes dos tamanhos', () => {  
    beforeEach("Visita a pagina inicial", () => {
       cy.visit('https://www.demoblaze.com/index.html')
    })
    it('Deverá adicionar um produto no carrinho', () => {
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
        cy.get('.col-sm-12 > .btn').click()
        cy.get('#cartur').click()
        cy.get('tbody').should('be.visible')
    });
    it('Deverá selecinar as categorias de laptops', () => {
        cy.get('a').eq(13).click()
        cy.wait(4000)
        cy.get('a').should('be.visible').contains('Sony vaio i5')
    });
    it('Deverá fazer o envio de uma mensagem', () => {
        cy.get(':nth-child(2) > .nav-link').click()
        cy.get('#recipient-email').should('be.visible').type('exemplo@exemplo.com')
        cy.get('#recipient-name').type('Testador Cypress')
        cy.get('#message-text').type('Esta é uma mensagem é escrita pelo Cypress')
        cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.on ('window:alert', (text) => {
            expect(text).to.eq('Thanks for the message!!')  
        })
    });
    it('Deverá selecinar as categorias de telefones', () => {
        cy.get('a').eq(12).click()
        cy.wait(4000)
        cy.get('a').should('be.visible').contains('Iphone 6 32gb')
    });
    it('Deverá selecinar as categorias de monitores', () => {
        cy.get('a').eq(14).click()
        cy.wait(4000)
        cy.get('a').should('be.visible').contains('Apple monitor 24')
    });
    it('Deverá finalizar uma compra', () => {
        cy.get('a').should('be.visible').contains('Cart').click()
        cy.get('button').should('be.visible').contains('Place Order').click()
        cy.get('#name').type('Usuário do Cypress')
        cy.get('#country').type('Brasil')
        cy.get('#city').type('Duck')
        cy.get('#card').type('7364823749')
        cy.get('#month').type("Agosto")
        cy.get('#year').type('2022')
        cy.get('button').contains('Purchase').click()
        cy.get('.sweet-alert').should('be.visible')
    });
    it('Deverá reproduzir o video SOBRE NÓS', () => {
        cy.get('a').should('be.visible').contains('About us').click() 
        cy.get('.vjs-poster').click()
        cy.get('#example-video_html5_api').then(([videoEl]) => {
            expect(videoEl.paused).to.equal(false);
        });
    });
    it('Deverá voltar as imagens de demostração', () => {
        cy.get('.carousel-control-prev-icon').click()
    });
})