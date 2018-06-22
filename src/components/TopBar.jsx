import React from 'react';
import {Nav, NavItem} from 'react-bootstrap';

export const TopBar = () => {
    return(
        <Nav bsStyle="pills">
            <NavItem href="/#hotel">
                Hotel Details
            </NavItem>
            <NavItem href="/#employees">
                Top Employees
            </NavItem>
        </Nav>
    );
}