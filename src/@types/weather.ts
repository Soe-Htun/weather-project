interface Main {
  temp: number;
  humidity?: number;
  temp_max: number;
  temp_min: number;
}
export interface WeatherData {
    sys?: {
      country: string
    };
    name: string;
    country: string;
    timezone: number;
    dt?: number;
    dt_txt?: string;
    hourly?: {
      time: string;
      icon: string;
      temp: string;
    };
    coord: {lat: number; lon: number}
    main: Main
    weather: { description: string; icon: string, main: string }[];
  }
  export type IconList = "cloudy" | "rainy" | "night-storm" | "partly-cloudy"

  export interface HourlyForecast {
    temp: number;
    hour: string | null;
    icon: IconList;
  };
  
  export interface WeeklyForecast {
    temp: number;
    day: string;
    icon: IconList;
    condition: string;
  };