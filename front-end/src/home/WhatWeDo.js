import React, { Component } from 'react';

class WhatWeDo extends Component{
	render(){
		return(
			<div className='wwd-wrapper'>
				<div className='section-header'>WHAT DO WE DO?
					<div className='section-header-bottom-line'></div>
				</div>
				<div style={{width:'90%', margin:'auto', paddingTop:40}}>
				<div className='col-lg-4 col-sm-6 col-xs-12 home1-wrapper'>
					<div className='home1-card'>
						<div className='home1-header'>
							<span className="glyphicon glyphicon-home"></span>&nbsp;&nbsp;
							THEMED ENVIRONMENTS
						</div>
						<div className='home1-body'>
							From fun and whimsical themes for children's areas to more mature and elegant solutions for older audiences.
						</div>
					</div>
				</div>
				<div className='col-lg-4 col-sm-6 col-xs-12 home1-wrapper'>
					<div className='home1-card'>
						<div className='home1-header'>
							<span className="glyphicon glyphicon-pencil"></span>&nbsp;&nbsp;
							ARCHITECTURAL SIGNAGE
							</div>
						<div className='home1-body h1-2'>From ADA compliant signage for wayfinding needs, brands and logos, and the outdoors to specialty designed signs for your space.</div>
					</div>
				</div>
				<div className='col-lg-4 col-sm-6 col-xs-12 home1-wrapper'>
					<div className='home1-card'>
						<div className='home1-header'>
							<span className="glyphicon glyphicon-tree-deciduous"></span>&nbsp;&nbsp;
							CUSTOM PROPS & SETS
							</div>
						<div className='home1-body h1-3'>From a simple puppet theatre or stage set to a conference-style prop that highlights your brand and makes a bold statement.</div>
					</div>
				</div>
				<div className='col-lg-4 col-sm-6 col-xs-12 home1-wrapper'>
					<div className='home1-card'>
						<div className='home1-header'>
							<span className="glyphicon glyphicon-picture"></span>&nbsp;&nbsp;
							MURALS & ILLUSTRATION
							</div>
						<div className='home1-body h1-4'>From paint-by-number mural templates that engage your volunteer base to uniquely, hand-painted designs by our own artisans.</div>
					</div>
				</div>
				<div className='col-lg-4 col-sm-6 col-xs-12 home1-wrapper'>
					<div className='home1-card'>
						<div className='home1-header'>
							<span className="glyphicon glyphicon-object-align-vertical"></span>&nbsp;&nbsp;
							2D AND 3D SCULPTURE
							</div>
						<div className='home1-body h1-5'>From wall stick-on's that add some depth and playful sculptures to grab attention to life-sized oak trees and larger-than-life animals.</div>
					</div>
				</div>
				<div className='col-lg-4 col-sm-6 col-xs-12 home1-wrapper'>
					<div className='home1-card'>
						<div className='home1-header'>
							<span className="glyphicon glyphicon-user"></span>&nbsp;&nbsp;
							DESIGN CONSULTATION
							</div>
						<div className='home1-body h1-6'>From a discussion to spark ideas for your space to an extensive design consultation with renderings and personal meetings with our Creative Director.</div>
					</div>
				</div>
				<div className='col-xs-12' style={{height:50}}></div>
				<div>&nbsp;</div>
				</div>
			</div>
		)
	}
}

export default WhatWeDo