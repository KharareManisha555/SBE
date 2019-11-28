import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import "./Contactus.css";

class Contactus extends Component{
    constructor(props) {
        super(props);
        this.state={
        }
    } 
    

    render(){
        return(
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 contactus">
                    <h2><span className="blackColor">Contact </span> Us</h2>
                    <br/>
                    <h4 className="blackColor">Shri Balaji Electricals</h4>
                    <p>
                        <b>Address:</b> Shop No. 2, Peerbhoy Building, Ground Floor,<br/> 93, Princess Street, Lohar Chawl,<br/> Mumbai-400 002, Maharashtra, India.<br/><br/>
                        
                        <b>Mobile No.:</b>
                        <br/>
                            1. Suresh Ahuja : +91 99200 47380,
                        <br/>
                            2. Manoj Ahuja : +91 98200 31782,
                        <br/>
                            3. Abhishek Ahuja : +91 98206 95966,
                        <br/>
                            4. Kanaya Ahuja : +91 75063 00835
                        <br/>
                        <br/>
                        <b>E-mail :</b>
                        <br/>
                        shribalajielectricals63@gmail.com, <br/>
                        ahujap63@yahoo.com
                    </p>
                </div>
            </div>
        )
    }
}
export default withRouter(Contactus);