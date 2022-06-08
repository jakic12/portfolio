import React from "react";
import ThreeBackground from "../components/ThreeBackground";
import styled from "styled-components";

import Projects from "../components/Projects";

const ThreeBackgroundContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: black;

  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
    0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
  padding-bottom: 5em;
`;

const Name = styled.div`
  position: absolute;
  left: 50vw;
  top: 50vh;
  transform: translate(-50%, -50%);
  font-size: 5em;
  text-align: center;
  width: 100%;
  font-family: Black Ops One, cursive;
  font-weight: 200 !important;
  color: white;
  text-shadow: 1px 0px 1px #cccccc, 0px 1px 1px #eeeeee, 2px 1px 1px #cccccc,
    1px 2px 1px #eeeeee, 3px 2px 1px #cccccc, 2px 3px 1px #eeeeee,
    4px 3px 1px #cccccc, 3px 4px 1px #eeeeee, 5px 4px 1px #cccccc,
    4px 5px 1px #eeeeee, 6px 5px 1px #cccccc, 5px 6px 1px #eeeeee,
    7px 6px 1px #cccccc;
`;

// export default () => <ThreeBackground />;

export default () => {
  return (
    <div>
      <ThreeBackgroundContainer>
        <ThreeBackground />
        <Name>Jakob Drusany</Name>
      </ThreeBackgroundContainer>
      <Projects />
    </div>
  );
};
