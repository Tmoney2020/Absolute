import './custom.scss'
import React, { useState } from 'react'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { Contact } from './pages/Contact'
import { FrontPage } from './pages/FrontPage'
import { AboutUs } from './pages/AboutUs'




export function App() {
  const [navbarIsOpen, setNavbarIsOpen] = useState(false)


  return (
<>
<Nav />
<Contact />
<Footer />
</>
  )
}