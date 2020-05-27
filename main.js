var myAudio = document.getElementById("player");
var isPlaying = false;
var playPause = document.getElementById("play-pause");
var icon = document.getElementById("icon");

var theatreMode = document.getElementById("theatre-mode");
var theatreImage = document.getElementById("theatre-mode-image");
var theatreModeBottom = document.getElementById("theatre-mode-bottom");
var mediaButtons = document.getElementById("track-buttons");
var trackList = document.getElementsByTagName("li");

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

for (var i = 0; i < trackList.length; i++) {
  trackList[i].addEventListener("click", function () {
    // myAudio.src = tracklist[trackPosition];
    myAudio.play();
    theatreModeBottom.classList.add("fade-out");
    theatreMode.classList.add("scale-out");
  });
}

theatreMode.addEventListener("click", function () {
  if (isPlaying == false) {
    theatreModeBottom.classList.remove("fade-out");
    theatreMode.classList.remove("scale-out");
  }
});

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
  theatreModeBottom.classList.add("fade-out");
  theatreMode.classList.add("scale-out");
};

myAudio.onpause = function () {
  isPlaying = false;
  playPause.classList.remove("pause");
  playPause.classList.add("play");
};
