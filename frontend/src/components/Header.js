import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse} from "mdbreact";
function Header() {
  return (
    <MDBNavbar color="default-color" dark expand="md">
        <MDBNavbarBrand>
          <strong id="country" className="white-text">Countries</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler/>
        <MDBCollapse  navbar>
          <MDBNavbarNav left>
            <MDBNavItem>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
    </MDBNavbar>
  );
}
export default Header;