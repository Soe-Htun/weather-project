<template>
  <div class="search-container">
    <div class="input-wrapper">
      <img src="../../assets/img/search.svg" alt="Search Icon" class="search-icon" />
      <input
        v-model="query"
        @input="debouncedFetchLocations"
        placeholder="Search for a city or airport"
        class="search-input"
      />

      <button v-if="query" @click="clearInput" class="clear-button">
        <Icons name="clear" class="clear-icon" />
      </button>
    </div>

    <ul v-if="!suggestions.length">
      <li 
        v-if="currentLocation" 
        @click="selectCity({
          name: currentLocation.name,
          country: currentLocation.country,
          lat: currentLocation.coord.lat,
          lon: currentLocation.coord.lon
        })"
        class="suggestion-item"
      >
        <WeatherCard :weather="currentLocation" />
      </li>
      <li v-if="weatherStore.lastSearchData.length" class="suggestion-item">
        <div v-for="item in weatherStore.lastSearchData" :key="item.name" class="mt-3">
          <div @click="selectCity({
            name: item.name,
            country: item.country,
            lat: item.coord.lat,
            lon: item.coord.lon
          })">
            <WeatherCard :weather="item" :is-current-location="false" />
          </div>
        </div>
      </li>
    </ul>

    <ul v-else class="suggestions-list">
      <li
        v-for="(city, index) in suggestions"
        :key="index"
        @click="selectCity(city)"
        class="suggestion-item"
      >
        {{ city.name }}, {{ city.country }}
      </li>
    </ul>
  </div>
</template>


<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { debounce } from "lodash";
import { useWeatherStore } from "../../stores/weather";
import { fetchCitySuggestions, fetchWeatherByCoords } from "../../services/weatherService";
import WeatherCard from "../Organisms/WeatherCard.vue";
import type { WeatherData } from "../../@types/weather";
import { useRouter } from "vue-router";
import Icons from "../Atoms/Icons.vue";

const query = ref<string | null>(""); // Allow `null` to reset properly
const suggestions = ref<{ name: string; country: string; lat: number; lon: number }[]>([]);
const currentLocation = ref<WeatherData | null>(null);
const weatherStore = useWeatherStore();
const router = useRouter()
// Fetch Locations (Debounced)
const fetchLocations = async () => {
  if (!query.value || query.value.length < 2) {
    suggestions.value = [];
    return;
  }

  try {
    suggestions.value = await fetchCitySuggestions(query.value);
  } catch (error) {
    console.error("Error fetching locations:", error);
  }
};
const debouncedFetchLocations = debounce(fetchLocations, 500);

const fetchCurrentLocation = () => {
  if (!navigator.geolocation) {
    console.warn("Geolocation is not supported by this browser.");
    return;
  }
  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const { latitude, longitude } = position.coords;
      try {
        const weatherData = await fetchWeatherByCoords(latitude, longitude);
        currentLocation.value = {
          name: weatherData.name || "Unknown",
          country: weatherData?.sys?.country || "N/A",
          weather: weatherData.weather || [],
          timezone: weatherData.timezone,
          coord: {
            lat: latitude,
            lon: longitude
          },
          main: {
            temp: weatherData.main?.temp ?? 0,
            temp_max: weatherData.main?.temp_max ?? 0,
            temp_min: weatherData.main?.temp_min ?? 0,
          }
        };
        weatherStore.error= "" //clear api error in home page
      } catch (error) {
        console.error("Error fetching current location weather:", error);
      }
    },
    (error) => console.error("Geolocation error:", error),
    { enableHighAccuracy: true }
  );
};


// Select City
const selectCity = (city: { name: string; country: string; lat: number; lon: number }) => {
  query.value = `${city.name}, ${city.country}`;
  suggestions.value = [];
  weatherStore.getWeather(city.name);
  router.push("/weather")
};

const clearInput = () => {
  query.value = "";
  suggestions.value = []; 
  // weatherStore.weatherData = [];
  fetchCurrentLocation();
};

watch(query, (value) => {
  if (!value) {
    fetchCurrentLocation();
  }
});

onMounted(() => {
  fetchCurrentLocation();
});
</script>

<style scoped>
.search-container {
  position: relative;
  width: 500px;
}

/* Input Field Wrapper */
.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  background-color: var(--secondary-color);
  border: 1px solid var(--secondary-color);
  border-radius: 8px;
  padding: 8px 12px;
  margin: 12px 16px;
}

/* Search Icon */
.search-icon {
  width: 18px;
  height: 18px;
  opacity: 0.6;
  transition: opacity 0.3s ease;
  margin-right: 8px;
}

.search-input {
  flex: 1; 
  border: none;
  outline: none;
  font-size: 16px;
  background: transparent;
}

.clear-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.clear-icon {
  width: 18px;
  height: 18px;
  opacity: 0.6;
  transition: opacity 0.3s ease;
}

.clear-button:hover .clear-icon {
  opacity: 1;
}

.suggestions-list {
  position: absolute;
  width: 100%;
  background: white;
  border-radius: 8px;
  margin-top: 8px;
  z-index: 1000;
}
.suggestions-list li {
  border-bottom: 1px solid #ccc; 
}
.suggestions-list li:last-child {
  border: none;
}

.suggestion-item {
  padding: 12px 16px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

li {
  list-style-type: none;
}

@media (max-width: 768px) {
  .search-container {
    width: 100%; /* Full width on small screens */
    max-width: 100%;
  }
}

</style>