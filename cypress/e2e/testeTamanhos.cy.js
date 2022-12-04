/// <reference types="cypress" />
describe('Testes dos tamanhos', () => {  
    beforeEach("Visita a pagina inicial", () => {
        cy.visit('/')
    })
    it('Deverá selecionar as roupas de tamanho extra grande e verificar se existe pelo menos 1 produto de tal tamanho', () => {
        cy.get(':nth-child(2) > label > .checkmark').click()
        cy.wait(1000)
        cy.get('.sc-uhudcz-0').children().should("have.length.at.least", 1)
    });
    it('Deverá selecionar dois tamanhos de roupas', () => {
        cy.get(':nth-child(3) > label > .checkmark').click()
        cy.get(':nth-child(4) > label > .checkmark').click()
        cy.get(':nth-child(3) > label > .checkmark').should('have.css', 'background-color', 'rgb(27, 26, 32)')
        cy.get(':nth-child(4) > label > .checkmark').should('have.css', 'background-color', 'rgb(27, 26, 32)')
    });
})