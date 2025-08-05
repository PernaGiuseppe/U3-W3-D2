import { Container, Row, Col, Card, Button, Spinner } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import type { Root, Result } from '../types/Flight'
import { Link } from 'react-router-dom'

function AllTheFlights() {
  const [flights, setFlights] = useState<Result[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getFlight()
  }, [])

  const getFlight = () => {
    setIsLoading(true)
    fetch('https://api.spaceflightnewsapi.net/v4/articles')
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('errore nella chiamata API')
        }
      })
      .then((data: Root) => {
        console.log('DATA', data)
        setFlights(data.results)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log('errore', err)
        setIsLoading(false)
      })
  }

  return (
    <>
      <Container className="my-3" style={{ minHeight: '73vh' }}>
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <h2 className="text-center mb-4">Space Flights</h2>
          </Col>
        </Row>

        {isLoading ? (
          <Row className="justify-content-center">
            <Col xs={12} md={6}>
              <Spinner animation="border" variant="success" />
            </Col>
          </Row>
        ) : (
          <Row>
            {flights.map((flight) => (
              <Col
                key={flight.id}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                className="mb-4"
              >
                <Card style={{ width: '100%', height: '100%' }}>
                  <Card.Img
                    variant="top"
                    src={flight.image_url}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{flight.title}</Card.Title>
                    <Card.Text className="flex-grow-1">
                      {flight.summary.length > 100
                        ? `${flight.summary.slice(0, 100)}...`
                        : flight.summary}
                    </Card.Text>
                    <Link to={`/details/${flight.id}`} className="mt-auto">
                      <Button variant="primary" className="w-100">
                        Dettagli
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  )
}

export default AllTheFlights
