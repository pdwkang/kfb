import React, { Component } from 'react';
// import $ from 'jquery';
// import { hashHistory } from 'react-router';
// import Parallax from 'react-simple-parallax';
import HowWeMet from './HowWeMet.js';
import HerStory from './HerStory.js';
import HisStory from './HisStory.js';

class Label extends Component{
	render(){
    	return (
			<div style={{position:"absolute", fontFamily: "Shadows Into Light", width:"100%",
						fontSize:"55px", color:"white", textShadow:"1px 1px black", 
						textAlign:"center", marginTop:"75vh"}}>
				We're Getting Married!
      		</div>
		)
  	}
};



class Home extends Component{
	render(){
    	return (
    		<div style={{textAlign:"center"}}>
				<Label/>
				<img className='home-photo' src={require('../../photos/7.jpg')} alt=' ' style={{width:"100%"}} />
				<div style={{marginTop:"130px",fontSize:"40px", letterSpacing:10, fontWeight:100, textAlign:"center"}}>
					LEAH
					<br/>
					BAE
					<br/>
					<i style={{fontSize:"15px",letterSpacing:1}}>and</i>
					<br/>
					KEVIN
					<br/>
					JUNG
					<br/>
					<i style={{fontSize:"15px",letterSpacing:1}}>#KevinfoundhisBae</i>

				</div>
				<div style={{marginTop:"130px"}}>
					<h1>HOW WE MET</h1>
					<div style={{paddingTop:"10px"}}> 8. 15. 2013 </div>
					<p style={{paddingTop:"20px",width:"50%", lineHeight:"24px",margin:"auto"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br/>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
				</div>
				<div style={{marginTop:"130px"}}>
					<h1>HER STORY</h1>
					<p style={{paddingTop:"20px",width:"50%", lineHeight:"24px",margin:"auto"}}>Lorem Ipsum is simply dummy <br/>text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
				</div>
				<div style={{marginTop:"130px"}}>
					<h1>HIS STORY</h1>
					<p style={{paddingTop:"20px",width:"50%", lineHeight:"24px",margin:"auto"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
				</div>
				<br/>
				<br/>
				<br/>
      		</div>
		)
  	}
};

export default Home
