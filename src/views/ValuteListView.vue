<template>
  <PageWrapper class="valutes" :title="`Список валют`">
    <input
      class="valutes-search"
      type="text"
      @input="filterValutes"
      placeholder="введите название или код валюты"
    />

    <ul class="valutes-list">
      <li v-for="valute in currentList" :key="valute.ID">
        <ValuteCard
          :valute="valute"
          @click="valute.reverse = !valute.reverse"
        />
      </li>
    </ul>
  </PageWrapper>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useValutesStore } from "@/store/valutes";
import ValuteCard from "@/components/ValuteCard.vue";

const store = useValutesStore();
const currentList = computed(() => store.currentList);
const filterValutes = store.filterValutes;
</script>

<style scoped lang="scss">
.valutes {
  ul {
    list-style-type: none;
  }

  &-search {
    width: 100%;
    margin-bottom: 1.2rem;
    font-size: 0.4rem;
    &::placeholder {
      font-size: 0.4rem;
      line-height: 0.4rem;
    }
  }

  &-list {
    width: 50vw;
  }
}
</style>
