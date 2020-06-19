<template>
  <div id="app">

    <div>
      <VHeader />
    </div>

    <div>
      <PesquisaInformacoes />  
    </div>  

  </div>
</template>

<script>

import PesquisaInformacoes from './components/molecules/PesquisaInformacoes'
import VHeader from './components/molecules/VHeader'

export default {
  name: 'app',
 
  components: {    
    PesquisaInformacoes,
    VHeader
    
  },
}
</script>

