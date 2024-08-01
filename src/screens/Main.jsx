import React from "react";
import ThreeBackground from "../components/ThreeBackground";
import styled from "styled-components";

import Projects from "../components/Projects";

const ThreeBackgroundContainer = styled.div`
  height: 80vh;
  background: black;

  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
    0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
  padding-bottom: 5em;
`;

const Name = styled.div`
  font-family: Black Ops One, cursive;
  font-weight: 200 !important;
  width: auto;
  color: white;
  text-shadow: 1px 0px 1px #cccccc, 0px 1px 1px $000, 2px 1px 1px #cccccc,
    1px 2px 1px $000, 3px 2px 1px #cccccc, 2px 3px 1px $000,
    4px 3px 1px #cccccc, 3px 4px 1px $000, 5px 4px 1px #cccccc,
    4px 5px 1px $000, 6px 5px 1px #cccccc, 5px 6px 1px $000,
    7px 6px 1px #cccccc;
`;

// export default () => <ThreeBackground />;

export default () => {
  return (
    <>
      <div className="relative h-[50vh] mt-16 bg-black ring-zinc-700 ring-1">
        <ThreeBackground />
        <div className="absolute flex flex-col justify-center items-center top-0 h-full w-full">
          <div className="flex flex-col w-max max-w-full p-5">
            <Name className="text-6xl sm:text-7xl text-left">Jakob Drusany</Name>
            <div className="text-3xl text-white">Developer</div>
          </div>
        </div>
      </div>
      <Projects />
    </>
  );
};
