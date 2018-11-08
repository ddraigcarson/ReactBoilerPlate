import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";

import Day from "./Day";

const StyledWeek = styled.div`
  position: relative;
  display: inline-block;
  width: ${(props) => props.radius*2}px;
  height: ${(props) => props.radius*2}px;
`;


class Week extends Component {
  static propTypes = {
    testProp: PropTypes.number,
  };


  render() {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const radius = 250;
    return (
      <StyledWeek radius={this.props.testProp%2 == 0 ? radius+70 : 70}>
      {
        days.map((o, i) => {
          return (
            <Day
              radius={radius}
              noOfItems={days.length}
              index={i}
              day={o}
              counter={this.props.testProp}
              />
          )
        })
      }
      </StyledWeek>
    );
  }
}

export default Week;
