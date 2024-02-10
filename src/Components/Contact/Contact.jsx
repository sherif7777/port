import React from "react";

export default function Contact() {
  return (
    <>
      <div className="container height">
        <div className="header text-center pt-4 ">
          <h1 className="fw-bolder">CONATCT SECTION</h1>
        </div>
        <div className="d-flex justify-content-center mb-5 ">
          <div className="col-8 ">
            <label>userName :</label>
            <input
              type="text"
              className="form-control "
              placeholder="userName"
            />
          </div>
        </div>
        <div className="d-flex justify-content-center mb-5 ">
          <div className="col-8 ">
            <label>userAge :</label>
            <input
              type="number"
              className="form-control "
              placeholder="userAge"
            />
          </div>
        </div>
        <div className="d-flex justify-content-center mb-5 ">
          <div className="col-8 ">
            <label>userEmail :</label>

            <input
              type="email"
              className="form-control "
              placeholder="userEmail"
            />
          </div>
        </div>
        <div className="d-flex justify-content-center mb-5 ">
          <div className="col-8 ">
            <label>userPassword :</label>

            <input
              type="password"
              className="form-control "
              placeholder="userPassword"
            />
            <button className="btn btn-success mt-5">send Message</button>
          </div>
        </div>
      </div>
    </>
  );
}
