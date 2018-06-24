import React, { Component } from 'react';
// import $ from 'jquery';
// import { hashHistory } from 'react-router';
// import Parallax from 'react-simple-parallax';
import HowWeMet from './HowWeMet.js';
import HerStory from './HerStory.js';
import HisStory from './HisStory.js';
import Events from '../events/Events.js';

class Label extends Component{
	render(){
    	return (
			<div style={{position:"absolute",  width:"100%",
						fontSize:"55px", color:"white", textShadow:"1px 1px black", fontWeight:100, zIndex:10,
						textAlign:"center", marginTop:"35vw"}}>
				{/* We're Getting Married! */}
      		</div>
		)
  	}
};



class Home extends Component{
	render(){
    	return (
    		<div style={{textAlign:"center"}}>
				<Label/>
				<div style={{position:"relative",height:"auto",marginTop:-130}}>
					<img className='home-photo' src={require('../../photos/7.jpg')} alt=' ' style={{width:"100%",filter:"brightness(.7)", left:0}} />
				</div>
				<div style={{marginTop:150,color:"#01385E", fontWeight:400, fontSize:"36px", letterSpacing:6, textAlign:"center"}}>
					SAVE THE DATE!
				</div>
				<div style={{verticalAlign:"top",marginTop:30}}>
					<div style={{display:"inline-block",verticalAlign:"top"}}>
						<img src={require('../../photos/25.png')} alt=' ' style={{paddingTop:10,width:200,marginRight:20}} />
					</div>
					<div style={{display:"inline-block"}}>
						<div style={{textAlign:"left",fontSize:17,fontWeight:300, paddingLeft:20}}><h4>Sept. 15, 2018</h4></div>
						<div style={{textAlign:"left",fontSize:17,fontWeight:300, paddingLeft:20}}>Ceremony starts at 5:45pm, followed</div>
						<div style={{textAlign:"left",fontSize:17,fontWeight:300, paddingLeft:20}}>by cocktail hour and reception</div>
						<br/>
						<div style={{textAlign:"left",fontSize:17,fontWeight:300, paddingLeft:20}}><h4>Ivy Hall</h4></div>
						<div style={{textAlign:"left",fontSize:17,fontWeight:300, paddingLeft:20}}>85 Mill Street, Building B</div>
						<div style={{textAlign:"left",fontSize:17,fontWeight:300, paddingLeft:20}}>Roswell, GA 30075</div>
					</div>
				</div>
				<br/>
				<div style={{marginTop:30, fontWeight:300, fontSize:"16px",  textAlign:"center"}}>
					We will be providing an open bar for our guests.<br/> We highly suggest you use Uber or Lyft to the wedding.<br/> Please drink responsibly. 
				</div>
				<div className="flip-container">
					<div className="flipper">
						<div className="front">
							<div style={{height:"auto",position:"relative",overflow:"hidden"}}> 
								<div style={{position:"absolute",left:0,top:0}}>
									<img src={require('../../photos/27.jpg')} alt=' ' style={{width:"50%",filter:"brightness(120%)"}} />
									<img src={require('../../photos/28.jpg')} alt=' ' style={{width:"50%",filter:"brightness(80%) blur(10px)"}} />
								</div>
								<div style={{display:"inline-block",width:"50%"}}></div>
								<div style={{display:"inline-block",width:"50%", height:"50vw",position:"relative",color:"white",background:"rgba(0,0,0,0.3)", textAlign:"left",paddingLeft:50,paddingTop:"30px"}}>
								<h1>HOW WE MET</h1>
								<br/>
								<h3 style={{color:"white"}}>HER STORY</h3>
								<p style={{paddingTop:"30px",width:"50%",minWidth:260,fontSize:19,fontWeight:200, lineHeight:"24px",float:"left",lineHeight:2}}>
									He wanted my number, but I told him to facebook me instead. My plan worked and he put a ring on it on August 17, 2017.
								</p>
								</div>
							</div>
						</div>
						<div className="back">							
							<div style={{height:"auto",position:"relative",overflow:"hidden"}}> 
								<div style={{position:"absolute",left:0,top:0}}>
									<img src={require('../../photos/27.jpg')} alt=' ' style={{width:"50%",filter:"brightness(80%) blur(10px)"}} />
									<img src={require('../../photos/28.jpg')} alt=' ' style={{width:"50%",filter:"brightness(120%)"}} />
								</div>
								<div style={{display:"inline-block",width:"50%", height:"50vw",position:"relative",color:"white",background:"rgba(0,0,0,0.3)", textAlign:"right",paddingRight:50,paddingTop:"30px"}}>
									<h1>HOW WE MET</h1>
									<br/>
									<h3 style={{color:"white"}}>HIS STORY</h3>
									<p style={{paddingTop:"30px",width:"50%",minWidth:260,fontSize:19,fontWeight:200, lineHeight:"24px",float:"right",lineHeight:2}}>
										I never asked for her number, but she told me to facebook her instead. I was confused. Her plan worked and I put a ring on it. 
									</p>
								</div>
								<div style={{display:"inline-block",width:"50%"}}></div>
							</div>
						</div>
					</div>
				</div>
				<br/>
				<div style={{color:"#01385E", fontWeight:400,textAlign:"center", float:"left"}}>
					<div style={{color:"#01385E", fontWeight:400, fontSize:"36px",textAlign:"center"}}>
						#KevinfoundhisBae
					</div>
					<p style={{fontSize:15,paddingTop:"20px",width:"50%", lineHeight:"24px",margin:"auto",color:"black"}}>
						Please tag your photos with #KevinfoundhisBae and<br/> help us capture the story of our big day!  
					</p>
					<div style={{marginTop:"70px", textAlign:"center"}}>
						<h3>Unplugged Ceremony</h3>
						<p style={{fontSize:15,paddingTop:"20px",width:"50%", lineHeight:"24px",margin:"auto",color:"black"}}>
						We have hired an AMAZING photographer to capture our big day! We kindly ask you to put away your camera, phones, tablets, etc..and let our photo/videographers capture the moment.  We do not want to compromise our professional photos with people holding their phones up in the air. Please enjoy the moment! After the ceremony, you can use your phone to capture memories! Please visit <a href="https://www.yourperfectweddingphotographer.co.uk/article/23-photos-runied-unplugged-wedding/" alt="" target="_blank">Ruined-Unplugged-Wedding</a> for more details on why we choose to have an unplugged wedding ceremony. 
						</p>
						<br/><br/><br/><br/><br/><br/><br/>
					</div>
                <div style={{width:"90%",borderBottom:"1px solid #01385E",position:"relative",margin:"auto", marginBottom:65}}>
                    <div style={{fontSize:29,fontFamily:"Montserrat", width:100,color:"#01385E",background:"white", position:"absolute",left:0,textAlign:"center",right:0,top:-23,margin:"auto"}}>&#9825;</div>
                </div>
				</div>
      		</div>
		)
  	}
};

export default Home