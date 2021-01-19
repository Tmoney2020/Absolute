import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'

export function Projects(props) {

const params = useParams()
const id = params.id

const [Project, SetProject] = useState({
  title: '',
  shortDescription: '',
  longDescription: '',
  materials: '',
  photoURL: '',
  photoURLGrid1: '',
  photoURLGrid2: '',
  photoURLGrid3: '',
  photoURLGrid4: '',
  photoURLGrid5: '',
  photoURLGrid6: '',
  photoURLGrid7: '',
  photoURLGrid8: '',
  })


  useEffect(() => {
    async function fetchProject() {
      const response = await fetch(`/api/Projects/${id}`)
      const apiData = await response.json()
  
      SetProject(apiData)
    }
  
    fetchProject()
  }, [id])


  return (
    <>
    <div className="projectPictures">
  <div className="topProjects">
  <h2>{Project.title}</h2>
    <img src={Project.photoURL} alt="Main Project Photo" className="mainProjectPhoto"/>
  </div>
  <div className="bottomProjects">
    <img src={Project.photoURLGrid1} alt="small photo grid" className="smallProjectPhoto"></img>
    <img src={Project.photoURLGrid2} alt="small photo grid" className="smallProjectPhoto"></img>
    <img src={Project.photoURLGrid3} alt="small photo grid" className="smallProjectPhoto"></img>
    <img src={Project.photoURLGrid4} alt="small photo grid" className="smallProjectPhoto"></img>
    <img src={Project.photoURLGrid5} alt="small photo grid" className="smallProjectPhoto"></img>
    <img src={Project.photoURLGrid6} alt="small photo grid" className="smallProjectPhoto"></img>
    <img src={Project.photoURLGrid7} alt="small photo grid" className="smallProjectPhoto"></img>
    <img src={Project.photoURLGrid8} alt="small photo grid" className="smallProjectPhoto"></img>
  </div>
</div>
<div className="projectInfoContainer">
<div className="projectInfo">
  <div className="description">
    <p><strong>Description of the job:</strong></p>
  <p>{Project.longDescription}</p>
  </div>
  <div className="materials">
  <p><strong>Materials Used:</strong></p>
  <p>{Project.materials}</p>
  </div>
</div>
</div>
    </>
  )
} 
