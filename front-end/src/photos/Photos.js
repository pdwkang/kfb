import React, {Component} from 'react';
import Container from 'react-photo-container';

var PHOTO_SET = [
    {
        src: require('../../photos/1.jpg'),
        width:100,
        height: 100,
        aspectRatio:.8,
        lightboxImage:{
            src: require('../../photos/1.jpg')
        }
    },
    {
        src: require('../../photos/2.jpg'),
        width:100,
        height: 100,
        aspectRatio:1.5,
        lightboxImage:{
            src: require('../../photos/2.jpg')
        }
    },
    {
        src: require('../../photos/3.jpg'),
        width:100,
        height: 100,
        aspectRatio:1.5,
        lightboxImage:{
            src: require('../../photos/3.jpg')
        }
    },
    {
        src: require('../../photos/4.jpg'),
        width:100,
        height: 100,
        aspectRatio:2,
        lightboxImage:{
            src: require('../../photos/4.jpg')
        }
    },
    {
        src: require('../../photos/5.jpg'),
        width:100,
        height: 100,
        aspectRatio:.8,
        lightboxImage:{
            src: require('../../photos/5.jpg')
        }
    },
    {
        src: require('../../photos/6.jpg'),
        width:100,
        height: 100,
        aspectRatio:.8,
        lightboxImage:{
            src: require('../../photos/6.jpg')
        }
    },
    {
        src: require('../../photos/7.jpg'),
        width:100,
        height: 100,
        aspectRatio:1.5,
        lightboxImage:{
            src: require('../../photos/7.jpg')
        }
    },
    {
        src: require('../../photos/8.jpg'),
        width:100,
        height: 100,
        aspectRatio:1.5,
        lightboxImage:{
            src: require('../../photos/8.jpg')
        }
    },
    {
        src: require('../../photos/9.jpg'),
        width:100,
        height: 100,
        aspectRatio:.85,
        lightboxImage:{
            src: require('../../photos/9.jpg')
        }
    },
    {
        src: require('../../photos/13.jpg'),
        width:100,
        height: 100,
        aspectRatio:1,
        lightboxImage:{
            src: require('../../photos/13.jpg')
        }
    },
    {
        src: require('../../photos/11.jpg'),
        width:100,
        height: 100,
        aspectRatio:.8,
        lightboxImage:{
            src: require('../../photos/11.jpg')
        }
    },
    {
        src: require('../../photos/12.jpg'),
        width:100,
        height: 100,
        aspectRatio:2,
        lightboxImage:{
            src: require('../../photos/12.jpg')
        }
    },
    {
        src: require('../../photos/14.jpg'),
        width:100,
        height: 100,
        aspectRatio:.8,
        lightboxImage:{
            src: require('../../photos/14.jpg')
        }
    },
    {
        src: require('../../photos/10.jpg'),
        width:100,
        height: 100,
        aspectRatio:1.7,
        lightboxImage:{
            src: require('../../photos/10.jpg')
        }
    },

    {
        src: require('../../photos/15.jpg'),
        width:100,
        height: 100,
        aspectRatio:.8,
        lightboxImage:{
            src: require('../../photos/15.jpg')
        }
    },
    {
        src: require('../../photos/16.jpg'),
        width:100,
        height: 100,
        aspectRatio:1.5,
        lightboxImage:{
            src: require('../../photos/16.jpg')
        }
    },
    {
        src: require('../../photos/17.jpg'),
        width:100,
        height: 100,
        aspectRatio:1.5,
        lightboxImage:{
            src: require('../../photos/17.jpg')
        }
    },
    {
        src: require('../../photos/18.jpg'),
        width:100,
        height: 100,
        aspectRatio:.7,
        lightboxImage:{
            src: require('../../photos/18.jpg')
        }
    },
    {
        src: require('../../photos/19.jpg'),
        width:100,
        height: 100,
        aspectRatio:.8,
        lightboxImage:{
            src: require('../../photos/19.jpg')
        }
    },
    {
        src: require('../../photos/20.jpg'),
        width:100,
        height: 100,
        aspectRatio:1.5,
        lightboxImage:{
            src: require('../../photos/20.jpg')
        }
    },
    {
        src: require('../../photos/21.jpg'),
        width:100,
        height: 100,
        aspectRatio:.8,
        lightboxImage:{
            src: require('../../photos/21.jpg')
        }
    },
    {
        src: require('../../photos/22.jpg'),
        width:100,
        height: 100,
        aspectRatio:1.2,
        lightboxImage:{
            src: require('../../photos/22.jpg')
        }
    },
    {
        src: require('../../photos/23.jpg'),
        width:100,
        height: 100,
        aspectRatio:1.5,
        lightboxImage:{
            src: require('../../photos/23.jpg')
        }
    },
    {
        src: require('../../photos/24.jpg'),
        width:100,
        height: 100,
        aspectRatio:.9,
        lightboxImage:{
            src: require('../../photos/24.jpg')
        }
    },
];

class Photos extends Component{
    render(){
        return(
            <div>
				<div style={{marginTop:"30px", textAlign:"center"}}>
					<h1>SOME TEXT</h1>
					<p style={{paddingTop:"20px",width:"50%", lineHeight:"24px",margin:"auto"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
				</div>
                <br/>
                <br/>
                <div style={{width:"80%", margin:"auto"}}>
                    <Container photos={PHOTO_SET} />
                </div>
                <br/>
                <br/>
            </div>
        );
    }
}


export default Photos;
