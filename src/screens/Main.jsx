import React from "react";
import ThreeBackground from "../components/ThreeBackground";
import styled from "styled-components";

const ThreeBackgroundContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: black;
`;

export default () => <ThreeBackground />;
/*
export default () => {
  return (
    <div>
      <ThreeBackgroundContainer>
        <ThreeBackground />
      </ThreeBackgroundContainer>
      <h1>This is my React app!</h1>
    </div>
  );
};
*/
