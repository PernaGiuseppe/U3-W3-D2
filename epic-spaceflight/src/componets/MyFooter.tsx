import { Container, Row, Col, Button } from 'react-bootstrap'
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'

function MyFooter() {
  return (
    <footer className="text-dark-emphasis mt-9 mb-3 py-2 text-center text-md-start text-md-center text-lg-start">
      <Container className="px-3">
        <Row className="mb-3">
          <Col xs={12} className="px-0 text-center">
            <a href="#" className="text-black mx-2">
              <BsFacebook className="fs-4" />
            </a>
            <a href="#" className="text-black mx-2">
              <BsInstagram className="fs-4" />
            </a>
            <a href="#" className="text-black mx-2">
              <BsTwitter className="fs-4" />
            </a>
            <a href="#" className="text-black mx-2">
              <BsYoutube className="fs-4" />
            </a>
          </Col>
        </Row>

        <Row className="my-4 ">
          <Col xs={12} className="text-center">
            <Button
              size="sm"
              className="rounded-0 px-4 btn-outline-black-custom"
            >
              Contattaci
            </Button>
          </Col>
        </Row>

        <Row>
          <Col xs={12} className="text-center text-black">
            <p className="text-black small mb-0">
              &copy; 2025 EpicSpaceflight, Inc.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default MyFooter
