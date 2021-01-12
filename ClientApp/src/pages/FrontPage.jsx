import React, { useState, useEffect } from 'react'

function SingleProjectForList (props) {
  return (
    <div className="job m-5">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFC9h2YBWRhibWKbdpHlLQpvDUmUcnzXCzSVaPsd_1FyS_tPebe1tNR-i8qQ&usqp=CAc" className="mr-3" alt="..." />
      <div>
        <h5 className="mt-1">
          <a href="#">{props.project.title}</a>
        </h5>
        {props.project.shortDescription}
      </div>
    </div>
  )
}

export function FrontPage(props) {
  const [projects, SetProjects] = useState([])

  useEffect(() => {
    fetch('/api/Projects')
      .then(response => response.json())
      .then(apiData => {SetProjects(apiData)
  })
  }, [])

  return (
  <>
    <div className="jumbotron jumbotron-fluid p-5">
      <h1 className="display-5">Absolute Flooring & Kitchen Design</h1>
      <p className="lead">Exceptional Quality at Afforable Prices!</p>
      <hr className="my-3" />
      <p>Contact us for a free estimate</p>
      <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </div>
      <div className="job-grid">
        {projects.map(project => (
        <SingleProjectForList 
        key={project.id} 
        project={project} 
        />
        ))}
      </div>
  <div className="bannerContainer">
      <h1 className="productsTitle">Products & Brands</h1>
   <div className="productsTotal">
    <div>
      <h3>Cabinets:</h3>
      <p>Cabinet 1</p>
      <p>Cabinet 2</p>
      <p>Cabinet 3</p>
      <p>Cabinet 4</p>
      <p>Cabinet 5</p>
  </div>
    <div>
      <h3>Flooring:</h3>
      <p>Flooring 1</p>
      <p>Flooring 2</p>
      <p>Flooring 3</p>
      <p>Flooring 4</p>
      <p>Flooring 5</p>
      <p>Flooring 6</p>
    </div>
  </div>
</div>
  </>
  )
}
