# frontend-vue
Estudo de caso utilizando VueJS e Material Design, consumindo APIs do GitHub.

Desafio: https://github.com/levisfront/api-github-interview

Tomando como referência o “Time to Market” curto disponível para entrega, seguem os artefactos desenvolvidos.

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

