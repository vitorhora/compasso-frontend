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
        { name: 'description', content: 'Veja gratuitamente informa��es dos usu�rios GitHub, reposit�rios, favoritos com apenas o nome do usu�rio. O reposit�rio GitHub � onde est�o localizados fontes de aplicativos em diversas tecnologias.', id: 'description',  },
        { name: 'application-name', content: 'Inform��es GIT' },
        { name: 'author', content: 'Vitor Cavalcante Hora' },
        { name: 'keywords', content: 'consulta, github, favoritos, reposit�rio, informa��es, usu�rio, git' }
      ],

      link: [
        { rel: 'author', href: 'author', undo: false },
        { rel: 'canonical', href: 'http://localhost:8080' }
      ]
    }  
  }
  
</script>


