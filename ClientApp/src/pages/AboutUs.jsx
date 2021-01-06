import React from 'react'

export function AboutUs(props) {

return (
<>
<div className="jumbotron jumbotron-fluid p-5 jumboCenter mb-0">
    <div className="container">
      <h1 className="display-4">About Us</h1>
    </div>
  </div>
  <div className="aboutUs">
    <p className="aboutUsP"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </div>
        <form>
          <section className="comments">
            <div className="commentContainer mt-4">
              <h1>Post a Comment</h1>
              <p className="text-center">Leave a here comment here.</p>
              <textarea
                maxLength="75"
                placeholder="Add Comment"
                id
                value
                onChange
              />
              <button className="btn btn-primary mt-2" type="submit">
                Post Comment
              </button>
            </div>
          </section>
        </form>
        <div className="card">
          <div className="row no-gutters">
            <div className="col-sm-4">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAaDWBUcfsD44z-flbqvQtQ6lVHTprrhfPpw&usqp=CAU" className="card-img" alt="..."/>
            </div>
        <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
           </div>
          </div>
        </div>
      </>
)
}