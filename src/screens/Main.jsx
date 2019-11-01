import React from "react";
import "../styles/screens/Main.scss";

// components
import AnimatedBackground from "../components/AnimatedBackground";

const Main = () => {
  return (
    <div className="mainPage">
      <div className="topTitle">
        <div className="middleCard">
          <div className="title">{/*<h1>Jakob Drusany</h1>*/}</div>
        </div>
        <AnimatedBackground />
      </div>
      <div className="projectList"></div>
    </div>
  );
};

export default Main;
