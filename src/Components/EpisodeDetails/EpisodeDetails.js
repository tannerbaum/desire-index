import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const EpisodeInfo = styled.div`
	h2 {
		color: #bc0927;
		margin-bottom: 10px;
		margin-top: 0px;
	}

	h3 {
		margin: 0 auto 0 auto;
		color: gray;
		font-size: 14px;
	}

	p.notes {
		font-size: 12px;
	}

	ul {
		margin: 0;
		padding-left: 15px;
	}

	hr {
		margin: 10px 0px 20px 0px;
	}
`;

class EpisodeDetails extends React.Component {
	render() {
		const { episode } = this.props;

		return (
			<EpisodeInfo>
				<h2>Easy Allies Podcast Episode {episode.episodeNumber}</h2>
				<h3>{episode.episodeDate}</h3>
				<hr />
				<ul>
					{episode.allies.map(ally => {
						return <li key={ally}>{ally}</li>;
					})}
				</ul>
				<p className="notes">Episode Notes: {episode.notes}</p>
			</EpisodeInfo>
		);
	}
}

EpisodeDetails.propTypes = {
	episode: PropTypes.object
};

export default EpisodeDetails;
