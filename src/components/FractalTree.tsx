import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import "./Styles/FractalTree.css";

// Declare type for the p5 instance
type P5Instance = {
  setup: () => void;
  draw: () => void;
  createCanvas: (width: number, height: number, mode: string) => void;
  clear: () => void;
  translate: (x: number, y: number) => void;
  map: (value: number, start1: number, stop1: number, start2: number, stop2: number) => number;
  line: (x1: number, y1: number, x2: number, y2: number) => void;
  rotate: (angle: number) => void;
  push: () => void;
  pop: () => void;
  stroke: (color: number) => void;
  height: number;
  frameCount: number;
  sin: (angle: number) => number;
  PI: number;
};

let angle: number;

const Sketch = (p5: P5Instance) => {
  p5.setup = () => {
    p5.createCanvas(400, 400, "transparent");
    angle = p5.PI / 4;
    p5.stroke(255);
  };

  p5.draw = () => {
    p5.clear();
    p5.translate(200, p5.height);
    angle = p5.map(p5.sin(p5.frameCount * 0.01), -1, 1, p5.PI / 2, p5.PI / 16); // vary the angle using sin()
    branch(100);
  };

  function branch(len: number) {
    p5.line(0, 0, 0, -len);
    p5.translate(0, -len);
    if (len > 4) {
      p5.push();
      p5.rotate(angle);
      branch(len * 0.67);
      p5.pop();
      p5.push();
      p5.rotate(-angle);
      branch(len * 0.67);
      p5.pop();
    }
  }
};

const FractalTree: React.FC = () => (
  <div id="fractal-tree">
    <ReactP5Wrapper sketch={Sketch} />
  </div>
);

export default FractalTree;
