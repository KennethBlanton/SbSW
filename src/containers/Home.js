import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMarkers } from '../actions/index';
import GoogleMap from '../components/map';
import Nav from '../components/nav';
import { bindActionCreators } from 'redux';
import Loading from '../components/loading';

class Home extends Component {
	componentDidMount(){
		this.props.fetchMarkers()
	}
  	render() {
      if(!this.props.position) {
        return <Loading />
      }
    	return (
    		<div>
    			<GoogleMap position={this.props.position} markers={this.props.markers} />
    			
    		</div>
    	);
  	}
}

function mapStateToProps({ position,markers }) {
	return { position, markers };
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchMarkers }, dispatch);
}


export default connect(mapStateToProps,mapDispatchToProps)(Home);