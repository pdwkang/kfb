import React, { Component } from 'react';
import {
	withGoogleMap,
	GoogleMap,
	// InfoWindow,
	Marker,
} from 'react-google-maps';

const InitialMap = withGoogleMap(props =>{
	return(
		<GoogleMap
			ref={props.onMapLoad}
			defaultZoom={12}
			defaultCenter={{'lat':34.1660086, 'lng': -84.1851828}}
			onClick={props.onMapClick}
		
		>
        <Marker
        	position={{'lat':34.1660086, 'lng': -84.1851828}}
            visible={true}
            options={props.markerProps}
            icon={require('./map-icon.png')}>
        </Marker>
		</GoogleMap>
	)
}) 

export default class MyGoogleMap extends Component{
	constructor(props) {
		super(props);
		this.state={
			markers: [{
				position:{
					lat:34.1660086,
					lng:-84.1851828
				}
			}]
		}
	}
	render(){
		return(
			
				<InitialMap
					containerElement={
						<div style={{height:'100%'}}/>
					}
					mapElement={
						<div style={{height:'100%'}}/>
					}		
					
				/>
				
		)
	}
}