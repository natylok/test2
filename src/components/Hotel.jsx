import React, {Component} from "react";
import axios from 'axios';
import {APIS} from '../constants/apis';
import CacheService from '../services/cacheService';
import {HotelDetails} from './HotelDetailsUi';
export default class HotelComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            hotelDetails: {},
            loaderStatus:true
        } 
    }
    componentDidMount(){
        const hotelDetails = CacheService.getDataByKey('hotelsData');
        if(!hotelDetails){
            axios.get(APIS.getHotelDetails)
                .then(results => {
                    this.setState({
                        hotelDetails:results.data,
                        loaderStatus:false
                    });
                    CacheService.setDataByKey(results.data,'hotelsData');
                })
        }
        else{
            this.setState({
                hotelDetails,
                loaderStatus:false
            });
        }
    }
    render(){
        return(
            <HotelDetails {...this.state}/>
        );
    }
}