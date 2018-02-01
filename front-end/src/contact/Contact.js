import React, { Component } from 'react';
import $ from 'jquery';
import { hashHistory } from 'react-router';
import MyGoogleMap from './GoogleMap.js'
import IronFooter from '../IronFooter.js'



class Contact extends Component {
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
			<div className="qwqweqweqweqwe" >
				<div className="contact-wrapper">
					<div className="contact-body col-sm-6">
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
								<div className='contact-submit'><input className="submit-btn" type="submit" value="Submit"/></div>	
							</div>
						</form>
					</div>
				</div>		
				<div style={{marginLeft:'50vw',height:'50vw', width:'50vw'}} >	
					<MyGoogleMap/>
				</div>

				
				
			</div>
		)
	}
}

export default Contact;

				// <div className="title">
				// </div>
				// <div className="someclassssss">
				// 	<h2>Send a message</h2>
				// 	<form onSubmit={this.handleContact}>
				// 		<input className="textbox" type="text" placeholder="Name"/><br/>
				// 		<input className="textbox" type="email" placeholder="Email" /><br/>
				// 		<textarea className="textarea" type="text-area" placeholder="Message"></textarea><br/>
				// 		<input className="submit-btn" type="submit" value="Submit"/>
				// 	</form>
				// </div>
				// <IronFooter />