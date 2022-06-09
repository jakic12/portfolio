import React from "react";
import styled from "styled-components";

import projects from "../content/projects";

const Project = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: white;
  padding: 5em;
`;

const ImageImg = styled.img`
  border-radius: 8px;
  box-shadow: 0 9px 12px 1px rgba(0, 0, 0, 0.14),
    0 3px 16px 2px rgba(0, 0, 0, 0.12), 0 5px 6px -3px rgba(0, 0, 0, 0.2);

  width: 50vw;

  box-shadow: -10px 10px 0 white, 0 9px 12px 1px rgba(0, 0, 0, 0.14),
    0 3px 16px 2px rgba(0, 0, 0, 0.12), 0 5px 6px -3px rgba(0, 0, 0, 0.2);
  text-decoration: none;

  position: relative;
  display: inline-block;
  top: 0;
  left: 0;
  transition: all 0.15s linear 0s;

  top: 10px;
  left: -10px;
  box-shadow: none;

  &:hover {
    top: 5px;
    left: -5px;
    box-shadow: -5px 5px 0 white, 0 9px 12px 1px rgba(0, 0, 0, 0.14),
      0 3px 16px 2px rgba(0, 0, 0, 0.12), 0 5px 6px -3px rgba(0, 0, 0, 0.2);
  }
`;

const ImageLink = styled.a``;

const Image = (props) => {
  return (
    <ImageLink href={props.href} src={props.src}>
      <ImageImg {...props}></ImageImg>
    </ImageLink>
  );
};

const DescriptionWrapper = styled.div`
  padding: 3em;
`;
const Title = styled.h1``;
const Tools = styled.div`
  padding: 2em 0;
`;
const Description = styled.div``;

export default () => {
  return (
    <>
      {projects.map((proj, i) => (
        <Project key={`${i}_proj`}>
          {i % 2 == 0 && (
            <Image
              src={proj.images[0]}
              href={proj.link}
              alt={`${proj.name} screenshot`}
            />
          )}
          <DescriptionWrapper>
            <Title>{proj.name}</Title>
            {<Description>{proj.description}</Description>}
            <Tools>
              {proj.tools.map((t) => (
                <a href={t.link}>
                  <t.icon height="2em" style={{ fill: "#00A9A5" }} />
                </a>
              ))}
            </Tools>
          </DescriptionWrapper>
          {i % 2 == 1 && (
            <Image
              src={proj.images[0]}
              href={proj.link}
              alt={`${proj.name} screenshot`}
            />
          )}
        </Project>
      ))}
    </>
  );
};
