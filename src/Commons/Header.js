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
        <i className="fa fa-play" aria-hidden="true"></i>
        </NavItem>
        <NavItem eventKey={2} href="#">
        <i className="fa fa-pause" aria-hidden="true">
        </i></NavItem>
        <NavItem eventKey={2} href="#">
        <i className="fa fa-undo" aria-hidden="true">
        </i></NavItem>
          <NavItem eventKey={2} href="#">
          <i className="fa fa-repeat " aria-hidden="true">
          </i></NavItem>
          <NavItem eventKey={2} href="#">
          <i className="fa fa-repeat mycontent-left  " aria-hidden="true"></i>
          </NavItem>
          <NavItem eventKey={2} href="#" className="abc"></NavItem>
          <NavItem eventKey={2} href="#">
          <i className="fa fa-search search" aria-hidden="true">
          </i><input type="text" placeholder="shipment ID/Invoice Number"/>
           </NavItem>
          
          <NavItem eventKey={2} href="">
          <i className="fa fa-chevron-left mycontent-right " aria-hidden="true">
          </i><span className="content">Last 24 hours</span></NavItem>
          <NavItem eventKey={2} href="#">
          <i className="fa fa-chevron-right mycontent-left" aria-hidden="true"></i>June 12th 10:00 hrs to June 13th 10:00 hrs
          </NavItem>
          <NavItem eventKey={2} href="#"><i className="fa fa-file-image-o mycontent-left" aria-hidden="true"></i></NavItem>
        {/* </Nav>
        <Nav pullRight> */}
        <NavItem eventKey={2} href="#">
        <i className="fa fa-share-alt" aria-hidden="true">
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