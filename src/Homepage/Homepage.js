import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect }        from 'react-redux';
import "./Homepage.css";

class Homepage extends Component{
    constructor(props) {
        super(props);
        this.state={
        }
    } 
    

    render(){
        return(
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 homepage">
                    <h2><span className="whiteColor">Welcome to</span> AARAAR MITTAL & Sons</h2>
                    <br/>
                    <p>Aaraar Mittal & Sons is eminent Supplier and Distributor of winding wires and insulation material. Our assortment of products includes Super Enameled Copper Wire, Double Cotton / Paper Covered Wires/ Strips, Fiber Glass Covered Wires/ Strips, Submersible Wires/ Cables, Tinned Copper (Fuse) Wires/ Copper Rope, Prespahn, Triples Sheet “E” Class, Lethorid, P.C.B. Board, “F” & “H” Nomex , Vulcanised Fiber, Crepe Paper, Weidmann Make Board & Paper, Kraft Paper- ITC make, Polyester Film- Garware Make, Sleeving “B” to “H” Class & Cotton Tape, Eyer No. 7, Frysol, Solder Wire, Enamel Remover, Cork Sheet, etc. Company offers site specific solutions as per the specific power needs of the clients by carefully matching power supply/ load combination for reliable systems operation. Company has been catering to the needs of manufacturers of Transformers, Motor and Armature industry. We have vast experience of 35 years in Electronic and Power Industry covering all aspects of R & D, Quality Control, Production, Marketing and Sales.</p>
                    <p>We keep ourselves abreast with the latest technology and trends that are in vogue in the power wire industry. Company offers Enameled Copper Clad Aluminum Wire (ECCAW). This Copper Clad Aluminum wire is the new product that is replacing the traditionally used wires. It is bimetal through the way of cover the copper layer on the Aluminium wire. The product can be divided in a ratio of 40% Copper and 60% Aluminium by weight of conductors.</p>
                </div>
            </div>
        )
    }
}
export default withRouter(Homepage);