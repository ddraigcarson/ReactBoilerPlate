import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledItems = styled.div`
  display: inline-block;
`

class Item extends Component {
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

export default Item;
