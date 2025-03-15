import rainy from "./assets/img/rainy.svg"
import cloudy from "./assets/img/cloudy.svg"
import partlyCloudy from "./assets/img/partly_cloudy.svg"
import nightStorm from './assets/img/night_storm.svg'
import type { IconList } from "./@types/weather";

export const BASE_URL = import.meta.env.VITE_BASE_URL;
export const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const timeFormat = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "UTC",
})
export const dayFormat = new Intl.DateTimeFormat("en-US", {
  weekday: 'long',
  timeZone: "UTC",
})
export const dateFormat = new Intl.DateTimeFormat('en-US', {
	year: 'numeric',
	month: 'short',
	day: '2-digit',
  timeZone: "UTC",
});

export const getWeatherIcon = (weatherMain?: string): IconList => {
    if (!weatherMain) return "cloudy"; // Default to "cloudy"
  
    const iconMap = {
      rain: "rainy",
      thunderstorm: "night-storm",
      clouds: "cloudy",
      clear: "partly-cloudy"
    } as const;
  
    return iconMap[weatherMain.toLowerCase() as keyof typeof iconMap] || "cloudy";
  };

export const getWeatherImgPath = (img: string) => {
  const imgMap: Record<string, string> = {
    "rainy": rainy,
    "cloudy": cloudy,
    "partly-cloudy": partlyCloudy,
    "night-storm": nightStorm,
  };

  return imgMap[img] || "../../assets/img/cloudy.svg"; // Fallback if the icon isn't found
};
