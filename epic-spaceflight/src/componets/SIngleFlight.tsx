import {
  Container,
  Row,
  Col,
  Card,
  Badge,
  Button,
  Spinner,
  Alert,
} from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import type { Result } from '../types/Flight'

function SingleFlight() {
  const { id } = useParams<{ id: string }>()
  const [flight, setFlight] = useState<Result | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (id) {
      getFlightDetails(id)
    }
  }, [id])

  const getFlightDetails = (flightId: string) => {
    setIsLoading(true)
    setError(null)

    fetch(`https://api.spaceflightnewsapi.net/v4/articles/${flightId}`)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Articolo non trovato')
        }
      })
      .then((data: Result) => {
        console.log('Flight details:', data)
        setFlight(data)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log('Errore:', err)
        setError(err.message)
        setIsLoading(false)
      })
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('it-IT', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  if (isLoading) {
    return (
      <Container className="my-5 text-center" style={{ minHeight: '73vh' }}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Caricamento...</span>
        </Spinner>
        <p className="mt-3">Caricamento dettagli articolo...</p>
      </Container>
    )
  }

  if (error) {
    return (
      <Container className="my-5" style={{ minHeight: '73vh' }}>
        <Alert variant="danger">
          <Alert.Heading>Errore</Alert.Heading>
          <p>{error}</p>
          <Link to="/">
            <Button variant="outline-danger">Torna alla home</Button>
          </Link>
        </Alert>
      </Container>
    )
  }

  if (!flight) {
    return (
      <Container className="my-5" style={{ minHeight: '73vh' }}>
        <Alert variant="warning">
          <Alert.Heading>Articolo non trovato</Alert.Heading>
          <p>L'articolo richiesto non è stato trovato.</p>
          <Link to="/">
            <Button variant="outline-warning">Torna alla home</Button>
          </Link>
        </Alert>
      </Container>
    )
  }

  return (
    <Container className="my-4" style={{ minHeight: '73vh' }}>
      <Row>
        <Col lg={8} className="mx-auto">
          <Card className="shadow-sm">
            <Card.Img
              variant="top"
              src={flight.image_url}
              style={{ height: '400px', objectFit: 'cover' }}
              alt={flight.title}
            />
            <Card.Body>
              <div className="mb-3">
                <Badge bg="primary" className="me-2">
                  {flight.news_site}
                </Badge>
                {flight.featured && (
                  <Badge bg="warning" text="dark">
                    In evidenza
                  </Badge>
                )}
              </div>

              <Card.Title as="h1" className="mb-3">
                {flight.title}
              </Card.Title>

              <div className="mb-3 text-muted">
                <small>
                  Pubblicato il {formatDate(flight.published_at)}
                  {flight.updated_at !== flight.published_at && (
                    <span>
                      {' '}
                      • Aggiornato il {formatDate(flight.updated_at)}
                    </span>
                  )}
                </small>
              </div>

              {flight.authors && flight.authors.length > 0 && (
                <div className="mb-3">
                  <strong>Autori: </strong>
                  {flight.authors.map((author, index) => (
                    <span key={index}>
                      {author.name}
                      {index < flight.authors.length - 1 && ', '}
                    </span>
                  ))}
                </div>
              )}

              <Card.Text style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                {flight.summary}
              </Card.Text>

              {flight.launches && flight.launches.length > 0 && (
                <div className="mb-3">
                  <h5>Lanci correlati:</h5>
                  {flight.launches.map((launch, index) => (
                    <Badge key={index} bg="success" className="me-2">
                      {launch.provider} - {launch.launch_id}
                    </Badge>
                  ))}
                </div>
              )}

              <div className="d-flex justify-content-between align-items-center mt-4">
                <a
                  href={flight.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Leggi articolo completo
                </a>
                <Link to="/">
                  <Button variant="outline-secondary">
                    Torna agli articoli
                  </Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default SingleFlight
