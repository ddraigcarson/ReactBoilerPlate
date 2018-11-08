import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";

import { WEEK } from "../constants/calendar";

import RadialMenu from "../containers/radial/RadialMenu";
import Calendar from "../containers/cal/Calendar";
import Week from "./calendar/Week";
import Items from "./check/Items";


const StyledRoot = styled.div`
  vertical-align: top;
`

class Root extends Component {

  render() {
    return (
      <div>
        <div>
          <div>{`test component ${this.props.testProp}`}</div>
          <a onClick={this.props.increment}>Up</a>
          <a onClick={this.props.decrement}>Down</a>
        </div>
        <StyledRoot>
        {/*<Calendar />*/}
          <RadialMenu
            items={WEEK}
            labelField="label"
            open={this.props.testProp%2 == 1}
            />
        </StyledRoot>
      </div>
    );
  }
}

Root.propTypes = {
  increment: PropTypes.func,
  decrement: PropTypes.func,
  resetCount: PropTypes.func,
  testProp: PropTypes.number,
};

export default Root;
