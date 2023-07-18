let lastRenderTime = 0;

//Game loop function
function mainLoop(currentTime) {
  window.requestAnimationFrame(mainLoop);
  console.log(currentTime);
  lastRenderTime = currentTime;
}

window.requestAnimationFrame(mainLoop);
