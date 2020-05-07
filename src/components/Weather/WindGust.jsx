import { useState, useEffect } from "react";

const WindGust = () => {
  const [windGust, setWindGust] = useState("");

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Leszno&units=metric&appid=422f74575e76d57bf227a5022831e583"
    )
      .then(response => response.json())
      .then(data => {
        const windGust = Math.round(data.wind.gust * 10) / 10 + " m/s";

        setWindGust(windGust);
      });
  });
  return windGust;
};

export default WindGust;
