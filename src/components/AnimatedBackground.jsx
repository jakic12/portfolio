import React, { Component } from "react";

import * as THREE from "three";

Number.prototype.clamp = function(min, max) {
  return Math.min(Math.max(this, min), max);
};
class AnimatedBackground extends Component {
  DEBUG_MODE = true;
  MAX_POINTS = 200;
  VECT_FIELD_X = (x, y, z) => 0.0001 + 0.2;
  VECT_FIELD_Y = (x, y, z) =>
    0.0001 + /*Math.sin(z) + */ (x - this.mouseX) * 0.001;
  VECT_FIELD_Z = (x, y, z) => 0.0001 /*- Math.cos(y)*/;
  CAMERA_DISTANCE = 100;
  CAMERA_SPEED = this.DEBUG_MODE ? 0.9 : 0.1;

  componentDidMount() {
    this.point_color_gradient = new Gradient(0x0aeff0, 0xff1a59);
    this.mouseX = window.innerWidth / 2;
    this.mouseY = window.innerHeight / 2;
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

    this.camera.position.set(0, 0, 100);
    this.camera.lookAt(0, 0, 0);

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement);

    const geometry = new THREE.BufferGeometry();

    const material = new THREE.PointsMaterial({
      color: 0xffffff
    });

    this.particles = new ParticleList(this.MAX_POINTS);
    geometry.addAttribute(
      "position",
      new THREE.BufferAttribute(this.particles.positions, 3)
    );

    this.particles.generateParticles(() => {
      return new Particle(
        (Math.random() - 0.5) * this.CAMERA_DISTANCE * 3,
        (Math.random() - 0.5) * this.CAMERA_DISTANCE * 3,
        (Math.random() - 0.5) * this.CAMERA_DISTANCE * 3
      );
    });

    this.t = 0;

    this.line = new THREE.Points(geometry, material);
    this.scene.add(this.line);

    if (this.DEBUG_MODE)
      this.vectorField = drawVectorField(
        this.scene,
        this.VECT_FIELD_X,
        this.VECT_FIELD_Y,
        this.VECT_FIELD_Z,
        this.CAMERA_DISTANCE,
        this.CAMERA_DISTANCE,
        this.CAMERA_DISTANCE * 2,
        undefined,
        undefined,
        this.point_color_gradient
      );

    if (this.DEBUG_MODE) drawCoordinateSystem(this.scene, 10);

    this.start();

    window.addEventListener("resize", this.handleResize);
    window.addEventListener("mousemove", this.handleMouseMove);
  }

  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
    window.removeEventListener("resize", this.handleResize);
    window.removeEventListener("mousemove", this.handleMouseMove);
  }

  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  };

  stop = () => {
    cancelAnimationFrame(this.frameId);
  };

  animate = () => {
    if (this.DEBUG_MODE)
      updateVectorField(
        this.vectorField.arrows,
        this.VECT_FIELD_X,
        this.VECT_FIELD_Y,
        this.VECT_FIELD_Z,
        this.vectorField.vectorSizeFactor
      );

    if (this.mouseX && this.mouseY) {
      const cameraAngleX =
        ((this.mouseX / window.innerWidth - 0.5) * 2 * Math.PI) /
        (this.DEBUG_MODE ? 2 : 8);
      const cameraAngleY =
        ((this.mouseY / window.innerHeight - 0.5) * 2 * Math.PI) /
        (this.DEBUG_MODE ? 2 : 8);

      const cameraTargetX =
        Math.cos(cameraAngleY) * Math.cos(cameraAngleX) * this.CAMERA_DISTANCE;
      const cameraTargetY = Math.sin(cameraAngleY) * this.CAMERA_DISTANCE;
      const cameraTargetZ = Math.sin(cameraAngleX) * this.CAMERA_DISTANCE;

      this.camera.position.set(
        this.camera.position.x +
          (cameraTargetX - this.camera.position.x) * this.CAMERA_SPEED,
        this.camera.position.y +
          (cameraTargetY - this.camera.position.y) * this.CAMERA_SPEED,
        this.camera.position.z +
          (cameraTargetZ - this.camera.position.z) * this.CAMERA_SPEED
      );
      this.camera.lookAt(0, 0, 0);
    }
    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);

    this.particles.replaceParticles(
      particle => {
        this.camera.updateMatrix();
        this.camera.updateMatrixWorld();
        var frustum = new THREE.Frustum();
        frustum.setFromMatrix(
          new THREE.Matrix4().multiplyMatrices(
            this.camera.projectionMatrix,
            this.camera.matrixWorldInverse
          )
        );
        const pos = new THREE.Vector3(particle.x, particle.y, particle.z);
        return !frustum.containsPoint(pos);
      },
      oldParticle => {
        return new Particle(
          (Math.random() - 0.5) * this.CAMERA_DISTANCE * 3,
          (Math.random() - 0.5) * this.CAMERA_DISTANCE * 3,
          (Math.random() - 0.5) * this.CAMERA_DISTANCE * 3
        );
      }
    );

    this.particles.alterParticles(particle => {
      particle.Vx = this.VECT_FIELD_X(particle.x, particle.y, particle.z);
      particle.Vy = this.VECT_FIELD_Y(particle.x, particle.y, particle.z);
      particle.Vz = this.VECT_FIELD_Z(particle.x, particle.y, particle.z);
    });

    this.particles.moveParticles();

    this.line.geometry.attributes.position.needsUpdate = true;
  };

  handleMouseMove = event => {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  };

  renderScene = () => {
    this.renderer.render(this.scene, this.camera);
  };

  handleResize = () => {
    this.mount.style.width = `${window.innerWidth}px`;
    this.mount.style.height = `${window.innerHeight}px`;

    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(window.innerWidth, window.innerHeight);
  };

  render() {
    return (
      <div
        style={{ width: window.innerWidth, height: window.innerHeight }}
        ref={mount => {
          this.mount = mount;
        }}
      />
    );
  }
}

