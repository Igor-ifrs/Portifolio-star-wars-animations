const canvas = document.querySelector("#canvas");

const screenForCanvas = function () {
  const screen = { X: window.innerWidth, Y: window.innerHeight };
  canvas.style.height = `${screen.Y}px`;
  canvas.style.width = `${screen.X}px`;
};
window.addEventListener("resize", screenForCanvas);
window.addEventListener("load", screenForCanvas);
