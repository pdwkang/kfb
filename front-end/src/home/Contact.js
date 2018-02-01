import React, { Component } from 'react';
import $ from 'jquery';
import { hashHistory } from 'react-router';
import MyGoogleMap from '../contact/GoogleMap.js'

class ContactForm extends Component {
	handleContact(event){
		event.preventDefault();
		$.ajax({
			url: 'http://pauldkang.com:3001/send/email',
			headers: {
				'Content-Type':'application/x-www-form-urlencoded'
			},
			method: 'POST',
			crossDomain: 'true',
			dataType: 'json',
			data: {'name': event.target[0].value,'email':event.target[1].value, 'message': event.target[2].value},
			success: (data)=>{
				hashHistory.push({pathname:'/',query:'1',state:{thanksSent:true}});
				console.log(this)
			}
		}).fail(function(jqXhr) {
			console.log('failed');
		});
	}

	render() {
		return (
			<div className="contact-wrapper">
				<div className='section-header4'>CONTACT US!</div>
				<div className='section-header-bottom-line'></div>
				<div className="contact-body col-sm-6">
					<div className='contact-form-label'>Contact Form</div>
					<form onSubmit={this.handleContact}>
						<div className='name-wrapper'>
							<div className='contact-form-left'>
								<span className='glyphicon glyphicon-user'></span>
							</div>
							<div className='contact-form-right'>
								<input className="textbox-name" type="text" placeholder="Name"/>
							</div>
						</div>
						<div className='name-wrapper'>
							<div className='contact-form-left'>
								<span className='glyphicon glyphicon-envelope'></span>
							</div>
							<div className='contact-form-right'>
								<input className="textbox-email" type="email" placeholder="Email" />
							</div>	
						</div>
						<div className='message-wrapper'>
							<div className='contact-form-left1'>
								<span className='glyphicon glyphicon-pencil'></span>
							</div>
							<div className='contact-form-right1'>
								<textarea className="textbox-message" type="text-area" rows='9' placeholder="Message"/>
							</div>						
							<div className='contact-hover'>							
								<div className='contact-submit-left'></div>
								<div className='contact-submit'><input className="submit-btn" type="submit" value="Send &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"/></div>	
							</div>
						</div>
					</form>
				</div>
				<div style={{position:'absolute', left:'50%', height:352, width:'40%'}} >	
					<div className='contact-form-label'>How To Find Us</div>
					<MyGoogleMap/>
				</div>
				<a href='https://maps.google.com/maps?v=2&f=q&ie=UTF8&t=m&iwloc=&q=6020+Parkway+North+Drive%2c+Cumming%2c+GA%2c+United+States&z=13&source=embed'>
				<div className='contact-info-box'>&nbsp;&nbsp;View Larger Map</div></a>
			</div>
		)
	}
}


export default ContactForm
				// <div className='col-sm-6'>
				// 	<div style={{zIndex:100, height:'100vh', width:100}}>
				// 	<MyGoogleMap />
				// 	</div>
				// </div>