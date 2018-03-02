


import axios from 'axios';

const ROOT_URL = `http://138.197.2.173:5559/`

export const FETCH_MARKERS = 'FETCH_MARKERS';
export const POSITION = 'POSITION';
export const NEW_MARKER = 'NEW_MARKER';

export function fetchMarkers(markers) {
	const url = `${ROOT_URL}items`;
	const request = axios.get(url);

	console.log(request + ' request')
	return {
		type: FETCH_MARKERS,
		payload:request
	}
}

export function updatePosition(position) {
	const location = {
		lat:position.latitude,
		lon:position.longitude
	}
	return {
		type:POSITION,
		payload:location
	}
}
export function postMarker(marker) {
	const url = `${ROOT_URL}addMarker`;
	console.log(marker);
	const request = axios.post(url, {
	    title: marker.title,
	    body: marker.body,
	    coords:{
	    	lat:marker.coords.lat,
	    	lng:marker.coords.lng
	    },
	    type: marker.type
	})
	return {
		type: NEW_MARKER,
		payload:request
	}
}

