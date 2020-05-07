import { useState, useEffect } from "react";

const Pressure = () => {
  const [pressure, setPressure] = useState("");

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Leszno&units=metric&appid=422f74575e76d57bf227a5022831e583"
    )
      .then(response => response.json())
      .then(data => {
        const value = Math.round(data.main.pressure)+' hPa';
        setPressure(value);
      });
  });
  return pressure;
};

export default Pressure;
