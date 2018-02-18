import React, { Component } from 'react';
// import $ from 'jquery';
// import { hashHistory } from 'react-router';
// import Parallax from 'react-simple-parallax';
import HowWeMet from './HowWeMet.js';
import HerStory from './HerStory.js';
import HisStory from './HisStory.js';




class Home extends Component{
	render(){
    	return (
    		<div>
				<HowWeMet/>
				<HerStory/>
				<HisStory/>
      		</div>
		)
  	}
};

export default Home
