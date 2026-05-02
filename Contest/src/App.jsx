import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/Navbar'
import Home from './Pages/Home'
import MyEvents from './Pages/MyEvents'
import EventDetails from './Pages/EventDetails'
import CreateEvents from './Pages/CreateEvents'
import Events from './Pages/Events.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/MyEvents" element={<MyEvents />} />
      <Route path="/Events" element={<Events />} />
      <Route path="/EventDetails" element={<EventDetails />} />
      <Route path="/CreateEvents" element={<CreateEvents />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
