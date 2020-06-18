// atoms/PButton.vue

<template>
  <SButton @click="$emit('click')">Limpar</SButton>
</template>


<script>

import SButton from './SButton'

export default {
  name: 'app',
 
  components: {   
    SButton   
  }  
}
</script>
