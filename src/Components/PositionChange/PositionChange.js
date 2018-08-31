import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const PositionCell = styled.div`
	color: palevioletred;
`;

class PositionChange extends React.Component {
	render() {
		let positionMarkup;

		if (this.props.value === null) {
			positionMarkup = <div className="new"> 🆕 </div>;
		} else if (this.props.value > 0) {
			positionMarkup = <div className="rose"> 👍 {this.props.value}</div>;
		} else if (this.props.value < 0) {
			positionMarkup = (
				<div className="fell"> 👎 {Math.abs(this.props.value)}</div>
			);
		}

		return <PositionCell>{positionMarkup}</PositionCell>;
	}
}

PositionChange.propTypes = {
	value: Number || null
};

export default PositionChange;
