import { useState, useEffect } from "react";

const WindDir = () => {
  const [windDir, setWindDir] = useState("");

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Leszno&units=metric&appid=422f74575e76d57bf227a5022831e583"
    )
      .then(response => response.json())
      .then(data => {
        const windDir = data.wind.deg;

        setWindDir(windDir);
      });
  });
  if (windDir > 0 && windDir < 90) {
    return "NE";
  } else if (windDir >= 90 && windDir < 180) {
    return "SE";
  } else if (windDir >= 180 && windDir < 270) {
    return "SW";
  } else {
    return "NW";
  }
};

export default WindDir;
