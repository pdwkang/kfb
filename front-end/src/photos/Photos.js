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
                {/* <img className='home-photo' src={require('../../photos/7.jpg')} alt=' ' style={{width:"100%",left:0,opacity:0.5, filter:"brightness(50%)",position:"fixed",zIndex:-1, top:0}} /> */}
                <div style={{margin:50,marginTop:0}}>
                    <div style={{width:"100%",borderBottom:"1px solid #01385E",position:"relative"}}>
                        <div style={{fontSize:29,fontFamily:"Montserrat", width:180,color:"#01385E",background:"white", position:"absolute",left:0,textAlign:"center",right:0,top:-23,margin:"auto"}}>Photos</div>
                    </div>
                {/* </div> */}
                <br/><br/><br/>
                <div style={{width:"100%", margin:"auto"}}>
                    <Container photos={PHOTO_SET} />
                </div>
                {/* <div style={{margin:50}}> */}
                <br/><br/><br/>
                    <div style={{width:"100%",borderBottom:"1px solid #01385E",position:"relative"}}>
                        <div style={{fontSize:29,fontFamily:"Montserrat", width:100,color:"#01385E",background:"white", position:"absolute",left:0,textAlign:"center",right:0,top:-23,margin:"auto"}}>&#9825;</div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Photos;
