import React, {Component} from 'react';

class RSVPHeader extends Component{
    render(){
        return(
            <h1>
                Please let us know your plans here by entering your <br/>
                name as it appears on your invitation. We hope we get to celebrate together!
            </h1>
        );
    }
}

class RSVP extends Component{
    render(){
        return(
            <div>
                <RSVPHeader/>
            </div>
        );
    }
}


export default RSVP;
