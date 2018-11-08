import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";
import posed from 'react-pose';

const StyledItem = styled.div`
  display: flex;
  justify-content: center
  align-items: center;
  position: absolute;
  z-index: -1;

  background-color: #ffcc99;
  height: 140px;
  width: 140px;
  border-radius: 70px;

  font-family: "Courier New";
  font-size: 24px;
  color: white;

  &:hover {
    background-color: skyblue;
    z-index: 99;
  }
`;

const AnimatedItem = posed.div({
  visible: {
    y: (props) => 250 - props.y,
    x: (props) => 250 + props.x,
    transition: (props) => ({ delay: props.index * 50 })
  },
  hidden: {
    y: 250,
    x: 250,
    transition: (props) => ({ delay: props.index * 50 })
  }
});

class RadialItem extends Component {
  static propTypes = {
    menuOpen: PropTypes.bool.isRequired,
    item: PropTypes.object.isRequired,
  };

  render() {
    const { menuOpen, item } = this.props;
    return (
      <AnimatedItem
        pose={ menuOpen ? "visible" : "hidden"}
        x={item.xPosition}
        y={item.yPosition}
        index={item.index}
      >
        <StyledItem
          x={item.xPosition}
          y={item.yPosition}
          >
          <strong>{item.label}</strong>
        </StyledItem>
      </AnimatedItem>
    );
  }
}

export default RadialItem;
