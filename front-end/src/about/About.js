import React, { Component } from 'react'
import OurTeam from './OurTeam.js'
import Testimonials from './Testimonials.js'
class AboutHeaderImage extends Component{
	render(){
		return(
			<div className='about-header-image' style={{marginLeft:'15%',width:'70%'}}>
				<img src={require('./images/aboutHeader.jpg')}/>
			</div>
		)
	}
}

class OurStory extends Component{
	render(){
		return(
			<div>
			<div className='our-story-header'>Our Story</div>
			<div className='our-story-text'>
				Ironspirits is an Atlanta, GA based design, production, and installation creative services firm founded in 2002 by Eric Smith, an illustrator and designer for over 34 years.
				<br/><br/>
				Specializing in design and engineering, we serve churches and religious organizations, medical/dental facilities, restaurants/retail, corporations, museums, educational institutions and theater.
				<br/><br/>
We focus on producing themed and corporate identity spaces using: signage, props, sets, murals, custom fixtures, 2D/3D sculpture, illustration, digital media & interactive elements.
<br/><br/>
​Our highly specialized creative team produces exceptional environments and products with a high degree of finish.
<br/><br/>
It is our team that continues to innovate, take risks and go beyond the cookie cutter template to create beautiful spaces.
			</div>
			</div>
		)
	}
}





class FAQ extends Component{
	render(){
		return(
			<div style={{width:'80%',margin:'auto', height:300, backgroundColor:'green'}}>
				<h1>FAQ</h1>
				
			</div>
		)
	}
}

class AboutBody extends Component{
	render(){
		return(
			<div>
				<div className='about-body-header'>How does the process work?</div>
				<div style={{width:1200,margin:'auto'}}>
					
					<div className='about-body-col-left'>
						<div className='about-body-col-header'>Conceptual Design</div>
						<div className='about-body-col-description'>
							With the input garnered from the consultation, our creative team begins develop your vision by determining initial design elements, themes, and specialty nuances.  Rough concepts from sketches – to 2D – to 3D – renderings are presented dependent upon your design budget.  This is the time where you have the chance to see your vision on paper and determine what works and what does not work.  This process can take 2 days – to – 2 weeks dependent upon the level of design finish and involves our Creative Director and Creative Engineer.
						</div>
						<div className='about-body-col-header'>Production and Fabrication</div>
						<div className='about-body-col-description'>
							Upon sign-off of final design and your production contract, all your project components move into the production and fabrication queue of engineering, carpentry, sculpture, welding and finish.  Installation preparation also begins as we plan the final step of bringing your project to your site.  This process can take 6 weeks – to – 6 months dependent upon project size and involves our Creative Engineer, Production Director, Production Crew, and Installation Director.
						</div>
						<div className='about-body-col-header'>Quality Assurance</div>
						<div className='about-body-col-description'>
							Our core values are craftsmanship, stewardship, and client collaboration.  This step in our process manifests those values by giving us the chance to receive feedback on improvements, perform safety checks and repairs, compare before and after expectations and, in most cases, plan next steps for future work.  This process is ongoing with a 1 day visit within 2 months of install date and involves our Creative Director and Operations Director.
						</div>										
					</div>
					<div className='about-body-col-image'>
						<img src={require('./images/about.png')} alt=' '/>
					</div>
					<div className='about-body-col-right'>
						<div className='about-body-col-header'>Client Consultation</div>
						<div className='about-body-col-description'>
							After contacting us, we will meet with you at your site to discuss initial thoughts and needs.  In most cases, we will take photos and provide real-time sketches as well as initial 2D art during our time together.  This is a time where we listen to your vision, your values, your limitations, and your contingencies so that we can begin to create a solution from a depth of artistic offerings.  This process normally takes 1 – to – 2 days dependent on site size and involves our Creative Director.
						</div>
						<div className='about-body-col-header'>Final Design</div>
						<div className='about-body-col-description'>
							Taking your changes, our designers build the final representation of your environment.  Color, measurements, materials, time constraints, and costs are all incorporated into a deliverable which will serve as a guiding document for production and fabrication.  This process can take 2-3 weeks and involves our Creative Director, Creative Engineer, and Operations Director.
						</div>
						<div className='about-body-col-header'>Installation</div>
						<div className='about-body-col-description'>
							We have been stewards of your project and have seen things begin to take shape up until this point in time; however, now you see the work come to completion.  Our hard working install team takes all the components of your project and brings your space to life.  Care is placed on comprehensive safety checks, high quality finish, real time spatial alignment, and incorporated client feedback.  This process can take 2 days – to – 2 weeks and involves our Creative Director, Production Director, Installation Director, and Install Crew.
						</div>															
					</div>
				</div>
			</div>
		)
	}
}

