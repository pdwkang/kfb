import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

class Contribution extends Component{
    constructor(props, context) {
        super(props, context);
    
        this.handleHide = this.handleHide.bind(this);
        this.showModal = this.showModal.bind(this);
        this.state = {
            show: false
        };
    }
    showModal (e) {
        this.setState({ show: true });
    }
    handleHide() {
        this.setState({ show: false });
    }
    render(){
        return(
            <div>
                <h4 style={{fontFamily:"Montserrat", fontWeight:100, marginTop:0, textAlign:'center', lineHeight:"30px"}}>
                Thank you for sharing this exciting milestone with us. <br/>
                We can’t wait to celebrate with you! <br/>
                If you would like to give us a gift to mark this occasion, <br/>
                we’re looking to buy a house and <br/>
                would welcome a monetary contribution toward our down-payment. 
                  &nbsp;
                  <button onClick={this.showModal} className="btn btn-primary" style={{background:"#01385E",height:"25px",padding:"1px 8px",fontSize:"13px"}}>venmo</button>
                </h4>
                <br/>
                <h4 style={{marginTop:"30px", fontFamily:"Montserrat", fontWeight:100, textAlign:'center', lineHeight:"30px"}}>
                However, if you prefer to give a gift from our registry, <br/>
                we are registered at Amazon, Bed Bath & Beyond, and Crate & Barrel.
                </h4>
                 <Modal show={this.state.show} onHide={this.handleHide} container={this} aria-labelledby="contained-modal-title">
                    <Modal.Header closeButton> <Modal.Title id="contained-modal-title"> Make Contribution</Modal.Title> </Modal.Header>
                    <Modal.Body>  
                    <div style={{width:"100%", textAlign:"center"}}>
                        
                        <img src={require('../../photos/venmo.jpg')} alt=' ' style={{width:"50%",margin:"auto"}} />
                    </div>


                    </Modal.Body>
                    <Modal.Footer> <Button onClick={this.handleHide}>Close</Button> </Modal.Footer>
                </Modal>
            </div>
        );
    }
    
}

class EachRegistry extends Component{
    render(){
        let imgUrl = "./" + this.props.imgSource + ".png"
        return(
            <a href={this.props.link} target="_blank">
                <div className="registry-card">
                <img src={require(imgUrl)} alt=''/>
                <br/><br/><br/>
                <h5>Shop their registry!</h5>
                </div>
            </a>
        );
    }
}

class Registry extends Component{
    render(){
        return(
            <div>
                <div style={{margin:50,marginTop:0}}>
                    <div style={{width:"100%",borderBottom:"1px solid #01385E",position:"relative",marginBottom:60}}>
                        <div style={{fontSize:29,fontFamily:"Montserrat", width:190,color:"#01385E",background:"white", position:"absolute",left:0,textAlign:"center",right:0,top:-23,margin:"auto"}}>Registry</div>
                    </div>
                </div>
                <Contribution/>
                <div style={{margin:"auto",textAlign:"center"}}>
                    <EachRegistry imgSource="bbb" link="https://www.bedbathandbeyond.com/store/giftregistry/view_registry_guest.jsp?registryId=545221049&eventType=Wedding&pwsurl="/>
                    <EachRegistry imgSource="cb" link="https://www.crateandbarrel.com/gift-registry/leah-bae-and-kevin-jung/r5742308"/>
                    <EachRegistry imgSource="amazon" link="https://www.amazon.com/wedding/leah-bae-kevin-jung-roswell-september-2018/registry/3B7PGJ2HGXJPU"/>
                </div>
                <h4 style={{marginTop:"30px", fontFamily:"Montserrat", fontWeight:100, textAlign:'center', lineHeight:"30px"}}>
                    We are grateful beyond words for your support and generosity. It means the world to us!
                </h4>
                <br/><br/>
                <div style={{width:"90%",borderBottom:"1px solid #01385E",position:"relative",margin:"auto", marginBottom:65}}>
                    <div style={{fontSize:29,fontFamily:"Montserrat", width:100,color:"#01385E",background:"white", position:"absolute",left:0,textAlign:"center",right:0,top:-23,margin:"auto"}}>&#9825;</div>
                </div>
            </div>
        );
    }
}


export default Registry;
