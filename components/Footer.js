import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-6 mt-3">
            <h4> Contact </h4>
            <ul className="list">
              <li className="list-item">
                <img src="/images/location.png" alt="address" className="img" />{" "}
                Address: 6201 Bonhomme Rd Ste 150N., Houston,Texas 77036
              </li>
              <li className="list-item">
                <img src="/images/message.png" alt="email" className="img" />{" "}
                Email: info@nicerefund.com
              </li>
              <li className="list-item">
                <img
                  src="/images/phone.png"
                  alt="phone number"
                  className="img"
                />
                Phone: 713.900.8990
              </li>
              <li className="list-item">
                <img src="/images/fax.png" alt="fax" className="img" /> Fax:
                713.456.2503
              </li>
            </ul>
          </div>
          <div className="col-md-6 mt-3">
            <h4> Follow us </h4>
            <ul className="list">
              <li className="list-item">
                <img
                  src="/images/instagram.png"
                  alt="address"
                  className="img"
                />{" "}
                Instagram
              </li>
              <li className="list-item">
                <img src="/images/facebook.png" alt="email" className="img" />{" "}
                Facebook
              </li>
              <li className="list-item">
                <img
                  src="/images/twitter.png"
                  alt="phone number"
                  className="img"
                />{" "}
                Twitter
              </li>
            </ul>
          </div>
        </div>
        <span className="text">
          Copyright 2014-2018 Nice Refund Tax Service All Rights Reserved.
        </span>
      </div>
    </div>
  );
}

export default Footer;