class Particle {
  constructor(x, y, z, Vx = 0, Vy = 0, Vz = 0) {
    this.x = x;
    this.y = y;
    this.z = z;

    this.Vx = Vx;
    this.Vy = Vy;
    this.Vz = Vz;
  }

  move() {
    this.x += this.Vx;
    this.y += this.Vy;
    this.z += this.Vz;
  }
}

class ParticleList {
  constructor(max_points) {
    this.max_points = max_points;
    this.positions = new Float32Array(max_points * 3);
    this.particles = [];
  }
  /**
   *
   * @param {function():Particle} particleFunction should return Particle
   * @param {*} number
   */
  generateParticles(particleFunction, number = this.max_points) {
    for (let i = 0, l = 0; i < number; i++) {
      const particle = particleFunction({ index: i });
      if (!(particle instanceof Particle)) {
        throw new Error(`the particleFunction should return Particle`);
      }
      this.particles.push(particle);
      this.positions[l++] = particle.x;
      this.positions[l++] = particle.y;
      this.positions[l++] = particle.z;
    }
  }

  alterParticles(dFunction, number = this.max_points) {
    for (let i = 0, l = 0; i < number; i++) {
      const newParticle = dFunction(this.particles[i], i);
      this.positions[l++] = this.particles[i].x;
      this.positions[l++] = this.particles[i].y;
      this.positions[l++] = this.particles[i].z;
    }
  }

  moveParticles(number = this.max_points) {
    for (let i = 0, l = 0; i < number; i++) {
      this.particles[i].move();
      this.positions[l++] = this.particles[i].x;
      this.positions[l++] = this.particles[i].y;
      this.positions[l++] = this.particles[i].z;
    }
  }

  updatePositions(number = this.max_points) {
    for (let i = 0, l = 0; i < number; i++) {
      this.positions[l++] = this.particles[i].x;
      this.positions[l++] = this.particles[i].y;
      this.positions[l++] = this.particles[i].z;
    }
  }

  replaceParticles(filter, newParticle, number = this.max_points) {
    for (let i = 0; i < number; i++) {
      if (filter(this.particles[i])) {
        const new_particle = newParticle(this.particles[i]);
        this.particles[i] = new_particle;
        this.positions[i * 3] = new_particle.x;
        this.positions[i * 3 + 1] = new_particle.y;
        this.positions[i * 3 + 2] = new_particle.z;
      }
    }
  }
}

