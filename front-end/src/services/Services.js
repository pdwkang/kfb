import React, {Component} from 'react';
import IronFooter from '../IronFooter.js'

//parent of all pages, the top navbar stays same and still on all pages
class Process extends Component{
    render(){
        return(
            <div>
                Process
                <IronFooter />    
            </div>
        );
    }
}


export default Process;
