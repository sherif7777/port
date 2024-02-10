import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="footer py-5 text-white">
        <div className="row justify-content-end py-5">
          <div className="col-md-2 ">
            <h3>LOCATION</h3>
            <p>2215 John Daniel Drive </p>
            <p>Clark, MO 65243</p>
          </div>
          <div className="col-md-4  text-center">
            <h3>AROUND THE WEB</h3>
            <div className="social">
              <span className="px-3">
                <i className="fa-brands fa-facebook "></i>
              </span>
              <span className="px-3">
                <i className="fa-brands fa-twitter"></i>
              </span>
              <span className="px-3">
                <i className="fa-brands fa-linkedin"></i>
              </span>
              <span className="px-3">
                <i className="fa-solid fa-globe"></i>
              </span>
            </div>
          </div>
          <div className="col-md-4  text-center">
            <h3>ABOUT FREELANCER</h3>
            <p className="w-100">
              Freelance is a free to use,licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </footer>

      <footer className="text-center py-4 text-white">
        <p> Copyright &copy; Your Website 2021</p>
      </footer>
    </>
  );
}
