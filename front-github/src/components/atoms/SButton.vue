<template>

  <SButton @click="$emit('click')">
    <slot></slot>
  </SButton>

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
        required: false
      }
    }
  }

</script>
