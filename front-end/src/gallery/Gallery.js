import React, {Component} from 'react';

//parent of all pages, the top navbar stays same and still on all pages
class GalleryTitle extends Component{
	constructor(props) {
		super(props);
		this.handleGalleryTitle = this.handleGalleryTitle.bind(this);
	}
	handleGalleryTitle(){
		this.props.handleGallery(this.props.title)
		console.log(this.props.title)
	}
	render(){
		return(
			<div onClick={this.handleGalleryTitle}>{this.props.title}</div>
		)
	}
}

class GalleryImages extends Component{
	render(){
		return(
			<div>
				<h1>{this.props.title}{this.props.title}{this.props.title}</h1>
			</div>
		)
	}
}
class Gallery extends Component{
	constructor(props) {
		super(props);
		this.state={
			activeGallery:'Signage'
		}
		this.handleGallery = this.handleGallery.bind(this);
	}
	handleGallery(title){
		this.setState({
			activeGallery: title
		})
	}
    render(){
    	// console.log(this.state.activeGallery)
        return(
        	<div>
            	<div className='col-sm-2'>
            		<GalleryTitle handleGallery={this.handleGallery} title='Signage' />
            		<GalleryTitle handleGallery={this.handleGallery} title='Custom Props' />
            		<GalleryTitle handleGallery={this.handleGallery} title='Murals' />
            	</div>
            	<div className='col-sm-10'>
            		<GalleryImages title={this.state.activeGallery}/>
            	</div>
            </div>
        );
    }
}


export default Gallery;
