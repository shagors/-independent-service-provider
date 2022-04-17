import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top'>
                <Container>
                <Navbar.Brand as={Link} to='/'>SpotLight Studio</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='ms-auto'>
                        <Nav.Link as={Link} to='/checkout'>Checkout</Nav.Link>
                        <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
                        <Nav.Link as={Link} to='/about'>About Me</Nav.Link>
                        <Nav.Link>{user?.email}</Nav.Link>
                        <Nav.Link>
                            {user ? (
                                <button className='btn btn-info' onClick={() => signOut(auth)}>Logout</button>
                            ) : (
                                <Link
                                    to="/login"
                                    className="text-decoration-none text-white"
                                >
                                    Login
                                </Link>
                            )}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;