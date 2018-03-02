import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMarkers } from '../actions/index';
import GoogleMap from '../components/map';
import Nav from '../components/nav';
import { bindActionCreators } from 'redux';
import ListItem from '../components/listItem'

class List extends Component {
  	render() {
    	return (
    		<div>
    			<div className="list-container">
          			{this.props.markers.map(marker => <ListItem key={marker._id} {...marker} position={this.props.position}/>)}
          			<Nav />
          		</div>
    		</div>
    	);
  	}
}

function mapStateToProps({ position,markers }) {
	return { position, markers };
}

export default connect(mapStateToProps)(List);