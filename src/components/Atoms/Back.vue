<template>
  <button type="button" @click="goback" class="icon-button">
    <CIcons :name="isUpdate? 'back-white' : 'back'" />
  </button>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import CIcons from "../Atoms/Icons.vue";
import { useWeatherStore } from "../../stores/weather";

withDefaults(
  defineProps<{
    isUpdate?: boolean;
  }>(), 
  { isUpdate: false }
);

const weatherStore = useWeatherStore();
const router = useRouter();

function goback() {
  weatherStore.weatherData = null; // clear storage after go back
  router.back();
}
</script>