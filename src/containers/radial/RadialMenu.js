import React, { Component } from "react";
import { connect } from "react-redux";

import RadialMenu from "../../components/radial/RadialMenu";

import * as actions from "../../actions/radialActions";
import { selectRadialMenu } from "../../selectors/radial/radialMenu";


const mapStateToProps = (store, ownProps) => {
  return selectRadialMenu(store, ownProps);
};

const mapDispatchToProps = dispatch => {
  return {
    openMenu: (payload) => {
      dispatch(actions.openMenu(payload));
    },
  };
};

const RadialMenuContainer = connect(mapStateToProps, mapDispatchToProps)(RadialMenu);

export default RadialMenuContainer;
