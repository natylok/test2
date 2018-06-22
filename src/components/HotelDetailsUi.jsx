import React from 'react';
import {Table} from 'react-bootstrap';
export const HotelDetails = ({hotelDetails, loaderStatus}) => {
    return (
        <Table>
            <thead>
                <tr>
                    <th>Available Rooms</th>
                    <th>Reserved Rooms</th>
                    <th>Checked in Rooms</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{hotelDetails.availableRooms}</td>
                    <td>{hotelDetails.reservedRooms}</td>
                    <td>{hotelDetails.checkedIn}</td>
                </tr>
            </tbody>
        </Table>
    );
}