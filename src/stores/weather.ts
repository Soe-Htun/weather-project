import { defineStore } from "pinia";
import { fetchWeather, fetchWeatherForecast } from "../services/weatherService";
import {
  type WeatherData,
  type HourlyForecast,
  type WeeklyForecast,
} from "../@types/weather";
import {
  dateFormat,
  dayFormat,
  getWeatherIcon,
  timeFormat,
} from "../constants";

export const useWeatherStore = defineStore("weather", {
  state: () => ({
    weatherData: null as WeatherData | null,
    lastSearchData: [] as WeatherData[],
    HourlyForecast: [] as HourlyForecast[],
    WeeklyForecast: [] as WeeklyForecast[],
    loading: false,
    error: null as string | null,
  }),
  actions: {
    async getWeather(city: string) {
      this.loading = true;
      this.error = null;
      try {
        this.weatherData = await fetchWeather(city);
        const { coord } = this.weatherData;

        if (coord) {
          this.lastSearchData.push(this.weatherData);
          if (this.lastSearchData.length > 3) {
            this.lastSearchData.shift(); // Remove the oldest entry
          }

          const response = await fetchWeatherForecast(coord.lat, coord.lon);
          this.HourlyForecast = response
            .filter((item: WeatherData) => {
              const itemDate = new Date(item.dt_txt ?? "");
              if (!itemDate || itemDate.getTime() <= Date.now()) {
                return false;
              }
              return itemDate.getTime() > Date.now();
            })
            .slice(0, 4)
            .map((item: WeatherData) => ({
              temp: Math.floor(item.main.temp),
              hour: new Date(item.dt_txt + " UTC").toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
                timeZone: "UTC",
              }),
              icon: getWeatherIcon(item.weather[0].main),
            }));

          const today = dateFormat.format(new Date()); // Ensures "YYYY-MM-DD"
          const uniqueDays = new Set<string>();

          this.WeeklyForecast = response
            .filter((item: WeatherData) => {
              const dateStr = dateFormat.format(new Date(item.dt_txt ?? "")); // Convert to "YYYY-MM-DD"

              // Exclude today's date and ensure uniqueness
              if (dateStr !== today && !uniqueDays.has(dateStr)) {
                uniqueDays.add(dateStr);
                return true;
              }
              return false;
            })
            .slice(0, 4)
            .map((item: WeatherData) => ({
              temp: Math.floor(item.main.temp),
              day: new Intl.DateTimeFormat("en-US", {
                weekday: "long",
              }).format(new Date(item.dt_txt ?? "")), // Get "Monday", "Tuesday", etc.
              icon: getWeatherIcon(item.weather[0].main),
              condition: item.weather[0].main,
            }));
        }
      } catch (err) {
        this.error = "Could not fetch data.";
      } finally {
        this.loading = false;
      }
    },
  },
  persist: true, // save state data through refresh
});
