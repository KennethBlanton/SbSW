import React, { Component } from 'react';

function CreateMap(mapDiv, position, markers) {
	 const map = new google.maps.Map(mapDiv, {
    	zoom: 16,
      	center: new google.maps.LatLng(position.lat, position.lon),
      	mapTypeId: 'roadmap'
    });

    let iconBase = '../../assets/img/';
    let icons = {
      	clothes: {
        	icon: `${iconBase} +'clothes.png'`
      	},
      	drink: {
        	icon: `${iconBase}drink.png`
      	},
      	food: {
        	icon: `${iconBase}food.png`
      	},
      	gear: {
        	icon: `${iconBase}gear.png`
      	},
      	other: {
        	icon: `${iconBase}other.png`
      	},
      	you: {
        	icon: `${iconBase}you.png`
      	},
    }
    let features = markers.map(marker => {
      function distanceMeasure(lat1, lon1, lat2, lon2, unit) {
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
      let distance = Math.round(distanceMeasure(marker.coords.lat, marker.coords.lng, position.lat, position.lon)*100)/100;
      console.log(distance);
    	return {
    		position: new google.maps.LatLng(parseFloat(marker.coords.lat), parseFloat(marker.coords.lng)),
    		type: marker.type ? marker.type : 'other',
    		title: marker.title,
    		body:marker.body,
        distance: distance
    	}
    })
    features.push({
    	position: new google.maps.LatLng(position.lat, position.lon),
    	type:'you'
    })

    // Create markers.
    features.forEach(function(feature) {
    	let marker = new google.maps.Marker({
        	position: feature.position,
        	icon: icons[feature.type].icon,
        	map: map
      	});
      	let contentString = `<h4>${feature.title}</h4>
                            <p>${feature.body}</p>
                            <br/>
                            <p> It's only ${feature.distance}km away</p>`;

      	let infowindow = new google.maps.InfoWindow({
        	content: contentString
        });
      	marker.addListener('click', function() {
        	infowindow.open(map, marker);
      	});
    });
}

export default class Map extends Component {
  componentDidMount() {
      CreateMap(this.refs.map,this.props.position,this.props.markers)
  }
	render() {
	    return (
	    	<div className="map" ref="map">
	    	</div>
	    );
	}
}