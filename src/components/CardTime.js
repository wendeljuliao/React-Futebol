import React, { Component, useEffect } from "react";
import "./Card.css";
//import Popup from "./Popup";
import axios from "axios";
//import { Redirect } from "react-router";

export default class CardTime {


    render() {

        return (
            <div class="line position-relative">
                {this.props.logado ? 
                <a onClick={(e) => this.deletePlaylist(e, this.props.num, this.props.setIsDelete)} className="botaoFecha position-absolute m-3" style={{ top: 0, right: 0 }}><img src="../../../Images/close_icon.png" style={{ width: '30px', height: 'auto' }} /></a>
                    : null}
                <div class="body" style={{ backgroundImage: `url(${this.props.bgimg})` }}>
                    <label class="title-card">{this.props.title}</label>
                    <label class="sub-card">{this.props.sub}</label>
                </div>
            </div>
        )
    }
}