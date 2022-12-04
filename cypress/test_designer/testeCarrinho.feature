Funcionalidade: Teste do carrinho

    Cenario: Deverá adicionar um produto no carrinho
    Dado que o usuário carrega a tela inicial
    Quando o usuario clica no botão para adicionar um produto no carrinho
    Entao ele visualizará o menu lateral com o carrinho informado que contem um produto

    Cenario: Deverá adicionar um segundo produto do mesmo tipo ao carrinho
    Dado que o usuário carrega a tela inicial
    E já possue um produto no carrinho
    Quando o usuario clica no botão para adicionar um segundo produto do mesmo tipo
    Entao ele consegue adicionar um segundo produto 
    E visualizará o carrinho informando que contem um segundo produto

    Cenario: Deverá fazer checkout do carrinho
    Dado que o usuário carrega a tela inicial
    E já possue pelo menos um produto no carrinho
    Quando ele clica no botão checkout
    Entao será exebido um alerta para o usuario informando o checkout e o valor do mesmo 

    Cenario: Deverá retirar um produto do mesmo tipo que já possui no carrinho
    Dado que o usuário carrega a tela inicial
    E tem um pelo menos dois produto no carrinho
    Quando ele clica no botão onde retira uma unidade do mesmo produto
    Entao ele consegue retirar uma unidade de um produto
    E o valor é subtraido do subtotal



