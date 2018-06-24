import React from 'react';
import { IndexLink, Link } from 'react-router';
// import {Navbar, Nav, NavItem} from 'react-bootstrap';

//Routing Links
class WeddingNavBar extends React.Component {
    render () {
        var color = "#01385E";
        if (location.hash === "#/") {
            color = "white";
        }
        return(
            
            <div>
                <div className='navbar-wrapper'>
                    <div className='navbar-inside-wrapper'>
                        <div style={{textAlign:"left", display:"inline-block",fontFamiy:"Monsterrat", letterSpacing:10,fontWeight:400, fontSize:"33px",marginRight:"30px",color:color, marginLeft:25}}> LEAH & KEVIN </div>
                        <div style={{float:"right",marginRight:50}}>
                            <div className='each-nav-item'><IndexLink activeClassName='active' to="/"style={{color:color}}>HOME</IndexLink></div>
                            <div className='each-nav-item'><Link activeClassName='active' to="weddingparty" style={{color:color}}>WEDDING PARTY</Link></div>
                            <div className='each-nav-item'><Link activeClassName='active' to="photos"style={{color:color}}>PHOTOS</Link></div>
                            <div className='each-nav-item'><Link activeClassName='active' to="registry"style={{color:color}}>REGISTRY</Link></div>
                            <div className='each-nav-item'><Link activeClassName='active' to="travel"style={{color:color}}>TRAVEL</Link></div>
                            <div className='each-nav-item'><Link activeClassName='active' to="rsvp"style={{color:color}}>RSVP</Link></div>
                        </div>
                    </div>
                </div>   
            </div>             
        )
    }
};
{/* <div className='each-nav-item'><Link activeClassName='active' to="travel"style={{color:color}}>TRAVEL</Link></div> */}

//parent of all pages, the top navbar stays same and still on all pages
class App extends React.Component{
    render(){
        return(
            <div>
                <WeddingNavBar /> {this.props.children}       
                {/* <Footer/> */}
                
                
            </div>
        );
    }
}


export default App;
