import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyHeader from './componets/MyHeader'
import MyFooter from './componets/MyFooter'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AllTheFlights from './componets/AllTheFlights'
import SingleFlight from './componets/SIngleFlight'

function App() {
  return (
    <>
      <BrowserRouter>
        <MyHeader />
        <Routes>
          <Route path="/" element={<AllTheFlights />} />
          <Route path="/details" element={<SingleFlight />} />
        </Routes>
        <MyFooter />
      </BrowserRouter>
    </>
  )
}

export default App
