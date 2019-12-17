import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import "./Products.css";

class Products extends Component{
    constructor(props) {
        super(props);
        this.state={
            products : [
                {
                    image : "/images/img1.jpg",
                    title : "PVC Tape Biocon <br/>Electric PVC Tape"
                },
                {
                    image : "/images/img9.jpg",
                    title : "Elmo Luft 1A -<br/> Varnish and Thinner"
                },
                {
                    image : "/images/img8.jpg",
                    title : "Garware Polyester<br/> Film"
                },
                {
                    image : "/images/img7.jpg",
                    title : "Electrical Insulation<br/> Kraft Paper"
                },
                {
                    image : "/images/img6.jpg",
                    title : "Nomex Insulation<br/> Paper"
                },
                {
                    image : "/images/img5.jpg",
                    title : 'Gdr Presspahn<br/> Paper'
                },
                {
                    image : "/images/img4.jpg",
                    title : "Kraft Paper"
                },
                {
                    image : "/images/img3.jpg",
                    title : 'Insulated Fiberglass<br/> Sleevings'
                },
                {
                    image : "/images/img2.jpg",
                    title : "Super Enamelled <br/> Copper Wires"
                },
            ]
        }
    } 
    

    render(){
        return(
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 products">
                    <h3><span className="blackColor">Our </span> Products</h3>
                    <br/>
                    <ul className="">
                        {
                            this.state.products.map((data, index)=>{
                                return(
                                    <div>
                                        <li key="index" className="effectImg">
                                            <img alt="" src={data.image} data-toggle="modal" data-target={"#showModal-"+index} className="productImg img-responsive"/>
                                            <div className="imgTitle" dangerouslySetInnerHTML={{__html: data.title}}></div>
                                        </li>
                                        <div className="modal fade col-lg-12 col-md-12 col-sm-12 col-xs-12" id={"showModal-"+index} role="dialog">
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <div className="modal-content blockModal col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1 NOpadding">
                                                    <div className="modal-body blockModal-body col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        <button type="button" className="cancelModal pull-right" data-dismiss="modal" data-target={"#showModal-"+index}>&times;</button>
                                                        <img src={data.image}  alt="" />
                                                        <div dangerouslySetInnerHTML={{__html: data.title}}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                        
                    </ul>
                </div>
            </div>
        )
    }
}
export default withRouter(Products);