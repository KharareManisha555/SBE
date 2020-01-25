import React, { Component } from 'react';
import {Helmet} from "react-helmet";
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
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Products</title>
                    {
                        this.state.products.map((data, i)=>{
                            return(
                                <link key={i} rel={data.title} href={"http://shribalajielectricals.in/products/sbe/"+data.title} />
                            );
                        })
                    }
                    <meta name="keywords" content="Shri Balaji Electricals, Dealers in all types of Insulating Materials, Electric PVC Tape, Kraft Paper, Nomex Insulation Paper, Insulated Fiberglass Sleevings, Cotton Tape, Garware Polyester Film, Insulation Varnish, Rubber Compound, Fibre Glass Products, Soldering Wires and Stics, Super Enamelled Copper Wires, Electronic, Steel Alloy Wire, GDR Presspahn Paper, Black Leatheroid Paper - Aspha make,  Undyed Leatheroid Paper, Khatema Kraft Paper, Heat Shrinkable Sleevs, Dr Beck - Elmo 1 A, Jyoti Insulating Varnish, Red Polyester Tape, White Polyester Tape, Industrial Fibreglass Cables, SBE, GenSurge Inc., shribalajielectricals.in, http://shribalajielectricals.in/, www.sribalajielectricals.net"></meta>
                    <meta name="description" content="Shri Balaji Electricals was established in the year 1980 at Mumbai, Maharashtra. We “Shri Balaji Electricals” are a Sole Proprietorship firm, engaged as the foremost Wholesaler And Trader of PVC Tapes, Fiberglass Sleevings, Insulating Paper and All Types Of Insulating Material. Our products are high in demand due to their premium quality and affordable prices. Furthermore, we ensure to timely deliver these products to our clients, through this we have gained a huge clients base in the market." />
                </Helmet>
            </div>
        )
    }
}
export default withRouter(Products);