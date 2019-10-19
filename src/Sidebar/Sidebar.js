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
                    <li><a href="/sbe/winding-wire-of-copper-aluminium">Winding Wire of Copper / Aluminum</a></li>
                    <li><a href="/sbe/copper-clad-aluminium-wire">Copper Clad Aluminum Wire</a></li>
                    <li><a href="/sbe/electric-insulating-materials">Electric Insulating Materials</a></li>
                    <li><a href="/sbe/kraft-paper">Kraft Paper</a></li>
                    <li><a href="/sbe/press-pahn-paper">Press Pahn Paper</a></li>
                    <li><a href="/sbe/nomex-du-pont">"F" & "H" Nomex-DU Pont</a></li>
                    <li><a href="/sbe/crepe-paper">Crepe Paper</a></li>
                    <li><a href="/sbe/sleeving-and-cotton-tape">Sleeving "B" to "H" Class & Cotton Tape</a></li>
                    <li><a href="/sbe/polyster-garware">Polyster Garware</a></li>
                    <li><a href="/sbe/dr-beck-resins-hardener-varnishes">Dr Beck Resins Hardener & Varnishes</a></li>
                </ul>
            </div>
        )
    }
}

export default Sidebar;