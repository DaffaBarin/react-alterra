import React from 'react'

export default function Body() {
    return (
    <div className="container">
        <div className="container-fluid background"/>
        <div className="row middle">
          <div className="col-6 img">
            <img src="assets/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg" className="propic" alt="matthew" />
          </div>
          <div className="col-6 text">
            <h4 className="mb-0">Hi, my name is</h4>
            <h1 className="mb-3">Anne Sullivan</h1>
            <h2>I build things for the web</h2>
            <button className="btn btn-primary mt-3">
              <a href="./contact-us.html" target="blank">Get In Touch</a>
            </button>
          </div>
        </div>
      </div>
    )
}
