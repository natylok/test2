import React, {Component} from "react";
import axios from 'axios';
import {APIS} from '../constants/apis';
import CacheService from '../services/cacheService';
import EmployeeService from '../services/employeeService';
import {TopEmployees} from './TopEmployees';
export default class EmployeesComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            topEmployees: [],
            loaderStatus:true
        } 
    }
    componentDidMount(){
        const employeesData = CacheService.getDataByKey('employeesData');
        if(!employeesData){
            axios.get(APIS.getEmployeesData)
                .then(results => {
                    this.setState({
                        topEmployees:EmployeeService.getTopEmployeeSellers(results.data),
                        loaderStatus:false
                    });
                    CacheService.setDataByKey(results.data,'employeesData');
                })
        }
        else{
            this.setState({
                topEmployees:EmployeeService.getTopEmployeeSellers(employeesData),
                loaderStatus:false
            });
        }
    }
    render(){
        return(
            <TopEmployees {...this.state}/>
        );
    }
}