import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect }        from 'react-redux';
import "./Enquiry.css";

class Enquiry extends Component{
    constructor(props) {
        super(props);
        this.state={
        }
    } 
    

    render(){
        return(
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 enquiry">
                    <h2><span className="whiteColor">Enq</span>uiry</h2>
                    <br/>
                    <form className="col-lg-12 col-md-12 col-sm-12 col-xs-12 enquiryform">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 formInput">
                            <label>Name: <span className="mandatory">*</span></label><br/>
                            <input placeholder="First Name" className="col-lg-12 col-md-12 col-sm-12 col-xs-12" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 formInput">
                            <label>&nbsp;<span className="mandatory"></span></label><br/>
                            <input placeholder="Last Name" className="col-lg-12 col-md-12 col-sm-12 col-xs-12" />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 formInput">
                            <label>Company Name: <span className="mandatory">*</span></label><br/>
                            <input className="col-lg-12 col-md-12 col-sm-12 col-xs-12" />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 formInput">
                            <label>Phone No: <span className="mandatory">*</span></label><br/>
                            <input className="col-lg-12 col-md-12 col-sm-12 col-xs-12" />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 formInput">
                            <label>Address: <span className="mandatory">*</span></label><br/>
                            <input className="col-lg-12 col-md-12 col-sm-12 col-xs-12" />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 formInput">
                            <label>E-mail: <span className="mandatory">*</span></label><br/>
                            <input className="col-lg-12 col-md-12 col-sm-12 col-xs-12" />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 formInput">
                            <label>Requirement: <span className="mandatory">*</span></label><br/>
                            <textarea rows="4" className="col-lg-12 col-md-12 col-sm-12 col-xs-12"></textarea>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 formInput">
                            <label>&nbsp;</label><br/>
                            <input className="col-lg-12 col-md-12 col-sm-12 col-xs-12" />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 formBtn">
                            <button className="btn">Submit</button> &nbsp; &nbsp;
                            <button className="btn">Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default withRouter(Enquiry);