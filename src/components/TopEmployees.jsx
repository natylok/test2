import React from 'react';
import {Table,Image,ProgressBar} from 'react-bootstrap';
import '../styles/employees.scss';
export const TopEmployees = ({topEmployees,loaderStatus}) => {
    const maxHours = topEmployees && topEmployees[0] && topEmployees[0].salesHours;
    const calculatePrecent = (employee) => {
        return (employee.salesHours / maxHours)*100;
    }
    const employeesList = topEmployees.map((employee,index) => {
        return(
            <div className="employee-wrapper" key={employee.id}>
                <Image src={employee.profileImageUrl} circle/>
                <div className="name-wrapper">
                    <span className="employee-name">{employee.firstName} {employee.lastName}</span>
                    <ProgressBar now={calculatePrecent(employee)}/>
                </div>
                <span className="employee-hours">{employee.salesHours} hours</span>
            </div>
        );
    })
    return (
        <div className="employees-wrapper">
            <span className="employees-stats">Employee stats</span>
            <div className="employees-details">
                {employeesList}
            </div>
        </div>
    );
}