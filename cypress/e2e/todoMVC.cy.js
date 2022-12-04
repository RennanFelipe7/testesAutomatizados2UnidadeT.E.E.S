/// <reference types="cypress" />
describe('Testes TodoMVC', () => {
    beforeEach("Visita a pagina inicial", () => {
        cy.visit('https://todomvc.com/examples/vanillajs/#/')
    })
    it('Deverá criar uma tarefa', () => {
        cy.get('.new-todo').type('Tarefa criado pelo Cypress{enter}')
    });
    it('Deverá verificar se existe pelo menos uma tarefa criada', () => {
        cy.get('.new-todo').type('Tarefa criado pelo Cypress{enter}')
        cy.get('[class="todo-list"]').should('be.visible').should('have.length.at.least', 1)
    });
    it('Deverá veirifcar se a contagem inferior de intes na tabela está conrreta', () => {
        for (let index = 0; index < Math.floor(Math.random() * 10 + 1); index++) {
            cy.get('.new-todo').type('Tarefa criado pelo Cypress de número ' + (index + 1) + '{enter}')
        }
        cy.get('[class="todo-list"] > li').should('be.visible').then((tamanho) => {
            cy.get('strong').invoke('text').then((valor) => {
                expect(tamanho.length).to.eq(parseInt(valor))
            })
        })
    });
    it('Deverá excluir uma única tarefa', () => {
        cy.get('.new-todo').type('Ir a aula{enter}')
        cy.get('.new-todo').type('Fazer a atividade{enter}')
        cy.get('label').contains('Ir a aula').next().click({force: true})
        cy.get('[class="todo-list"]').should('not.contain', 'Ir a aula')
    });
    it('Deverá excluir todas as tarefas', () => {
        cy.get('.new-todo').type('Tarefa criado pelo Cypress{enter}')
        cy.get('[for="toggle-all"]').click()
        cy.get('.clear-completed').click()
        cy.get('ul').should('not.be.visible') 
    });

})