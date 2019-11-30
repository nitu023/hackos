import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}
handleonClick = (e) =>{
  console.log("helo")

}

render() {
  return (
    <Router>
      <MDBNavbar color="indigo" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Navbar</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="#!">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Features</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Dropdown</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu onClick = {this.handleonClick} >
                  <Link to = "/Chefsingup"><MDBDropdownItem >Chefsingup</MDBDropdownItem></Link>
                  <Link to = "/Chefsingup"><MDBDropdownItem >user</MDBDropdownItem></Link>
                  <Link to = "/Chefsingup"><MDBDropdownItem >restaurent</MDBDropdownItem></Link>
                 
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem> 
          </MDBNavbarNav>
          <MDBNavbarNav righ> 
          </MDBNavbarNav>
        </MDBCollapse>

      </MDBNavbar>
    </Router>
    );
    // <Link to="/create"><button className="btn btn-success btn-lg offset-5 mt-5">Create</button></Link>
       
  }
}

export default NavbarPage;