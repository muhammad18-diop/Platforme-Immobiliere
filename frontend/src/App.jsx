import { useState } from 'react'
import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom'
import About from './Pages/Aboute'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Inscription from './Pages/Inscription'
import Connexion from './Pages/Connexion'


function App() {
  const [count, setCount] = useState(0)

  return (
   
    <>
     <Navbar />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/inscription" element={<Inscription />} />
      <Route path="/connexion" element={<Connexion />} />

     </Routes>
    </>
  )
}

export default App
