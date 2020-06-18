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

          <button @click="listarRepositorios" class="waves-effect waves-light btn-small">Repos<i class="material-icons left">send</i></button>       

      </td> 

      <td>
          <button @click="listarFavoritos" class="waves-effect waves-light btn-small">Starred<i class="material-icons left">send</i></button>

      </td> 

      <td>

        <form @submit.prevent="limparResultado">       

          <botao-limpar>Limpar</botao-limpar>

        </form>

      </td>
      

      <tr>        
        <td>
           <label>Id: </label>
          <span> {{informacao.id}}</span>
         </td>
          <td>
           <label>Login: </label>
           <span>{{informacao.login}}</span> 
          </td>        
      </tr>   

       <tr>   
          <td>
           <label>Tipo: </label>
           <span>  {{informacao.type}} </span>
          </td>
          <td>
           <label>Email: </label>
           <span>  {{informacao.email}}</span> 
          </td>        
      </tr>   

    
      <table class="striped">

          <tr>

            <th>Resultado</th>  

          </tr>      

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
import BotaoLimpar from './components/BotaoLimpar'


export default {
  name: 'app',
 
  components: {   
    BotaoLimpar
    
  },

  data () {
    return {
      informacao:{
        login: '',
        id: '',
        type: '',
        email: ''
      },
      repositorios: []
    }
  },

  mounted(){    
    console.log(location.pathname);   
    this.usuario = location.pathname.replace('/','');
    if (this.usuario){
      this.listarRepositorios();
      this.consultarUsuario()
    }
  },

  methods:{

    limparResultado(){
      this.usuario = '';
      this.informacao = '';
      this.repositorios = [];
    },

    consultarUsuario(){
       if (!this.usuario || !this.usuario.trim()) {
         alert('Informar dado da pesquisa'); 
         return; 
      };
   
      Repositorio.consultarUsuario(this.usuario).then(resposta => {
        this.informacao = resposta.data
          
      }).catch(e => {
        
        console.log(e)
      })

    },
    
    listarRepositorios(){  
      if (!this.usuario || !this.usuario.trim()) {
         alert('Informar dado da pesquisa'); 
         return; 
      };
      
      this.consultarUsuario();

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
      
      this.consultarUsuario();

      Repositorio.listarFavoritos(this.usuario).then(resposta => {
        this.repositorios = resposta.data
      }).catch(e => {
        console.log(e)
      })
    }
  }

}
</script>

