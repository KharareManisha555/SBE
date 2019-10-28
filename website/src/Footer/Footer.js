import React, { Component } from 'react';
import "./Footer.css";

class Footer extends Component{
    constructor(props) {
        super(props);
        this.state={
        }
    } 

    render(){
        return(
            <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12 col-xs-12">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 footer">
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <h3>About us</h3>
                            <p>Shri Balaji Electricals established in the year <b>1980 at Mumbai, Maharashtra</b>, We “<b>Shri Balaji Electricals</b>” are a <b>Sole Proprietorship</b> firm, engaged as the foremost <b>Wholesaler And Trader of PVC Tapes, Fiberglass Sleevings, Insulating Paper and All Types Of Insulating Material</b>. Our products are high in demand due to their premium quality and affordable prices. Furthermore, we ensure to timely deliver these products to our clients, through this we have gained a huge clients base in the market.</p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-3 col-xs-12 sitemap">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <h3>Site Map</h3>
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/about-us">About us</a></li>
                                    <li><a href="/products">Products</a></li>
                                    <li><a href="/contact-us">Contact us</a></li>
                                    <li><a href="/enquiry">Enquiry</a></li>
                                    <li><a href="/sitemap">Site Map</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-3 col-xs-12">
                            <h3>Get In Touch</h3>
                            <h4><b>Shri Balaji Electricals</b></h4>
                            <b>Address:</b> 
                            <br/>
                            Shop No. 2, Peerbhoy Building, Ground Floor, 93, Princess Street, Lohar Chawl, Mumbai-400002, Maharashtra, India
                            <br/>
                            <b>Mobile No.:</b>
                            <br/>
                                1. Suresh Ahuja - 9920047380,
                            <br/>
                                2. Manoj Ahuja - 9820031782,
                            <br/>
                                3. Abhishek Ahuja - 9820695966,
                            <br/>
                                4. Kanaya Ahuja - 7506300835
                            <br/>
                            <b>E-mail :</b>
                            <br/>
                            shribalajielectricals63@gmail.com, ahujap63@yahoo.com
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 footerBorderLine">
                            © 2019 Shri Balaji Electricals. All rights reserved. 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;