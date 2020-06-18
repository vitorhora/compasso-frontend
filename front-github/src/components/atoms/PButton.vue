// atoms/PButton.vue

<template>
  <button class="waves-effect waves-light btn-small" @click="$emit('click')">
    <i class="material-icons left">send</i>
	<slot>repos</slot>
  </button>
</template>

