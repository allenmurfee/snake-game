let lastRenderTime = 0;
import { snakeSpeed } from "./snake";

//Game loop function
function mainLoop(currentTime) {
  window.requestAnimationFrame(mainLoop);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  //   console.log(secondsSinceLastRender);

  if (secondsSinceLastRender < 1 / snakeSpeed) return;
  console.log("render");
  lastRenderTime = currentTime;

  //call 2 functions
  update();
  draw();
}

window.requestAnimationFrame(mainLoop);

function update() {}

function draw() {}
