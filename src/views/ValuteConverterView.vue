<template>
  <PageWrapper class="converter" :title="`Конвертер валют`">
    <div class="converter-calculator">
      <ValuteInput
        :codesList="valutesCharCodes"
        v-model:code="leftBlock.code"
        v-model:sum="leftBlock.sum"
      />
      <button @click="changeConvertDirection">
        <inline-svg src="/arrow.svg" />
      </button>
      <ValuteInput
        :codesList="valutesCharCodes"
        v-model:code="rightBlock.code"
        v-model:sum="rightBlock.sum"
        :disabled="true"
      />
    </div>
  </PageWrapper>
</template>

<script setup lang="ts">
import ValuteInput from "@/components/ValuteInput.vue";
import { computed, reactive } from "vue";
import { useValutesStore } from "@/store/valutes";
import { getValuteCourse } from "@/functions/valutes";

const store = useValutesStore();
const valutesCharCodes = computed(() => store.charCodes);

const getDefaultValute = () => {
  if (valutesCharCodes.value.length > 0) {
    leftBlock.code = valutesCharCodes.value[0];
    rightBlock.code = valutesCharCodes.value[1];
  } else {
    setTimeout(getDefaultValute, 100);
  }
};

let leftBlock = reactive({
  code: "",
  sum: 1,
});

let rightBlock: { code: string; sum: number } = reactive({
  code: "",
  sum: computed(
    () => +getValuteCourse(leftBlock.sum, leftBlock.code, rightBlock.code)
  ),
});

const changeConvertDirection = () => {
  const bufferCode = rightBlock.code;
  rightBlock.code = leftBlock.code;
  leftBlock.code = bufferCode;
};

getDefaultValute();
</script>

<style lang="scss" scoped>
.converter {
  &-calculator {
    display: flex;
    align-items: center;
    column-gap: 1rem;
  }
  button {
    background: none;
    cursor: pointer;
    svg {
      height: 2rem;
      transform: rotate(90deg);
    }
  }
}
</style>
