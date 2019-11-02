import React, { useState } from "react";
import "../styles/components/ProjectList.scss";

// components
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "project is sda s",
    subtitle: "this is a cool project",
    online: true,
    link: "https://google.com",
    icon:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2LuT3lH29fcJzscrZo0W1opexkXNW826XvB4E1RIwNRbt3ToeuQ&s",
    bigPictures: [
      "https://www.windowscentral.com/sites/wpcentral.com/files/styles/xlarge/public/field/image/2018/10/take-screenshots-windows-10.jpg?itok=nAxuAn9F",
      "https://cnet2.cbsistatic.com/img/hfpe8wfLVDZ0h2lk5XRDS2qjh80=/2018/10/04/be3334d6-1bfe-463b-b5cd-b54bc453de16/snip-and-sketch-promo.jpg"
    ],
    tech: ["react", "atom", "slack", "sass"]
  },
  {
    title: "project is sda s",
    subtitle: "this is a cool project",
    online: true,
    link: "https://google.com",
    icon:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2LuT3lH29fcJzscrZo0W1opexkXNW826XvB4E1RIwNRbt3ToeuQ&s",
    bigPictures: [
      "https://www.windowscentral.com/sites/wpcentral.com/files/styles/xlarge/public/field/image/2018/10/take-screenshots-windows-10.jpg?itok=nAxuAn9F",
      "https://cnet2.cbsistatic.com/img/hfpe8wfLVDZ0h2lk5XRDS2qjh80=/2018/10/04/be3334d6-1bfe-463b-b5cd-b54bc453de16/snip-and-sketch-promo.jpg"
    ]
  }
];

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
