import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Recaptcha from 'react-recaptcha';
import $ from 'jquery';
import 'jquery-validation';
import jQuery from 'jquery';
import axios from 'axios';
import "./Enquiry.css";
import swal from 'sweetalert';

class Enquiry extends Component{
    constructor(props) {
        
        super(props);
        this.state={
            captchaError : '',
            captchaVerified : false
        }
        this.callbackFun = this.callbackFun.bind(this);
        this.captchaVerified = this.captchaVerified.bind(this);
    } 
    componentDidMount(){
          $.validator.addMethod("regxfirstName", function (value, element, regexpr) {
            return regexpr.test(value);
          }, "First Name should only contain letters & number.");
          $.validator.addMethod("regxlastName", function (value, element, regexpr) {
            return regexpr.test(value);
          }, "Last Name should only contain letters & number.");
          $.validator.addMethod("regxcompanyName", function (value, element, regexpr) {
            return regexpr.test(value);
          }, "Company Name should only contain letters & number.");
          $.validator.addMethod("regxaddress", function (value, element, regexpr) {
            return regexpr.test(value);
          }, "Address should only contain letters & number.");
          $.validator.addMethod("regxemailId", function (value, element, regexpr) {
            return regexpr.test(value);
          }, "Please enter valid email ID.");
          $.validator.addMethod("regxmobileNumber", function (value, element, regexpr) {
            return regexpr.test(value);
          }, "Please enter valid mobile number.");
          $.validator.addMethod("regxrequirement", function (value, element, regexpr) {
            return regexpr.test(value);
          }, "Requirements should only contain letters & number.");

          jQuery.validator.setDefaults({
            debug: true,
            success: "valid"
          });
      
        $("#enquiry").validate({
            rules: {
                firstName: {
                    required: true,
                    regxfirstName: /^[A-Za-z][A-Za-z0-9\-\s]*$/,
                },
                lastName: {
                    required: true,
                    regxlastName: /^[A-Za-z][A-Za-z0-9\-\s]*$/,
                },
                companyName: {
                    required: true,
                    regxcompanyName: /^[A-Za-z][A-Za-z0-9\-\s]*$/,
                },
                address: {
                    required: true,
                    regxaddress: /^[A-Za-z][A-Za-z0-9\-\s]*$/,
                },
                emailId: {
                    required: true,
                    regxemailId :  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                },
                mobileNumber: {
                    required: true,
                    regxmobileNumber: /^([7-9][0-9]{9})$/,
                },
                requirement: {
                    required: true,
                },
            },
            errorPlacement: function (error, element) {
              if (element.attr("name") == "firstName") {
                error.insertAfter("#firstName");
              }
              if (element.attr("name") == "lastName") {
                error.insertAfter("#lastName");
              }
              if (element.attr("name") == "companyName") {
                error.insertAfter("#companyName");
              }
              if (element.attr("name") == "address") {
                error.insertAfter("#address");
              }
              if (element.attr("name") == "emailId") {
                error.insertAfter("#emailId");
              }
              if (element.attr("name") == "mobileNumber") {
                error.insertAfter("#mobileNumber");
              }
              if (element.attr("name") == "requirement") {
                error.insertAfter("#requirement");
              }
            }
        });
    }
    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    submit(event){
        event.preventDefault();
        var formValues = {
            "firstName"     : this.state.firstName,
            "lastName"      : this.state.lastName,
            "companyName"   : this.state.companyName,
            "address"       : this.state.address,
            "emailId"       : this.state.emailId,
            "mobileNumber"  : this.state.mobileNumber,
            "requirement"   : this.state.requirement,
            "captcha"       : this.state.captcha
        }
        if($('#enquiry').valid()){
            if(this.state.captchaVerified == true){
                axios.post('/api/users/sendmail', formValues)
                .then((response)=>{
                    swal("Your Request Submitted successfully");
                    this.setState({
                        "firstName"     : '',
                        "lastName"      : '',
                        "companyName"   : '',
                        "address"       : '',
                        "emailId"       : '',
                        "mobileNumber"  : '',
                        "requirement"   : '',
                        "captcha"       : '',
                    });
                })
                .catch((error)=>{
                    console.log('error', error);
                })
            }else{
                this.setState({
                    captchaError : "Please verify captcha code"
                })
            }
        }
    }
    callbackFun(){
        console.log('Done!!!!');
    };
    captchaVerified(){
        console.log('verified');
        this.setState({
            captchaVerified : true,
            captchaError : ''
        })
    }
    reset(event){
        event.preventDefault();
        this.setState({
            "firstName"     : '',
            "lastName"      : '',
            "companyName"   : '',
            "address"       : '',
            "emailId"       : '',
            "mobileNumber"  : '',
            "requirement"   : '',
            "captcha"       : '',
        })
        window.location.reload();
    }
    render(){
        return(
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 enquiry">
                    <h2><span className="whiteColor">Enq</span>uiry</h2>
                    <br/>
                    <form id="enquiry" className="col-lg-12 col-md-12 col-sm-12 col-xs-12 enquiryform">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 formInput">
                            <label>Name: <span className="mandatory">*</span></label><br/>
                            <input value={this.state.firstName} ref="firstName" name="firstName" id="firstName" onChange={this.handleChange.bind(this)} placeholder="First Name" className="col-lg-12 col-md-12 col-sm-12 col-xs-12" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 formInput">
                            <label>&nbsp;<span className="mandatory"></span></label><br/>
                            <input value={this.state.lastName} ref="lastName" name="lastName" id="lastName" onChange={this.handleChange.bind(this)} placeholder="Last Name" className="col-lg-12 col-md-12 col-sm-12 col-xs-12" />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 formInput">
                            <label>Company Name: <span className="mandatory">*</span></label><br/>
                            <input value={this.state.companyName} ref="companyName" name="companyName" id="companyName" onChange={this.handleChange.bind(this)} className="col-lg-12 col-md-12 col-sm-12 col-xs-12" />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 formInput">
                            <label>Phone No: <span className="mandatory">*</span></label><br/>
                            <input value={this.state.mobileNumber} ref="mobileNumber" name="mobileNumber" id="mobileNumber" onChange={this.handleChange.bind(this)} className="col-lg-12 col-md-12 col-sm-12 col-xs-12" />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 formInput">
                            <label>Address: <span className="mandatory">*</span></label><br/>
                            <input value={this.state.address} ref="address" name="address"  id="address" onChange={this.handleChange.bind(this)} className="col-lg-12 col-md-12 col-sm-12 col-xs-12" />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 formInput">
                            <label>E-mail: <span className="mandatory">*</span></label><br/>
                            <input type="email" value={this.state.emailId} ref="emailId" name="emailId" id="emailId" onChange={this.handleChange.bind(this)} className="col-lg-12 col-md-12 col-sm-12 col-xs-12" />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 formInput">
                            <label>Requirement: <span className="mandatory">*</span></label><br/>
                            <textarea value={this.state.requirement} ref="requirement" name="requirement" onChange={this.handleChange.bind(this)} id="requirement" rows="4" className="col-lg-12 col-md-12 col-sm-12 col-xs-12"></textarea>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 formInput">
                        <Recaptcha
                            sitekey="6LdDpb8UAAAAAF--p9Mug9_kH1tEVEN4TBZK6UYG"
                            render="explicit"
                            onloadCallback={this.callbackFun}
                            type="image"
                            verifyCallback={this.captchaVerified}
                        />
                        <label className="captchaError">{this.state.captchaError}</label>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 formBtn">
                            <button className="btn" onClick={this.submit.bind(this)}>Submit</button> &nbsp; &nbsp;
                            <button className="btn" onClick={this.reset.bind(this)}>Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default withRouter(Enquiry);