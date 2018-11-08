import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";

import Item from "./Item";

const StyledItems = styled.div`
  display: inline-block;
  vertical-align: top;
  background-color: lightblue;

  font-family: "Courier New";
  font-size: 24px;
  color: white;

  height: 140px;
  width: 140px;
  border-radius: 15px;
`

class Items extends Component {
  static propTypes = {
    testProp: PropTypes.number,
  };

  render() {
    return (
      <StyledItems>
        testing
      </StyledItems>
    );
  }
}

export default Items;
