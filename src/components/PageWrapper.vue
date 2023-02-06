<template>
  <section>
    <h1>{{ title }}</h1>
    <slot />
  </section>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps({
  title: {
    type: String,
    default: "Заголовок страницы",
  },
});
</script>

<style lang="scss" scoped>
section {
  margin: 0.5rem 2rem 2rem;
  h1 {
    margin-bottom: 1.2rem;
  }
}
</style>
