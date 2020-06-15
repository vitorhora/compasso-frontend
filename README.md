# frontend-vue
Estudo de caso utilizando VueJS e Material Design, consumindo APIs do GitHub.

## REQUISITOS DA ENTREGA

Gostaríamos nos entregasse uma aplicação utilizando a api do GITHUB https://developer.github.com/v3/ consumindo os seguintes endpoints:

    Endpoint user: https://api.github.com/users/USER_GITHUB
    Endpoint repos: https://api.github.com/users/USER_GITHUB/repos
    Endpoint starred: https://api.github.com/users/USER_GITHUB/starred{/owner}{/repo}

A aplicação deverá constituir três componentes principais:

    O campo de busca.
    Visualização de resultados.
    Dois botões para executar um determinado resultado.

Ao clicar nos botões de repos e starred, deverá mostrar uma lista simples de cada endpoint apresentado anteriormente.

Dado um determinado usuário, deverá ser possível navegar diretamente até a página de detalhe do usuário sem que seja necessário efetuar uma nova busca. Ex: http://localhost:3000/USER_GITHUB

    Gostariamos de pesquisar por usuario.
    Gostariamos de ao clicar no botão de repos, listar repositorios do usuario pesquisado.
    Gostariamos de ao clicar no botão de starred, listar os repositorios mais visitados por aquele usuario.

Você poderá usar o framework css Bootstrap ou Materialize para construção dos componentes UI (Se preferir, os componentes poderão ser criados do zero, utilizando as boas práticas).

Você poderá usar os frameworks js para desenvolvimento da sua aplicação ou utilizar o Vanilajs e jQuery.

Você poderá utilizar Jasmine, Mocha ou RhinoUnit para testar os request feitos.
STACK ESPERADA PARA O TESTE

    HTML 5 (Desejavel o uso de SEO, Semãntica, Usabilidade).
    JAVASCRIPT (Desejavel o uso de Vanilla, jQuery, Knockoutjs, Angular V2, Vuejs, Reactjs, Performance).
    CSS 3 (Desejavel o uso de SASS, LESS, Stylus, Bootstrap, Materialize, Escalabilidade, Responsivo, BEM CSS).

## CENÁRIO

Na página do campo de busca, deverá ser possível inserir nomes de usuários do github, repositórios e os mais visitados pelos os usuários.

## Aplicação


Apresentação da aplicação.

![alt text](https://github.com/vitorhora/compasso-frontend/blob/master/front-github/imagens/aplicacao.png)



## Arquitetura

Visão de arquitetura.

![alt text](https://github.com/vitorhora/compasso-frontend/blob/master/front-github/imagens/arquitetura_back.png)


# Caso de uso


Dado um determinado usuário, deverá ser possível navegar diretamente até a página de detalhe do usuário sem que seja necessário efetuar uma nova busca. Ex: http://localhost:3000/USER_GITHUB

Gostariamos de pesquisar por usuário.

Gostariamos de ao clicar no botão de repos, listar repositorios do usuario pesquisado.

Gostariamos de ao clicar no botão de starred, listar os repositorios mais visitados por aquele usuario.



### Setup do projeto

Pré-requisitos
* NodeJS.


Dentro do diretório raiz do projeto "front-github".
```
npm install
```

### Compilar e atualizar para desenvolvimento
```
npm run serve
```
A URL será informada quando o servidor terminar de iniciar.

### Back-end 

* Endpoint user: https://api.github.com/users/USER_GITHUB
* Endpoint repos: https://api.github.com/users/USER_GITHUB/repos
* Endpoint starred: https://api.github.com/users/USER_GITHUB/starred{/owner}{/repo}

