import React, { Component } from 'react';
import { connect }        from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
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
                    <li id="winding-wire-of-copper-aluminium" onClick={this.getUrl.bind(this)}>Winding Wire of Copper / Aluminum</li>
                    <li id="copper-clad-aluminium-wire" onClick={this.getUrl.bind(this)}>Copper Clad Aluminum Wire</li>
                    <li id="electric-insulating-materials" onClick={this.getUrl.bind(this)}>Electric Insulating Materials</li>
                    <li id="kraft-paper" onClick={this.getUrl.bind(this)}>Kraft Paper</li>
                    <li id="press-pahn-paper" onClick={this.getUrl.bind(this)}>Press Pahn Paper</li>
                    <li id="nomex-du-pont" onClick={this.getUrl.bind(this)}>"F" & "H" Nomex-DU Pont</li>
                    <li id="crepe-paper" onClick={this.getUrl.bind(this)}>Crepe Paper</li>
                    <li id="sleeving-and-cotton-tape" onClick={this.getUrl.bind(this)}>Sleeving "B" to "H" Class & Cotton Tape</li>
                    <li id="polyster-garware" onClick={this.getUrl.bind(this)}>Polyster Garware</li>
                    <li id="dr-beck-resins-hardener-varnishes" onClick={this.getUrl.bind(this)}>Dr Beck Resins Hardener & Varnishes</li>
                </ul>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        subBlockData      : state.subBlockData,
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