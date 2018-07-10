import React, { Component } from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown, Button,Glyphicon,Grid,Row,Col  } from 'react-bootstrap';



class Header extends Component {
  render () {
    return (
      <Navbar expand="md">
        <Grid>
          <Row className="row-edit">
            <Col xs={12} md={12}>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#" >
              <i className="fa fa-repeat" aria-hidden="true"></i>
            </NavItem>
            <NavItem eventKey={2} href="#">
              <i className="fa fa-play " aria-hidden="true"></i>
            </NavItem>
            <NavItem eventKey={3} href="#">
              <i className="fa fa-pause" aria-hidden="true"></i>
            </NavItem>
            <NavItem eventKey={4} href="#">
              <i className="fa fa-undo" aria-hidden="true"></i>
            </NavItem>
            <NavItem eventKey={5} href="#">
              <i className="fa fa-undo gly-rotate-252" aria-hidden="true"></i>
            </NavItem>
            <NavItem eventKey={6} href="#">
              <i className="fa fa-undo gly-rotate-80" aria-hidden="true"></i>
            </NavItem>
            <NavItem eventKey={7} href="#" className="verticleline"></NavItem>
            <NavItem eventKey={8} href="#">
              <i className="fa fa-search mginleft-27" aria-hidden="true"></i>
              <input type="text" placeholder="shipment ID/Invoice Number"/>
            </NavItem>
            <NavItem eventKey={9} href="#" className="verticleline"></NavItem>
            <NavItem eventKey={10} href="">
              <i className="fa fa-chevron-left mginleft-27" aria-hidden="true"></i>
              <span className="margin-left20">Last 24 hours</span>
            </NavItem>
            <NavItem eventKey={11} href="#">
              <i className="fa fa-chevron-right marginleft-10" aria-hidden="true"></i>
              <span className="mgnleft15">June 12th 10:00 hrs to June 13th 10:00 hrs</span>
            </NavItem>
            <NavItem eventKey={12} href="#" className="verticleline"></NavItem>
            
            <NavItem eventKey={13} href="#"><i className="fa fa-file-image-o mginleft-27 " aria-hidden="true"></i></NavItem>
          
            <NavItem eventKey={14} href="#" className="verticleline"></NavItem>
            <NavItem eventKey={15} href="#">
              <i className="fa fa-share-alt mginleft-27" aria-hidden="true"></i>
            </NavItem>
            <NavItem eventKey={16} href="#">
              <i className="fa fa-th-list" aria-hidden="true"></i>
            </NavItem>
            <NavItem eventKey={17} href="#">
              <i className="fa fa-database" aria-hidden="true"></i>
            </NavItem>
        </Nav>
      </Navbar.Collapse>
      </Col>
      </Row>
      </Grid>
    </Navbar>

  //   <Navbar collapseOnSelect>
  //   <Navbar.Header>
  //     <Navbar.Brand>
  //       <a href="#brand">React-Bootstrap</a>
  //     </Navbar.Brand>
  //     <Navbar.Toggle />
  //   </Navbar.Header>
  //   <Navbar.Collapse>
  //     <Nav>
  //       <NavItem eventKey={1} href="#">
  //         Link
  //       </NavItem>
  //       <NavItem eventKey={2} href="#">
  //         Link
  //       </NavItem>
  //       <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
  //         <MenuItem eventKey={3.1}>Action</MenuItem>
  //         <MenuItem eventKey={3.2}>Another action</MenuItem>
  //         <MenuItem eventKey={3.3}>Something else here</MenuItem>
  //         <MenuItem divider />
  //         <MenuItem eventKey={3.3}>Separated link</MenuItem>
  //       </NavDropdown>
  //       <NavItem eventKey={1} href="#" >
  //             <i className="fa fa-repeat" aria-hidden="true"></i>
  //           </NavItem>
  //           <NavItem eventKey={2} href="#">
  //             <i className="fa fa-play " aria-hidden="true"></i>
  //           </NavItem>
  //           <NavItem eventKey={3} href="#">
  //             <i className="fa fa-pause" aria-hidden="true"></i>
  //           </NavItem>
  //           <NavItem eventKey={4} href="#">
  //             <i className="fa fa-undo" aria-hidden="true"></i>
  //           </NavItem>
  //           <NavItem eventKey={5} href="#">
  //             <i className="fa fa-undo gly-rotate-252" aria-hidden="true"></i>
  //           </NavItem>
  //           <NavItem eventKey={6} href="#">
  //             <i className="fa fa-undo gly-rotate-80" aria-hidden="true"></i>
  //           </NavItem>
  //           <NavItem eventKey={7} href="#" className="verticleline"></NavItem>
  //           <NavItem eventKey={8} href="#">
  //             <i className="fa fa-search mginleft-27" aria-hidden="true"></i>
  //             <input type="text" placeholder="shipment ID/Invoice Number"/>
  //           </NavItem>
  //           <NavItem eventKey={9} href="#" className="verticleline"></NavItem>
  //           <NavItem eventKey={10} href="">
  //             <i className="fa fa-chevron-left mginleft-27" aria-hidden="true"></i>
  //             <span className="margin-left20">Last 24 hours</span>
  //           </NavItem>
  //           <NavItem eventKey={11} href="#">
  //             <i className="fa fa-chevron-right marginleft-10" aria-hidden="true"></i>
  //             <span className="mgnleft15">June 12th 10:00 hrs to June 13th 10:00 hrs</span>
  //           </NavItem>
  //           <NavItem eventKey={12} href="#" className="verticleline"></NavItem>
            
  //           <NavItem eventKey={13} href="#"><i className="fa fa-file-image-o mginleft-27 " aria-hidden="true"></i></NavItem>
          
  //           <NavItem eventKey={14} href="#" className="verticleline"></NavItem>
  //           <NavItem eventKey={15} href="#">
  //             <i className="fa fa-share-alt mginleft-27" aria-hidden="true"></i>
  //           </NavItem>
  //           <NavItem eventKey={16} href="#">
  //             <i className="fa fa-th-list" aria-hidden="true"></i>
  //           </NavItem>
  //           <NavItem eventKey={17} href="#">
  //             <i className="fa fa-database" aria-hidden="true"></i>
  //           </NavItem>
  //     </Nav>
  //     <Nav pullRight>
  //       <NavItem eventKey={1} href="#">
  //         Link Right
  //       </NavItem>
  //       <NavItem eventKey={2} href="#">
  //         Link Right
  //       </NavItem>
  //     </Nav>
  //   </Navbar.Collapse>
  // </Navbar>
    )
  }
}

export default Header;