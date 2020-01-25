import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import { connect }        from 'react-redux';
import {withRouter} from 'react-router-dom';
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
                    <h2><span className="blackColor">Site </span> Map</h2>
                    <br/>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about-us">About us</a></li>
                        <li><a href="/products">Products</a>
                            <ul className="padLeft15">
                            {
                                this.props.sidebarList.map((data, i)=>{
                                    return(
                                        <li key={i}><a href={'/sbe/'+data.toLowerCase().replace(/ /g, '-')}>{data}</a></li>
                                        
                                    );
                                })
                            }
                            </ul>
                        </li>
                        <li><a href="/contact-us">Contact us</a></li>
                        <li><a href="/enquiry">Enquiry</a></li>
                        <li><a href="/sitemap">Site Map</a></li>
                    </ul>
                </div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Site Map</title>
                    <link rel="home" href="http://shribalajielectricals.in/"  />
                    <link rel="aboutus" href="http://shribalajielectricals.in/about-us" />
                    <link rel="products" href="http://shribalajielectricals.in/products" />
                    <link rel="contactus" href="http://shribalajielectricals.in/contact-us" />
                    <link rel="enquiry" href="http://shribalajielectricals.in/enquiry" />
                    <link rel="sitemap" href="http://shribalajielectricals.in/sitemap" />
                    {
                        this.props.sidebarList.map((data, i)=>{
                            return(
                                <link key={i} rel={data} href={"http://shribalajielectricals.in/products/sbe/"+data.toLowerCase().replace(/ /g, '-')} />
                            );
                        })
                    }
                    <meta name="keywords" content="Shri Balaji Electricals, Dealers in all types of Insulating Materials, Electric PVC Tape, Kraft Paper, Nomex Insulation Paper, Insulated Fiberglass Sleevings, Cotton Tape, Garware Polyester Film, Insulation Varnish, Rubber Compound, Fibre Glass Products, Soldering Wires and Stics, Super Enamelled Copper Wires, Electronic, Steel Alloy Wire, GDR Presspahn Paper, Black Leatheroid Paper - Aspha make,  Undyed Leatheroid Paper, Khatema Kraft Paper, Heat Shrinkable Sleevs, Dr Beck - Elmo 1 A, Jyoti Insulating Varnish, Red Polyester Tape, White Polyester Tape, Industrial Fibreglass Cables, SBE, GenSurge Inc., shribalajielectricals.in, http://shribalajielectricals.in/, www.sribalajielectricals.net"></meta>
                    <meta name="description" content="Shri Balaji Electricals" />
                </Helmet>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        sidebarList       : state.sidebarList
    }
}
const mapDispachToProps = (dispach) =>{
    return {
        subBlockDataUrl : (subBlockData)=> dispach({
        type: subBlockData,
        }),
    }
}
export default connect(mapStateToProps, mapDispachToProps) (withRouter(Sitemap));