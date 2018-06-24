import React, {Component} from 'react';
import $ from 'jquery';
import ReactTable from 'react-table'
const url = 'http://pauldkang.com:3030/videos';
const deleteUrl = 'http://pauldkang.com:3030/deleteGuest';
import 'react-table/react-table.css'
// POST { name: "paul", guests: null}
// POST { name: "paul", guests: 3}
// GET 



class Admin extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data:[]
        };
        this.getList = this.getList.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.addGuest = this.addGuest.bind(this);
        this.updateGuest = this.updateGuest.bind(this);
        this.deleteGuest = this.deleteGuest.bind(this);
        this.renderEditable = this.renderEditable.bind(this);
    }

    componentDidMount() {
        this.getList();
    }

    addGuest () {  
        var postObject = {
            name: "someName",
            guests:null,
            newGuest:true
        };
        $.postJSON(url, postObject, (guestData) => {
            this.getList();
        });
    }

    updateGuest () {  
        console.log(this.state.data)
        // var name = e.target.children[0].value || e.target.children[0].placeholder;
        // var guests = e.target.children[1].value;
        var postObject = {
            data:JSON.stringify(this.state.data)
        };
        $.post(url, postObject, (guestData) => {
            console.log("guestData")
            console.log(guestData)
            this.getList();
        });
    }
    deleteGuest (e) {  
        e.preventDefault();
        var name = e.target.parentElement.children[0].value || e.target.parentElement.children[0].placeholder
        var postObject = {
            name: name
        };
        $.post(deleteUrl, postObject, (guestData) => {
            this.getList();
        });
    }

    getList () {
        $.getJSON(url, (data) => {
            console.log(data)
            var guestData = JSON.parse(data[0].json)
            var data =[];  
            guestData.forEach((guest)=>{
                data.push({
                    name:guest.name,
                    guests:guest.guests
                });
            });
            var emptyRows = 100 - data.length;
            for(let i = 0; i<emptyRows; i++){
                data.push({
                    name:"",
                    guests:null
                })
            }
            this.setState({data: data});
        });
    }
    renderEditable(cellInfo) {
        return (
          <div
            style={{ backgroundColor: "#fafafa" }}
            contentEditable
            suppressContentEditableWarning
            onBlur={e => {
              const data = [...this.state.data];
              data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
              this.setState({ data });
            }}
            dangerouslySetInnerHTML={{
              __html: this.state.data[cellInfo.index][cellInfo.column.id]
            }}
          />
        );
      }
    render(){
        
          var columns=[
            {
              Header: "Name",
              accessor: "name",
              Cell: this.renderEditable
            },
            {
              Header: "Guests",
              accessor: "guests",
              Cell: this.renderEditable,
              width:100
            }
          ]
              return (
                <div>
                    <div style={{margin:50,marginTop:0}}>
                        <div style={{width:"100%",borderBottom:"1px solid #01385E",position:"relative",marginBottom:60}}>
                            <div style={{fontSize:29,fontFamily:"Montserrat", width:260,color:"#01385E",background:"white", position:"absolute",left:0,textAlign:"center",right:0,top:-23,margin:"auto"}}>Your Majesty</div>
                        </div>
                    </div>
                    <div style={{margin:50,width:"100%"}}>
                        <div style={{width:"50%",textAlign:"center"}}>
                            <ReactTable data={this.state.data} filterable
                                defaultFilterMethod={(filter, row) =>
                                String(row[filter.id]) === filter.value} columns={columns} defaultPageSize={10}/>  
                        </div>
                        <button className="btn update-button" onClick={this.updateGuest} style={{height:100,backgroundColor:"rgba(114,153,183,1)",color:"white",width:"50%"}}>UPDATE GUEST LIST</button>
                    </div>
                    
                    
                </div>
        )
    }
}


export default Admin;