import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import logo from "./image/insert_image.png";

function HeaderBar() {
    return(
        <Navbar bg="myWhite" variant="light" sticky="top" expand="sm" collapseOnSelect>
            <Navbar.Brand>
                <img src={logo} width="50px" height="50px"/>
                Chore Divider
            </Navbar.Brand>
            
            <Navbar.Toggle/>
            <Navbar.Collapse>
                <Nav>
                <NavDropdown title="Groups">
                    <NavDropdown.Item href="groups/group1">Family</NavDropdown.Item>
                    <NavDropdown.Item href="groups/group2">Roommates</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="pet">Pet</Nav.Link>
                <Nav.Link href="calendar">Calendar</Nav.Link>
                <Nav.Link href="contact-us">Contact Us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
export default HeaderBar;