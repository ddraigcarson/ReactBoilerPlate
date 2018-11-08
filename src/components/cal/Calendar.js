import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";

class Calendar extends Component {

  static propTypes = {
    headings: PropTypes.array,
  };

  static defaultProps = {
  }

  constructor(props) {
    super(props);
  }

  toggleMenu = () => {
  }

  render() {
    const { headings } = this.props;
    return (
      <div>
        { headings.map(o => {
          return (
            <span>{o.label}</span>
          )
        }) }
      </div>
    );
  }
}

export default Calendar;
