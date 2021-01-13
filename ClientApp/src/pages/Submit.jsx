import React, { useState } from 'react'
import { useHistory } from 'react-router'

export function Submit(props) {
const [errorMessage, setErrorMessage] = useState()

const history =useHistory()

const [newProject, SetNewProject] = useState({
title: '',
shortDescription: '',
longDescription: '',
materials: '',
})

const handleInputFieldsForSubmit = event => {
  const whichFieldChanged = event.target.id
  const newValue = event.target.value

  console.log(whichFieldChanged)

  SetNewProject({
    ...newProject,

    [whichFieldChanged]: newValue,
  })
}

const handleToSubmit = event => {
  event.preventDefault()

  fetch('/api/Projects', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(newProject),
  })
    .then(response => {
      if (response.status === 401) {
        return {
          status: 401,
          errors: { login: 'Not Authorized. Please create an account. ' },
        }
      } else {
        return response.json()
      }
    })
    .then(apiData => {
      if (apiData.errors) {
        setErrorMessage(Object.values(apiData.errors).join(' '))
      } else {
        history.push('/')
      }
    })
}

  return (
    <>
    <div className="wrapper wholeProfilePage">
    <div className="card-body">
          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}
        </div>
        <div className="ml-2 mt-3 mr-2 mb-4 bg-light">
          <div className="card-header bg-primary text-white">
            Create Your Project
          </div>
          <form onSubmit={handleToSubmit}>
            <div className="form-group mr-3 ml-3">
              <label for="exampleFormControlInput1">Project Title</label>
              <input
                maxLength="20"
                type="text"
                className="form-control"
                id="title"
                placeholder="Example: Project 1"
                value={newProject.title}
                onChange={handleInputFieldsForSubmit}
              />
            </div>
            <div className="form-group mr-3 ml-3">
              <label for="exampleFormControlTextarea1">ShortDescription</label>
              <textarea
                className="form-control"
                id="shortDescription"
                rows="3"
                value={newProject.shortDescription}
                onChange={handleInputFieldsForSubmit}
              ></textarea>
            </div>
            <div className="form-group mr-3 ml-3">
              <label for="exampleFormControlTextarea1">LongDescription</label>
              <textarea
                className="form-control"
                id="longDescription"
                rows="3"
                value={newProject.longDescription}
                onChange={handleInputFieldsForSubmit}
              ></textarea>
            </div>
            <div className="form-group mr-3 ml-3">
              <label for="exampleFormControlInput1">
              Materials
              </label>
              <textarea
                className="form-control"
                id="materials"
                placeholder="Hardwood Floor"
                rows="3"
                value={newProject.materials}
                onChange={handleInputFieldsForSubmit}
              ></textarea>
            </div>
            <button class="btn btn-primary ml-3 mb-2" type="submit">
              Create Project
            </button>
          </form>
        </div>
      </div>
    </>
  )
}