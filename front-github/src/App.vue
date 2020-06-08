<template>
  <div id="app">

    <nav>
      <div class="nav-wrapper green lighten-1">

        <a href="#" class="brand-logo center">Informa&ccedil;&otilde;es GIT</a>

      </div>
    </nav>

    <div class="container">
      
      <label>Usu&aacute;rio</label>
      <input v-model="usuario" placeholder="Digite sua pesquisa">      
      
      <td>

        <form @submit.prevent="listarRepositorios">             

          <button class="waves-effect waves-light btn-small">Repos<i class="material-icons left">send</i></button>       

        </form>

      </td> 

      <td>

        <form @submit.prevent="listarFavoritos">        

          <button class="waves-effect waves-light btn-small">Starred<i class="material-icons left">send</i></button>

        </form>

      </td>       

      <table class="striped">

        <thead>

          <tr>

            <th>Resultado</th>  

          </tr>

        </thead>

        <tbody>

          <tr v-for="repositorio of repositorios" :key="repositorio.id">             
             
              <td>{{ repositorio.url }}</td>

          </tr>

        </tbody>
      
      </table>

    </div>

  </div>
</template>

<script>

import Repositorio from './services/repositorios'

export default {
  name: 'app',
  data () {
    return {
      informacao:{
        id: '',
        origin: ''       
      },
      repositorios: []
    }
  },

  mounted(){    
    console.log(location.pathname);   
    this.usuario = location.pathname.replace('/','');
    if (this.usuario){
      this.listarRepositorios();
    }
  },

  methods:{
    
    listarRepositorios(){  
      if (!this.usuario || !this.usuario.trim()) {
         alert('Informar dado da pesquisa'); 
         return; 
      };

      Repositorio.listarRepositorios(this.usuario).then(resposta => {
        this.repositorios = resposta.data
      }).catch(e => {
        console.log(e)
      })
    },

    listarFavoritos(){
      if (!this.usuario || !this.usuario.trim()) {
         alert('Informar dado da pesquisa'); 
         return; 
      };
      
      Repositorio.listarFavoritos(this.usuario).then(resposta => {
        this.repositorios = resposta.data
      }).catch(e => {
        console.log(e)
      })
    }
  }

}
</script>

