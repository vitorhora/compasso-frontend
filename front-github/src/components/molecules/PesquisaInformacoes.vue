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
          <span>{{mensagem}}</span>
          </td> 
      </tr>
    </div>

    <div v-if="informacao.id">
      
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

      <div v-if="repositorios[0]">
        <table class="striped">
          <tbody>
         
            <tr v-for="item in pageOfItems" :key="item.id">
              <td>{{item.url}}</td>
            </tr>
     
            <div>
              <jw-pagination :items="repositorios" @changePage="onChangePage"></jw-pagination>
            </div>

          </tbody>
        </table>
      </div>
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
          email: ''         
        },
        repositorios: [],       
        pageOfItems: []       
      }
    },

    mounted(){          
      this.usuario = location.pathname.replace('/','');
      if (this.usuario){          
        this.consultarUsuario()

      }else{
        this.limparTela();  
      }      
    },

    methods:{

      onChangePage(pageOfItems) {
        // Atualiza p�gina de itens.
        this.pageOfItems = pageOfItems;
      },
           
      limparTela(){
        this.usuario = '';
        this.informacao = '';
        this.mensagem = '';       
        this.repositorios = [];
      },

      consultarUsuario(){
        if (!this.usuario || !this.usuario.trim()) {       
          this.mensagem = '* Informar dado da pesquisa'; 
          return;         
        }            
        
        Repositorio.consultarUsuario(this.usuario).then(resposta => {
          this.informacao = resposta.data
            
        }).catch(e => {
          this.informacao = '';                
          if(e.response != null && e.response.status == '404'){
            this.mensagem = "* Usu&#225;rio n&#227;o encontrado.";
          }else{
            this.mensagem = '# Sistema com falha. Entre em contato com o suporte e informe: ' + e.message;
          }

        })        
      },
      
      listarRepositorios(){  
        if (!this.usuario || !this.usuario.trim()) {
          this.mensagem = '* Informar dado da pesquisa';  
          return;         
        }
      
        this.mensagem = '';        
        this.consultarUsuario();
               
        Repositorio.listarRepositorios(this.usuario).then(resposta => {
          this.repositorios = resposta.data
          
        }).catch(e => { 

          this.informacao = '';                
          if(e.response != null && e.response.status == '404'){
            this.mensagem = "* Usu&#225;rio n&#227;o encontrado.";
          }else{
            this.mensagem = '# Sistema com falha. Entre em contato com o suporte e informe: ' + e.message;
          }
        })
      },

      listarFavoritos(){
        if (!this.usuario || !this.usuario.trim()) {
          this.mensagem = '* Informar dado da pesquisa';
          return; 
        }
        
        this.mensagem = '';       
        this.consultarUsuario();

        Repositorio.listarFavoritos(this.usuario).then(resposta => {
          this.repositorios = resposta.data
        }).catch(e => {

          this.informacao = '';                
          if(e.response != null && e.response.status == '404'){
            this.mensagem = "* Usu&#225;rio n&#227;o encontrado.";
          }else{
            this.mensagem = '# Sistema com falha. Entre em contato com o suporte e informe: ' + e.message;
          }
        })
      }
    }
  }

</script>
