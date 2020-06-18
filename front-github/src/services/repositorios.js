import { http } from './config'

export default	{

  consultarUsuario:(usuario)=>{
		return http.get(usuario)
  },

  listarFavoritos:(usuario)=>{
		return http.get(usuario + '/starred')
  },

  listarRepositorios:(usuario)=>{	  	
		return http.get(usuario + '/repos')
  }    

}