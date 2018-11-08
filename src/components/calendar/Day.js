import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";
import posed from 'react-pose';

const StyledDay = styled.div`
  background-color: #ffcc99;
  position: absolute;
  height: 140px;
  width: 140px;
  border-radius: 70px;

  display: flex;
  justify-content: center
  align-items: center;

  font-family: "Courier New";
  font-size: 24px;
  color: white;
`;

const AnimatedDay = posed.div({
  visible: {
    y: (props) => 250 - props.y,
    x: (props) => 250 + props.x,
    transition: (props) => ({ delay: props.index * 50 })
  },
  hidden: {
    y: 0,
    x: 0,
    transition: (props) => ({ delay: props.index * 50 })
  }
});

class Day extends Component {
  static propTypes = {
    counter: PropTypes.number,
    radius: PropTypes.number.isRequired,
    noOfItems: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    day: PropTypes.string.isRequired,
  };

  degreesToRads = (degrees) => {
    return degrees * Math.PI / 180
  }

  render() {
    const { radius, noOfItems, index, day, counter } = this.props;
    const rads = this.degreesToRads(360 / noOfItems * index);
    const x = radius * Math.sin(rads);
    const y = radius * Math.cos(rads);

    return (
      <AnimatedDay
        pose={ counter%2 == 0 ? "visible" : "hidden"}
        x={x} y={y} index={index}
      >
        <StyledDay
          x={x} y={y}
          >
          <strong>{`${day}`}</strong>
        </StyledDay>
      </AnimatedDay>
    );
  }
}

export default Day;
