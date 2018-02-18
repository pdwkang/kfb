import React from 'react';
import { IndexLink, Link } from 'react-router';
// import {Navbar, Nav, NavItem} from 'react-bootstrap';

//Routing Links
class WeddingNavBar extends React.Component {
    render(){
        return(
            <div>
                <div className='navbar-wrapper'>
                    <i style={{fontSize:"12px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; September 15, 2018 &nbsp;&nbsp;&nbsp; Roswell, GA</i>
                    <i style={{float:"right",fontSize:"12px"}}>#KevinfoundhisBae &nbsp;&nbsp;&nbsp;</i>
                    <div style={{textAlign:"center", fontSize:"33px"}}> LEAH & KEVIN </div>
                    <div className='navbar-inside-wrapper'>
                        <div className='each-nav-item'><IndexLink activeClassName='active' to="/">Our Wedding</IndexLink></div>
                        <div className='each-nav-item'><Link activeClassName='active' to="events">Events</Link></div>
                        <div className='each-nav-item'><Link activeClassName='active' to="registry">Registry</Link></div>
                        <div className='each-nav-item'><Link activeClassName='active' to="weddingparty">Wedding Party</Link></div>                        
                        <div className='each-nav-item'><Link activeClassName='active' to="travel">Travel</Link></div>
                        <div className='each-nav-item'><Link activeClassName='active' to="thingstodo">Things To Do</Link></div>
                        <div className='each-nav-item'><Link activeClassName='active' to="photos">Photos</Link></div>
                        <div className='each-nav-item'><Link activeClassName='active' to="rsvp">RSVP</Link></div>
                    </div>
                </div>   
            </div>             
        )
    }
};


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
