import { useState, useEffect } from "react";

const Clouds = () => {
  const [clouds, setClouds] = useState("");

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Leszno&units=metric&appid=422f74575e76d57bf227a5022831e583"
    )
      .then(response => response.json())
      .then(data => {
        const value = data.clouds.all + '%';
        setClouds(value);
      });
  });
  return clouds;
};

export default Clouds;
