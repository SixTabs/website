import { React, Component } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

class Header extends Component {
  state = {};
  render() {
    return (
      <header
        className="nav-bar-style"
        style={{ backgroundColor: "#37517e", color: "white" }}
      >
        <Navbar collapseOnSelect expand="lg" className="nav-bar-style">
          <Container className="nav-bar-style">
            <Navbar.Brand
              style={{
                paddingLeft: "25px",
                color: "white",
              }}
              href="#home"
            >
              Six-Tabs
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav className="navbar-content-style">
                <Nav.Link
                  style={{
                    color: "white",
                    paddingLeft: "25px",
                    paddingRight: "25px",
                  }}
                  href="#"
                >
                  About us
                </Nav.Link>
                <Nav.Link
                  style={{
                    color: "white",
                    paddingLeft: "25px",
                    paddingRight: "25px",
                  }}
                  href="#"
                >
                  Service offered
                </Nav.Link>
                <Nav.Link
                  style={{
                    color: "white",
                    paddingLeft: "25px",
                    paddingRight: "25px",
                  }}
                  href="#"
                >
                  Journal
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}

export default Header;
