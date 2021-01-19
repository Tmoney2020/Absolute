import './custom.scss'

import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'

import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { Contact } from './pages/Contact'
import { FrontPage } from './pages/FrontPage'
import { AboutUs } from './pages/AboutUs'
import { Projects } from './pages/Projects'
import { Submit } from './pages/Submit'



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
  <Route path="/projects/:id">
    <Projects />
  </Route>
  <Route path="/contact">
    <Contact />
  </Route>
  <Route path="/aboutUs">
    <AboutUs />
  </Route> 
  <Route path="/submit">
    <Submit />
  </Route>
</Switch>
<Footer />
</div>
</div>
</>
  )
}