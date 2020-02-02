import React, { Component } from 'react';
import { connect }        from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Helmet} from "react-helmet";
import "./Sidebar.css";

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {
        
    }
    getUrl(event){
        var id = event.target.id;
        this.props.subBlockDataUrl(id);
        this.props.history.push('/sbe/'+id);
    }
    render() {
        return (
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 content">
                <ul className="sidebarUL">
                    <h2>Our Products</h2>
                    {
                        this.props.sidebarList.map((data, i)=>{
                            return(
                                <li key={i} id={data.toLowerCase().replace(/ /g, '-')}  onClick={this.getUrl.bind(this)}>{data}</li>
                            );
                        })
                    }
                </ul>
                <Helmet>
                    <meta charSet="utf-8" />
                    {
                        this.props.sidebarList.map((data, i)=>{
                            return(
                                <link key={i} rel={data} href={"http://shribalajielectricals.in/products/sbe/"+data.toLowerCase().replace(/ /g, '-')} />
                            );
                        })
                    }
                    <meta name="keywords" content="Shri Balaji Electricals, Dealers in all types of Insulating Materials, Electric PVC Tape, Kraft Paper, Nomex Insulation Paper, Insulated Fiberglass Sleevings, Cotton Tape, Garware Polyester Film, Insulation Varnish, Rubber Compound, Fibre Glass Products, Soldering Wires and Stics, Super Enamelled Copper Wires, Electronic, Steel Alloy Wire, GDR Presspahn Paper, Black Leatheroid Paper - Aspha make,  Undyed Leatheroid Paper, Khatema Kraft Paper, Heat Shrinkable Sleevs, Dr Beck - Elmo 1 A, Jyoti Insulating Varnish, Red Polyester Tape, White Polyester Tape, Industrial Fibreglass Cables, SBE, GenSurge Inc., shribalajielectricals.in, http://shribalajielectricals.in/, www.sribalajielectricals.net"></meta>
                    <meta name="description" content="Shri Balaji Electricals" />
                </Helmet>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        subBlockData      : state.subBlockData,
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
  export default connect(mapStateToProps, mapDispachToProps) (withRouter(Sidebar));