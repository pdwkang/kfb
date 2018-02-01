import React, { Component } from 'react';
class Philosophy extends Component{
	render(){
		return(
			<div className='philosophy-wrapper'>
				<div className='philosophy-header'>OUR PHILOSOPHY</div>
				<div className='philosophy-bottom-line'></div>					
				<div style={{width:'65%', margin:'auto'}}>
					<video src={require('./test.mp4')} type='video/mp4' autoPlay loop id="theVid" width='100%'/>
				</div>
			</div>
		)
	}
}

export default Philosophy;

// import React, { Component } from 'react';


// class Philosophy extends Component{
// 	render(){
// 		return(
// 			<div className='philosophy-wrapper'>
// 					<div className='philosophy-header'>OUR PHILOSOPHY</div>
// 					<div className='philosophy-bottom-line'></div>
// 				<div className='row'>
// 					<div className='col-sm-5'>
// 						<div className='philosophy-left'> 

// 							<div className='philosophy-body text-left'>
// 								<span className='philosophy-strong'>ENJOY</span> - THE CHALLENGE OF EACH OPPORTUNITY<br/>
// 								<span className='philosophy-strong'>ENHANCE</span> - OUR SKILLS AS CRAFTSMEN <br/>
// 								<span className='philosophy-strong'>ENGAGE</span> - OUR CUSTOMERS IN THE PROCESS <br/>
// 								<span className='philosophy-strong'>EXCEL</span> - IN EVERYTHING WE CREATE AND DELIVER <br/>
// 							</div>
// 						</div>
// 					</div>
// 					<div className='col-sm-7'>
// 						<div style={{width:'85%', margin:'auto', paddingRight:'3%'}}>
// 							<video src={require('./test.mp4')} type='video/mp4' autoPlay loop id="theVid" width='100%'/>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		)
// 	}
// }

// export default Philosophy;