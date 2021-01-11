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
  <p className="aboutUsP">Absolute Flooring and Kitchen is a local family owned business. 
  Phil LaMacchia has been in business in Sarasota remodeling kitchens and bathrooms for 
  more than fifteen years. Phil listens to customers’ needs, helps design spaces, and provides 
  choices of quality materials.
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
    <div className="card mb-2">
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
  <div className="card mb-2">
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
  <div className="card mb-2">
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
  <div className="card mb-2">
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