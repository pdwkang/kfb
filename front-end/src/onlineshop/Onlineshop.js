import React, {Component} from 'react';
import IronFooter from '../IronFooter.js'

//parent of all pages, the top navbar stays same and still on all pages
class Onlineshop extends Component{
    render(){
        return(
            <div>
                Shop
                <IronFooter />    
            </div>
        );
    }
}


export default Onlineshop;
