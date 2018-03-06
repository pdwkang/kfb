import React, {Component} from 'react';

class EventsHeader extends Component{
    render(){
        return(
            <h1 style={{fontSize:"20px", lineHeight:"28px"}}>
                Here's what to expect during our wedding weekend. <br/>
                There will also be a printout of this schedule available <br/>
                in blahblah blahblah. We can't wait to celebrate with you!
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
                <div className="text-center col-sm-6" style={{borderRight:"1px solid black"}}> &nbsp; </div>
                <div className="text-center col-sm-6"> &nbsp;</div>
                <div className="text-center col-sm-6" style={{borderRight:"1px solid black"}}> &nbsp; </div>
                <div className="text-center col-sm-6"> &nbsp;</div>
                <br/>
                <br/>
                <br/>
            </div>
        );
    }
}
class Events extends Component{
    render(){
        return(
            <div style={{marginTop:"30px", fontWeight:100, textAlign:"center"}}>
                <EventsHeader/>
                {/* <img src={require('../../photos/wp3.jpg')}
                    style={{position:"absolute",width:"80vw",left:"10vw",top:300, filter:"brightness(120%)",opacity:.4}}/> */}
                <div style={{width:"60%", borderTop:"1px solid black", margin:"auto", marginTop:"40px"}}></div>
                {/*<br/>
                <br/>
                <br/>
                <EachEvent time="10:00" content="do this and that and that"/>
                <br/>
                <br/>
                <EachEvent time="11:00" content="do this and c and that"/>
                <br/>
                <br/>
                <EachEvent time="12:00" content="do this and b and that"/>
                <br/>
                <br/>
                <EachEvent time="1:00" content="do this and a and that"/>*/}
                <br/>
                <br/>
                
                <div style={{width:"60%", margin:"auto", height:"auto"}}>

                    <div className="text-center col-sm-6" 
                    style={{textAlign:"center",borderRight:"1px solid black",fontSize:"25px", paddingTop:"50px",paddingBottom:"50px"}}>
                        DATE
                        <br/><br/><br/><br/><br/><br/>
                        LOCATION
                    </div>
                    <div className="text-center col-sm-6"
                    style={{textAlign:"center",fontSize:"25px", paddingTop:"50px",paddingBottom:"50px"}}> 
                        SEPTEMBER 15, 2018 
                        <br/><br/><br/><br/><br/>
                        <span style={{textAlign:"center",fontSize:"20px", paddingTop:"30px",paddingBottom:"50px"}}> 
                            Ivy Hall
                            <br/>
                            85 Mill Street, Building B
                            <br/>
                            Roswell, GA 30075
                        </span>
                    </div>
                </div>
                <br/>
                <div style={{clear:"both", paddingTop:"30px"}}>
                    <h1 style={{fontSize:"20px", lineHeight:"28px"}}>
                        Ceremony will start at 5:45pm and will be followed by cocktail hour and reception. 
                        <br/><br/>
                        <span style={{fontSize:"19px"}}> We will be providing an open bar for our guest. <br/>We highly suggest you use uber or lyft to the wedding. Please drink responsibly.</span>
                        <br/><br/>
                    </h1>
                </div>
            </div>
        );
    }
}


export default Events;
