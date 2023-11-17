<script setup lang="ts">
import { ref, defineProps } from 'vue';

defineProps({
  msg: {
    type: String,
    required: true,
  },
});

const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
</template>

<style scoped lang="scss"></style>
