import React from 'react';
import {Table} from 'react-bootstrap';
import '../styles/hotel.scss';
export const HotelDetails = ({hotelDetails, loaderStatus}) => {
    return (
        <div className="hotel-wrapper">
            <div className="hotel-stats">
                <span className="number">{hotelDetails.availableRooms}</span>
                <span className="title">Available Rooms</span>
            </div>
            <div className="hotel-stats">
                <span className="number">{hotelDetails.reservedRooms}</span>
                <span className="title">Reserved Rooms</span>
            </div>
            <div className="hotel-stats">
                <span className="number">{hotelDetails.checkedIn}</span>
                <span className="title">Checked in Rooms</span>
            </div>
        </div>
    );
}