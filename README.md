# frontend-vue
Estudo de caso utilizando VueJS e Material Design, consumindo APIs do GitHub.

## Requisitos

Aplicação utilizando a api do GITHUB https://developer.github.com/v3/ consumindo os seguintes endpoints:

    Endpoint user: https://api.github.com/users/USER_GITHUB
    Endpoint repos: https://api.github.com/users/USER_GITHUB/repos
    Endpoint starred: https://api.github.com/users/USER_GITHUB/starred{/owner}{/repo}

Componentes principais:

    O campo de busca.
    Visualização de resultados.
    Dois botões para executar um determinado resultado.

Ao clicar nos botões de repos e starred, deverá mostrar uma lista simples de cada endpoint apresentado anteriormente.

Dado um determinado usuário, deverá ser possível navegar diretamente até a página de detalhe do usuário sem que seja necessário efetuar uma nova busca. Ex: http://localhost:3000/USER_GITHUB

    Pesquisar por usuario.
    Clicar no botão de repos, listar repositorios do usuario pesquisado.
    Clicar no botão de starred, listar os repositorios mais visitados por aquele usuario.

## Cenário

Na página do campo de busca, deverá ser possível inserir nomes de usuários do github, repositórios e os mais visitados pelos os usuários.

## Aplicação


Apresentação da aplicação.

![alt text](https://github.com/vitorhora/compasso-frontend/blob/master/front-github/imagens/aplicacao.png)



## Arquitetura

Visão de arquitetura.

![alt text](https://github.com/vitorhora/compasso-frontend/blob/master/front-github/imagens/arquitetura_back.png)


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

