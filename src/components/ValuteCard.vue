<template>
  <article class="valute-card">
    <template v-if="!valute.reverse">
      <header>
        <abbr :title="getValuteTitle(valute.Nominal, valute.Name)">
          {{ valute.CharCode }}
        </abbr>
        - {{ base }}
      </header>
      <div>
        {{ valute.Value }}
        <inline-svg
          :class="getDiffValute(valute) > 0 ? 'up' : 'down'"
          src="/arrow.svg"
        />
        <span class="diff"> {{ getDiffValute(valute) }}</span>
      </div>
    </template>
    <template v-else>
      <header>
        {{ base }} -
        <abbr :title="getValuteTitle(valute.Nominal, valute.Name)">
          {{ valute.CharCode }}
        </abbr>
      </header>
      <div>
        {{ getValuteCourse(1, valute.CharCode, base) }}
        <inline-svg
          :class="getDiffValute(valute) > 0 ? 'up' : 'down'"
          src="/arrow.svg"
        />
        <span class="diff">
          {{
            getValuteCourse(getDiffValute(valute), valute.CharCode, base)
          }}</span
        >
      </div>
    </template>
  </article>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
import {
  getValuteCourse,
  getValuteTitle,
  getDiffValute,
} from "@/functions/valutes";

const props = defineProps({
  valute: {
    type: Object,
    required: true,
  },
});
const base = ref("RUB");
</script>

<style lang="scss" scoped>
.valute-card {
  height: 3.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 0.1rem solid grey;
  padding: 0.4rem;
  margin-bottom: 0.8rem;
  border-radius: 0.6rem;
  abbr {
    display: inline-block;
    width: max-content;
    cursor: pointer;
    text-decoration: none;
    margin-bottom: 0.4rem;
  }

  svg {
    width: 1.2rem;
  }
  .up {
    color: green;
    transform: translateY(0.2rem);
  }
  .down {
    display: inline-block;
    color: red;
    transform: rotate(180deg) translateY(-0.2rem);
  }
  .diff {
    font-size: 0.8rem;
    margin-left: 0.2rem;
  }
}
</style>
