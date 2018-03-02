import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePosition } from '../actions/index';
import { bindActionCreators } from 'redux';
import { NavLink, BrowserRouter, Switch, Route } from "react-router-dom";


export default class Nav extends Component {
  render() {
    return (
    	<div className="nav">
    		<NavLink className="nav-link" to="./new"><i className="icon-plus" aria-hidden="true"></i></NavLink>
    		<NavLink className="nav-link" to="./"><i className="icon-home" aria-hidden="true"></i></NavLink>
    		<NavLink className="nav-link" to="./list"><i className="icon-th-list" aria-hidden="true"></i></NavLink>
    	</div>
    );
  }
}