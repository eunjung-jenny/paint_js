const canvas = document.querySelector(".js-canvas");
const ctx = canvas.getContext("2d");

canvas.width = 550;
canvas.height = 550;

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  ctx.lineTo(x, y);
  ctx.stroke();
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
}
