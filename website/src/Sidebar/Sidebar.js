import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import { connect }        from 'react-redux';
import {withRouter} from 'react-router-dom';
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