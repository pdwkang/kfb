import React, { Component } from 'react'

class OurTeam extends Component{
	render(){
		return(
			<div className='our-team-wrapper'>
				<div className='about-section-header1'>
					Our Team
				</div>
				<div className='our-team-images'>
					<div className='col-md-3 col-sm-4 each-member-image'><img className='our-team-image' src={require('./images/face.jpg')} alt='a'/><div className='our-team-image-hover'> Title and Name</div></div>
					<div className='col-md-3 col-sm-4 each-member-image'><img className='our-team-image' src={require('./images/face.jpg')} alt='a'/><div className='our-team-image-hover'> Title and Name</div></div>
					<div className='col-md-3 col-sm-4 each-member-image'><img className='our-team-image' src={require('./images/face.jpg')} alt='a'/><div className='our-team-image-hover'> Title and Name</div></div>
					<div className='col-md-3 col-sm-4 each-member-image'><img className='our-team-image' src={require('./images/face.jpg')} alt='a'/><div className='our-team-image-hover'> Title and Name</div></div>
					<div className='col-md-3 col-sm-4 each-member-image'><img className='our-team-image' src={require('./images/face.jpg')} alt='a'/><div className='our-team-image-hover'> Title and Name</div></div>
					<div className='col-md-3 col-sm-4 each-member-image'><img className='our-team-image' src={require('./images/face.jpg')} alt='a'/><div className='our-team-image-hover'> Title and Name</div></div>
					<div className='col-md-3 col-sm-4 each-member-image'><img className='our-team-image' src={require('./images/face.jpg')} alt='a'/><div className='our-team-image-hover'> Title and Name</div></div>
					<div className='col-md-3 col-sm-4 each-member-image' style={{marginBottom:100}}><img className='our-team-image' src={require('./images/face.jpg')}/><div className='our-team-image-hover'> Title and Name</div></div>
					<div>&nbsp;</div>
				</div>
			</div>
		)
	}
}

export default OurTeam