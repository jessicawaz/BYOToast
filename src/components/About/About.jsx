import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div>
        <h1 className="about-header d-flex align-items-center justify-content-center">
          Our Story
        </h1>

        <div className="container">
          <div className="row justify-content-around">
            <div className="col-6">
              <h2>Welcome to Keep It Toasty</h2>
              <br />
              <p className="about-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

            <div className="col-4">
              <img
                src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.medicarepathways.com%2Fwp-content%2Fuploads%2F2017%2F09%2FFamily.png&f=1&nofb=1"
                alt="Family"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
