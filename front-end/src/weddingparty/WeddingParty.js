import React, {Component} from 'react';

class PartyPeople extends Component{
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }
	render(){
    	return (
            <div className="col-sm-6 col-xs-12"  style={{height:"20vw", minHeight:"200px",padding:15,paddingLeft:0,paddingRight:50,marginBottom:50}}>
                <div style={{}}>
                    <img src={this.props.image} alt='' style={{height:"17vw",minHeight:"200px",float:"left",filter:"brightness(120%)", paddingRight:30}} />
                    <div style={{}}>
                        <br/><span style={{fontSize:23,color:"#01385E"}}>{this.props.name}</span><br/>
                        <span style={{fontSize:18,fontFamily:"Lato",color:"#7F9BB3",fontWeight:100}}>{this.props.gottado}</span><br/>
                        <br/><span style={{fontSize:13}}>{this.props.whoami}</span>
                    </div>
                </div>
      		</div>
		)
  	}
};

class WeddingParty extends Component{
    render(){
        return(
            <div style={{margin:63,marginTop:0}}>
                <div style={{height:"auto"}} className="row">
                    <div style={{width:"100%",borderBottom:"1px solid #01385E",position:"relative",marginBottom:60}}>
                        <div style={{fontSize:29,fontFamily:"Montserrat", width:240,color:"#01385E",background:"white", position:"absolute",left:0,textAlign:"center",right:0,top:-23,margin:"auto"}}>Bridal Party</div>
                    </div>
                    <PartyPeople name="Synthia Wang" gottado="Matron of Honor" image={require('../../photos/g1.png')}
                    whoami="I met Synthia Wang in 9th grade biology class and we became inseparable ever since. This girl makes me laugh to no ends and emotionally supports me in all my stupid life choices. She is my wangsta and I will always be grateful to have her in my life." />
                    <PartyPeople name="Sara Kim" gottado="Bridesmaid" image={require('../../photos/g2.png')}
                    whoami="One of my oldest and smartest friend, I met Sara in the 6th grade at church. We instantly bonded over our love for dogs while making mud pies. She was the best college roommate and knew how to handle my emotions by p" />
                    <PartyPeople name="Sophia Bae" gottado="Bridesmaid" image={require('../../photos/g3.png')}
                    whoami="Sophia is my sister in law. She has a very kind heart and makes sure the family is fed during hard times. Brother is lucky to have her." />
                    <PartyPeople name="Natasha Liu" gottado="Bridesmaid" image={require('../../photos/g4.png')}
                    whoami="I met Natasha in AP biology and I was alway drawn to her for her beautiful heart. She is a great advice giver and not afraid to tell me the truth." />
                    <PartyPeople name="Ruth Sok" gottado="Bridesmaid" image={require('../../photos/g5.png')}
                    whoami="The first time I interacted with Ruth was for a piece of starburst during 4th grade Korean Summer School. She didn’t give me one, but I still decided to be friends with her. I admire her “go with the flow attitude” and teaches me that it is okay to be in  “IDGAF” mode sometimes. " />
                    <PartyPeople name="Becca Yun" gottado="Bridesmaid" image={require('../../photos/g6.png')}
                    whoami="I met Becca at church and we grew close to each other in college. She is a friend that I can always count on to be there for me and one of the most selfless person I know." />
                </div>
                <div style={{height:"auto"}} className="row">
                    <div style={{width:"100%",borderBottom:"1px solid #01385E",position:"relative",marginBottom:60,marginTop:50}}>
                        <div style={{fontSize:29,fontFamily:"Montserrat",color:"#01385E", width:240,background:"white", position:"absolute",left:0,textAlign:"center",right:0,top:-23,margin:"auto"}}>Grooms Party</div>
                    </div>
                    <PartyPeople name="James Kang" gottado="Best Man" image={require('../../photos/m1.png')}
                    whoami="My brother from another mother. Whether he remembers or not, James threw a basketball at my face in the 8th grade. We went to Sunday church, took same classes at Kennesaw State University, and transferred to UGA together. We were roommates until graduation and we still live in the same town." />
                    <PartyPeople name="Paul Kang" gottado="Groomsman" image={require('../../photos/m2.png')}
                    whoami="Everyday was a drinking day with Paul in college, my Bonnie and Clyde. He tries to drink as much as I do. He has failed every time, but he’s proud of his 800 in math SAT." />
                    <PartyPeople name="Sam Cha" gottado="Groomsman" image={require('../../photos/m3.png')}
                    whoami="My friend from elementary school. Pokemon cards were OUR life, literally. He was my wide receiver in street football,l but he was also my partner in crime at Kroger. #neverforget." />
                    <PartyPeople name="Hongjin Bae" gottado="Groomsman" image={require('../../photos/m4.png')}
                    whoami="The older brother I’ve always wanted. He has convinced me to play golf and I will beat him one day...ONE DAY!" />
                    <PartyPeople name="Alex Lee" gottado="Groomsman" image={require('../../photos/m5.png')}
                    whoami="His Aunt tried to set us up on a blind date. Thank goodness he wasn’t my taste. Basketball was our life at one point and we were unstoppable." />
                    <PartyPeople name="Michael Gong" gottado="Groomsman" image={require('../../photos/m6.png')}
                    whoami="Thanks to Michael, I was able to be a nomad at one point in life, not homeless. He is selfless and he is always willing to give himself up for another. No one else make homemade hot pot better than him." />
                    <PartyPeople name="Mike Jung" gottado="Groomsman" image={require('../../photos/m7.png')}
                    whoami="My brother made me who I am. He is the least selfish yet the most kind, and generous person I know . I remember getting into fights in middle school with other school mates because we were different. I always knew Mike will always have my back and I could not have asked for a better person to have spent 30 years of my early life." />
                </div>
                <br/><br/><br/>
                <div style={{width:"100%",borderBottom:"1px solid #01385E",position:"relative"}}>
                    <div style={{fontSize:29,fontFamily:"Montserrat", width:100,color:"#01385E",background:"white", position:"absolute",left:0,textAlign:"center",right:0,top:-23,margin:"auto"}}>&#9825;</div>
                </div>
            
            </div>
        );
    }
}


export default WeddingParty;
