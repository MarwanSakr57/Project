import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Footer from './Components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'

import {Router, Route, Link, BrowserRouter} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
      <h1>hello world</h1>
      <Footer />
     </BrowserRouter>
    </>
  )
}

export default App
