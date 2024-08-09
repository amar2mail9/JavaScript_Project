let inputAudio = document.getElementById("inputAudio");

inputAudio.onchange = function () {
  //   let fullDurection = document.getElementById();
  let size = document.getElementById("size");
  let file = this.files[0];
  console.log(file);
  let songName = document.getElementById("songName");

  // create url for song
  let url = URL.createObjectURL(file);

  // Audio size
  size.innerHTML = "Size: " + (file.size / 1000 / 1000).toFixed(2) + "Mb";

  //Audio Name
  songName.innerHTML = file.name;

  // create audio tag
  let audio = document.createElement("audio");
  audio.src = url;
  // playIcon.className = "ri-pause-large-line";

  //   audio.play();

  // enable toolbar
  let toolBar = document.getElementsByClassName("toolBar");

  for (let i = 0; i < toolBar.length; i++) {
    toolBar[i].disabled = false;
  }

  // play and pause

  let playBtn = document.getElementById("play-btn");
  playBtn.onclick = function () {
    let playIcon = document.getElementById("play-icon");
    let spectrum = document.getElementById("spectrum");
    if (audio.paused) {
      spectrum.style.opacity = 1;
      audio.play();
      playIcon.className = "ri-pause-large-line";
    } else {
      audio.pause();
      playIcon.className = "ri-play-large-fill";
      spectrum.style.opacity = 0;
    }
  };

  // Sound ke liye
  let muteBtn = document.getElementById("mute-btn");
  muteBtn.onclick = function () {
    let muteIcon = document.getElementById("mute-icon");
    if (audio.muted) {
      audio.muted = false;
      muteIcon.className = "ri-volume-up-fill";
      spectrum.style.opacity = 1;
    } else {
      audio.muted = true;
      muteIcon.className = " ri-volume-mute-fill";
      spectrum.style.opacity = 0;
    }
  };

  // loop

  let loopBtn = document.getElementById("loop-btn");
  loopBtn.onclick = function () {
    let loopIcon = document.getElementById("loop-icon");

    if (audio.loop) {
      audio.loop = false;
      loopIcon.className = "ri-repeat-2-line";
    } else {
      audio.loop = true;
      loopIcon.className = "ri-repeat-one-line";
    }
  };

  let forwardBtn = document.getElementById("forward-btn");
  forwardBtn.onclick = function () {
    let current = audio.currentTime;
    audio.currentTime = current + 10;
  };
  let backBtn = document.getElementById("back-btn");
  backBtn.onclick = function () {
    let current = audio.currentTime;
    if (audio.currentTime > 10) audio.currentTime = current - 10;
  };

  // show full duration

  audio.onloadedmetadata = function () {
    let fullMin = document.getElementById("full-min");
    let fullSec = document.getElementById("full-sec");
    let duration = audio.duration;
    console.log(duration);
    let minutes = Math.floor(duration / 60);
    console.log(minutes);
    let sec = Math.floor(duration - minutes * 60);
    console.log(sec);
    if (minutes < 10) {
      fullMin.innerHTML = "0" + minutes;
    } else {
      fullMin.innerHTML = minutes;
    }

    if (sec < 10) {
      fullSec.innerHTML = "0" + sec;
    } else {
      fullSec.innerHTML = sec;
    }

    // progress and current time
    audio.ontimeupdate = function () {
      let currentMin = document.getElementById("current-min");
      let currentSec = document.getElementById("current-sec");
      let totalDuration = audio.duration;
      let duration = audio.currentTime;
      let minutes = Math.floor(duration / 60);
      let sec = Math.floor(duration % 60);

      if (minutes < 10) {
        currentMin.innerHTML = "0" + minutes;
      } else {
        currentMin.innerHTML = minutes;
      }

      if (sec < 10) {
        currentSec.innerHTML = "0" + sec;
      } else {
        currentSec.innerHTML = sec;
      }

      let percentage = Math.floor((duration / totalDuration) * 100);

      let progressBar = document.getElementById("progress-bar");
      progressBar.style.width = percentage + "%";
    };
  };

  // paly currentTime
};
