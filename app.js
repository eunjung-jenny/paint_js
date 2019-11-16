const canvas = document.querySelector(".js-canvas");
const ctx = canvas.getContext("2d");

canvas.width = 550;
canvas.height = 550;

let painting = false;

function stopPainting(event) {
  painting = false;
}

function onMouseDown(event) {
  painting = true;
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (painting) {
    ctx.lineTo(x, y);
    ctx.stroke();
  } else {
    ctx.moveTo(x, y);
  }
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", onMouseDown);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("mouseup", stopPainting);
}
