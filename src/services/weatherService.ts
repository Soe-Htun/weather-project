import axios from "axios";
import { BASE_URL, WEATHER_API_KEY } from "../constants";
import { type WeatherData } from "../@types/weather";
import { useToast } from "../composables/useToast";
import type { AxiosErrorResponse } from "../@types/api";

const { toaster } = useToast();

const handleApiError = (error: unknown, customMessage = "An unexpected error occurred") => {
  const axiosError = error as AxiosErrorResponse;
  const errorMessage = axiosError.response?.data?.message || axiosError.message || customMessage;
  toaster("error", errorMessage);
  
  throw new Error(customMessage);
};

export const fetchWeather = async (city: string): Promise<WeatherData> => {
  try {
    const response = await axios.get(
      `${BASE_URL}/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`
    );
    return response.data;
  } catch (error) {
    handleApiError(error, "Failed to fetch weather data.");
    return Promise.reject(error)
  }
};

export const fetchCitySuggestions = async (query: string) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/geo/1.0/direct?q=${query}&limit=5&appid=${WEATHER_API_KEY}`
    );
    return response.data;
  } catch (error) {
    handleApiError(error, "Failed to fetch weather data.");
    return Promise.reject(error)
  }
};

export const fetchWeatherByCoords = async (lat: number, lon: number): Promise<WeatherData> => {
  try {
    const response = await axios.get(
      `${BASE_URL}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    return response.data;
  } catch (error) {
    handleApiError(error, "Failed to fetch weather data.");
    return Promise.reject(error)
  }
};

export const fetchWeatherForecast = async (lat: number, lon: number) => {
  try {
    const response = await axios.get(`${BASE_URL}/data/2.5/forecast`, {
      params: {
        lat,
        lon,
        units: 'metric',
        appid: WEATHER_API_KEY,
      },
    });
    return response.data.list;
  } catch (error) {
    handleApiError(error, "Failed to fetch weather data.");
    return Promise.reject(error)
  }
};
