import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import "./Products.css";

class Products extends Component{
    constructor(props) {
        super(props);
        this.state={
            products : [
                {
                    image : "/images/pic10.jpg",
                    title : " Copper Clad Aluminum <br/> Wire"
                },
                {
                    image : "/images/pic2.jpg",
                    title : "Electric Insulating <br/> Materials"
                },
                {
                    image : "/images/pic3.jpg",
                    title : "Winding Wire of Copper / <br/> Aluminum"
                },
                {
                    image : "/images/pic4.jpg",
                    title : "Kraft Paper"
                },
                {
                    image : "/images/pic5.jpg",
                    title : "Press Pahn Paper"
                },
                {
                    image : "/images/pic6.jpg",
                    title : 'F" & "H" Nomex-DU Pont'
                },
                {
                    image : "/images/pic7.jpg",
                    title : "Crepe Paper"
                },
                {
                    image : "/images/pic8.jpg",
                    title : 'Sleeving "B" to "H" Class <br/> & Cotton Tape'
                },
                {
                    image : "/images/pic9.jpg",
                    title : "Dr Beck Resins Hardener <br/> & Varnishes"
                },
                {
                    image : "/images/pic10.jpg",
                    title : "Polyster Garware"
                },
            ]
        }
    } 
    

    render(){
        return(
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 products">
                    <h3><span className="whiteColor">Our </span> Products</h3>
                    <br/>
                    <ul className="">
                        {
                            this.state.products.map((data, index)=>{
                                return(
                                    <li key="index" className="">
                                        <img src={data.image} />
                                        <div className="imgTitle" dangerouslySetInnerHTML={{__html: data.title}}></div>
                                    </li>
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