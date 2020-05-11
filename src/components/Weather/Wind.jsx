import { Component } from "react";
import React from 'react'


class Wind extends Component {
  state = {
    WindSp: [],
  }

  componentDidMount() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Leszno&units=metric&appid=422f74575e76d57bf227a5022831e583")
      .then(response => response.json())
      .then(data => {
        this.setState({
          WindSp: Math.round(data.wind.speed) + " m/s",
        })
      })
    }

  render() {
    return <div>{this.state.WindSp}</div>;
  };
}

export default Wind;
