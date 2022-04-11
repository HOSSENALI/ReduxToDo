import { tasks } from 'fontawesome';
import React from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, withRouter } from "react-router-dom";
import TestCounterHit from '../counter/TestCounterHit';
const Header = () => {
    const tasks = useSelector((state) => state.tasks)
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
                            <Link to="/task-details"> Task <span className='badge badge-danger'>{tasks.length}</span></Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/login"> Login</Link>
                        </Nav.Link>
                        <TestCounterHit/>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    </>);
}

export default Header;