import { http } from './config'

export default	{

  listarFavoritos:(usuario)=>{
		return http.get(usuario + '/starred')
  },

  listarRepositorios:(usuario)=>{	  	
		return http.get(usuario + '/repos')
  }    

}