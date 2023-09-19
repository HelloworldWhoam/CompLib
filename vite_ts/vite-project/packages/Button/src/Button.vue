<template>
  <button v-text="buttonContent"></button>
</template>

<script setup lang="ts">
defineProps<{
  buttonContent:string;
}>()
</script>

<style scoped>

</style>