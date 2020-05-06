import { useState, useEffect } from "react";

const Weather = () => {
  const [weather, setWeather] = useState("");

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Leszno&units=metric&appid=422f74575e76d57bf227a5022831e583"
    )
      .then(response => response.json())
      .then(data => {
        const value = data.weather[0].main;
        setWeather(value);
      });
  });
  return weather;
};

export default Weather;
