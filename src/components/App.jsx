import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import HotelComponent from './Hotel';
import Employees from './Employees';
import {TopBar} from './TopBar'
export default class App extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <TopBar/>
                    <Switch>
                        <Route path="/hotel" component={HotelComponent} />
                        <Route path="/employees" component={Employees} />
                        <Route path="*" component={HotelComponent} />
                    </Switch>
                </div>
            </HashRouter>
        );
    }
}
