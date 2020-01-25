import React, { Component } from 'react';
import {Helmet} from "react-helmet";
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
                    <h3 className="blackColor">Shri Balaji Electricals</h3>
                    <p>
                        <b>Shop Address :</b> Shop No. 2, Peerbhoy Building, Ground Floor, 93, Princess Street, Lohar Chawl, Mumbai - 400002, Maharashtra, India.
                        <br/>
                        <br/>
                        <b>Office Address :</b> B-3, Devi Ekveera Building ‘A’ Co-operative HSG society 79, Old Nagardas Road, Near Abhyudya Co-operative Bank, Andheri East, Mumbai - 400056
                        <br/>
                        <br/>
                        <b>Warehouse Address :</b> Jai Bhagwan complex, godown number L4, behind Broadway cinema, Purna, Bhivandi, Dist Thane - 421302
                        <br/>
                        <br/>
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
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Contact Us</title>
                    <meta name="keywords" content="Shri Balaji Electricals, Dealers in all types of Insulating Materials, Electric PVC Tape, Kraft Paper, Nomex Insulation Paper, Insulated Fiberglass Sleevings, Cotton Tape, Garware Polyester Film, Insulation Varnish, Rubber Compound, Fibre Glass Products, Soldering Wires and Stics, Super Enamelled Copper Wires, Electronic, Steel Alloy Wire, GDR Presspahn Paper, Black Leatheroid Paper - Aspha make,  Undyed Leatheroid Paper, Khatema Kraft Paper, Heat Shrinkable Sleevs, Dr Beck - Elmo 1 A, Jyoti Insulating Varnish, Red Polyester Tape, White Polyester Tape, Industrial Fibreglass Cables, SBE, GenSurge Inc., shribalajielectricals.in, http://shribalajielectricals.in/, www.sribalajielectricals.net"></meta>
                    <meta name="description" content="Shri Balaji Electricals Address: Shop No. 2, Peerbhoy Building, Ground Floor, 93, Princess Street, Lohar Chawl, Mumbai-400 002, Maharashtra, India. Suresh Ahuja : +91 99200 47380, Manoj Ahuja : +91 98200 31782, Abhishek Ahuja : +91 98206 95966, Kanaya Ahuja : +91 75063 00835 shribalajielectricals63@gmail.com, ahujap63@yahoo.com" />
                </Helmet>
            </div>
        )
    }
}
export default withRouter(Contactus);