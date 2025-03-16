# Vue 3 + TypeScript + Vite

# Weather App

## Overview

A responsive weather application built with **Vue.js** and **TypeScript**, following the **Atomic Design** methodology. This project fetches weather data from the **OpenWeatherMap API** and displays it in an intuitive UI.

---

## Features

- Fetches weather data from OpenWeatherMap API.
- Form validation with **Vuelidate**.
- Displays current, hourly, and weekly forecasts.
- Responsive design with optimized performance.
- Uses **Vue Router** for navigation.
- Implements global state management with **Pinia**.
- **TypeScript** for better type safety.


---

## Project Structure

```plaintext
src/
│── components/
│   ├── Atoms/        # Basic building blocks (e.g., buttons, inputs)
│   ├── Molecules/    # Combinations of atoms (e.g., search bar)
│   ├── Organisms/    # Complex UI sections (e.g., weather cards)
│   ├── Templates/    # Layout-level structures
│── composbales/      # Reusable logic
│── pages/            # Main views (e.g., Home, Profile, Weather)
│── services/         # API integrations
│── stores/           # Global state management
│── constants/        # Reusable functions and environment settings
│── @types/           # TypeScript definitions
│── App.vue           # Main application entry
│── style.css         # Main style
│── main.ts           # Initializes Vue instance
│── router.ts         # Vue Router configuration
│── README.md         # Project documentation
```

---

## Installation

## 1.Install dependencies:

 ```plaintext
 npm install
```

## 2.Create a .env file in the root and add your OpenWeatherMap API key:

```plaintext
VITE_WEATHER_API_KEY=d9e01151ba316205c1bee92a26db8f32
VITE_BASE_URL=https://api.openweathermap.org
```

## 3.Start the development server:

```plaintext
 npm run dev
```

## 4.Tech Stack

- Vue 3 (Composition API)

- TypeScript

- Pinia (State Management)

- Vue Router

- Vuelidate (Form Validation) 

- SCSS (Styling)

- API Integration

The application fetches data from the OpenWeatherMap API. Ensure you have a valid API key in your .env file.

## Deployment

To build for production:

```plaintext
npm run build
```

## Author

Soe Htun
