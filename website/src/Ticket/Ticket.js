import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import "./Ticket.css";

class Ticket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subBlockData: {}
        }
    }
    componentDidMount() {
        var url = this.props.match.params.url;

        this.props.subBlockDataUrl(url);
        this.setState({
            subBlockData: this.props.subBlockData,
            title1: this.props.subBlockData.title1,
            title2: this.props.subBlockData.title2,
            productData: this.props.subBlockData.productData,
        })
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            subBlockData: nextProps.subBlockData,
            title1: nextProps.subBlockData.title1,
            title2: nextProps.subBlockData.title2,
            productData: nextProps.subBlockData.productData,
        })
    }
    render() {
        console.log('subBlockData', this.props.subBlockData, this.state.subBlockData, this.state.subBlockData && this.state.subBlockData.productData ? this.state.subBlockData.productData.description : '')
        return (
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 block">
                    <h3><span className="blackColor">{this.state.title1}</span>&nbsp;{this.state.title2}</h3>
                    <br />
                    <div className="blackColor" dangerouslySetInnerHTML={{ __html: this.state.subBlockData ? this.state.subBlockData.description : '' }}></div>
                    <br />
                    {
                        this.state.productData && this.state.productData.length > 0 ?
                            this.state.productData.map((data, i) => {
                                var className1 = '';
                                var className2 = 'col-lg-4 col-md-4 col-sm-12 col-xs-12';
                                if (data.imageData.length > 3) {
                                    className1 = 'col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1';
                                } else {
                                    var imgLength = data.imageData.length > 0 ? data.imageData.length % 3 : 0;
                                    if (imgLength == 0) {
                                        className1 = 'col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1';
                                        className2 = 'col-lg-4 col-md-4 col-sm-12 col-xs-12';
                                    } else if (imgLength == 1) {
                                        className1 = 'col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1';
                                        className2 = 'col-lg-12 col-md-12 col-sm-12 col-xs-12';
                                    } else if (imgLength == 2) {
                                        className1 = 'col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1';
                                        className2 = 'col-lg-6 col-md-6 col-sm-12 col-xs-12';
                                    }
                                }
                                
                                return (
                                    <div key={i} className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ticket">
                                        <label className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">{this.state.productData.length > 1 ? (i + 1)+'.' : null} {data ? data.productName : ""}</label>
                                        <div className="container block-images col-lg-3 col-md-3 col-sm-12 col-xs-12 NOpadding">
                                            <img className="img-bordered img-responsive" src={data && data.imageData && data.imageData.length > 0 ? data.imageData[0].image : null} alt="" />
                                            <div data-toggle="modal" data-target={"#showModal" + i} className="overlay">
                                                <div class="text">{parseInt(data.imageData.length - 1) > 0 && parseInt(data.imageData.length) > 1? '+'+parseInt(data.imageData.length - 1) : ''}</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                                            <div className="blackColor" dangerouslySetInnerHTML={{ __html: data ? data.productDetail : '' }}></div>
                                        </div>
                                        <div className="modal fade col-lg-12 col-md-12 col-sm-12 col-xs-12" id={"showModal" + i} role="dialog">
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <div className={"modal-content blockModal  NOpadding" + className1}>
                                                    <div className="modal-body blockModal-body col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        <button type="button" className="cancelModal pull-right" data-dismiss="modal" data-target={"#showModal" + i}>&times;</button>
                                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 displayTable">
                                                            {
                                                                data && data.imageData && data.imageData.length > 0 ?
                                                                    data.imageData.map((imgdata, j) => {
                                                                        if(data.imageData.length > 3){
                                                                            var imgLength = data.imageData.length > 0 ? data.imageData.length % 3 : 0;
                                                                            if (imgLength == 0) {
                                                                                className1 = 'col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1';
                                                                                className2 = 'col-lg-4 col-md-4 col-sm-12 col-xs-12';
                                                                            } else if (imgLength == 1){
                                                                                className1 = 'col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1';
                                                                                if (data.imageData.length === parseInt(j + 1)) {
                                                                                    className2 = 'col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 col-sm-12 col-xs-12 displayContent';
                                                                                }
                                                                            } else if (imgLength == 2){
                                                                                className1 = 'col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1';
                                                                                if (data.imageData.length === parseInt(j + 2)) {
                                                                                    className2 = 'col-lg-4 col-lg-offset-2 col-md-4 col-md-offset-2 col-sm-12 col-xs-12 displayContent';
                                                                                } else {
                                                                                    className2 = 'col-lg-4 col-md-4 col-sm-12 col-xs-12 displayContent';
                                                                                }
                                                                            }
                                                                        }
                                                                        return (
                                                                            <div key={j} className={className2}>
                                                                                <img src={imgdata.image} className="img-responsive" alt="" />
                                                                                <h4>{imgdata.name}</h4>
                                                                            </div>
                                                                        );
                                                                    })
                                                                :
                                                                null
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                );
                            })
                            :
                            null
                    }




                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        subBlockData: state.subBlockData,
    }
}
const mapDispachToProps = (dispach) => {
    return {
        subBlockDataUrl: (subBlockData) => dispach({
            type: subBlockData,
        }),
    }
}
export default connect(mapStateToProps, mapDispachToProps)(withRouter(Ticket));