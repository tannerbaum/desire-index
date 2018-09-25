import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import PositionChange from "../PositionChange/PositionChange";

const StandingsTable = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	height: 100%;
	padding: 0 30px;
`;

const GameEntry = styled.div`
	/* width: 90%; */
	/* height: 20px; */
	border: 1px solid lightgray;
	/* margin: 0 auto; */
	text-align: left;
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	--entry-font-size: 14px;
	font-size: var(--entry-font-size);

	div {
		display: inline-block;
	}

	div.gameTitle {
		padding: 10px 5px;
		> div:first-child {
			font-weight: 700;
			padding-right: 15px;
		}
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
						<GameEntry key={game}>
							<div className="gameTitle">
								<div>{index + 1}</div>
								<div>{game}</div>
							</div>
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
