import React from "react";
import styled from "styled-components";

const PositionCell = styled.div`
    border-left: 1px dotted #d3d3d3;
    width: 40px;

    > div {
        width: 95%;
        /* padding: 10px 5px; */
        text-align: center;
        padding: 10px 0px;
        margin: 0 auto;

        &.rose-number {
            div:first-child {
                border-left: 5px solid transparent;
                border-right: 5px solid transparent;
                border-bottom: 5px solid black;
            }
            div:last-child {
                color: black;
            }
        }

        &.fell-number {
            div:first-child {
                border-left: 5px solid transparent;
                border-right: 5px solid transparent;
                border-top: 5px solid black;
            }
            div:last-child {
                color: black;
            }
        }

        div.arrow {
            width: 0;
            height: 0;
            vertical-align: middle;
            margin-right: 5px;
        }
    }
`;

class PositionChange extends React.Component {
    render() {
        let positionMarkup;

        if (this.props.value === null) {
            positionMarkup = <div className="new">New</div>;
        } else if (this.props.value > 0) {
            positionMarkup = (
                <div className="rose-number">
                    <div className="arrow" />
                    <div>{this.props.value}</div>
                </div>
            );
        } else if (this.props.value < 0) {
            positionMarkup = (
                <div className="fell-number">
                    <div className="arrow" />
                    <div>{Math.abs(this.props.value)}</div>
                </div>
            );
        }

        return <PositionCell>{positionMarkup}</PositionCell>;
    }
}

PositionChange.propTypes = {
    value: Number || null
};

export default PositionChange;
