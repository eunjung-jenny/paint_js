const canvas = document.querySelector(".js-canvas");
const ctx = canvas.getContext("2d");
const mode = document.querySelector(".js-mode");
const clear = document.querySelector(".js-clear");
const range = document.querySelector(".js-range");
const colors = document.querySelector(".js-colors");

canvas.width = 550;
canvas.height = 550;

let painting = false;
let filling = false;

function handleColorChange(event) {
  ctx.strokeStyle = event.target.style.backgroundColor;
  ctx.fillStyle = event.target.style.backgroundColor;
}

function handleRangeChange(event) {
  ctx.lineWidth = event.target.value;
}

function handleClear(event) {
  ctx.clearRect(0, 0, 550, 550);
}

function handleModeChange(event) {
  if (filling) {
    event.target.innerHTML = "paint";
  } else {
    event.target.innerHTML = "fill";
  }
  filling = !filling;
}

function stopPainting(event) {
  painting = false;
}

function onMouseDown(event) {
  if (filling) {
    ctx.fillRect(0, 0, 550, 550);
  } else {
    painting = true;
  }
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (painting) {
    ctx.lineTo(x, y);
    ctx.stroke();
  } else {
    ctx.beginPath();
    ctx.moveTo(x, y);
  }
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", onMouseDown);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("mouseup", stopPainting);
}

if (mode) {
  mode.addEventListener("click", handleModeChange);
}

if (clear) {
  clear.addEventListener("click", handleClear);
}

if (range) {
  range.addEventListener("mouseup", handleRangeChange);
}

if (colors) {
  colors.addEventListener("click", handleColorChange);
}
