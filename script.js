let lastRenderTime = 0;

const snakeSpeed = 2;

//Game loop function
function mainLoop(currentTime) {
  window.requestAnimationFrame(mainLoop);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  console.log(secondsSinceLastRender);

  if (secondsSinceLastRender < 1 / snakeSpeed) return;
  console.log("render");
  lastRenderTime = currentTime;
}

window.requestAnimationFrame(mainLoop);
