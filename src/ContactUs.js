import React from 'react'

export default function ContactUs() {
    return (
        <div className="row contact">
        <div className="col-6 p-0 left">
          <div className="container side-bg">
            <div className="container logo" />
            <div className="overlay" />
          </div>
        </div>
        <div className="col-6 right">
          <div className="container">
            <form action="review_message.html" onsubmit="myFunction()">
              <h3>Contact Us</h3>
              <div className="mb-3 mt-3">
                <label htmlFor="fullname" className="form-label">Full Name<span> *</span></label>
                <input type="text" className="form-control" id="fullname" placeholder="Your Full Name Here..." required />
                <div className="invalid-feedback">Full name cannot be empty</div>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address<span> *</span></label>
                <input type="email" className="form-control" id="email" placeholder="example@domain.com" required />
              </div>
              <div className="mb-3">
                <label htmlFor="phone-number" className="form-label">Phone Number<span> *</span></label>
                <input type="phone-number" className="form-control" id="phone" placeholder="08573890xxxxx" required />
              </div>
              <div className="mb-3">
                <label htmlFor="nationality" className="form-label">Nationality</label>
                <select id="nationality" className="form-select">
                  <option selected>Selected</option>
                  <option value="Indonesian">Indonesian</option>
                  <option value="Malaysian">Malaysian</option>
                  <option value="Singaporean">Singaporean</option>
                </select>
              </div>
              <div className="mb-5">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows={4} placeholder="Your message goes here.." defaultValue={""} />
              </div>
              <div className="col-md-12">
                <button type="submit" className="btn btn-primary" onclick="FormStorage()">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
}
