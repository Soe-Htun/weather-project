<template>
  <div>
    <div v-for="(day, index) in weeklyData" :key="index" class="weekly-card">
      <div class="weekly-card-left">

        <div class="weather-icon-container">
            <!-- I used dynamic class cause your icons are not same size and position, So I need to add margin base on icon name -->
          <img
            :src="getWeatherImgPath(day.icon)"
            alt="Weather Icon"
            :class="[
                day.icon === 'night-storm' ? 'mt-3 weather-icon' : 'weather-icon ',
                day.icon === 'cloudy' ? 'mr-3 weather-icon' : 'weather-icon'
            ]"
          />

        </div>
        <div class="weekly-info">
          <p class="day-name">{{ day.day }}</p>
          <p class="weather-desc">{{ day.condition }}</p>
        </div>
      </div>
      <div class="weekly-card-right">
        <p class="temp">{{ day.temp }}°C</p>
        <span class="arrow">▶</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { WeeklyForecast } from "../../@types/weather";
import { getWeatherImgPath } from "../../constants";

defineProps<{ weeklyData: WeeklyForecast[] }>();
</script>

<style scoped>
h3 {
  text-align: left;
  margin: 20px;
  font-size: 24px;
  color: #000;
}

.weekly-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #d6e4ff;
  border-radius: 12px;
  padding: 15px;
  margin: 15px 20px;
}

.weekly-card-left {
  display: flex;
  align-items: center;
  gap: 12px;
  text-align: left;
}

.weather-icon-container {
  width: 60px; /* Fixed container width */
  height: 60px; /* Fixed container height */
  display: flex;
  justify-content: center;
  align-items: center;
  background: #9ab6ff; /* Background color for the icon */
  border-radius: 50%; /* Border radius for the icon container */
  overflow: hidden; /* Prevent overflow */
}

.weather-icon {
  transform: scale(1.2);
  object-fit: contain; /* Maintain aspect ratio */
}
.mt-3 {
    margin-top: 20px
}

.weekly-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  gap:10px;
}

.day-name {
  font-size: 18px;
  margin: 0;
  font-weight: 600;
  color: #000;
}

.weather-desc {
  font-size: 14px;
  color: #555;
  margin: 0
}

.weekly-card-right {
  display: flex;
  align-items: center;
  gap: 10px;
}

.temp {
  font-size: 18px;
  font-weight: bold;
  color: #000;
}

.arrow {
  font-size: 18px;
  color: #555;
  margin-left: 15px
}
</style>
