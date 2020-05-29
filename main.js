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

var ul = document.getElementById("js-tracks");
for (var i = 0, len = ul.children.length; i < len; i++) {
  (function (index) {
    ul.children[i].onclick = function () {
      myAudio.src = "./sounds/track" + (index + 1) + ".mp3";
      myAudio.play();
    };
  })(i);
}

function togglePlay() {
  if (isPlaying) {
    myAudio.pause();
  } else {
    myAudio.play();
  }
}

function getEventTarget(e) {
  e = e || window.event;
  return e.target || e.srcElement;
}

ul.onclick = function (event) {
  var target = getEventTarget(event);
  featureTrack.innerText = target.innerText;
};

var featureTrack = document.getElementById("feature-track");
var featureTrackBox = document.getElementById("feature-track-box");

myAudio.onplaying = function () {
  isPlaying = true;
  playPause.classList.remove("play");
  playPause.classList.add("pause");
  theatreModeBottom.classList.add("fade-out");
  theatreMode.classList.add("scale-out");
  body.classList.add("darken");
  featureTrackBox.classList.remove("hidden");
  featureTrack.classList.add("inner-text");
  featureTrack.classList.add("display");
  mediaButtons.classList.add("display");
};

myAudio.onpause = function () {
  isPlaying = false;
  playPause.classList.remove("pause");
  playPause.classList.add("play");
  theatreModeBottom.classList.remove("fade-out");
  theatreMode.classList.remove("scale-out");
  body.classList.remove("darken");
  featureTrackBox.classList.add("hidden");
  featureTrack.classList.remove("inner-text");
  featureTrack.classList.remove("display");
  mediaButtons.classList.remove("display");
};
