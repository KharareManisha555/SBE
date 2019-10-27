import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect }        from 'react-redux';
import "./Aboutus.css";

class Aboutus extends Component{
    constructor(props) {
        super(props);
        this.state={
        }
    } 
    

    render(){
        return(
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 aboutus">
                    <h2><span className="whiteColor">About </span> Us</h2>
                    <br/>
                    <p>Aaraar Mittal & Sons is one of the fastest growing distributors and supplier of winding wires and insulating Material that is used for manufacturing state of the art electronics and electrical equipments that are used across the industries. Aaraar Mittal & Sons is specialized in providing site specific solutions, custom made to meet the clients’ specific power needs, by carefully matching power supply/load combination for reliable system operation and hence creating satisfied users.</p>
                    <p>Company has been catering to the needs of electronic and electrical industry, especially the manufacturers of Transformers, Motor and Armature industry. We source out premium quality winding wires from most reliable manufacturers. Our technical experts properly check the quality of products prior to purchase and we follow the stringent quality check up procedures to provide flawless products to end users. We have vast and rich experience of 35 years in Electronics and Power industry covering almost all aspects of R & D, Quality Control, Production and Marketing & Sales.</p>
                    <p>We offer wide array of products that includes Super Enameled Copper Wire, Double Cotton / Paper Covered Wires/ Strips, Fiber Glass Covered Wires/ Strips, Submersible Wires/ Cables, Tinned Copper (Fuse) Wires/ Copper Rope, Prespahn, Triples Sheet “E” Class, Lethorid, P.C.B. Board, “F” & “H” Nomex , Vulcanised Fiber, Crepe Paper, Weidmann Make Board & Paper, Kraft Paper- ITC make, Polyester Film- Garware Make, Sleeving “B” to “H” Class & Cotton Tape, Eyer No. 7, Frysol, Solder Wire, Enamel Remover, Cork Sheet, etc.</p>
                    <p>We offer innovative product such as Enameled Copper Clad Aluminum Wire (ECCAW) have advantage over the Enameled Copper wire as the former are lighter in weight and is about one-third of the weight of the copper wire of the same thickness. ECCWA has about 1.5 times the DC resistance of copper wire. Since this wire is clad with copper so there is no need for special soldering as is the case with aluminum wire.</p>
                    <p>Company has been witnessing handsome growth under the leadership of is proprietor Mr. Shobhit Gupta who is leading the company from front and is not averse to taking calculated risks. It is all set to follow high speed growth path to reach the zenith of business excellence.</p>
                </div>
            </div>
        )
    }
}
export default withRouter(Aboutus);