const drawVectorField = (
  scene,
  xFunct = () => 0,
  yFunct = () => 0,
  zFunct = () => 0,
  sizeX,
  sizeY = sizeX,
  sizeZ = sizeX,
  spacing = 10,
  vectorSizeFactor = 10,
  color = 0x333333
) => {
  let arrows = [];
  let lengths = [];
  let maxLen = -1;
  let minLen = -1;
  for (let x = -sizeX / 2; x < sizeX / 2; x += spacing) {
    for (let y = -sizeY / 2; y < sizeY / 2; y += spacing) {
      for (let z = -sizeZ / 2; z < sizeZ / 2; z += spacing) {
        const vector = new THREE.Vector3(
          xFunct(x, y, z),
          yFunct(x, y, z),
          zFunct(x, y, z)
        );
        const origin = new THREE.Vector3(x, y, z);
        const length = vectorSizeFactor * vector.length();
        let vecColor;
        if (color instanceof Gradient) {
          if (isFinite(length)) {
            if (length > maxLen) {
              maxLen = length;
            }

            if (length < minLen) {
              minLen = length;
            }

            if (maxLen == -1) {
              maxLen = length;
            }

            if (minLen == -1) {
              minLen = length;
            }
          }

          lengths.push(length);
        } else {
          vecColor = color;
        }
        const arrow = new THREE.ArrowHelper(vector, origin, length, vecColor);
        arrows.push(arrow);
        scene.add(arrow);
      }
    }
  }
  if (color instanceof Gradient) {
    arrows.forEach((arrow, i) => {
      let normalized = (lengths[i] - minLen) / (maxLen - minLen);
      if (!normalized || !isFinite(normalized)) {
        normalized = 1;
      }
      arrow.setColor(color.getColor(normalized));
    });
  }
  return {
    vectorSizeFactor,
    arrows
  };
};

const updateVectorField = (
  arrows,
  xFunct = () => 0,
  yFunct = () => 0,
  zFunct = () => 0,
  vectorSizeFactor = 10
) => {
  arrows.forEach(arrow => {
    const newVector = new THREE.Vector3(
      xFunct(arrow.position.x, arrow.position.y, arrow.position.z),
      yFunct(arrow.position.x, arrow.position.y, arrow.position.z),
      zFunct(arrow.position.x, arrow.position.y, arrow.position.z)
    );
    arrow.setLength(newVector.length() * vectorSizeFactor);
    arrow.setDirection(newVector);
  });
};

const drawCoordinateSystem = (scene, size) => {
  scene.add(
    new THREE.ArrowHelper(
      new THREE.Vector3(1, 0, 0),
      new THREE.Vector3(0, 0, 0),
      size,
      0xff0000
    )
  );
  scene.add(
    new THREE.ArrowHelper(
      new THREE.Vector3(0, 1, 0),
      new THREE.Vector3(0, 0, 0),
      size,
      0x00ff00
    )
  );
  scene.add(
    new THREE.ArrowHelper(
      new THREE.Vector3(0, 0, 1),
      new THREE.Vector3(0, 0, 0),
      size,
      0x0000ff
    )
  );
};

class Gradient {
  constructor(...colors) {
    this.colors = colors.map(color => {
      color = color.toString(16).padStart(6, `0`);
      return [
        parseInt(color.substring(0, 2), 16),
        parseInt(color.substring(2, 4), 16),
        parseInt(color.substring(4, 6), 16)
      ];
    });
  }

  getColor(position) {
    position = position * (this.colors.length - 1);
    const colorIndex = position;
    let out = [
      this.colors[Math.floor(colorIndex)][0] *
        (1 - (position - Math.floor(colorIndex))) +
        this.colors[Math.ceil(colorIndex)][0] *
          (position - Math.floor(colorIndex)),
      this.colors[Math.floor(colorIndex)][1] *
        (1 - (position - Math.floor(colorIndex))) +
        this.colors[Math.ceil(colorIndex)][1] *
          (position - Math.floor(colorIndex)),
      this.colors[Math.floor(colorIndex)][2] *
        (1 - (position - Math.floor(colorIndex))) +
        this.colors[Math.ceil(colorIndex)][2] *
          (position - Math.floor(colorIndex))
    ];
    out = out.map(x => parseInt(x));
    return parseInt(
      `${out[0].toString(16).padStart(2, `0`)}${out[1]
        .toString(16)
        .padStart(2, `0`)}${out[2].toString(16).padStart(2, `0`)}`,
      16
    );
  }
}

export default AnimatedBackground;
