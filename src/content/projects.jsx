import CNNjsfrontend from "./screenshots/CNN-js-frontend.webp";
import bezier from "./screenshots/bezier.webp";
import maze from "./screenshots/maze-madness.webp";
import timetable from "./screenshots/timetable.webp";
import bigxo from "./screenshots/big-xo.webp";
import brainfuck from "./screenshots/brainfuck-debugger.webp";
import calculator from "./screenshots/calculate-anything.webp";
import form from "./screenshots/simple-form.webp";

import techs from "../components/technologies";
const { react, javascript, html5, css3, nodejs } = techs;

const projects = [
  {
    name: "CNN-js",
    description: `CNN js is a convolutional neural network training library written for javascript.
    The library was created as an educational experiment. It supports convolutional
    neural networks and deep neural networks. I made a <a href="https://jakic12.github.io/CNN-js-frontend" target="_blank">demo frontend</a> that can neural networks in your browser.
    You can upload your own dataset or use a reduced version of the cifar-10 dataset already provided with the demo.
    You can also upload images and test the network from your browser.`,
    link: "https://jakic12.github.io/CNN-js-frontend",
    images: [CNNjsfrontend],
    tools: [javascript, react],
  },
  {
    name: "Bezier regression",
    description: `It's a bézier curve playground, where you can create bézier
    curves and see a visualization of how they get drawn. I also calculated a
    backpropagation model to fit a bézier curve to a function.`,
    link: "https://jakic12.github.io/bezier-regression/",
    images: [bezier],
    tools: [javascript, html5, css3],
  },
  {
    name: "Maze madness",
    description: `A fun game in javascript where you have to traverse a maze very fast.
    The game moves with the beat. You have to make fast decisions every beat
    with your arrow keys to get through the maze. Each level a bigger maze is generated
    so the game progresses infinitely`,
    link: "https://jakic12.github.io/maze-set/",
    images: [maze],
    tools: [javascript, html5, css3],
  },
  {
    name: "Fri-fmf timetable",
    description: `The frontend to a joined timetable for my classes
    from fri and fmf. The backend for this project was made by my colleague <a href="https://github.com/plojyon" target="_blank">Yon</a>.`,
    link: "https://jakic12.github.io/fri-fmf-timetable/",
    images: [timetable],
    tools: [react],
  },
  {
    name: "Big XO",
    description: `My version of <a href="https://en.wikipedia.org/wiki/Ultimate_tic-tac-toe" target="_blank">Ultimate tic-tac-toe</a>. It is a
    tic-tac-toe game where each cell is a tic-tac-toe game. `,
    link: "https://jakic12.github.io/big-xo",
    images: [bigxo],
    tools: [react, nodejs],
  },
  {
    name: "Brainfuck debugger",
    description: `A environment for <a href="https://en.wikipedia.org/wiki/Brainfuck" target="_blank">Brainfuck</a>
    that supports running and debugging code. You can set breakpoints and view the memory.`,
    link: "https://jakic12.github.io/brainfuck-debugger/",
    images: [brainfuck],
    tools: [javascript, html5, css3],
  },
  {
    name: "Calculate anything",
    description: `A simple custom calculator creator. You can define inputs and
    a function that calculates the output. The result is a link in which the calculator
    is encoded so you can share it.`,
    link: "https://jakic12.github.io/calculate-anything",
    images: [calculator],
    tools: [react],
  },
  {
    name: "React clone",
    description: `In this project I created my reduced version of react and made
    a multipart form using it.`,
    link: "https://jakic12.github.io/simple-html-form/",
    images: [form],
    tools: [javascript, html5, css3],
  },
];
export default projects;
