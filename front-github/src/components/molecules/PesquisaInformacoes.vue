<template>

  <div class="container">
      
    <label>Usu&aacute;rio</label>
    <VInputText type="text" :value="usuario" placeholder="Digite sua pesquisa" @input="usuario = $event"/>
    
    <td>                
      <PButton @click="listarRepositorios">
        <slot>repos</slot>
      </PButton>
    </td> 

    <td>         
      <PButton @click="listarFavoritos">
        <slot>starred</slot>
      </PButton>
    </td> 

    <td>          
      <SButton @click="limparTela">
        <slot>Limpar</slot>
      </SButton>

    </td>
    
    <div v-if="mensagem">
      <tr>
        <td>
          <label>OBS: </label>
          <span>Sistema com falha. Entre em contato com o suporte e informe: {{mensagem}}</span>
          </td> 
      </tr>
    </div>

    <div v-if="informacao != ''">
      
      <tr>        
        <td>
          <label>Id: </label>
          <span>{{informacao.id}}</span>
        </td>

        <td>
          <label>Login: </label>
          <span>{{informacao.login}}</span> 
        </td>        
      </tr>   

      <tr>   
        <td>
          <label>Tipo: </label>
          <span>{{informacao.type}}</span>
        </td>

        <td>
          <label>Email: </label>
          <span>{{informacao.email}}</span> 
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

  import Repositorio from '../../services/repositorios'
  import PButton from '../atoms/PButton'
  import SButton from '../atoms/SButton'
  import VInputText from '../atoms/VInputText'

  export default {
    name: 'app',

    props: {
      usuario: {
        type: String,
        required: false
      },
      mensagem: {
        type: String,
        required: false
      }     
    },
  
    components: {     
      PButton,
      SButton,    
      VInputText      
    },

    data () {
      return {
        informacao:{
          login: '',
          id: '',
          type: '',
          email: '',
          message: ''
        },
        repositorios: []
      }
    },

    mounted(){          
      this.usuario = location.pathname.replace('/','');
      if (this.usuario){        
        this.listarRepositorios();
        this.consultarUsuario()

      }else{
        this.limparTela();  
      }
      
    },

    methods:{
      
      limparTela(){
        this.usuario = '';
        this.informacao = '';
        this.mensagem = '';
        this.repositorios = [];
      },

      consultarUsuario(){
        if (!this.usuario || !this.usuario.trim()) {
          alert('Informar dado da pesquisa'); 
          return; 
        }            
        
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
        }
      
        this.consultarUsuario();
               
        Repositorio.listarRepositorios(this.usuario).then(resposta => {
          this.repositorios = resposta.data
        }).catch(e => {     
          this.mensagem = e.message;
        })
      },

      listarFavoritos(){
        if (!this.usuario || !this.usuario.trim()) {
          alert('Informar dado da pesquisa'); 
          return; 
        }
        
        this.consultarUsuario();

        Repositorio.listarFavoritos(this.usuario).then(resposta => {
          this.repositorios = resposta.data
        }).catch(e => {
          this.mensagem = e.message;
        })
      }
    }
  }

</script>
