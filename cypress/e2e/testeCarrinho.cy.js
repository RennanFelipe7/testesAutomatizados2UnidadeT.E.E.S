/// <reference types="cypress" />
describe('Teste do carrinho', () => {  
    beforeEach("Visita a pagina inicial", () => {
        cy.visit('/')
    })
    it('Deverá adicionar um produto ao carrinho', () => {
        cy.AdicionaProduto('.dwOYCh > .sc-124al1g-0')
        cy.get('.sc-1h98xa9-2').should('be.visible')
        .invoke('text').then((value) => {
            expect(value).to.not.equal('0')
        })
    });
    it('Deverá adicionar um segundo produto do mesmo tipo ao carrinho', () => {
        cy.AdicionaProduto('.keuquD > .sc-124al1g-0')
        cy.get('.sc-11uohgb-4 > div > :nth-child(2)').click()
        cy.get('.sc-1h98xa9-2').invoke('text').then((value) => {
            expect(value).to.equal('2')
        })
    })
    it('Deverá fazer checkout do carrinho', () => {
        cy.AdicionaProduto('.ekOVCH > .sc-124al1g-0')
        const stub = cy.stub()
        cy.on('window:alert', stub)
        cy.get('.sc-1h98xa9-11').click().then( () => {
            cy.get('.sc-1h98xa9-9').invoke('text').then((value) => {
                expect(stub.getCall(0)).to.be.calledWith('Checkout - Subtotal: ' + value)  
            })
        })
    });
    it('Deverá retirar um produto do mesmo tipo que já possui no carrinho', () => {
        cy.AdicionaProduto('.keuquD > .sc-124al1g-0')
        cy.get('.sc-11uohgb-4 > div > :nth-child(2)').click()
        cy.get('.sc-11uohgb-4 > div > :nth-child(1)').click()
        cy.get('.sc-1h98xa9-9').invoke('text').then((value) => {
            expect('$ 29.45').to.eq(value)  
        })
    });
})