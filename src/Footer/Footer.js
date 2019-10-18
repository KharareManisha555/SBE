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
                            Aaraar Mittal & Sons is one of the fastest growing distributors and supplier of winding wires and insulating Material that is used for manufacturing state of the art electronics and electrical equipments that are used across the industries. Aaraar Mittal & Sons is specialized in providing site specific solutions, custom made to meet the clients’ specific power needs, by carefully matching power supply
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-3 col-xs-12 sitemap">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <h3>Site Map</h3>
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/">About us</a></li>
                                    <li><a href="/">Products</a></li>
                                    <li><a href="/">RR Kabel</a></li>
                                    <li><a href="/">Contact us</a></li>
                                    <li><a href="/">Enquiry</a></li>
                                    <li><a href="/">Site Map</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-3 col-xs-12">
                            <h3>Get In Touch</h3>
                            <h4>AARAAR Mittal & Sons</h4>
                            Address : 1501, Bhagirath Palace, Chandni
                            <br/>
                            Chowk, Delhi - 110006.
                            <br/>
                            Mob. : +91-9810186920
                            <br/>
                            Phone : +91-11-23861453, 23867094, 23873556
                            <br/>
                            E-mail : rrshobit@gmail.com
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 footerBorderLine">
                            © 2017 AARAAR Mittal & Sons. All rights reserved. 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;