class IronFooter extends Component{
	render(){
		return(
			<div className='width100vw home-footer'>
				<div className='footer-wrapper'>
					<div className='footer-connect'>CONNECT WITH IRON SPIRITS</div>

					<a target="_blank" href='https://www.addthis.com/tellfriend_v2.php?v=300&winname=addthis&pub=ra-5162fff83017c0e0&source=men-300&lng=en&s=email&url=https%3A%2F%2Fwww.ironspirits.com%2Fhome.html&title=Iron%20Spirits%20-%20Children%20Themed%20Environments%2C%20Architectural%20Signage%2C%20Business%20Signs&ate=AT-ra-5162fff83017c0e0/-/-/58b2fdac2f4cb6ab/2&uid=589d13ce469a9531&description=Iron%20Spirits%20Children%20Themed%20Environments%20%E2%80%A2%20Ministry%20%26%20Corporate%20Themed%20Space%20Design%2C%20Signage%2C%20Design%20Planning%2C%20Custom%20Props%2C%20Fixtures%20%26%20Sets%2C%20Illustration%20%26%20Design&ct=1&ui_email_to=&ui_email_from=&ui_email_note=&pre=https%3A%2F%2Fwww.ironspirits.com%2Fabout-us.html&tt=0&captcha_provider=recaptcha2&pro=0&ats=imp_url%3D1%26url%3Dhttps%253A%252F%252Fwww.ironspirits.com%252Fhome.html%26title%3DIron%2520Spirits%2520-%2520Children%2520Themed%2520Environments%252C%2520Architectural%2520Signage%252C%2520Business%2520Signs%26description%3DIron%2520Spirits%2520Children%2520Themed%2520Environments%2520%25E2%2580%25A2%2520Ministry%2520%2526%2520Corporate%2520Themed%2520Space%2520Design%252C%2520Signage%252C%2520Design%2520Planning%252C%2520Custom%2520Props%252C%2520Fixtures%2520%2526%2520Sets%252C%2520Illustration%2520%2526%2520Design%26smd%3Drsi%253D%2526gen%253D0%2526rsc%253D%2526dr%253Dhttps%25253A%25252F%25252Fwww.ironspirits.com%25252Fabout-us.html%2526sta%253DAT-ra-5162fff83017c0e0%25252F-%25252F-%25252F58b2fdac2f4cb6ab%25252F1%26hideEmailSharingConfirmation%3Dundefined%26service%3Demail%26media%3Dundefined%26passthrough%3Dundefined%26email_template%3Dundefined%26email_vars%3Dundefined&atc=pubid%3Dra-5162fff83017c0e0%26product%3Dundefined%26widgetId%3Dundefined%26ui_pane%3Demail&rb=false'>
						<img className='each-logo' src={require('../../public/mail.jpeg')} alt=' ' />
					</a>
					<a target="_blank" href='https://www.facebook.com/IronSpirits/'>
						<img className='each-logo' src={require('../../public/facebook.png')} alt=' ' />
					</a>
					<a target="_blank" href='https://twitter.com/IronSpirits_llc'>
						<img className='each-logo' src={require('../../public/twitter.jpeg')} alt=' ' />
					</a>
					<a target="_blank" href='https://www.pinterest.com/ironspirits2/'>
						<img className='each-logo' src={require('../../public/pinterest.jpeg')} alt=' ' />
					</a>
					<a target="_blank" href='https://www.instagram.com/iron_spirits/'>
						<img className='each-logo' src={require('../../public/instagram.png')} alt=' ' />
					</a>
					<div className='rights'>Copyright 2016. Iron Spirits llc. All Rights Reserved.</div>
				</div>
			</div>
		)
	}
}

export default class About extends Component {
	render(){
		return(
			<div>
				<AboutHeaderImage/>
				<OurStory/>

				<OurTeam/>		
				<Testimonials/>		
				<FAQ/>		
			</div>
		)
	}
}

// <AboutBody/>
// <AboutHeader/>
// <IronFooter/>