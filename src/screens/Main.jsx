import React from "react";
import "../styles/screens/Main.scss";

// components
import VectorFieldAnimatedBackground from "../components/VectorFieldAnimatedBackground";

const Main = () => {
  return (
    <div className="mainPage">
      <div className="topTitle">
        <div className="middleCard">
          <div className="title">
            <h1>Jakob Drusany</h1>
          </div>
        </div>
        <VectorFieldAnimatedBackground />
      </div>
      <div className="projectList"></div>
    </div>
  );
};

export default Main;
