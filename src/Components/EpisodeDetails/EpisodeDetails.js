import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const EpisodeInfo = styled.div`
	h2 {
		color: #bc0927;
		margin: 20px 0px 10px 0px;
	}

	h3 {
		margin: 0 auto 40px auto;
		color: gray;
		font-size: 14px;
	}

	p.notes {
		font-size: 12px;
	}
`;

class EpisodeChange extends React.Component {
	render() {
		const { episode } = this.props;

		return (
			<EpisodeInfo>
				<h2>Easy Allies Podcast Episode {episode.episodeNumber}</h2>
				<h3>{episode.episodeDate}</h3>
				<p>Allies:</p>
				<ul>
					{episode.allies.map(ally => {
						return <li>{ally}</li>;
					})}
				</ul>
				<p className="notes">Episode Notes: {episode.notes}</p>
			</EpisodeInfo>
		);
	}
}

EpisodeChange.propTypes = {
	episode: Object
};

export default EpisodeChange;
