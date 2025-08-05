import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { Root, Result } from '../types/Flight'
import { Link } from 'react-router-dom'

function AllTheFlights() {
  const [flights, setFlights] = useState<Result[]>([])
  useEffect(() => {
    getFlight()
  }, [])
  const getFlight = () => {
    fetch('https://api.spaceflightnewsapi.net/v4/articles')
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('errore nella chiamata API')
        }
      })
      .then((data: Root[]) => {
        console.log('DATA', data)
        setFlights(data)
        console.log(flights)
        // setIsLoading(false)
      })
      .catch((err) => {
        console.log('errore', err)
        // setIsLoading(false)
      })
  }
  return (
    <>
      {/* <Container className=" my-3" style={{ minHeight: '73vh' }}>
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <h2 className="text-center">Space Flights</h2>
          </Col>
        </Row>
        <Row>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Row>
      </Container> */}
    </>
  )
}

export default AllTheFlights
