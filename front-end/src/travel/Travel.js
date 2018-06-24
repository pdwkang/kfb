import React, {Component} from 'react';

class Item extends Component{
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }
	render(){
    	return (
            <div className="col-sm-6 col-xs-12"  style={{height:"20vw", minHeight:"200px",padding:15,paddingLeft:0,paddingRight:50,marginBottom:50}}>
                <div style={{}}>
                    <img src={this.props.image} alt='' style={{height:"10vw",minHeight:"200px",float:"left",filter:"brightness(120%)", paddingRight:30}} />
                    <div style={{}}>
                        <br/><span style={{fontSize:21,color:"#01385E"}}>{this.props.name}</span><br/>
                        <span style={{fontSize:17,fontFamily:"Lato",fontWeight:100}}>{this.props.gottado}</span><br/>
                        <br/><span style={{fontSize:15}}>{this.props.one}</span>
                        <br/><span style={{fontSize:15}}>{this.props.two}</span>
                        <br/><span style={{fontSize:13}}>{this.props.three}</span>
                    </div>
                </div>
      		</div>
		)
  	}
};

class Travel extends Component{
    render(){
        return(
            <div style={{margin:63,marginTop:0}}>
                <div style={{height:"auto"}} className="row">
                    <div style={{width:"100%",borderBottom:"1px solid #01385E",position:"relative",marginBottom:60}}>
                        <div style={{fontSize:29,fontFamily:"Montserrat", width:170,color:"#01385E",background:"white", position:"absolute",left:0,textAlign:"center",right:0,top:-23,margin:"auto"}}>Hotel</div>
                    </div>
                    <Item name="DoubleTree Hotel" gottado="678-352-3127" image={require('../../photos/hotel1.jpeg')}
                    one="1075 Holcomb Bridge Road" two="Roswell, GA 30076" three="SHUTTLE SERVICE"/>
                    <Item name="Hilton Garden Inn" gottado="678-566-3900" image={require('../../photos/hotel2.jpeg')}
                    one="10975 Georgia Lane" two="Alpharetta, GA 30022" three="SHUTTLE SERVICE"/>
                    <Item name="The Hotel at Avalon" gottado="678-722-3600, ext 3626" image={require('../../photos/hotel3.jpg')}
                    one="9000 Avalon Blvd" two="Alpharetta, GA 30009" three=""/>
                    <Item name="Homewood Suites by Hilton Atlanta-Alpharetta" gottado="770-998-1622" image={require('../../photos/hotel4.jpg')}
                    one="10775 Davis Drive" two="Alpharetta, Georgia 30004" three=""/>
                    <br/><br/>
                    <div style={{textAlign:"center", fontSize:16,margin:"auto"}}>We will be staying at the Homewood Suites, but please feel free to reserve any hotel of your choice.</div>
                    <br/><br/>
                </div>
                <div style={{height:"auto"}} className="row">
                    <div style={{width:"100%",borderBottom:"1px solid #7F9BB3",position:"relative",marginBottom:60,marginTop:50}}>
                        <div style={{fontSize:29,fontFamily:"Montserrat",color:"#01385E", width:180,background:"white", position:"absolute",left:0,textAlign:"center",right:0,top:-23,margin:"auto"}}>Hiking</div>
                    </div>
                    <br/><br/>
                    <div style={{textAlign:"center", fontSize:16,margin:"auto"}}>The wedding venue is located at Vickery Creek Park.<br/><br/> For more information on the trail, please visit <a href="https://www.atlantatrails.com/hiking-trails/roswell-mill-vickery-creek-trail/">Vickery Creek Trail</a></div>
                </div>                    
                <br/><br/><br/>
                <div style={{height:"auto"}} className="row">
                    <div style={{width:"100%",borderBottom:"1px solid #7F9BB3",position:"relative",marginBottom:60,marginTop:50}}>
                        <div style={{fontSize:29,fontFamily:"Montserrat",color:"#01385E", width:180,background:"white", position:"absolute",left:0,textAlign:"center",right:0,top:-23,margin:"auto"}}>Shopping</div>
                    </div>
                    <br/>
                    <div style={{textAlign:"center", fontSize:16,margin:"auto"}}>
                        <a href="http://www.experienceavalon.com/directory/">The Avalon</a> 
                        <br/><br/>&<br/><br/>
                        <a href="http://www.visitroswellga.com/">Downtown Roswell</a>
                    </div>
                </div>
                <br/><br/><br/><br/>
                <div style={{height:"auto"}} className="row">
                <div style={{width:"100%",borderBottom:"1px solid #01385E",position:"relative"}}>
                    <div style={{fontSize:29,fontFamily:"Montserrat", width:100,color:"#01385E",background:"white", position:"absolute",left:0,textAlign:"center",right:0,top:-23,margin:"auto"}}>&#9825;</div>
                </div>
                </div>
            
            </div>
        );
    }
}


export default Travel;
