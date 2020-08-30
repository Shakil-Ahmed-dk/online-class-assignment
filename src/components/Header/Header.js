import React from 'react';
import logo from '../../images/logo.png';
import image1 from '../../images/1.jpg';
import image2 from '../../images/2.jpg';
import image3 from '../../images/3.jpg';
import './Header.css';
import {Carousel, Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'

const Header = () => {
    
    return (
        <div className="header">
            
            <Navbar fixed="top" bg="dark" variant="dark">
                <Navbar.Brand href="#home"><h2>SK Academy</h2></Navbar.Brand>
               
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#courses">Courses</Nav.Link>

                    <Nav.Link href="#teach">Teach on SK Academy</Nav.Link>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src={image1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Explore the Knowledge</h3>
                    
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                    className="d-block w-100"
                    src={image2}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Power of Learning</h3>
                    
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={image3}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Build your Career</h3>
                    
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Header;

