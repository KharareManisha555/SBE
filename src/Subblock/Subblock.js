import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect }        from 'react-redux';
import "./Subblock.css";

class Subblock extends Component{
    constructor(props) {
        super(props);
        this.state={
        }
    } 
    componentDidMount(){
        var url = this.props.match.params.url;
        console.log('url', url);
        this.props.subBlockDataUrl(url);
        this.setState({
            title1 : this.props.subBlockData.title1,
            title2 : this.props.subBlockData.title2,
            image  : this.props.subBlockData.image,
            para1  : this.props.subBlockData.para1,
            para2  : this.props.subBlockData.para2
        })
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            title1 : nextProps.subBlockData.title1,
            title2 : nextProps.subBlockData.title2,
            image  : nextProps.subBlockData.image,
            para1  : nextProps.subBlockData.para1,
            para2  : nextProps.subBlockData.para2
        })
    }
    render(){
        return(
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 block">
                    <h3><span className="whiteColor">{this.state.title1}</span>&nbsp;{this.state.title2}</h3>
                    <br/>
                    <div className="block-images">
                        <a href={this.state.image}><img className="img-bordered" src={this.state.image} alt=""/></a>
                    </div>
                    <br/>
                    <p className="para1">{this.state.para1}</p>
                    <p className="para2">
                        {this.state.para2 ?
                            this.state.para2.map((data, index)=>{
                                return(
                                    <div className="whiteColor" dangerouslySetInnerHTML={{ __html:data}}></div>
                                );
                            })
                            :
                            null
                        }
                    </p>
                    
                </div>
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
  export default connect(mapStateToProps, mapDispachToProps)(withRouter(Subblock));