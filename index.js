import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Weather from "./src/components/Weather/Weather";
import Temp from "./src/components/Weather/Temp";
import Pressure from "./src/components/Weather/Pressure";
import Humidity from './src/components/Weather/Humidity'
import WindSp from './src/components/Weather/WindSp'
import WindDir from './src/components/Weather/WindDir'
import WindGust from './src/components/Weather/WindGust'
import Clouds from './src/components/Weather/Clouds'


class App extends Component {
  render() {
    return (
      <>
        <div className="body">
          <header>
            <div id="logo-abr">WEATHER FOR CYCLING</div>
            <div id="logo-abr2">***** in LESZNO*****</div>
          </header>
          <main className="main-bar">
              <div className='feature'>weather</div>
              <div>
                <div className="channel-property">temperature:</div>
                <div className="result">
                  <Temp />
                </div>
              </div>
              <div>
                <div className="channel-property">weather:</div>
                <div className="result">
                  <Weather />
                </div>
              </div>
              <div>
                <div className="channel-property">pressure:</div>
                <div className="result">
                  <Pressure />
                </div>
              </div>
              <div>
              <div className="channel-property">humidity:</div>
                <div className="result">
                  <Humidity />
                </div>
              </div>
          </main>
          <main className='main-bar'>
          <div className='feature'>wind</div>
              <div>
                <div className="channel-property">speed:</div>
                <div className="result">
                  <WindSp />
                </div>
              </div>
              <div>
                <div className="channel-property">direction:</div>
                <div className="result">
                  <WindDir />
                </div>
              </div>
              <div>
                <div className="channel-property">gust:</div>
                <div className="result">
                  <WindGust />
                </div>
              </div>
              <div>
              <div className="channel-property">clouds:</div>
                <div className="result">
                  <Clouds />
                </div>
              </div>
          </main>
        </div>
      </>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
