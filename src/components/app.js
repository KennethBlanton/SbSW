import React, { Component } from 'react';
import Loading from './loading';
import { connect } from 'react-redux';
import { updatePosition } from '../actions/index';
import { bindActionCreators } from 'redux';
import Home from '../containers/Home';
import NewMarker from '../containers/NewMarker';
import List from '../containers/List';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from '../components/nav'


class App extends Component {
	render() {
  		navigator.geolocation.watchPosition((data) => {
			this.props.updatePosition(data.coords)
		})	
    	return (
      		<BrowserRouter className="App">
      		<div>
				<Nav/>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/new" exact component={NewMarker} />
					<Route path="/list" exact component={List} />
				</Switch>
			</div>
			</BrowserRouter>
    	);
  	}
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ updatePosition: updatePosition }, dispatch)
}
export default connect(null,mapDispatchToProps)(App);
