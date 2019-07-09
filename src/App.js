import React, { Component } from "react";
// import styled from "styled-components";

import logo from "./logo.png";
import "./App.css";
import Standings from "./Components/Standings/Standings";
import EpisodeDetails from "./Components/EpisodeDetails/EpisodeDetails";
import { index1 } from "./data/indexTimeLine";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thisWeek: 0,
      lastWeek: -1,
      atBeginning: true,
      atEnd: false
    };

    this.goWeekForward = this.goWeekForward.bind(this);
    this.goWeekBackward = this.goWeekBackward.bind(this);
  }

  goWeekBackward() {
    this.setState(prevState => {
      const thisWeek = prevState.thisWeek - 1;
      const lastWeek = prevState.lastWeek - 1;

      return {
        thisWeek,
        lastWeek,
        atBeginning: thisWeek === 0 ? true : false,
        atEnd: thisWeek + 1 === index1.length ? true : false
      };
    });
  }

  goWeekForward() {
    this.setState(prevState => {
      const thisWeek = prevState.thisWeek + 1;
      const lastWeek = prevState.lastWeek + 1;

      return {
        thisWeek,
        lastWeek,
        atBeginning: thisWeek === 0 ? true : false,
        atEnd: thisWeek + 1 === index1.length ? true : false
      };
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Desire Index (RIP)</h1>
          <div className="buttons">
            <button
              onClick={this.goWeekBackward}
              disabled={this.state.atBeginning}
            >
              Prev
            </button>
            <button onClick={this.goWeekForward} disabled={this.state.atEnd}>
              Next
            </button>
          </div>
        </header>
        <section>
          <Standings
            gamesThisWeek={index1[this.state.thisWeek].games}
            gamesLastWeek={
              this.state.lastWeek >= 0
                ? index1[this.state.lastWeek].games
                : null
            }
          />
        </section>
        <div className="episode">
          <EpisodeDetails episode={index1[this.state.thisWeek]} />
          <div className="buttons">
            <button
              onClick={this.goWeekBackward}
              disabled={this.state.atBeginning}
            >
              Prev
            </button>
            <button onClick={this.goWeekForward} disabled={this.state.atEnd}>
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
