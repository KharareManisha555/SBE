import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {Helmet} from "react-helmet";
import "./Aboutus.css";

class Aboutus extends Component{
    constructor(props) {
        super(props);
        this.state={
        }
    } 
    

    render(){
        return(
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 aboutus">
                    <h2><span className="blackColor">About </span> Us</h2>
                    <br/>
                    <p>Shri Balaji Electricals was established in the year <b>1980 at Mumbai, Maharashtra</b>. We “<b>Shri Balaji Electricals</b>” are a <b>Sole Proprietorship</b> firm, engaged as the foremost <b>Wholesaler And Trader of PVC Tapes, Fiberglass Sleevings, Insulating Paper and All Types Of Insulating Material</b>. Our products are high in demand due to their premium quality and affordable prices. Furthermore, we ensure to timely deliver these products to our clients, through this we have gained a huge clients base in the market.</p>
                </div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>About Us</title>
                    <meta name="description" content="Shri Balaji Electricals was established in the year 1980 at Mumbai, Maharashtra. We “Shri Balaji Electricals” are a Sole Proprietorship firm, engaged as the foremost Wholesaler And Trader of PVC Tapes, Fiberglass Sleevings, Insulating Paper and All Types Of Insulating Material. Our products are high in demand due to their premium quality and affordable prices. Furthermore, we ensure to timely deliver these products to our clients, through this we have gained a huge clients base in the market." />
                </Helmet>
            </div>
        )
    }
}
export default withRouter(Aboutus);