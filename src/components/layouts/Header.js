import React from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import { Link, withRouter } from "react-router-dom";
const Header = () => {
    return (<>
        <Navbar bg="light" expand="lg">
            <div className="container">
                <Navbar.Brand href="#home">ToDo App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">

                        <Nav.Link>
                            <Link to="/">Home</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/about-us">About</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/task-details"> Task</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/login"> Login</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    </>);
}

export default Header;