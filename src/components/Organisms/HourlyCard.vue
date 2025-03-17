<template>
  <div class="hourly-container">
    <div v-for="hour in hourlyData" :key="hour.hour || ''" class="hourly-card">
      <div class="weather-icon">
        <img
          :src="getWeatherImgPath(hour.icon)"
          :class="[
                hour.icon === 'night-storm' ? 'night-storm mt-3 ' : '',
                hour.icon === 'cloudy' ? 'mr-3' : '',
                hour.icon === 'partly-cloudy' ? 'partly-cloud' : ''

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
  grid-template-columns: repeat(4, minmax(0, 1fr)); /* Ensures 4 equal columns */
  gap: 15px;
  width: 100%;
  max-width: 100vw;
  padding: 0 15px;
  box-sizing: border-box;
  border-radius: 12px;
}

.hourly-card {
  background: #f5f5f5;
  border-radius: 12px;
  padding: 10px 0px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.weather-icon img {
  height: 60px; /* Reduce size for better fit */
  max-width: 80px;
  object-fit: contain;
  transform: scale(2.5);
  margin-bottom: 10px;
}
.partly-cloud {
    height: 80px;
    max-width: 100px;
    object-fit: contain;
    transform: scale(1) !important; 
    margin-right: 8px;
}
.night-storm {
  height: 60px;
  max-width: 80px;
  height: 80px;
  object-fit: contain;
  transform: scale(1.9) !important;
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

/* Mobile Styles */
@media (min-width: 768px) {
  .hourly-container {
    grid-template-columns: repeat(4, 1fr); /* Keep 4 columns */
    gap: 20px;
  }

  .hourly-card {
    height: 180px;
    padding: 15px 0;
  }
  .weather-icon img {
    height: 80px;
    max-width: 100px;
    object-fit: contain;
    transform: scale(2.1); 
  }
  .hour-temp {
    margin-top: 15px;
  }
}
</style>
