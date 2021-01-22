import React from 'react'


export function Contact(props) {

  return (
    <>
  <div className="jumbotron jumbotron-fluid p-5 jumboCenter mb-0">
    <div className="container">
      <h1 className="display-4">Contact Us</h1>
    </div>
  </div>
  <div className= "contactBoxes">
    <div>
    <h5><strong><u>Contact Information:</u></strong></h5>
    <p><strong>Phone:</strong> (941) 925-2900 </p>
    <p><strong>Address:</strong> 4305 Clark Rd, Sarasota, Fl, 34233</p>
    <p><strong>Email:</strong> Absoluteflooring@verizon.net</p>
    </div>
    <div>
      <h5><strong><u>Store Hours:</u></strong></h5>
      <p><strong>Monday:</strong> 8:30am-5:00pm</p>
      <p><strong>Tuesday:</strong> 8:30am-5:00pm</p>
      <p><strong>Wednesday:</strong> 8:30am-5:00pm</p>
      <p><strong>Thursday:</strong> 8:30am-5:00pm</p>
      <p><strong>Friday:</strong> 8:30am-5:00pm</p>
      <p><strong>Saturday:</strong> Appointment only</p>
      <p><strong>Sunday:</strong> Appointment only</p>
    </div>
  </div>
  </>
  )
}