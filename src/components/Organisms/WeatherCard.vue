<template>
  <div v-if="weather" class="weather-card">
    <div class="card-body">
      <img v-if="weather.weather?.[0]?.main === 'Clouds'" src="../../assets/img/bg-cloudy.svg" class="card-img bg-cloudy" />
      <img v-else src="../../assets/img/clear-sky.svg" class="card-img" />

      <div class="weather-content">
        <div class="top-row">
          <div>
            <p class="text-xl font-700" v-if="isCurrentLocation">My Location</p>
            <p :class="isCurrentLocation? 'sub-location' : 'text-xl font-700'">{{ weather.sys?.country ? weather.name + ', ' + weather.sys.country : weather.name }}</p>
            <p  v-if="!isCurrentLocation" class="sub-location">{{ currentTime }}</p>
          </div>
          <p class="text-2xl font-600">{{ Math.round(weather.main?.temp) }}°</p>
        </div>

        <div class="bottom-row">
          <p class="weather-description">{{ weather.weather?.[0]?.description }}</p>
          <p class="text-md">H:{{ Math.round(weather.main?.temp_max) }}° L:{{ Math.round(weather.main?.temp_min) }}°</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { type WeatherData } from "../../@types/weather";
import { timeFormat } from "../../constants";

const props = withDefaults(
  defineProps<{ weather?: WeatherData; isCurrentLocation?: boolean }>(), 
  {
    isCurrentLocation: true,
  }
);
const currentTime = computed(() => {
  if (!props.weather?.timezone) return "";
  const utcOffsetMs = props.weather.timezone * 1000;
  const localTime = new Date(Date.now() + utcOffsetMs);
  return timeFormat.format(localTime)
});

</script>

<style scoped>
.weather-card {
  border-radius: 20px;
  overflow: hidden;
  color: white;
  position: relative;
  display: flex;
  align-items: center;
  background-size: cover;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  width: 100%;
}
.card-body {
  padding: 5px 20px;
  width: 100%;
}

/* Background Image */
.card-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}
.bg-cloudy {
  opacity: 88%;
  background: #000;
}

.weather-content {
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  z-index: 1;
}
.top-row {
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  line-height: 0.3;
}
.bottom-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.sub-location {
  font-size: 16px;
  opacity: 0.8;
}

.weather-description {
  font-size: 16px;
  letter-spacing: 1%;
}
@media (max-width: 768px) {
  .weather-card {
    width: 100%; /* Full width on small screens */
    max-width: 100%;
  }
}

</style>
