import Footer from './Components/Footer'
import EventCard from './Components/EventCard'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Router, Routes, Route, Link, BrowserRouter} from 'react-router-dom'
import './App.css'
import NavBar from './Components/Navbar'
import Home from './Pages/Home'
import MyEvents from './Pages/MyEvents'
import EventDetails from './Pages/EventDetails'
import CreateEvents from './Pages/CreateEvents'
import Events from './Pages/Events.jsx'
import { initialEvents } from '../Data/events.js'
import { useEffect,useState } from 'react'


function App() {
 const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  function fetchEvents() {
    setEvents(initialEvents);
    
  }

  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/Home" element={<Home events={events} />} />
      <Route path="/MyEvents" element={<MyEvents events={events} />} />
      <Route path="/Events" element={<Events events={events} />} />
      <Route path="/EventDetails" element={<EventDetails />} />
      <Route path="/CreateEvents" element={<CreateEvents />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
