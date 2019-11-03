import React, { useState } from "react";
import "../styles/components/ProjectList.scss";

// components
import ProjectCard from "./ProjectCard";

// data
import projects from "../projects";

const ProjectList = ({ items }) => {
  return (
    <div className="listProject">
      {projects.map((project, i) => (
        <ProjectCard {...project} key={`project_${i}`} />
      ))}
    </div>
  );
};

export default ProjectList;
