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
                        <img data-toggle="modal" data-target={"#showModal"} className="img-bordered" src={this.state.image} alt=""/>
                    </div>
                    <div className="modal fade col-lg-12 col-md-12 col-sm-12 col-xs-12" id={"showModal"} role="dialog">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="modal-content blockModal col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1 NOpadding">
                                <div className="modal-body blockModal-body col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <button type="button" className="cancelModal pull-right" data-dismiss="modal" data-target={"#showModal"}>&times;</button>
                                    <img src={this.state.image} alt="" />
                                    <h4>{this.state.title1} {this.state.title2}</h4>
                                </div>
                            </div>
                        </div>
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