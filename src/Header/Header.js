import React, { Component } from 'react';
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
    }

    render() {
        return (
            <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12 col-xs-12">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 sbeHead">
                    <h1 className="col-lg-8 col-md-8 col-sm-12 col-xs-12 whiteColor">AAR AAR MITTAL & Sons</h1>
                    <span className="col-lg-3 col-lg-offset-1 col-md-3 col-md-offset-1 col-sm-12 col-xs-12 whiteColor">Call us : +91-9810186920</span>
                    <span className="col-lg-3 col-lg-offset-1 col-md-3 col-md-offset-1 col-sm-12 col-xs-12 whiteColor">Email-id : rrshobit@gmail.com</span>
                    <i className="fa fa-facebook socialFacebook pull-right"></i>
                    <i className="fa fa-google socialGogle pull-right"></i>
                    <i className="fa fa-twitter socialTwitter pull-right"></i>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <nav className="navbar navbar-default sbeHeader">
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
                                <ul className="nav navbar-nav sbeNav">
                                    <li className=""><a href="#">Home</a></li>
                                    <li><a href="#">About Us</a></li>
                                    <li className="dropdown">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Products <span className="caret"></span></a>
                                        <ul className="dropdown-menu sbeDropdown">
                                            <li><a href="#">Winding Wire of Copper / Aluminum</a></li>
                                            <li><a href="#">Copper Clad Aluminum Wire</a></li>
                                            <li><a href="#">Electric Insulating Materials</a></li>
                                            <li><a href="#">Kraft Paper</a></li>
                                            <li><a href="#">Press Pahn Paper</a></li>
                                            <li><a href="#">"F" & "H" Nomex-DU Pont</a></li>
                                            <li><a href="#">Crepe Paper</a></li>
                                            <li><a href="#">Sleeving "B" to "H" Class & Cotton Tape</a></li>
                                            <li><a href="#">Polyster Garware</a></li>
                                            <li><a href="#">Dr Beck Resins Hardener & Varnishes</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">Enquiry</a></li>
                                    <li><a href="#">Site Map</a></li>
                                </ul>

                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Header;