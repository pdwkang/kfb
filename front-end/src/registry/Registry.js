import React, { Component } from 'react';

class Contribution extends Component{
    render(){
        return(
            <div>
                <h4 style={{marginTop:"60px", textAlign:'center', lineHeight:"30px"}}>Thank you for sharing this exciting milestone with us. <br/>
                We can’t wait to celebrate with you! If you would like to give us a gift to mark this occasion,<br/>
                we’re looking to buy a new house and would welcome a contribution toward a down-payment.<br/>
                We’re looking forward to making many happy memories in a home with a backyard<br/>
                and would be so fortunate to have your help in making that dream a reality! <br/>
                Contributions can be made here&nbsp; <button className="btn btn-primary" style={{height:"25px",padding:"1px 8px",fontSize:"13px"}}>Make Us Happy!</button></h4>
                
            </div>
        );
    }
}

class EachRegistry extends Component{
    render(){
        let imgUrl = "./" + this.props.imgSource + ".png"
        return(
            <div className="registry-card">
                <img src={require(imgUrl)} alt=''/>
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                <br/><br/><br/>
                <h4 style={{color:"grey"}}>Shop their registry!</h4>
            </div>
        );
    }
}

class Registry extends Component{
    render(){
        return(
            <div>
                <Contribution/>
                <br/><br/>
                <div style={{margin:"auto",textAlign:"center"}}>
                    <EachRegistry imgSource="bbb"/>
                    <EachRegistry imgSource="cb"/>
                    <EachRegistry imgSource="amazon"/>
                </div>
            </div>
        );
    }
}


export default Registry;
