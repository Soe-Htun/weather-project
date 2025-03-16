<template>
  <div class="input-container">
    <input
      :id="id"
      :type="type || 'text'"
      v-model="modelValue"
      :readonly="readonly"
      class="input"
      :class="{ 'input-readonly': readonly, 'has-value': !readonly, 'input-error': error }"
      @focus="focused = true"
      @blur="focused = modelValue ? true : false"
    />
    <label :for="id" class="label" :class="{ 'label-active': focused || modelValue }">
      {{ label }}
    </label>
    <p v-if="error" class="text-error m-0">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from "vue";

defineProps<{
  // modelValue: string;
  label: string;
  type?: string;
  readonly?: boolean;
  id?: string;
  error?: string | Ref<string | undefined>  
}>();

const modelValue = defineModel<string>();

// const emit = defineEmits(["update:modelValue"]);
const focused = ref(false);
</script>

<style scoped>
.input-container {
  position: relative;
  width: 100%;
  margin-top: 15px;
  max-width: 100%;
  overflow: hidden;
}

.input {
  width: 100%;
  height: 35px;
  padding: 25px 20px;
  font-size: 14px;
  border-radius: 10px;
  border: none;
  background-color: #f5f5f5;
  box-sizing: border-box;
}

.input-readonly {
  background-color: #f5f5f5;
  cursor: not-allowed;
}

.label {
  position: absolute;
  left: 18px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 14px;
  color: #777;
  transition: all 0.2s ease-in-out;
  pointer-events: none;
}

.label-active {
  top: 6px;
  font-size: 12px;
  color: #333;
}

.has-value ~ .label {
  top: 6px;
  font-size: 12px;
  border: 1px solid #f5f5f5;
  background: #fff;
}
.has-value {
  border: 2px solid #f5f5f5;
  background: #fff;
}
.input-error {
  border: 1px solid #eb5757 !important;
  background: #fff;
  margin-bottom: 3px;
}
</style>
