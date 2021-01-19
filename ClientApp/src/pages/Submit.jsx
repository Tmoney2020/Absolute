import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { useDropzone } from 'react-dropzone'
import Dropzone from 'react-dropzone'


export function Submit(props) {
const [errorMessage, setErrorMessage] = useState()

const history =useHistory()

const [newProject, SetNewProject] = useState({
title: '',
shortDescription: '',
longDescription: '',
materials: '',
photoURLGrid1: '',
photoURLGrid2: '',
photoURLGrid3: '',
photoURLGrid4: '',
photoURLGrid5: '',
photoURLGrid6: '',
photoURLGrid7: '',
photoURLGrid8: '',
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

const onDropFile = async acceptedFiles => {
  const fileToUpload = acceptedFiles[0]
  console.log(fileToUpload)

  const formData = new FormData()

  formData.append('file', fileToUpload)

  const response = await fetch('/api/Uploads', {
    method: 'POST',
    headers: {},
    body: formData,
  })

  if (response.status === 200) {
    const apiResponse = await response.json()

    const url = apiResponse.url

    SetNewProject({ ...newProject, photoURL: url })
  } else {
    setErrorMessage('Unable to upload image')
  }
}

const { getRootProps, getInputProps, isDragActive } = useDropzone({
  onDrop: onDropFile,
})

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
            <div className="file-drop-zone alert alert-primary">
              <div {...getRootProps()}>
                <input
                {...getInputProps()} />
                {isDragActive
                  ? 'Drop the files here ...'
                  : 'Drag a picture of the restaurant here to upload!'}
              </div>
          </div>
          <div className="form-group mr-3 ml-3">
              <label for="exampleFormControlInput1">Photo URL 1:</label>
              <input
                type="text"
                className="form-control"
                id="photoURLGrid1"
                placeholder="Example: Project 1"
                value={newProject.photoURLGrid1}
                onChange={handleInputFieldsForSubmit}
              />
            </div>
            <div className="form-group mr-3 ml-3">
              <label for="exampleFormControlInput1">Photo URL 2:</label>
              <input
                type="text"
                className="form-control"
                id="photoURLGrid2"
                placeholder="Example: Project 1"
                value={newProject.photoURLGrid2}
                onChange={handleInputFieldsForSubmit}
              />
            </div>
            <div className="form-group mr-3 ml-3">
              <label for="exampleFormControlInput1">Photo URL 3:</label>
              <input
                type="text"
                className="form-control"
                id="photoURLGrid3"
                placeholder="Example: Project 1"
                value={newProject.photoURLGrid3}
                onChange={handleInputFieldsForSubmit}
              />
            </div>
            <div className="form-group mr-3 ml-3">
              <label for="exampleFormControlInput1">Photo URL 4:</label>
              <input
                type="text"
                className="form-control"
                id="photoURLGrid4"
                placeholder="Example: Project 1"
                value={newProject.photoURLGrid4}
                onChange={handleInputFieldsForSubmit}
              />
            </div>
            <div className="form-group mr-3 ml-3">
              <label for="exampleFormControlInput1">Photo URL 5:</label>
              <input
                type="text"
                className="form-control"
                id="photoURLGrid5"
                placeholder="Example: Project 1"
                value={newProject.photoURLGrid5}
                onChange={handleInputFieldsForSubmit}
              />
            </div>
            <div className="form-group mr-3 ml-3">
              <label for="exampleFormControlInput1">Photo URL 6:</label>
              <input
                type="text"
                className="form-control"
                id="photoURLGrid6"
                placeholder="Example: Project 1"
                value={newProject.photoURLGrid6}
                onChange={handleInputFieldsForSubmit}
              />
            </div>
            <div className="form-group mr-3 ml-3">
              <label for="exampleFormControlInput1">Photo URL 7:</label>
              <input
                type="text"
                className="form-control"
                id="photoURLGrid7"
                placeholder="Example: Project 1"
                value={newProject.photoURLGrid7}
                onChange={handleInputFieldsForSubmit}
              />
            </div>
            <div className="form-group mr-3 ml-3">
              <label for="exampleFormControlInput1">Photo URL 8:</label>
              <input
                type="text"
                className="form-control"
                id="photoURLGrid8"
                placeholder="Example: Project 1"
                value={newProject.photoURLGrid8}
                onChange={handleInputFieldsForSubmit}
              />
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