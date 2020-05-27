var body = document.body;

var myAudio = document.getElementById("player");
var isPlaying = false;
var playPause = document.getElementById("play-pause");
var icon = document.getElementById("icon");

var theatreMode = document.getElementById("theatre-mode");
var theatreImage = document.getElementById("theatre-mode-image");
var theatreModeBottom = document.getElementById("theatre-mode-bottom");
var mediaButtons = document.getElementById("track-buttons");

var nextTrack = document.getElementById("next-track");
var previousTrack = document.getElementById("previous-track");
var tracks = [
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
  if (trackPosition < tracks.length - 1) {
    trackPosition++;
    myAudio.src = tracks[trackPosition];
    myAudio.play();
  } else {
    trackPosition = 0;
    myAudio.src = tracks[trackPosition];
    myAudio.play();
  }
});

previousTrack.addEventListener("click", function () {
  if (trackPosition >= 1) {
    trackPosition--;
    myAudio.src = tracks[trackPosition];
    myAudio.play();
  } else {
    trackPosition = tracks.length - 1;
    myAudio.src = tracks[trackPosition];
    myAudio.play();
  }
});

var g = document.getElementById("js-tracks");
for (var i = 0, len = g.children.length; i < len; i++) {
  (function (index) {
    g.children[i].onclick = function () {
      myAudio.src = "./sounds/track" + (index + 1) + ".mp3";
      myAudio.play();
    };
  })(i);
}

theatreMode.addEventListener("click", function () {
  if (isPlaying == false) {
    theatreModeBottom.classList.remove("fade-out");
    theatreMode.classList.remove("scale-out");
    body.classList.toggle("darken");
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
  body.classList.add("darken");
};

myAudio.onpause = function () {
  isPlaying = false;
  playPause.classList.remove("pause");
  playPause.classList.add("play");
};
