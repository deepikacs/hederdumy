import React, { Component } from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown, Button,Glyphicon  } from 'react-bootstrap';



class Header extends Component {
  render () {
    return (
      <Navbar>
      {/* <Navbar.Header>
        <Navbar.Brand>
          <a href="#brand"><Glyphicon glyph="glyphicon glyphicon-repeat" /></a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header> */}
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={2} href="#" >
            <i className="fa fa-repeat" aria-hidden="true"></i>
          </NavItem>
        <NavItem eventKey={2} href="#">
        <i className="fa fa-play " aria-hidden="true"></i>
        </NavItem>
        <NavItem eventKey={2} href="#">
        <i className="fa fa-pause" aria-hidden="true">
        </i></NavItem>
        <NavItem eventKey={2} href="#">
        <i className="fa fa-undo" aria-hidden="true">
        </i></NavItem>
          <NavItem eventKey={2} href="#">
          <i className="fa fa-undo gly-rotate-252" aria-hidden="true">
          </i></NavItem>
          <NavItem eventKey={2} href="#">
          <i className="fa fa-undo gly-rotate-80" aria-hidden="true"></i>
          </NavItem>
          <NavItem eventKey={2} href="#" className="verticleline"></NavItem>
          <NavItem eventKey={2} href="#">
          <i className="fa fa-search mginleft-27" aria-hidden="true">
          </i><input type="text" placeholder="shipment ID/Invoice Number"/>
           </NavItem>
          <NavItem eventKey={2} href="#" className="verticleline"></NavItem>
          <NavItem eventKey={2} href="">
          <i className="fa fa-chevron-left mginleft-27" aria-hidden="true">
          </i><span className="margin-left20">Last 24 hours</span></NavItem>
          <NavItem eventKey={2} href="#">
          <i className="fa fa-chevron-right marginleft-10" aria-hidden="true"></i><span className="mgnleft15">June 12th 10:00 hrs to June 13th 10:00 hrs
          </span></NavItem>
          <NavItem eventKey={2} href="#" className="verticleline"></NavItem>
          <NavItem eventKey={2} href="#"><i className="fa fa-file-image-o mginleft-27 " aria-hidden="true"></i></NavItem>
       
       <NavItem eventKey={2} href="#" className="verticleline"></NavItem>
        <NavItem eventKey={2} href="#">
        <i className="fa fa-share-alt mginleft-27" aria-hidden="true">
        </i></NavItem>
        <NavItem eventKey={2} href="#">
        <i className="fa fa-th-list" aria-hidden="true"></i>
        </NavItem>
        <NavItem eventKey={2} href="#">
        <i className="fa fa-eye-slash" aria-hidden="true"></i>
        </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )
  }
}

export default Header;