import React, { Component } from "react";
import styled from "styled-components";

import logo from "./logo.svg";
import "./App.css";
import Standings from "./Components/Standings/Standings";
import EpisodeDetails from "./Components/EpisodeDetails/EpisodeDetails";
import { timeLine } from "./data/indexTimeLine";

const LeftColumn = styled.div`
	/* width: 15%;
	display: inline-block; */
	display: none;
`;

const MainColumn = styled.div`
	/* width: 65%; */
	width: 75%;
	display: inline-block;
`;

const RightColumn = styled.div`
	/* width: 20%; */
	width: 25%;
	display: inline-block;
	vertical-align: top;
	text-align: left;

	> div {
		width: 80%;
		margin: 0 auto;
	}
`;

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
				<LeftColumn>{/* App info */}</LeftColumn>
				<MainColumn>
					<Standings
						gamesThisWeek={timeLine[this.state.thisWeek].games}
						gamesLastWeek={
							this.state.lastWeek >= 0
								? timeLine[this.state.lastWeek].games
								: null
						}
					/>
				</MainColumn>
				<RightColumn>
					{/* episode info */}
					<div>
						<EpisodeDetails
							episode={timeLine[this.state.thisWeek]}
						/>
						<div className="buttons">
							<button onClick={this.goWeekForward}>Prior</button>
							<button onClick={this.goWeekBackward}>Next</button>
						</div>
					</div>
				</RightColumn>
			</div>
		);
	}
}

export default App;
