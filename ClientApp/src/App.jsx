import './custom.scss'

import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'

import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { Contact } from './pages/Contact'
import { FrontPage } from './pages/FrontPage'
import { AboutUs } from './pages/AboutUs'
import { Projects } from './pages/Projects'



export function App() {
  const [navbarIsOpen, setNavbarIsOpen] = useState(false)

  return (
<>
<div className="wholePage">
  <div className="contentWrap">
<Nav />
<Switch>
  <Route exact path="/">
    <FrontPage />
  </Route>
  <Route path="/project/:id">
    <Projects />
  </Route>
  <Route path="/contact">
    <Contact />
  </Route>
  <Route path="/aboutUs">
    <AboutUs />
  </Route>
</Switch>
<Footer />
</div>
</div>
</>
  )
}