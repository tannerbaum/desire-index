import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import PositionChange from "../PositionChange/PositionChange";

const StandingsTable = styled.div`
	margin-top: 20px;
`;

const GameEntry = styled.div`
	width: 80%;
	height: 20px;
	border: 1px solid lightgray;
	padding: 10px 5px;
	margin: 0 auto;
	text-align: left;
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	div {
		display: inline-block;
	}
`;

class Standings extends React.Component {
	render() {
		const findMovement = () => {
			const { gamesThisWeek, gamesLastWeek } = this.props;
			if (gamesLastWeek === null) return "";

			return gamesThisWeek.map((game, currentPosition) => {
				const previousPosition = gamesLastWeek.indexOf(game);

				if (previousPosition === -1) return null;

				return previousPosition - currentPosition;
			});
		};

		const positionchanges = findMovement();

		return (
			<StandingsTable>
				{this.props.gamesThisWeek.map((game, index) => {
					return (
						<GameEntry>
							<div className="gameTitle">{game}</div>
							<PositionChange value={positionchanges[index]} />
						</GameEntry>
					);
				})}
			</StandingsTable>
		);
	}
}

Standings.propTypes = {
	gamesThisWeek: PropTypes.array,
	gamesLastWeek: PropTypes.array || null
};

export default Standings;
