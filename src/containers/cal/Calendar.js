import React, { Component } from "react";
import { connect } from "react-redux";

import Calendar from "../../components/cal/Calendar";

import * as actions from "../../actions/radialActions";
import { selectCalendar } from "../../selectors/cal/calendar";


const mapStateToProps = (store, ownProps) => {
  return selectCalendar(store, ownProps);
};

const mapDispatchToProps = dispatch => {
  return {
    openMenu: (payload) => {
      dispatch(actions.openMenu(payload));
    },
  };
};

const CalendarContainer = connect(mapStateToProps, mapDispatchToProps)(Calendar);

export default CalendarContainer;
