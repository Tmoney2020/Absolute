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
<div className="projectPictures">
  <div className="leftSideProjects">
    <p>Job Title 1</p>
    <img src="https://images.ctfassets.net/79nimht05j33/4pvbRhZfYOqlKdDc4bRCdn/cc59f29d29e70d578b85e5d9c6ad164f/Remodel-Works-Gilly-3.jpg?w=1200&q=70" alt="Main Project Photo" className="mainProjectPhoto"/>
  </div>
  <div className="rightSideProjects">
    <img src="https://st.hzcdn.com/simgs/pictures/kitchens/queen-anne-whole-house-remodel-crd-design-build-img~6861f12b0c9b856f_4-6138-1-5dcf75d.jpg" alt="small photo grid" className="smallProjectPhoto"></img>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe2WcehzM-eQoyXUa3zmsjhPhMqP2ynbpjng&usqp=CAU" alt="small photo grid" className="smallProjectPhoto"/>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAs2FARkOFO0N6plyPNexfajbrLtHSW0cBzA&usqp=CAU" alt="small photo grid" className="smallProjectPhoto"/>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJbsY3OyqJ5wNuMzXZp4DFqrh-UbCDH2Zwww&usqp=CAU" alt="small photo grid" className="smallProjectPhoto"/>
    <img src="https://st.hzcdn.com/simgs/pictures/kitchens/queen-anne-whole-house-remodel-crd-design-build-img~6861f12b0c9b856f_4-6138-1-5dcf75d.jpg" alt="small photo grid" className="smallProjectPhoto"></img>
    <img src="https://st.hzcdn.com/simgs/pictures/kitchens/queen-anne-whole-house-remodel-crd-design-build-img~6861f12b0c9b856f_4-6138-1-5dcf75d.jpg" alt="small photo grid" className="smallProjectPhoto"></img>
    <img src="https://st.hzcdn.com/simgs/pictures/kitchens/queen-anne-whole-house-remodel-crd-design-build-img~6861f12b0c9b856f_4-6138-1-5dcf75d.jpg" alt="small photo grid" className="smallProjectPhoto"></img>
    <img src="https://st.hzcdn.com/simgs/pictures/kitchens/queen-anne-whole-house-remodel-crd-design-build-img~6861f12b0c9b856f_4-6138-1-5dcf75d.jpg" alt="small photo grid" className="smallProjectPhoto"></img>
    <img src="https://st.hzcdn.com/simgs/pictures/kitchens/queen-anne-whole-house-remodel-crd-design-build-img~6861f12b0c9b856f_4-6138-1-5dcf75d.jpg" alt="small photo grid" className="smallProjectPhoto"></img>
    <img src="https://st.hzcdn.com/simgs/pictures/kitchens/queen-anne-whole-house-remodel-crd-design-build-img~6861f12b0c9b856f_4-6138-1-5dcf75d.jpg" alt="small photo grid" className="smallProjectPhoto"></img>

  </div>
</div>
<div className="projectInfo">
  <p>Description of the job</p>
  <p>Materials Used</p>
</div>
<Footer />
</>
  )
}