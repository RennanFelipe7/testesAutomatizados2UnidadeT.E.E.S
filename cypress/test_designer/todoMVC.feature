Funcionalidade: Testes TodoMVC

    Cenario: Deverá criar uma tarefa
    Dado que o usuário se encontra na tela de início
    Quando ele digita algo
    E aperta o botão enter
    Então ele consegue adicionar uma tarefa na lista

    Cenario: Deverá verificar se existe pelo menos uma tarefa criada
    Dado que o usuário se encontra na tela de início
    E possui pelo menos uma tarefa criada
    Quando ele olha a lista de tarefas criada
    Então ele consegue ver pelo menos uma tarefa criada

    Cenario: Deverá veirifcar se a contagem inferior de intes na tabela está conrreta
    Dado que o usuário se encontra na tela de início
    Quando ele veirifca a quantidade de tarefas criadas
    E o número que fica na parte inferior que também informa esse número
    Então esses números devem ser iguais

    Cenario: Deverá excluir uma única tarefa
    Dado que o usuário se encontra na tela de início
    E possui pelo menos duas tarefa criada
    Quando ele clica para excluir uma única tarefa
    Então ele não conseguirá mais ver aquela tarefa

    Cenario: Deverá excluir todas as tarefas
    Dado que o usuário se encontra na tela de início
    E possui pelo menos uma tarefa criada
    Quando ele clica no botão que recolhe as tarefas
    E no botão onde exclui todas as tarefas
    Então ele não visualizará nenhuma tarefa

