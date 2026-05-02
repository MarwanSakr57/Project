import { useState } from 'react'
import Footer from './Components/Footer'
import EventCard from './Components/EventCard'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Router, Route, Link, BrowserRouter} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <BrowserRouter>
        <h1>hello world</h1>
        <EventCard />
        <Footer />
     </BrowserRouter>
    </div>
  )
}

export default App
