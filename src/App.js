import React, { Component } from "react";
// import styled from "styled-components";

import logo from "./logo.png";
import "./App.css";
import Standings from "./Components/Standings/Standings";
import EpisodeDetails from "./Components/EpisodeDetails/EpisodeDetails";
import { timeLine } from "./data/indexTimeLine";

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
            return {
                thisWeek: prevState.thisWeek - 1,
                lastWeek: prevState.lastWeek - 1,
                atBeginning: prevState.thisWeek - 1 === 0 ? true : false,
                atEnd: prevState.thisWeek + 2 === timeLine.length ? true : false
            };
        });
    }

    goWeekForward() {
        this.setState(prevState => {
            console.log(prevState.thisWeek);
            console.log(timeLine.length);
            return {
                thisWeek: prevState.thisWeek + 1,
                lastWeek: prevState.lastWeek + 1,
                atBeginning: prevState.thisWeek - 1 === 0 ? true : false,
                atEnd: prevState.thisWeek + 2 === timeLine.length ? true : false
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
                            Prior
                        </button>
                        <button
                            onClick={this.goWeekForward}
                            disabled={this.state.atEnd}
                        >
                            Next
                        </button>
                    </div>
                </header>
                <section>
                    <Standings
                        gamesThisWeek={timeLine[this.state.thisWeek].games}
                        gamesLastWeek={
                            this.state.lastWeek >= 0
                                ? timeLine[this.state.lastWeek].games
                                : null
                        }
                    />
                </section>
                <div className="episode">
                    <EpisodeDetails episode={timeLine[this.state.thisWeek]} />
                    <div className="buttons">
                        <button
                            onClick={this.goWeekBackward}
                            disabled={this.state.atBeginning}
                        >
                            Prior
                        </button>
                        <button
                            onClick={this.goWeekForward}
                            disabled={this.state.atEnd}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
