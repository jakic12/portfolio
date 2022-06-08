import React, { useMemo, useRef, useCallback } from "react";
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { HSVtoRGB } from "../utils/color-utils";
import { interpolate } from "../utils/array-interpolation";

extend({ OrbitControls });

// TODO: add statistics page?

const torus = (points, radius1 = 1, radius2 = 3) => {
  let positions = [],
    colors = [];

  const sizeX = Math.sqrt(points);
  const sizeY = Math.sqrt(points);

  for (let pointsX = 0; pointsX < sizeX; pointsX++) {
    for (let pointsY = 0; pointsY < sizeY; pointsY++) {
      const phi = (pointsX / sizeX) * 2 * Math.PI;
      const theta = (pointsY / sizeY) * 2 * Math.PI;

      const phi1 = phi; //+ (Math.random() * 1) / 30;
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
  console.log(`torus with ${positions.length / 3} points`);
  return [new Float32Array(positions), new Float32Array(colors)];
};

const weirdSphere = (points) => {
  let positions = [],
    colors = [];

  const sizeX = Math.sqrt(points);
  const sizeY = Math.sqrt(points);
  const radius = 4;

  for (let pointsX = 0; pointsX < sizeX; pointsX++) {
    for (let pointsY = 0; pointsY < sizeY; pointsY++) {
      const phi = (pointsX / sizeX) * 2 * Math.PI;
      const theta = (pointsY / sizeY) * 2 * Math.PI;

      const phi1 = phi; //+ (Math.random() * 1) / 30;
      const r = radius; //+ Math.cos(theta * phi);
      const x = Math.cos(phi1) * Math.sin(theta) * r;
      const y = Math.sin(phi1) * Math.sin(theta) * r;
      const z = Math.cos(phi1) * r;

      positions.push(x);
      positions.push(y);
      positions.push(z);

      const rgb = HSVtoRGB(theta / Math.PI / 2, 1, 1);

      colors.push(rgb.r / 255);
      colors.push(rgb.g / 255);
      colors.push(rgb.b / 255);
    }
  }
  console.log(`torus with ${positions.length / 3} points`);
  return [new Float32Array(positions), new Float32Array(colors)];
};

const line = (points, x1, y1, z1, x2, y2, z2, resultArr, randomness = 0.5) => {
  for (let i = 0; i < points; i++) {
    resultArr.push(x1 + (x2 - x1) * (i / points) + randomness * Math.random());
    resultArr.push(y1 + (y2 - y1) * (i / points) + randomness * Math.random());
    resultArr.push(z1 + (z2 - z1) * (i / points) + randomness * Math.random());
  }
  return resultArr;
};

const square = ({
  points,
  centerZ = 0,
  centerX = 0,
  centerY = 0,
  sizeX = 10,
  sizeY = 10,
  resultArr,
}) => {
  line(
    points / 4,
    centerX - sizeX / 2,
    centerY - sizeY / 2,
    centerZ,
    centerX + sizeX / 2,
    centerY - sizeY / 2,
    centerZ,
    resultArr
  );
  line(
    points / 4,
    centerX + sizeX / 2,
    centerY - sizeY / 2,
    centerZ,
    centerX + sizeX / 2,
    centerY + sizeY / 2,
    centerZ,
    resultArr
  );
  line(
    points / 4,
    centerX + sizeX / 2,
    centerY + sizeY / 2,
    centerZ,
    centerX - sizeX / 2,
    centerY + sizeY / 2,
    centerZ,
    resultArr
  );
  line(
    points / 4,
    centerX - sizeX / 2,
    centerY + sizeY / 2,
    centerZ,
    centerX - sizeX / 2,
    centerY - sizeY / 2,
    centerZ,
    resultArr
  );
};

const Cube = ({ points, sizeX = 5, sizeY = 5, sizeZ = 5, resultArr }) => {
  const num_of_lines = 12 + 12;
  square({
    points: (points / num_of_lines) * 4,
    centerZ: -sizeZ / 2,
    sizeX: sizeX,
    sizeY: sizeY,
    resultArr: resultArr,
  });

  square({
    points: (points / num_of_lines) * 4,
    centerZ: sizeZ / 2,
    sizeX: sizeX,
    sizeY: sizeY,
    resultArr: resultArr,
  });

  line(
    (points / num_of_lines) * 4,
    -sizeX / 2,
    -sizeY / 2,
    -sizeZ / 2,
    -sizeX / 2,
    -sizeY / 2,
    sizeZ / 2,
    resultArr
  );

  line(
    (points / num_of_lines) * 4,
    sizeX / 2,
    -sizeY / 2,
    -sizeZ / 2,
    sizeX / 2,
    -sizeY / 2,
    sizeZ / 2,
    resultArr
  );
  line(
    (points / num_of_lines) * 4,
    -sizeX / 2,
    sizeY / 2,
    -sizeZ / 2,
    -sizeX / 2,
    sizeY / 2,
    sizeZ / 2,
    resultArr
  );
  line(
    (points / num_of_lines) * 4,
    sizeX / 2,
    sizeY / 2,
    -sizeZ / 2,
    sizeX / 2,
    sizeY / 2,
    sizeZ / 2,
    resultArr
  );
};

const hyperCube = (points, sizeX = 5, sizeY = 5, sizeZ = 5) => {
  const positions = [];
  const colors = [];

  const num_of_lines = 12 + 12 + 8;
  const inner_cube_size_ratio = 1 / 3;

  const inner_sizeX = sizeX * inner_cube_size_ratio;
  const inner_sizeY = sizeY * inner_cube_size_ratio;
  const inner_sizeZ = sizeZ * inner_cube_size_ratio;

  Cube({
    points: (points / num_of_lines) * 12,
    sizeX: inner_sizeX,
    sizeY: inner_sizeY,
    sizeZ: inner_sizeZ,
    resultArr: positions,
  });

  Cube({
    points: (points / num_of_lines) * 12,
    sizeX: sizeX,
    sizeY: sizeY,
    sizeZ: sizeZ,
    resultArr: positions,
  });

  const remaining_points = points - positions.length / 3;
  console.log(
    `need:${points}, have: ${positions.length} missing ${remaining_points} points, adding...`
  );

  for (let i = 0; i < remaining_points; i++) {
    positions.push(0);
    positions.push(0);
    positions.push(0);
  }

  console.log(`cube with ${positions.length / 3} points`);

  return [new Float32Array(positions)];
};

const plane = (points, sizeX = 10, sizeY = 10, sizeZ = 1) => {
  const positions = [];
  const colors = [];
  points = Math.sqrt(points);

  for (let x = 0; x < points; x++) {
    for (let y = 0; y < points; y++) {
      positions.push((x / points) * sizeX - sizeX / 2);
      positions.push(sizeZ * Math.sin((x * y) / points) * Math.cos(x / points));
      positions.push((y / points) * sizeY - sizeY / 2);
    }

    colors.push(1);
    colors.push(1);
    colors.push(1);
  }
  return [new Float32Array(positions), new Float32Array(colors)];
};

function Particles({ points = 80 * 80 }) {
  const positions_colors = useMemo(() => {
    return [
      plane(points, 0, 0, 0),
      torus(points),
      weirdSphere(points),
      torus(points, 2, 1),
      plane(points),
      hyperCube(points),
    ];
  }, [points]);

  const colours = torus(points)[1];

  let result_pow = new Float32Array(positions_colors[0][0]);
  //console.log(positions_colors[0][0], positions_colors[1][0]);

  const attrib = useRef();
  const pointRef = useRef();

  const interpolation_steps = 1000;
  let interpolate_step = 0;
  let curr_shape_idx = 0;

  const pause_steps = 1000;
  let pause_step = 0;

  let counter = 0;

  let delete_first = true;

  const next_idx = (curr_shape_idx) => {
    if (curr_shape_idx < positions_colors.length - 1) {
      return curr_shape_idx + 1;
    } else {
      return 1;
    }
  };

  useFrame((state, delta) => {
    counter++;
    pointRef.current.rotation.x += 0.008 * Math.sin(counter / 200);
    pointRef.current.rotation.y +=
      0.008 * Math.cos(counter / 200) * Math.sin(counter / 200);

    const from = positions_colors[curr_shape_idx][0];
    const to = positions_colors[next_idx(curr_shape_idx)][0];

    interpolate(
      (Math.tanh((interpolate_step / interpolation_steps) * 6 - 3) + 1) / 2,
      from,
      to,
      result_pow
    );

    if (interpolate_step < interpolation_steps) {
      interpolate_step += 10;
    } else {
      if (pause_step < pause_steps) {
        pause_step += 10;
      } else {
        curr_shape_idx = next_idx(curr_shape_idx);
        console.log(curr_shape_idx, " -> ", next_idx(curr_shape_idx));
        interpolate_step = 0;
        pause_step = 0;
      }
    }

    pointRef.current.geometry.attributes.position.needsUpdate = true;
    pointRef.current.geometry.computeBoundingBox();
    pointRef.current.geometry.computeBoundingSphere();
  });

  return (
    <points ref={pointRef}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          count={result_pow.length / 3}
          array={result_pow}
          itemSize={3}
        />
        <bufferAttribute
          ref={attrib}
          attach="attributes-color"
          count={colours.length / 3}
          array={colours}
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
    camera={{ zoom: 90 }}
    raycaster={{ params: { Points: { threshold: 0.2 } } }}
  >
    <Particles />
    {/*<Controls />*/}
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

// TODO: interpolate between different shapes
