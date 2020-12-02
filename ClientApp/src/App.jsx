import './custom.scss'
import React, { useState } from 'react'
import { Nav } from './components/Nav'


export function App() {
  const [navbarIsOpen, setNavbarIsOpen] = useState(false)


  return (
    <Nav />
  )
}
