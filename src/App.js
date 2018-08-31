import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Standings from "./Components/Standings/Standings";
import { timeLine } from "./data/indexTimeLine";
class App extends Component {
	constructor(props) {
		super(props);
		this.state = { thisWeek: 0, lastWeek: -1 };

		this.goWeekForward = this.goWeekForward.bind(this);
		this.goWeekBackward = this.goWeekBackward.bind(this);
	}

	// componentDidMount() {
	// }

	goWeekForward() {
		this.setState(prevState => {
			return {
				thisWeek: prevState.thisWeek - 1,
				lastWeek: prevState.lastWeek - 1
			};
		});
	}

	goWeekBackward() {
		this.setState(prevState => {
			return {
				thisWeek: prevState.thisWeek + 1,
				lastWeek: prevState.lastWeek + 1
			};
		});
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<Standings
					gamesThisWeek={timeLine[this.state.thisWeek].games}
					gamesLastWeek={
						this.state.lastWeek >= 0
							? timeLine[this.state.lastWeek].games
							: null
					}
				/>
				<button onClick={this.goWeekForward}>Week Before</button>
				<button onClick={this.goWeekBackward}>Week After</button>
				<p>{this.state.week}</p>
			</div>
		);
	}
}

export default App;
