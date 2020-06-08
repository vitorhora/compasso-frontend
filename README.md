# compasso-frontend
Implementação de Front utilizando VueJs, Java e Material Design, consumindo APIs do GitHub

## Aplicação

```
Apresentação da aplicação.
```
![alt text](https://github.com/vitorhora/compasso-frontend/blob/master/front-github/imagens/aplicacao.png)



## Arquitetura
```
Visão de arquitetura.
```
![alt text](https://github.com/vitorhora/compasso-frontend/blob/master/front-github/imagens/desenho_arquitetura.png)


# Caso de uso

```
Dado um determinado usuário, deverá ser possível navegar diretamente até a página de detalhe do usuário sem que seja necessário efetuar uma nova busca. Ex: http://localhost:3000/USER_GITHUB

Gostariamos de pesquisar por usuário.
Gostariamos de ao clicar no botão de repos, listar repositorios do usuario pesquisado.
Gostariamos de ao clicar no botão de starred, listar os repositorios mais visitados por aquele usuario.

```

## Setub do projeto
```
npm install
```

### Compilar e atualizar para desenvolvimento
```
npm run serve
```

### Back-end 
```
Endpoint user: https://api.github.com/users/USER_GITHUB
Endpoint repos: https://api.github.com/users/USER_GITHUB/repos
Endpoint starred: https://api.github.com/users/USER_GITHUB/starred{/owner}{/repo}
```
