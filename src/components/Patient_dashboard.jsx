import React from 'react';
import './patient_dashboard.css';
import Profile from './Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoSearchOutline } from "react-icons/io5";
import { Navbar, Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function PatientProfile() {
  // const mystyle = {
  //   backgroundColor: 'rgb(210, 146, 29)',
  //   border: '1px solid rgb(210, 146, 29)',
  //   color: 'white',
  //   paddingLeft: '25px',
  //   paddingRight: '25px',
  // };

  return (
    <div  className='mainNav'>
      {/* <Navbar className="justify-content-between navbar-custom">
        <Form inline className="w-100">
          <Row className="search-row w-100">
            <Col xs="auto" className="search-col" style={{ flex: 1 }}>
              <Form.Control
                type="text"
                placeholder="Search"
                className="mr-sm-2 w-100"
              />
            </Col>
            <Col xs="auto">
              <Button type="submit" className="btn1 w-100" style={mystyle}>
                <IoSearchOutline /> Search
              </Button>
            </Col>
          </Row>
        </Form>
        <Form inline>
        <Link to='/book-appointment'>
          <Button type="submit" className="w-100" style={mystyle}>
            Book Appointment
          </Button>
          </Link>
        </Form>
      </Navbar> */}
      <Profile />
    </div>
  );
}

export default PatientProfile;
