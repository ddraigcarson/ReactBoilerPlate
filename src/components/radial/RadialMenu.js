import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";

import RadialItem from "./RadialItem";

const StyledMenu = styled.div`
  position: relative;
`;

const StyledButton = styled.div`
  display: flex;
  justify-content: center
  align-items: center;
  position: absolute;
  top: 284px;
  left: 239px;

  background-color: skyblue;
  height: 180px;
  width: 180px;
  border-radius: 90px;

  font-family: "Courier New";
  font-size: 24px;
  color: white;

  cursor: pointer;
`;

class RadialMenu extends Component {
  static propTypes = {
    items: PropTypes.array,
    open: PropTypes.bool,
    openMenu: PropTypes.func,
  };

  static defaultProps = {
    open: false,
  }

  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu = () => {
    const { open, openMenu } = this.props;
    openMenu(!open);
  }

  renderItem = (item, index) => {
    const { open } = this.props;
    return (
      <RadialItem
        menuOpen={open}
        item={item}
      />
    )
  };

  render() {
    const { items, open } = this.props;
    return (
      <div>
        {
          items.map(this.renderItem)
        }
        <StyledButton onClick={this.toggleMenu}>
          <strong>
          {open? "Close" : "Open"}
          </strong>
        </StyledButton>
      </div>
    );
  }
}

export default RadialMenu;
