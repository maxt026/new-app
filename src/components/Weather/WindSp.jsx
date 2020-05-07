import { useState, useEffect } from "react";

const WindSp = () => {
  const [windSpeed, setWindSpeed] = useState('');


  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Leszno&units=metric&appid=422f74575e76d57bf227a5022831e583"
    )
      .then(response => response.json())
      .then(data => {
        const windSpeed = Math.round(data.wind.speed*10)/10 + ' m/s';
       
        setWindSpeed(windSpeed);
      });
  });
  return windSpeed;
};

export default WindSp;


