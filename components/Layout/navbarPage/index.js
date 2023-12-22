import React from 'react';
import { Container,  NavDropdown,  Navbar, NavbarCollapse } from 'react-bootstrap';
import Image from 'next/image';
import { BsSearch, BsUiRadiosGrid } from "react-icons/bs";


function NavbarPage() {
    return (
        <Navbar data-bs-theme = "primary">
            <Container fluid className="px-3 px-xl-5">
            <Navbar.Brand href="#">
          <Image
            src = "/assets/images/logo.png"
            width={50}
            height={50}
            alt="logo"
          />
        </Navbar.Brand>
        <NavbarCollapse>
          <NavDropdown
            id="navbarScrollingDropdown"
            className="hide-dd-icon bg-primary bg-opacity-10 rounded-3 text-primary px-3 py-3 py-xl-0 me-auto"
            title=<>
              <BsUiRadiosGrid /> Category
            </>
          >
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Ruby</NavDropdown.Item>
            <NavDropdown.Item href="#action4">React</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Java</NavDropdown.Item>
          </NavDropdown>
           
          </NavbarCollapse>
            </Container>
        </Navbar>
    );
 
}
export default NavbarPage;