import React, {Component} from 'react';

class EventsHeader extends Component{
    render(){
        return(
            <h1>
                Here's what to expect during our wedding weekend. <br/>
                There will also be a printout of this schedule available <br/>
                in your hotel rooms. We can't wait to celebrate with you!
            </h1>
        );
    }
}
class EachEvent extends Component{
    render(){
        return(
            <div>
                <div className="text-center col-sm-6" style={{borderRight:"1px solid black"}}> {this.props.time} </div>
                <div className="text-center col-sm-6"> {this.props.content} </div>
            </div>
        );
    }
}
class Events extends Component{
    render(){
        return(
            <div>
                <EventsHeader/>
                <EachEvent time="10:00" content="do this and that and that"/>
                <br/>
                <br/>
                <EachEvent time="11:00" content="do this and c and that"/>
                <br/>
                <br/>
                <EachEvent time="12:00" content="do this and b and that"/>
                <br/>
                <br/>
                <EachEvent time="1:00" content="do this and a and that"/>
            </div>
        );
    }
}


export default Events;
