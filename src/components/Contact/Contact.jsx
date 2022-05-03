/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Contact.css";
import GoogleMapReact from "google-map-react";

/// TODO: move icons over to left. add a map

const Contact = () => {
  const location = {
    address: "1600 Amphitheatre Parkway, Mountain View, california.",
    lat: 37.42216,
    lng: -122.08427,
  };

  return (
    <section className="section">
      <div className="container">
        <div className="task-container">
          <div className="card">
            <div className="card-content">
              <h1 className="title has-text-centered">Where to find us</h1>
              <div
                className="columns
           content is-desktop is-mobile"
              >
                <div className="column is-half has-text-centered">
                  <div className="hours">
                    <h2>Our Hours</h2>
                    <ul className="ml-0">
                      <li>Mon: 9:00AM-4:00PM</li>
                      <li>Tue: 9:00AM-4:00PM</li>
                      <li>Wed: 9:00AM-4:00PM</li>
                      <li>Thurs: 9:00AM-4:00PM</li>
                      <li>Fri: 9:00AM-4:00PM</li>
                      <li>Sat: 9:00AM-4:00PM</li>
                      <li>Sun: 9:00AM-4:00PM</li>
                    </ul>

                    <div className="ml-0">
                      <a href="">
                        <i className="fab fa-instagram social-link" />
                      </a>
                      <a href="">
                        <i className="fab fa-linkedin social-link" />
                      </a>
                      <a href="">
                        <i className="fab fa-twitter social-link" />
                      </a>
                      <a href="">
                        <i className="fab fa-facebook social-link" />
                      </a>
                      <a href="">
                        <i className="fa fa-phone social-link"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="column ml-0">
                  <GoogleMapReact
                    defaultCenter={location}
                    defaultZoom={11}
                  ></GoogleMapReact>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
