import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'


function SingleCommentForList (props) {
  return (
    <div className="card mb-2">
    <div className="row no-gutters">
      <div className="col-sm-4">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAaDWBUcfsD44z-flbqvQtQ6lVHTprrhfPpw&usqp=CAU" className="card-img" alt="..."/>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{props.comment.name}</h5>
          <p className="card-text">{props.comment.body}</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
</div>
  )
}

export function AboutUs(props) {
  const history = useHistory()
  const[comments, SetComments]= useState([])
  const[newComment, SetNewComment] = useState({
    name: '',
    body: '',
  })

  const fetchComments = () => {
    fetch(`api/Comments`)
      .then(response => response.json())
      .then(apiData => SetComments(apiData))
  }

  useEffect(() => {
    fetch('/api/Comments')
      .then(response => response.json())
      .then(apiData => {SetComments(apiData)
  })
  }, [])

  const handleFormFieldChange = event => {
      const whichFieldChanged = event.target.id
      const newValueOfField = event.target.value
      
    SetNewComment({
      ...newComment,
      [whichFieldChanged]: newValueOfField,
    })
  }

  const handleFormSubmit = event => {
    event.preventDefault()

    fetch('/api/Comments', {
      method: 'POST',
      headers: { 'content-type': 'application/json'},
      body: JSON.stringify(newComment),
    }) 
    .then(response => response.json())
    .then(apiData => {
      fetchComments()
      SetNewComment({ ...newComment, name: '', body: '', })
    })

  }

return (
<>
<div className="jumbotron jumbotron-fluid p-5 jumboCenter mb-0">
  <div className="container">
    <h1 className="display-4">About Us</h1>
  </div>
</div>
<div className="aboutUs">
  <p className="aboutUsP">Absolute Flooring and Kitchen is a local family owned business. 
  Phil LaMacchia has been in business in Sarasota remodeling kitchens and bathrooms for 
  more than fifteen years. Phil listens to customers’ needs, helps design spaces, and provides 
  choices of quality materials.
  </p>
</div>
  <form onSubmit={handleFormSubmit}>
    <section className="comments">
      <div className="commentContainer mt-4">
        <h1>Post a Comment</h1>
        <p className="text-center">Leave a here comment here.</p>
        <input
            maxLength="15"
            placeholder="Name"
            id="name"
            value={newComment.name}
            onChange={handleFormFieldChange}
            />
          <textarea
            maxLength="75"
            placeholder="Add Comment"
            id="body"
            value={newComment.body}
            onChange={handleFormFieldChange}
            />
          <button className="btn btn-primary mt-2" type="submit">
                Post Comment
          </button>
      </div>
    </section>
  </form>
  {comments.map(comment => (
     <SingleCommentForList 
     key={comment.Id} 
     comment={comment}
     />
  ))}
</>
)
}