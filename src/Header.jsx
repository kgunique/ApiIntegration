import React from 'react'
// import 'bootstrap/dist/js/bootstrap.bundle'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'



const Header = () => {
    const history = useHistory();
    const user = JSON.parse(localStorage.getItem('user-info'));
    console.log(user);

    function logout() {
        localStorage.clear();
        history.push('/register')
    }
    return (
        <>
            <Navbar bg="dark" variant="dark">

                <Navbar.Brand href="#home">Product dashboard</Navbar.Brand>
                <Nav className="me-auto navbar_wrapper">
                    {
                        localStorage.getItem('user-info') ?
                            <>
                                <Link exact to="/add">Add Products</Link>
                                <Link exact to="/update">Update Products</Link>
                            </>
                            :
                            <>
                                <Link exact to="/">Login</Link>
                                <Link exact to="/register">Register</Link>
                            </>
                    }
                </Nav>
                {localStorage.getItem('user-info') ?

                    <Nav className="mr-auto navbar_wrapper">

                        <NavDropdown title={user && user.data}>
                            <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                            <NavDropdown.Item >My Profile</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                    : null
                }

            </Navbar>

        </>
    )
}

export default Header
