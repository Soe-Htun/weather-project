<template>
    <div class="container">
      <Topbar />
      <SearchBar />
      <div>
      </div>
      <p v-if="weatherStore.loading">Loading...</p>
      <p v-if="weatherStore.error">{{ weatherStore.error }}</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useWeatherStore } from "../stores/weather";
  import SearchBar from "../components/Molecules/SearchBar.vue";
  import Topbar from "../components/Templates/Topbar.vue";
  const weatherStore = useWeatherStore();
  </script>
  
<style scoped>
.container {
  position: relative;
  width: 100%;
}

</style>