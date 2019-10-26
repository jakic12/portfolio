import React from "react";
import "../styles/screens/Main.scss";

// components
import AnimatedBackgrounds from "../components/AnimatedBackground";

const Main = () => {
  return (
    <div className="mainPage">
      <div className="topTitle">
        <div className="middleCard">
          <div className="title">
            <h1>Jakob Drusany</h1>
          </div>
        </div>
        <AnimatedBackgrounds />
      </div>
      <div className="projectList"></div>
    </div>
  );
};

export default Main;
