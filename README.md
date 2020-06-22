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

![alt text](/artefatos/imagens/Aplicacao.png?raw=true "Aplicação")



## Arquitetura

Visão de arquitetura.

![alt text](/artefatos/imagens/Arquitetura_Front.png?raw=true "Arquitetura Projeto")


### Setup do projeto

Pré-requisitos
* NodeJS.


No diretório raiz do projeto "front-github".
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

## Integração Contínua

O repositógio git está integrado com o repositório de imagens Docker Hub. Todo push realizado no git, automaticamente é disponibilizada imagem no repositório Doker Hub.

Endereço: 
    ```
    https://hub.docker.com/r/vitorhora/front_vuejs
    ```

Pull da Imagem:
    ```
    docker pull vitorhora/front_vuejs:front-github
    ```

Executar imagem criada: 
    ```
    docker run -p 8080:80 <IMAGE ID>
    ```

Url App: 
    ```
    http://localhost:8080
    ```


