import React from 'react';
import {Table,Image} from 'react-bootstrap';
import '../styles/employees.scss';
export const TopEmployees = ({topEmployees,loaderStatus}) => {
    const employeesList = topEmployees.map(employee => {
        return(
            <tr key={employee.id}> 
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.salesHours}</td>
                <td><Image src={employee.profileImageUrl} circle responsive/></td>
            </tr>
        );
    })
    return (
        <Table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Sales in hours</th>
                    <th>Profile Image</th>
                </tr>
            </thead>
            <tbody>
                {employeesList}
            </tbody>
        </Table>
    );
}