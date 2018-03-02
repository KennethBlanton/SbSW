import React, { Component } from 'react';

function distance(lat1, lon1, lat2, lon2, unit) {
	var radlat1 = Math.PI * lat1/180
	var radlat2 = Math.PI * lat2/180
	var theta = lon1-lon2
	var radtheta = Math.PI * theta/180
	var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
	dist = Math.acos(dist)
	dist = dist * 180/Math.PI
	dist = dist * 60 * 1.1515
	if (unit=="K") { dist = dist * 1.609344 }
	if (unit=="N") { dist = dist * 0.8684 }
	return dist
}
export default class ListItem extends Component {
	constructor(props) {
		super(props)

		this.onHeadClick = this.onHeadClick.bind(this);
	}
	onHeadClick(e) {
		console.log(e.target);
		e.target.classList.toggle('active');
	}
  	render() {
    	return (
    		<div className="list-item" style={this.props.id%2 ? {background:'white'} : null } onClick={this.onHeadClick}>
    			<div className="container">
	    			<div className="head">
	    				<h6>{this.props.title}</h6>
	    			</div>
	    			<div className="text">
	    				<p>{this.props.body}</p>
	    				<br/>
	    				<p>Free stuff is only {Math.round(distance(this.props.coords.lat,this.props.coords.lng,this.props.position.lat,this.props.position.lon)* 100 ) / 100} km</p>
	    			</div>
	    		</div>
    		</div>
    	);
  	}
}
