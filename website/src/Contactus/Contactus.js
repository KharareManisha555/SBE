import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect }        from 'react-redux';
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
                    <h2><span className="whiteColor">Contact </span> Us</h2>
                    <br/>
                    <h4 className="whiteColor">AARAAR Mittal & Sons</h4>
                    <p>
                        Address : 1501, Bhagirath Palace, Chandni<br/>
                        Chowk, Delhi - 110006.<br/>
                        Mob. : +91-9810186920<br/>
                        Phone : +91-11-23861453, 23867094, 23873556<br/>
                        E-mail : rrshobit@gmail.com<br/>
                        Web : rrmittal.in
                    </p>
                </div>
            </div>
        )
    }
}
export default withRouter(Contactus);