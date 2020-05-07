import { useState, useEffect } from "react";

const Wind = () => {
  const [windSpeed, setWindSpeed] = useState('');
  const [windDeg, setWindDeg] = useState('');
  const [windGust, setWindGust] = useState('');

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Leszno&units=metric&appid=422f74575e76d57bf227a5022831e583"
    )
      .then(response => response.json())
      .then(data => {
        const windSpeed = Math.round(data.wind.speed);
        const windDeg = data.wind.deg;
        const windGust = data.wind.gust;

        setWindSpeed(windSpeed);
        setWindDeg(windDeg);
        setWindGust(windGust);
      });
  });
  return arr[0]
};

export default Wind;