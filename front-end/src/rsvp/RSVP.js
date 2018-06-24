import React, {Component} from 'react';
import { Button, Modal, FormControl } from 'react-bootstrap';
import $ from 'jquery';
const url = 'http://pauldkang.com:3030/videos';
class Trigger extends React.Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleHide = this.handleHide.bind(this);
        this.showModal = this.showModal.bind(this);
        this.state = {
            show: false,
            you:{
                name:"",
                guests:0
            },
            msg:""
        };
    }
    showModal (e) {
        e.preventDefault();
        var name = e.target.children[0].value.toLowerCase() || "";
        var you = [];
        $.getJSON(url, (data) => {
            var guestData = JSON.parse(data[0].json)
            guestData.forEach(function(guest){
                if(name.length > 2 && guest.name.toLowerCase().indexOf(name) > -1){
                    you.push(guest);
                }
            });
            if (!you || !you[0]) {
                this.setState({
                    show: false,
                    you:"",
                    msg:"Sorry! We could not find your name on the guest list. Please contact us, thank you!"
                });
            } else if (you.length > 1) {
                this.setState({
                    show: false,
                    you:"",
                    msg:"We found more than one guest with your name, please enter your full name"
                });
            } else if (you[0] !== ""){
                this.setState({ 
                    show: true,
                    you:you[0],
                    msg:""
                });
            }

        });

    }
    handleHide() {
      this.setState({ show: false });
    }
    render() {
        var guestNum = Number(this.state.you.guests);
        var selectHTML = [];
        for(let i=0; i<=guestNum; i++){
            selectHTML.push(
                <option key={i}>{i}</option>
            )
        }
        return (
            <div className="modal-container" style={{ height: 200 }}>
                <form onSubmit={this.showModal}>
                    <input type="text" style={{width:450}}/>
                    <br/>
                    <br/>
                    <Button bsSize="large" type="submit" style={{width:450}}>Find RSVP</Button>
                </form>
                <div style={{fontSize:15,color:"blue",marginTop:30}}>{this.state.msg}</div>
                <Modal show={this.state.show} onHide={this.handleHide} container={this} aria-labelledby="contained-modal-title">
                    <Modal.Header closeButton> <Modal.Title id="contained-modal-title"> RSVP </Modal.Title> </Modal.Header>
                    <Modal.Body>
                    <h3 style={{fontSize:21}}>Hi {this.state.you.name}! 
                    <br/><br/>
                    <span style={{fontSize:17}}>
                        How many is in your party?</span>
                    <div style={{width:50,marginLeft:20,display:"inline-block"}}>
                        <FormControl componentClass="select" placeholder="select">
                            {selectHTML}
                        </FormControl>
                    </div>
                    </h3>
                    
                    </Modal.Body>
                    <Modal.Footer> 
                        <Button onClick={this.handleHide}>Cancel</Button> 
                        <Button onClick={this.handleHide}>Attend</Button> 
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

  
class RSVPHeader extends Component{
    render(){
        return(
            <div style={{background:"rgba(114,153,183,0.1)"}}>
                <h1 style={{textAlign:"center",fontSize:27}}>
                    <br/><br/><br/>
                    Enter the name on your invitation!
                    <br/><br/><br/>
                    <Trigger />
                </h1>
            </div>
        );
    }
}

class RSVP extends Component{
    render(){
        return(
            <div>
                <div style={{margin:50,marginTop:0}}>
                    <div style={{width:"100%",borderBottom:"1px solid #01385E",position:"relative",marginBottom:60}}>
                        <div style={{fontSize:29,fontFamily:"Montserrat", width:190,color:"#01385E",background:"white", position:"absolute",left:0,textAlign:"center",right:0,top:-23,margin:"auto"}}>RSVP</div>
                    </div>
                    <RSVPHeader/>
                </div>
                <p style={{fontSize:16,width:"68%", lineHeight:"24px",margin:"auto",color:"black"}}>
                    Quick question! &nbsp; May I bring more people than the number of seats reserved in my honor to the Reception? 
                    <br/><br/>
                    Sorry!!! &nbsp; No.. Please restrict the attendees in your party to those listed on your RSVP Card. We wish we could accommodate all our friends, but it is simply impossible. Thank you for your cooperation and understanding.
                </p>
                
 
 

                <div style={{margin:50,marginTop:65}}>
                    <div style={{width:"100%",borderBottom:"1px solid #01385E",position:"relative",margin:"auto", marginBottom:65}}>
                        <div style={{fontSize:29,fontFamily:"Montserrat", width:100,color:"#01385E",background:"white", position:"absolute",left:0,textAlign:"center",right:0,top:-23,margin:"auto"}}>&#9825;</div>
                    </div>
                </div>
            </div>
        );
    }
}


export default RSVP;
