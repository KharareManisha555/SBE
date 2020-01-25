import { connect }        from 'react-redux';
import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import $                    from 'jquery';
import "./Header.css";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {
        $('.dropdown-toggle').click(function(e) {
            if ($(document).width() > 768) {
                e.preventDefault();
                var url = $(this).attr('href');
                if (url !== '#') {
                window.location.href = url;
                }
            }
        });
        let links = document.getElementsByClassName('sbeLi');
    	
    	for (var i = 0; i <= links.length; i++) {
    		if (window.location.pathname === $(links[i]).find('a').attr('href')) {
    			
    			$(links[i]).addClass('current');
    		}
    		
    	}
    }

    render() {
        return (
            <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12 col-xs-12">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 sbeHead">
                    <div className="col-lg-7 col-md-7 col-sm-12 hidden-xs">
                        <img src="/images/sbelogo.jpg" className="pull-left marRight12" width="115"/>
                        <h1 className="marTop10 custH1 blackColor headerLogo">Shri Balaji Electricals</h1>
                        <h4 className="blackColor custH5 headerLogo">Dealers in all types of Insulating Materials</h4>
                    <div className="borderTop">
                    </div>
                    </div>
                    <div className="hidden-lg hidden-md hidden-sm">
                        <img src="/images/sbelogo.jpg" className="pull-left marRight12" width="100"/>
                        <h1 className="marTop10 blackColor headerLogo">Shri Balaji Electricals</h1>
                    </div>
                    <div className="col-lg-5 col-md-5 ">
                        <span className="padCustom marTop15 col-lg-12 col-md-9 col-sm-12 col-xs-12 blackColor"><b>Call us :</b> +91-9820695966</span>
                        <span className="padCustom col-lg-12 col-md-9 col-sm-12 col-xs-12 blackColor"><b>Email :</b> shribalajielectricals63@gmail.com</span>
                        <div className="col-lg-4 col-md-4 pull-right marTopN10">
                            <a href="https://www.facebook.com/Shri-Balaji-Electricals-101417767921726/notifications/"><i className="fa fa-facebook socialFacebook pull-right" title="Go to Facebook page"></i></a>
                            <a href="https://www.indiamart.com/shri-balaji-electrical-maharashtra/"><img src="/images/Indiamart.png" alt="" width="30" title="Go to India Mart profile" className="pull-right"/></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <nav className="navbar sbeHeader">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                {/* <a className="navbar-brand" href="#">Project name</a> */}
                            </div>
                            <div id="navbar" className="navbar-collapse collapse">
                                <ul className="nav sbeNav navbar-nav">
                                    <li className="sbeLi"><a className="customPad" href="/">Home</a></li>
                                    <li className="sbeLi"><a href="/about-us">About Us</a></li>
                                    <li className="sbeLi dropdown" >
                                        <a href="/products" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Products <span className="caret"></span></a>
                                        <ul className="dropdown-menu sbeDropdown">
                                            {
                                                this.props.sidebarList.map((data, i)=>{
                                                    return(
                                                        <li key={i}><a href={'/sbe/'+data.toLowerCase().replace(/ /g, '-')}>{data}</a></li>
                                                    );
                                                })
                                            }
                                        </ul>
                                    </li>
                                    <li className="sbeLi"><a href="/contact-us">Contact Us</a></li>
                                    <li className="sbeLi"><a href="/enquiry">Enquiry</a></li>
                                    <li className="sbeLi"><a href="/sitemap">Site Map</a></li>
                                </ul>

                            </div>
                        </div>
                    </nav>
                </div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <link rel="home" href="http://shribalajielectricals.in/"  />
                    <link rel="aboutus" href="http://shribalajielectricals.in/about-us" />
                    <link rel="products" href="http://shribalajielectricals.in/products" />
                    {
                        this.props.sidebarList.map((data, i)=>{
                            return(
                                <link key={i} rel={data} href={"http://shribalajielectricals.in/products/sbe/"+data.toLowerCase().replace(/ /g, '-')} />
                            );
                        })
                    }
                    <link rel="contactus" href="http://shribalajielectricals.in/contact-us" />
                    <link rel="enquiry" href="http://shribalajielectricals.in/enquiry" />
                    <link rel="sitemap" href="http://shribalajielectricals.in/sitemap" />
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
  export default connect(mapStateToProps, mapDispachToProps)(Header);