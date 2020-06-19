<template>
  <SButton @click="$emit('click')">Limpar</SButton>
</template>


<script>

import SButton from '../styled/SButton'

export default {
  name: 'app',
 
  components: {   
    SButton   
  },

  props: {
    onClick: {
      type: Function,
      required: true
    }
  }
}
</script>
