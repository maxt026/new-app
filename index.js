import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import YTCounter from "./src/components/YT/YTCounter";
import YTViews from "./src/components/YT/YTViews";
import Weather from "./src/components/Weather/Weather";
import Temp from "./src/components/Weather/Temp";

class App extends Component {
  render() {
    return (
      <div>
        <div className="body">
          <header id="header">
            <div id="logo-abr">YT</div>
            <div id="logo-abr2">desk</div>
          </header>
          <main>
            <div className="search-bar">
              <div>My YT channel</div>
              <div className="column">
                <div className="channel-property">subscribers:</div>
                <div className="result">
                  <YTCounter />
                </div>
              </div>
              <div className="column">
                <div className="channel-property">views:</div>
                <div className="result">
                  <YTViews />
                </div>
              </div>
            </div>
          </main>
        </div>
        <div />
        <div className="body">
          <header id="header">
            <div id="logo-abr">Weather</div>
            <div id="logo-abr2">app</div>
          </header>
          <main>
            <div className="search-bar">
              <div>Leszno</div>
              <div className="column">
                <div className="channel-property">temperature(°C):</div>
                <div className="result">
                  <Temp />
                </div>
              </div>
              <div className="column">
                <div className="channel-property">weather:</div>
                <div className="result">
                  <Weather />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
