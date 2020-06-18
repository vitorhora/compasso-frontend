// atoms/VInput.vue

<template>
  <input class="a-v-input" type="text" v-model="value" @input="$emit('input')" />
</template>