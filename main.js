var myAudio = document.getElementById("player");
var isPlaying = false;
var playPause = document.getElementById("play-pause");
var icon = document.getElementById("icon");
var player = document.getElementById("player");

function togglePlay() {
  if (isPlaying) {
    myAudio.pause();
  } else {
    myAudio.play();
  }
}

myAudio.onplaying = function () {
  isPlaying = true;
  icon.classList.remove("fas", "fa-play");
  icon.classList.add("fas", "fa-pause");
};

myAudio.onpause = function () {
  isPlaying = false;
  icon.classList.remove("fas", "fa-pause");
  icon.classList.add("fas", "fa-play");
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
