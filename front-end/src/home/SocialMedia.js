import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
class SocialMedia extends Component{
	render(){
		return(
			<div style={{backgroundColor:'white'}}>
			&nbsp;
			<div style={{position:'relative'}} className='parallax-wrapper'>
				<Parallax strength={500} bgImage={require('./images/parllax.jpeg')}>
				<div className='section-header3'>CONNECT WITH US!</div>
				<div className='row'>
					
					<div className='home-footer1'>
						<div className='social-media-wrapper'>
							<a target="_blank" href='https://www.addthis.com/tellfriend_v2.php?v=300&winname=addthis&pub=ra-5162fff83017c0e0&source=men-300&lng=en&s=email&url=https%3A%2F%2Fwww.ironspirits.com%2Fhome.html&title=Iron%20Spirits%20-%20Children%20Themed%20Environments%2C%20Architectural%20Signage%2C%20Business%20Signs&ate=AT-ra-5162fff83017c0e0/-/-/58b2fdac2f4cb6ab/2&uid=589d13ce469a9531&description=Iron%20Spirits%20Children%20Themed%20Environments%20%E2%80%A2%20Ministry%20%26%20Corporate%20Themed%20Space%20Design%2C%20Signage%2C%20Design%20Planning%2C%20Custom%20Props%2C%20Fixtures%20%26%20Sets%2C%20Illustration%20%26%20Design&ct=1&ui_email_to=&ui_email_from=&ui_email_note=&pre=https%3A%2F%2Fwww.ironspirits.com%2Fabout-us.html&tt=0&captcha_provider=recaptcha2&pro=0&ats=imp_url%3D1%26url%3Dhttps%253A%252F%252Fwww.ironspirits.com%252Fhome.html%26title%3DIron%2520Spirits%2520-%2520Children%2520Themed%2520Environments%252C%2520Architectural%2520Signage%252C%2520Business%2520Signs%26description%3DIron%2520Spirits%2520Children%2520Themed%2520Environments%2520%25E2%2580%25A2%2520Ministry%2520%2526%2520Corporate%2520Themed%2520Space%2520Design%252C%2520Signage%252C%2520Design%2520Planning%252C%2520Custom%2520Props%252C%2520Fixtures%2520%2526%2520Sets%252C%2520Illustration%2520%2526%2520Design%26smd%3Drsi%253D%2526gen%253D0%2526rsc%253D%2526dr%253Dhttps%25253A%25252F%25252Fwww.ironspirits.com%25252Fabout-us.html%2526sta%253DAT-ra-5162fff83017c0e0%25252F-%25252F-%25252F58b2fdac2f4cb6ab%25252F1%26hideEmailSharingConfirmation%3Dundefined%26service%3Demail%26media%3Dundefined%26passthrough%3Dundefined%26email_template%3Dundefined%26email_vars%3Dundefined&atc=pubid%3Dra-5162fff83017c0e0%26product%3Dundefined%26widgetId%3Dundefined%26ui_pane%3Demail&rb=false'>
								<img className='each-logo1 aa' src={require('./images//mail.png')} alt=' ' />
							</a>
							<a target="_blank" href='https://www.facebook.com/IronSpirits/'>
								<img className='each-logo1 bb' src={require('./images//facebook.png')} alt=' ' />
							</a>
							<a target="_blank" href='https://twitter.com/IronSpirits_llc'>
								<img className='each-logo1 cc' src={require('./images//twitter.png')} alt=' ' />
							</a>
							<a target="_blank" href='https://www.pinterest.com/ironspirits2/'>
								<img className='each-logo1 dd' src={require('./images//pinterest.png')} alt=' ' />
							</a>
							<a target="_blank" href='https://www.instagram.com/iron_spirits/'>
								<img className='each-logo1 ee' src={require('./images//instagram.png')} alt=' ' />
							</a>
						</div>
					</div>
				</div>
				</Parallax>
			</div>
			</div>
		)
	}
}

export default SocialMedia


// <Parallax className="parallax" speedDivider="5">
//           		<div>Hello World!</div>
//           	</Parallax>