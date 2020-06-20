<template>

  <button class="waves-effect waves-light btn-small" @click="$emit('click')">   
	  <slot></slot>
  </button>

</template>

<script>

  export default {
    props: {
      onClick: {
        type: Function,
        required: false
      }
    }
  }

</script>