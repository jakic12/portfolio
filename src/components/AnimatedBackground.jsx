import React from "react";

const AnimatedBackground = () => {
  const [canvasWidth, setWidth] = React.useState(window.innerWidth);
  const [canvasHeight, setHeight] = React.useState(window.innerHeight);

  const canvasRef = React.createRef();

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  });

  return (
    <canvas
      ref={canvasRef}
      className="interactiveBackground"
      width={canvasWidth}
      height={canvasHeight}
    ></canvas>
  );
};

export default AnimatedBackground;
