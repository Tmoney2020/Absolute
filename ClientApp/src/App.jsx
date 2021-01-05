import './custom.scss'
import React, { useState } from 'react'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'

import { FrontPage } from './pages/FrontPage'



export function App() {
  const [navbarIsOpen, setNavbarIsOpen] = useState(false)


  return (
<>
<Nav />
<FrontPage />
<Footer />
</>
  )
}