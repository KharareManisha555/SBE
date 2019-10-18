import React, { Component } from 'react';
import "./Sidebar.css";

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {
        
    }

    render() {
        return (
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 content">
                <ul className="sidebarUL">
                    <h2>Our Products</h2>
                    <li><a href="/">Winding Wire of Copper / Aluminum</a></li>
                    <li><a href="/">Copper Clad Aluminum Wire</a></li>
                    <li><a href="/">Electric Insulating Materials</a></li>
                    <li><a href="/">Kraft Paper</a></li>
                    <li><a href="/">Press Pahn Paper</a></li>
                    <li><a href="/">"F" & "H" Nomex-DU Pont</a></li>
                    <li><a href="/">Crepe Paper</a></li>
                    <li><a href="/">Sleeving "B" to "H" Class & Cotton Tape</a></li>
                    <li><a href="/">Polyster Garware</a></li>
                    <li><a href="/">Dr Beck Resins Hardener & Varnishes</a></li>
                </ul>
            </div>
        )
    }
}

export default Sidebar;