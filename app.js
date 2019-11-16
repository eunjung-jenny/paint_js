const canvas = document.querySelector(".js-canvas");
const ctx = canvas.getContext("2d");
const mode = document.querySelector(".js-mode");

canvas.width = 550;
canvas.height = 550;

let painting = false;
let filling = false;

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
  if (painting) {
    const x = event.offsetX;
    const y = event.offsetY;
    if (painting) {
      ctx.lineTo(x, y);
      ctx.stroke();
    } else {
      ctx.moveTo(x, y);
    }
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
