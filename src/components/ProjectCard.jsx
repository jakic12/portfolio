import React, { useState } from "react";
import "../styles/components/ProjectCard.scss";

// components
import Carousel from "./Carousel";
import technologies from "../technologies";

const ProjectCard = ({
  title,
  subtitle,
  online,
  link,
  icon,
  open,
  bigPictures,
  tech
}) => {
  return (
    <div className="projectCardWrapper">
      <div className="projectCard">
        <div className="cardHeader">
          <div className="icon">
            <img src={icon} alt="project card icon" />
          </div>
          <div className="cardTitle">
            <h1 className="title">{title}</h1>
            <h5 className="subtitle">{subtitle}</h5>
            <div className="techs">
              <div className="techList">
                {tech &&
                  tech.map(tec => {
                    if (technologies[tec]) {
                      return (
                        <a href={technologies[tec].link}>
                          {technologies[tec].icon({
                            width: `30px`,
                            height: `30px`,
                            fill: `#ff1a59`
                          })}
                        </a>
                      );
                    }
                  })}
              </div>
            </div>
          </div>
        </div>
        <div className="cardBody">
          <div className="cardBodyInner">
            <Carousel images={bigPictures} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
