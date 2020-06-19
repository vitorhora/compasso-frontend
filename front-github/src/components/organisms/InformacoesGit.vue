<template>

  <div>

    <div>
      <VHeader />
    </div>

    <div>
      <PesquisaInformacoes />  
    </div>  

  </div>
</template>

<script>

  import PesquisaInformacoes from './../molecules/PesquisaInformacoes'
  import VHeader from './../molecules/VHeader'

  export default { 
  
    components: {    
      PesquisaInformacoes,
      VHeader      
    },
  }

</script>

