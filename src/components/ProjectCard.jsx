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
    <div className="projectCard">
      <div className="cardHeader">
        <div className="icon">
          <img src={icon} alt="project card icon" />
        </div>
        <div className="cardTitle">
          <h1 className="title">{title}</h1>
          <h5 className="subtitle">{subtitle}</h5>
          <div className="techs">
            {tech &&
              tech.map(tec => {
                if (technologies[tec]) {
                  return (
                    <a href={technologies[tec].link}>
                      <div>
                        {technologies[tec].icon({
                          width: `50px`,
                          height: `50px`,
                          className: "icon"
                        })}
                      </div>
                    </a>
                  );
                }
              })}
          </div>
        </div>
      </div>
      <div className="cardBody">
        <div className="cardBodyInner">
          <Carousel images={bigPictures} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
