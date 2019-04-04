import React from "react";
import "./Footer.module.css";

const Footer = () => {
  return (
    <footer className="container py-5">
          <div className="row">
              <div className="col-12 col-md">
                  <small className="d-block mb-3 text-muted">&copy; 2018-2019 Arjun Kiruthivasan All rights reserved.</small>
              </div>
              <div className="col-6 col-md">
                  <h5>Arjun Kiruthivasan</h5>
              </div>
              <div className="col-6 col-md">
                  <h5>Follow me</h5>
                  <ul className="list-unstyled text-small">
                      <li><a className="text-muted" href="https://github.com/ArjunKiruthivasan">GitHub</a></li>
                      <li><a className="text-muted" href="arjun.kiruthivasan@gmail.com">Gmail</a></li>
                  </ul>
              </div>
          </div>
      </footer>

    /*<div className="footer">
      <div className="container">
        <div className="row text-center">
          <div className="navbar-brand mb-0 h1 mx-auto">
            <h2>Created by : Arjun Kiruthivasan </h2>
          </div>
        </div>
      </div>
    </div>*/
  );
};
export default Footer;
