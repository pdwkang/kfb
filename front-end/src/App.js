import React from 'react';
import { IndexLink, Link } from 'react-router'
import {Navbar, Nav, NavItem} from 'react-bootstrap'

//Routing Links
class IronSpiritsNavBar extends React.Component {
    render(){
        return(
            <div>
                <div className='navbar-wrapper-xs visible-xs'>
                    <Navbar inverse collapseOnSelect>
                        <Navbar.Header>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav pullRight>
                                <NavItem href="/">
                                    <IndexLink to="/">Home</IndexLink>
                                </NavItem>
                                <NavItem href="/">
                                    <Link to="about">About</Link>
                                </NavItem>
                                <NavItem href="/">
                                    <IndexLink to="services">Services</IndexLink>
                                </NavItem>
                                <NavItem href="/">
                                    <Link to="process">Process</Link>
                                </NavItem>                                
                                <NavItem href="/">
                                    <IndexLink to="gallery">Gallery</IndexLink>
                                </NavItem>
                               {/* <NavItem href="/">
                                    <IndexLink to="onlineshop">Shop</IndexLink>
                                </NavItem>                                                                
                                <NavItem href="/">
                                    <IndexLink to="blog">Blog</IndexLink>
                                </NavItem>                          */}
                                <NavItem ref="/">
                                    <Link to="contact">Contact</Link>
                                </NavItem>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>       
                <div className='navbar-wrapper hidden-xs'>
                    <div className='navbar-inside-wrapper'>
                        <div className='each-nav-item'><Link activeClassName='active' to="about">About</Link></div>
                        <div className='each-nav-item'><Link activeClassName='active' to="services">Services</Link></div>

                        <div className='ironspirits-logo'>
                            <IndexLink to="/">
                                <div className='ironspirits-letters'>&nbsp;&nbsp;&nbsp;<span className='iron-letters'>IRON</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SPIRITS</div>
                                <div className='logo-tilt'></div>
                            <img src={require('../public/logo.png')} alt=' '/>
                            </IndexLink>
                        </div>
                        
                        {/* <div className='each-nav-item'><Link activeClassName='active' to="process">Process</Link></div>*/}

                        <div className='each-nav-item'><Link activeClassName='active' to="gallery">Gallery</Link></div>                        


                        {/* <div className='each-nav-item'><Link activeClassName='active' to="onlineshop">Shop</Link></div>
                        <div className='each-nav-item'><Link activeClassName='active' to="blog">Blog</Link></div>*/}
                        <div className='each-nav-item'><Link activeClassName='active' to="contact">Contact</Link></div>
                        {/* <div className='each-nav-item' style={{color:'black'}}>Search</div> */}       
                    </div>
                </div>   
            </div>             
        )
    }
};

class Footer extends React.Component{
    render(){
        return(
            <div style={{fontFamily:'Ubuntu', width:'100%', height:70, backgroundColor:'#162536',textAlign:'center',color:'white',paddingTop:25}}>
                IRON SPIRITS COPYRIGHT © 2017.
            </div>
        )
    }
}
//parent of all pages, the top navbar stays same and still on all pages
class App extends React.Component{
    render(){
        return(
            <div>
                <IronSpiritsNavBar />
                
                {this.props.children}       
                <Footer/>
                
                
            </div>
        );
    }
}


export default App;
