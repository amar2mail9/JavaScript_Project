let fanBox = document.getElementById("fan-box");
function stopFan() {
  fanBox.style.animationPlayState = "paused";
}

function startFan(speed) {
  if (speed == 1) {
    fanBox.style.animationPlayState = "running";
    fanBox.style.animationDuration = "1000ms";
  } else if (speed == 2) {
    fanBox.style.animationPlayState = "running";
    fanBox.style.animationDuration = "500ms";
  } else {
    fanBox.style.animationPlayState = "running";
    fanBox.style.animationDuration = "100ms";
  }
}