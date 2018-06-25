import React, { Component } from "react";
import HotelComponent from './Hotel';
import Employees from './Employees';
import '../styles/app.scss';
export default class App extends Component {
    render() {
        return (
                <div className="wrapper"> 
                    <HotelComponent/>
                    <Employees/>
                </div>
        );
    }
}
