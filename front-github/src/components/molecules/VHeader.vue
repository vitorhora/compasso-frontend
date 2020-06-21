<template>

   <nav>
      <div class="nav-wrapper green lighten-1">

        <a href="#" class="brand-logo center">Informa&ccedil;&otilde;es GIT</a>

      </div>
    </nav>
    
</template>


<script>
 
  export default {
    data: function () {
      return {
        title: 'Compasso'
      }
    },
   
    head: {  
      title: function () {
        return {
          inner: this.title
        }
      },
      meta: [
        { name: 'description', content: 'Veja gratuitamente informações dos usuários GitHub, repositórios, favoritos com apenas o nome do usuário. O repositório GitHub é onde estão localizados fontes de aplicativos em diversas tecnologias.', id: 'description',  },
        { name: 'application-name', content: 'Informções GIT' },
        { name: 'author', content: 'Vitor Cavalcante Hora' },
        { name: 'keywords', content: 'consulta, github, favoritos, repositório, informações, usuário, git' }
      ],

      link: [
        { rel: 'author', href: 'author', undo: false },
        { rel: 'canonical', href: 'http://localhost:8080' }
      ]
    }  
  }
  
</script>


