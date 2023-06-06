import React from "react";
import {
  Navbar,
  Nav,
  Button,
  Dropdown,
  Form,
  Collapse,
} from "bootstrap-4-react";

import { AiOutlineMenu, AiOutlineDownload } from "react-icons/ai";
import { MdSearch } from "react-icons/md";

function NavbarCom() {
  return (
    <Navbar expand="lg" light bg="light" border="bottom">
      <Navbar.Brand href="#">
        <AiOutlineMenu color="#3822B2" />
      </Navbar.Brand>
      <Navbar.Toggler target="#navbarSupportedContent" />
      <Collapse navbar id="navbarSupportedContent">
        <Navbar.Nav mr="auto">
          <Nav.Item>
            <Nav.Link>
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#3822B2",
                }}
              >
                LNTV
              </div>
            </Nav.Link>
          </Nav.Item>
        </Navbar.Nav>
        <Form inline my="2 lg-0">
          <div
            style={{
              padding: 10,
              background: "#3822B2",
              color: "white",
              marginRight: 20,
              fontWeight: "bold",
            }}
          >
            {" "}
            <AiOutlineDownload /> LATV APP
          </div>
          <div>
            <MdSearch size={30} color="#3822B2" />
          </div>
        </Form>
      </Collapse>
    </Navbar>
  );
}
export default NavbarCom;
