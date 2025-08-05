import { Navbar, Container, Nav, Button, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function MyHeader() {
  return (
    <header>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <Image height="40" src="/img.png" alt="SpaceLogo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="me-auto mb-2 mb-lg-0">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Nav.Link href="#" className="">
                TV Shows
              </Nav.Link>
              <Nav.Link href="#" className="">
                Movies
              </Nav.Link>
              <Nav.Link href="#" className="">
                Recently Added
              </Nav.Link>
              <Nav.Link href="#" className="">
                My List
              </Nav.Link>
            </Nav>
            <Button
              id="edit-button"
              variant="success"
              className="rounded-0 me-lg-4 me-sm-2 me-md-3 text-black fw-semibold mb-2 mb-lg-0"
            >
              Profile
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default MyHeader
