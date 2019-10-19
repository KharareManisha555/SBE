import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect }        from 'react-redux';
import "./Block.css";

class Block extends Component{
    constructor(props) {
        super(props);
        this.state={
        }
    } 
    componentDidMount(){
        var url = this.props.match.params.url;
        console.log('url', url);
        this.props.sendBlockData(url);
        this.setState({
            title1 : this.props.blockData.title1,
            title2 : this.props.blockData.title2,
            image  : this.props.blockData.image,
            para1  : this.props.blockData.para1,
            para2  : this.props.blockData.para2
        })
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            title1 : nextProps.blockData.title1,
            title2 : nextProps.blockData.title2,
            image  : nextProps.blockData.image,
            para1  : nextProps.blockData.para1,
            para2  : nextProps.blockData.para2
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
        blockData      : state.blockData,
    }
  }
  const mapDispachToProps = (dispach) =>{
    return {
      sendBlockData : (blockData)=> dispach({
        type: blockData,
      }),
    }
  }
  export default connect(mapStateToProps, mapDispachToProps)(withRouter(Block));