import './custom.scss'
import React, { useState } from 'react'
import { Nav } from './components/Nav'


export function App() {
  const [navbarIsOpen, setNavbarIsOpen] = useState(false)


  return (
<>
<Nav />
<div className="jumbotron m-5">
  <h1 className="display-5">Absolute Flooring & Kitchen Design</h1>
  <p className="lead">Exceptional Quality at Afforable Prices!</p>
  <hr className="my-4"/>
  <p>Contact us for a free estimate</p>
  <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
</div>
<div className ="job-grid">
<div className="job m-5">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFC9h2YBWRhibWKbdpHlLQpvDUmUcnzXCzSVaPsd_1FyS_tPebe1tNR-i8qQ&usqp=CAc" className="mr-3" alt="..."/>
  <div>
    <h5 className="mt-1">Job 1</h5>
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
  </div>
</div>
<div className="job m-5">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGrm4L0My-OtgctZeBxQnqe9cNJWeYbrCJnw&usqp=CAU" className="grid-picture" alt="..."/>
  <div>
    <h5 className="mt-1">Job 2</h5>
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudi. Donec lacinia congue felis in faucibus.
  </div>
</div>
<div className="job m-5">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFC9h2YBWRhibWKbdpHlLQpvDUmUcnzXCzSVaPsd_1FyS_tPebe1tNR-i8qQ&usqp=CAc" className="mr-3" alt="..."/>
  <div>
    <h5 className="mt-1">Job 3</h5>
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
  </div>
</div>
<div className="job m-5">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFC9h2YBWRhibWKbdpHlLQpvDUmUcnzXCzSVaPsd_1FyS_tPebe1tNR-i8qQ&usqp=CAc" className="mr-3" alt="..."/>
  <div>
    <h5 className="mt-1">Job 4</h5>
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
  </div>
</div>
</div>
<footer>
  <p>Absolute Flooring & Kitchen</p>
  <p>4305 Clark Rd, Sarasota, FL 34233</p>
  <p>
  <a href="#" className="footer-contact">Contact Us</a>
  </p>
</footer>
</>
  )
}
