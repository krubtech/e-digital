<template>
  <div class="valute-input">
    <select
      ref="select"
      name="leftBlock"
      @change="$emit('update:code', $event.target.value)"
      :value="code"
    >
      <option
        :value="valuteCode"
        v-for="(valuteCode, idx) in codesList"
        :key="`${valuteCode}-${idx}`"
      >
        {{ valuteCode }}
      </option>
    </select>
    <input
      type="number"
      :value="sum"
      :disabled="disabled"
      @change.prevent="changeSum"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, onMounted, ref } from "vue";

const select = ref(null);

const props = defineProps({
  codesList: {
    type: Array,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  sum: {
    type: Number,
    default: 0,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
const emits = defineEmits(["update:code", "update:sum"]);

const changeSum = (e: Event) => {
  if (e.target?.value < 0) e.target.value = 0;
  emits("update:sum", +e.target?.value);
};
</script>

<style lang="scss" scoped>
.valute-input {
  display: flex;
  flex-direction: column;
  width: max-content;
  select {
    margin-bottom: 1rem;
  }
  input {
    border-width: 1px;
  }
}
</style>
