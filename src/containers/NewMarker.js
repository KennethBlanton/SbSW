import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postMarker } from '../actions/index';
import { bindActionCreators } from 'redux';


class NewMarker extends Component {
	constructor(props) {
		super(props)
		this.state = {
			markerIcon:''
		}
		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.onIconClick = this.onIconClick.bind(this);
	}
	onFormSubmit(e) {
		e.preventDefault();
		console.log(this.props.position);
		this.props.postMarker({
			title:e.target.children[0].value,
			body:e.target.children[1].value,
			coords: {
				lat:this.props.position.lat,
				lng:this.props.position.lon
			},
			type:this.state.markerIcon
		})
	}
	onIconClick(e) {
		console.dir(e.target.id);
		console.log(e.target.parentNode)
		for (var i = e.target.parentNode.children.length - 1; i >= 0; i--) {
			e.target.parentNode.children[i].classList.remove('active');
		}
		e.target.classList.add('active');
		this.setState({markerIcon:e.target.id})
	}
  	render() {
  		return(
  			<div className="container">
  				<div className="words">
	  				<h2>Add some new free stuff</h2>
	  				<p>This will add a marker for others to see to some new stuff</p>
  				</div>
  				<form onSubmit={this.onFormSubmit}>
  					<input className="form-control form-control-lg" type="text" placeholder="What's the title" />
  					<input className="form-control form-control-lg" type="text" placeholder="Give a brief summary" />
  					<div className="marker-wrapper">
  						<div onClick={this.onIconClick} id="food" className="marker-type"><img src="../assets/img/foodL.png" /></div>
  						<div onClick={this.onIconClick} id="clothes" className="marker-type"><img src="../assets/img/clothesL.png" /></div>
  						<div onClick={this.onIconClick} id="drink" className="marker-type"><img src="../assets/img/drinkL.png" /></div>
  						<div onClick={this.onIconClick} id="gear" className="marker-type"><img src="../assets/img/gearL.png" /></div>
  						<div onClick={this.onIconClick} id="other" className="marker-type"><img src="../assets/img/otherL.png" /></div>
  					</div>
  					<button type="submit" className="btn btn-primary btn-lg btn-block">Submit</button>
  				</form>
  			</div>
  		)
  	}

}




function mapStateToProps({ position,markers }) {
	return { position, markers };
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ postMarker }, dispatch);
}


export default connect(mapStateToProps,mapDispatchToProps)(NewMarker);