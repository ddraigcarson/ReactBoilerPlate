import React, { Component } from "react";
import Controls from "../components/Counter";
import { connect } from "react-redux";

const mapStateToProps = store => {
  return {
    count: store.count
  };
};

export default connect(mapStateToProps, null)(Controls);
