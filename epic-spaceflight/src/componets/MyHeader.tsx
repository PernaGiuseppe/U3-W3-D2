import { Navbar, Container, Nav, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function MyHeader() {
  return (
    <header>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#" className="me-5">
            <Image height="40" src="/img.png" alt="SpaceLogo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="me-auto mb-2 mb-lg-0">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Nav.Link href="#" className="">
                Space Safety
              </Nav.Link>
              <Nav.Link href="#" className="">
                Application
              </Nav.Link>
              <Nav.Link href="#" className="">
                Science & Exploration
              </Nav.Link>
              <Nav.Link href="#" className="">
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default MyHeader
