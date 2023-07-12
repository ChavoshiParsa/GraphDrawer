import "./style.css";

console.log("welcome back parsa!");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const size = 650;
let sec = 16;
// Number(prompt("Enter size: "));
const hSize = size / 2;

canvas.height = size;
canvas.width = size;

const drawAxis = () => {
  // * vertical & horizontal axis
  let saw = 1;
  for (let i = 1; i < sec; i++) {
    for (let j = 0; j < size; j++) {
      ctx.beginPath();
      ctx.fillStyle = "darkblue";
      ctx.fillRect((size / sec) * i - (saw - 1) / 2, j, saw, saw);
      ctx.fillRect(j, (size / sec) * i - (saw - 1) / 2, saw, saw);
    }
  }
  let maw = 2;
  for (let j = 0; j < size; j++) {
    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.fillRect(hSize - (maw - 1) / 2, j, maw, maw);
    ctx.fillRect(j, hSize - (maw - 1) / 2, maw, maw);
  }
};

drawAxis();

// * draw graph . . .
let button = document.getElementById("submitBtn");
let fx = document.getElementById("fx");
let a = document.getElementById("a");
let b = document.getElementById("b");
let c = document.getElementById("c");
let d = document.getElementById("d");

const draw = () => {
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  drawAxis();

  let fxV = fx.value;
  let aV = Number(a.value);
  let bV = Number(b.value);
  let cV = Number(c.value);
  let dV = Number(d.value);

  let red = rand(100, 200);
  let green = rand(100, 200);
  let blue = rand(100, 200);

  for (let i = -(sec / 2); i <= sec / 2; i += 0.0001) {
    ctx.beginPath();
    ctx.fillStyle = `rgb(${red} ,${green} ,${blue})`;

    let x = i;
    let y;
    switch (fxV) {
      case "sin":
        y = aV * Math.sin(bV * x + cV) + dV;
        break;
      case "abs":
        y = aV * Math.abs(bV * x + cV) + dV;
        break;
      case "x":
        y = aV * (bV * x + cV) + dV;
        break;
      case "sqrt":
        y = aV * Math.sqrt(bV * x + cV) + dV;
        break;
      case "cos":
        y = aV * Math.cos(bV * x + cV) + dV;
        break;
      case "tan":
        y = aV * Math.tan(bV * x + cV) + dV;
        break;
      case "pow2":
        y = aV * Math.pow(bV * x + cV, 2) + dV;
        break;
      case "pow3":
        y = aV * Math.pow(bV * x + cV, 3) + dV;
        break;
      case "pow4":
        y = aV * Math.pow(bV * x + cV, 4) + dV;
        break;
      case "log10":
        y = aV * Math.log10(bV * x + cV) + dV;
        break;
      case "log2":
        y = aV * Math.log2(bV * x + cV) + dV;
        break;
      case "2 ** x":
        y = aV * Math.pow(2, bV * x + cV) + dV;
        break;
      case "10 ** x":
        y = aV * Math.pow(10, bV * x + cV) + dV;
        break;
      case "cot":
        y = aV * (1 / Math.tan(bV * x + cV)) + dV;
        break;
      case "1 / x":
        y = aV * (1 / (bV * x + cV)) + dV;
        break;
    }

    ctx.fillRect((x * size) / sec + hSize, (-y * size) / sec + hSize, 1, 1);
  }
};

button.addEventListener("click", draw);

const rand = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

document.getElementById("zi").addEventListener("click", () => {
  sec = sec - 4;
  update();
});

document.getElementById("zo").addEventListener("click", () => {
  sec = sec + 4;
  update();
});

const update = () => {
  drawAxis();
  draw();
};

/*
// * center
ctx.beginPath();
ctx.fillStyle = "white";
ctx.fillRect(hSize, hSize, 1, 1);
*/

/*
    // let y = Math.pow(x, 3);
    // let y = Math.sqrt(x) + Math.sin(x);
    // let y = Math.sin(x);
    // let y = Math.abs(x); 
*/
