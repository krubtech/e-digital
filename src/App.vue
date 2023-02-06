<template>
  <nav>
    <router-link to="/">Список валют</router-link>
    <router-link to="/converter">Конвертер валют</router-link>
  </nav>
  <router-view />
</template>

<script lang="ts">
import { computed } from "vue";
import { useValutesStore } from "@/store/valutes";
import { fxInit } from "@/functions/valutes";
export default {
  async created() {
    const store = useValutesStore();
    await store.getValutesList();

    const valutesList = computed(() => store.list);
    fxInit("RUB", valutesList.value);
  },
};
</script>

<style lang="scss" scoped>
nav {
  padding: 0.8rem;
  a {
    text-decoration: none;
    color: black;
    &:not(:last-of-type) {
      margin-right: 0.6rem;
    }
  }
}
</style>
