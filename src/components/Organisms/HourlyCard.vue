<template>
  <div class="hourly-container">
    <div v-for="hour in hourlyData" :key="hour.hour || ''" class="hourly-card">
      <div class="weather-icon">
        <img
          :src="getWeatherImgPath(hour.icon)"
          :class="[
                hour.icon === 'night-storm' ? 'mt-3 ' : '',
                hour.icon === 'cloudy' ? 'mr-3' : ''
            ]"
          alt="Weather Icon"
        />
      </div>
      <p class="hour-temp">{{ hour.temp }}°</p>
      <p class="hour-time">{{ hour.hour }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { HourlyForecast } from "../../@types/weather";
import { getWeatherImgPath } from "../../constants";

defineProps<{
  hourlyData: HourlyForecast[];
}>();
</script>

<style scoped>
.hourly-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 35px;
  width: 100%;
  max-width: 100vw;
  overflow: hidden;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 20px;
  border-radius: 12px;
}

.hourly-card {
  background: #f5f5f5;
  border-radius: 12px;
  padding: 10px 0px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: 150px;
}
.weather-icon img {
  transform: scale(1.5);
  height: 90px;
  transform-origin: center;
  object-fit: contain;
  /* margin-right: 20px; */
}

/* Mobile Styles */
@media (max-width: 768px) {
  .hourly-container {
    gap: 20px;
  }
}
.hour-temp {
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  color: #201c1c;
}
.hour-time {
  font-size: 14px;
  color: #666;
}
/* .icon {
  width: 40px !important;
  height: 40px !important;
} */
</style>
