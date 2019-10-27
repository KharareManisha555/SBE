import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect }        from 'react-redux';
import "./Sitemap.css";

class Sitemap extends Component{
    constructor(props) {
        super(props);
        this.state={
        }
    } 
    

    render(){
        return(
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 site">
                    <h2><span className="whiteColor">Site </span> Map</h2>
                    <br/>
                    <ul className="">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about-us">About us</a></li>
                        <li><a href="/products">Products</a>
                            <ul>
                                <li><a href="/sbe/winding-wire-of-copper-aluminium">Winding Wire of Copper / Aluminum</a></li>
                                <li><a href="/sbe/copper-clad-aluminium-wire">Copper Clad Aluminum Wire</a></li>
                                <li><a href="/sbe/electric-insulating-materials">Electric Insulating Materials</a></li>
                                <li><a href="/sbe/kraft-paper">Kraft Paper</a></li>
                                <li><a href="/sbe/press-pahn-paper">Press Pahn Paper</a></li>
                                <li><a href="/sbe/nomex-du-pont">"F" & "H" Nomex-DU Pont</a></li>
                                <li><a href="/sbe/crepe-paper">Crepe Paper</a></li>
                                <li><a href="/sbe/sleeving-and-cotton-tape">Sleeving "B" to "H" Class & Cotton Tape</a></li>
                                <li><a href="/sbe/polyster-garware">Polyster Garware</a></li>
                                <li><a href="/sbe/dr-beck-resins-hardener-varnishes">Dr Beck Resins Hardener & Varnishes</a></li>
                            </ul>
                        </li>
                        <li><a href="/contact-us">Contact us</a></li>
                        <li><a href="/enquiry">Enquiry</a></li>
                        <li><a href="/sitemap">Site Map</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default withRouter(Sitemap);