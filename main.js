var myAudio = document.getElementById("player");
var isPlaying = false;
var playPause = document.getElementById("play-pause");
var icon = document.getElementById("icon");

function togglePlay() {
  if (isPlaying) {
    myAudio.pause();
  } else {
    myAudio.play();
  }
}

myAudio.onplaying = function () {
  isPlaying = true;
  playPause.classList.remove("play");
  playPause.classList.add("pause");
};

myAudio.onpause = function () {
  isPlaying = false;
  playPause.classList.remove("pause");
  playPause.classList.add("play");
};

var nextTrack = document.getElementById("next-track");
var previousTrack = document.getElementById("previous-track");
var tracklist = [
  "./sounds/track1.mp3",
  "./sounds/track2.mp3",
  "./sounds/track3.mp3",
  "./sounds/track4.mp3",
  "./sounds/track5.mp3",
  "./sounds/track6.mp3",
  "./sounds/track7.mp3",
  "./sounds/track8.mp3",
];
var trackPosition = 0;

nextTrack.addEventListener("click", function () {
  if (trackPosition < tracklist.length - 1) {
    trackPosition++;
    myAudio.src = tracklist[trackPosition];
    myAudio.play();
  } else {
    trackPosition = 0;
    myAudio.src = tracklist[trackPosition];
    myAudio.play();
  }
});

previousTrack.addEventListener("click", function () {
  if (trackPosition >= 1) {
    trackPosition--;
    myAudio.src = tracklist[trackPosition];
    myAudio.play();
  } else {
    trackPosition = tracklist.length - 1;
    myAudio.src = tracklist[trackPosition];
    myAudio.play();
  }
});

var theatreMode = document.getElementById("theatre-mode");
var theatreModeBottom = document.getElementById("theatre-mode-bottom");

theatreMode.addEventListener("click", function () {
  theatreModeBottom.classList.add("fade-out");
});
