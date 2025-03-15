<template>
  <div class="weather-container" v-if="weatherStore.weatherData">
    <div class="weather-header">
      <div class="header-content">
        <Back />
        <p class="text-lg">{{ weatherStore.weatherData.name }}, {{ weatherStore.weatherData.sys?.country }}</p>
        <p></p>
      </div>
      <p class="text-md m-0">{{ formattedDate }}</p>
      <div class="weather-icon">
        <div class="icon-wrapper">
          <img :src="getWeatherImgPath(weatherIcon)" alt="Weather Icon"
          :class="[
                weatherIcon === 'night-storm' ? 'mt-3' : 'mt-5',
                weatherIcon === 'cloudy' ? 'mr-3' : 'mt-5',
            ]"
          />
        </div>
      </div>
      <p class="temp">{{ Math.floor(weatherStore.weatherData.main?.temp) }}°C</p>
      <p class="condition">{{ weatherStore.weatherData.weather?.[0]?.main }}</p>
      <p class="last-update">
        Last Update: {{ formattedTime }}
        <button class="refresh-button" @click="refresh">
          <Icons name="refresh" />
        </button>
      </p>
    </div>

    <div class="hourly-forecast" v-if="weatherStore.HourlyForecast.length">
      <h3>Hourly Forecast</h3>
      <div class="hourly-list">
        <HourlyCard :hourly-data="weatherStore.HourlyForecast" />
      </div>
    </div>

    <div class="hourly-forecast" v-if="weatherStore.HourlyForecast.length">
      <h3>Weekly Forecast</h3>
      <div class="weekly-list">
        <WeeklyCard :weekly-data="weatherStore.WeeklyForecast" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useWeatherStore } from "../stores/weather";
import Back from "../components/Atoms/Back.vue";
import Icons from "../components/Atoms/Icons.vue";
import HourlyCard from "../components/Organisms/HourlyCard.vue";
import { getWeatherIcon, getWeatherImgPath } from "../constants";
import WeeklyCard from "../components/Organisms/WeeklyCard.vue";

const weatherStore = useWeatherStore();

const formattedDate = computed(() => {
  return new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
});

const formattedTime = computed(() => {
  const dt = weatherStore.weatherData?.dt;
  return dt ? new Date(dt * 1000).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }) : "N/A";
});
const weatherIcon = computed(() => getWeatherIcon(weatherStore.weatherData?.weather?.[0]?.main));

const refresh = () => {
  weatherStore.getWeather(weatherStore.weatherData?.name || "");
};
</script>

<style scoped>
.weather-container {
  background: #fff;
  text-align: center;
  color: white;
}
.weather-header {
  background: var(--primary-color);
  padding: 8px 14px;
}
.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.temp {
  font-size: 24px;
  font-weight: bold;
  margin-top: 15px;
}
.condition {
  font-size: 18px;
  margin-bottom: 10px;
}
.last-update {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}
.refresh-button {
  background: none;
  border: none;
  cursor: pointer;
}
.hourly-forecast {
  color: #000;
}
.hourly-forecast h3 {
  text-align: left;
  margin: 20px;
  font-size: 20px;
  font-weight: 600;
}

.weather-icon {
  position: relative;
  width: 100%;
  height: 120px;
}

.weather-icon img {
  transform: scale(3.7);
  height: 70px;
  transform-origin: center;
  object-fit: contain;
}

</style>
