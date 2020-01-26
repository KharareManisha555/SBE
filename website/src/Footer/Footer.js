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
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            <h3>About us</h3>
                            <p>Shri Balaji Electricals was established in the year <b>1980 at Mumbai, Maharashtra</b>. We “<b>Shri Balaji Electricals</b>” are a <b>Sole Proprietorship</b> firm, engaged as the foremost <b>Wholesaler And Trader of PVC Tapes, Fiberglass Sleevings, Insulating Paper and All Types Of Insulating Material</b>. Our products are high in demand due to their premium quality and affordable prices. Furthermore, we ensure to timely deliver these products to our clients, through this we have gained a huge clients base in the market.</p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 row sitemap">
                            <div className="col-lg-3 col-md-2 col-sm-2 col-xs-12 sitemap"></div>
                            <div className="col-lg-6 col-md-8 col-sm-8 col-xs-12">
                                <h3>Site Map</h3>
                                <ul className="padLeft15">
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/about-us">About us</a></li>
                                    <li><a href="/products">Products</a></li>
                                    <li><a href="/contact-us">Contact us</a></li>
                                    <li><a href="/enquiry">Enquiry</a></li>
                                    <li><a href="/sitemap">Site Map</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-2 col-sm-2 col-xs-12 sitemap"></div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 footPadBtm15">
                            <h3>Get in Touch</h3>
                            <h4><b>Shri Balaji Electricals</b></h4>
                            <h5><b>• Shop Address :</b></h5>Shop No. 2, Peerbhoy Building, Ground Floor, 93, Princess Street, Lohar Chawl, Mumbai - 400002, Maharashtra, India.
                            <br/>
                            <h5><b>• Office Address :</b></h5>B-3, Devi Ekveera Building ‘A’ Co-operative HSG society 79, Old Nagardas Road, Near Abhyudya Co-operative Bank, Andheri East, Mumbai - 400056
                            <br/>
                            <h5><b>• Warehouse Address :</b></h5>Jai Bhagwan complex, godown number L4, behind Broadway cinema, Purna, Bhivandi, Dist Thane - 421302
                            <br/>
                            <br/>
                            <b>Mobile No.:</b> +91-9820695966
                            <br/>
                            <b>E-mail:</b> shribalajielectricals63@gmail.com
                            <br/>
                        </div>
                        
                    </div>
                    <div className="textFooter col-lg-12 col-md-12 col-sm-12 col-xs-12 footerBorderLine">
                        <div className="pull-left">
                            © 2019 Shri Balaji Electricals. All rights reserved. 
                        </div>
                        <div className="pull-right">
                            Designed and developed by <i>GenSurge Inc.</i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer;