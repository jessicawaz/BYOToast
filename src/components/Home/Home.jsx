import React from "react";
import "./Home.css";
import bgImage from "../res/download.jpg";

const Home = () => {
  return (
    <div className="home">
      <img src={bgImage} alt="" className="bg-img" />
      <div className="home-pointer"></div>
    </div>
  );
};

export default Home;
