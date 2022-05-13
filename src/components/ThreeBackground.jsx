import React, { useMemo, useRef, useCallback } from "react";
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { HSVtoRGB } from "../utils/color-utils";

extend({ OrbitControls });

const torus = () => {
  const step = 0.2,
    radius1 = 1,
    radius2 = 3;

  let positions = [],
    colors = [];

  for (let phi = 0; phi < 2 * Math.PI; phi += step / 3) {
    for (let theta = 0; theta < 2 * Math.PI; theta += step) {
      const phi1 = phi + (Math.random() * 1) / 30;
      const r = Math.cos(theta) * radius1 + radius2;
      const x = Math.cos(phi1) * r;
      const y = Math.sin(phi1) * r;
      const z = Math.sin(theta) * radius1;

      positions.push(x);
      positions.push(y);
      positions.push(z);

      const rgb = HSVtoRGB(theta / Math.PI / 2, 1, 1);

      colors.push(rgb.r / 255);
      colors.push(rgb.g / 255);
      colors.push(rgb.b / 255);
    }
  }
  return [new Float32Array(positions), new Float32Array(colors)];
};

function Particles({ step }) {
  const [positions, colors] = useMemo(() => {
    return torus();
  }, [step]);

  const attrib = useRef();
  const pointRef = useRef();

  useFrame((state, delta) => {
    pointRef.current.rotation.x += 0.005;
    pointRef.current.rotation.y += 0.005;
  });
  return (
    <points ref={pointRef}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          ref={attrib}
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        vertexColors
        size={3}
        sizeAttenuation={false}
      />
    </points>
  );
}

export default () => (
  <Canvas
    orthographic
    camera={{ zoom: 60 }}
    raycaster={{ params: { Points: { threshold: 0.2 } } }}
  >
    <Particles step={0.2} />
    <Controls />
  </Canvas>
);

function Controls() {
  const controls = useRef();
  const { camera, gl } = useThree();
  useFrame(() => controls.current.update());
  return (
    <orbitControls
      ref={controls}
      args={[camera, gl.domElement]}
      enableDamping
      dampingFactor={0.1}
      rotateSpeed={0.5}
    />
  );
}
