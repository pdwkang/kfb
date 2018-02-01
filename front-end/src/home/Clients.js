import React, { Component } from 'react';


var clientLogos = [
	require('./images/mellowMushroom.jpg'),
	require('./images/michelin.jpg'),
	require('./images/church.jpg')
]

class Clients extends Component{
	render(){
		return(
			<div className='client-wrapper'>
				<div className='section-header5'>BRANDS WE WORKED WITH</div>
				<div className='section-header-bottom-line'></div>
				<div className='row' style={{width:'100%'}}>
					<div style={{width:'80%', margin:'auto', marginTop:100}}>
						<div>
							<div className='col-sm-4'> <a target='_blank' href='http://mellowmushroom.com/'><img className='client-img' src={clientLogos[0]} /> </a></div>
							<div className='col-sm-4'> <a href='http://www.michelinman.com/US/en/homepage.html' target="_blank"><img className='client-img' src={clientLogos[1]} /> </a></div>
							<div className='col-sm-4'> <a href='http://northpoint.org/' target='_blank'><img className='client-img' src={clientLogos[2]} /> </a></div>
						</div>
						<div className='client-name'>
							<div className='col-sm-4'>Mello Mushroom</div>
							<div className='col-sm-4'>Michelin Tires</div>
							<div className='col-sm-4'>North Point <br/>Community Church</div>
						</div>
					</div>
				</div>
				<div>&nbsp;</div><br/>
			</div>
		)
	}
}

export default Clients;