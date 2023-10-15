var buttonOrKey = "z";
var activeButton = document.querySelector("." + buttonOrKey);
var buttons = document.querySelectorAll(".drum");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    buttonOrKey = this.innerHTML;
    console.log(buttonOrKey);
    playAudio(buttonOrKey);
    addAnimation(buttonOrKey);
  });
}

document.addEventListener("keydown", function (event) {
  buttonOrKey = event.key;
  console.log(buttonOrKey);
  playAudio(buttonOrKey);
  addAnimation(buttonOrKey);
});
function playAudio(buttonOrKey) {
  switch (buttonOrKey) {
    case "w":
      var wAudio = new Audio("sounds/crash.mp3");
      wAudio.play();

      break;
    case "a":
      var aAudio = new Audio("sounds/kick-bass.mp3");
      aAudio.play();
      break;
    case "s":
      var sAudio = new Audio("sounds/snare.mp3");
      sAudio.play();
      break;
    case "d":
      var dAudio = new Audio("sounds/tom-1.mp3");
      dAudio.play();
      break;
    case "j":
      var jAudio = new Audio("sounds/tom-2.mp3");
      jAudio.play();
      break;
    case "k":
      var kAudio = new Audio("sounds/tom-3.mp3");
      kAudio.play();
      break;
    case "l":
      var lAudio = new Audio("sounds/tom-4.mp3");
      lAudio.play();
      break;

    default:
      console.log("audio is not playing.");
      break;
  }
}

function addAnimation(buttonOrKey) {
  activeButton = document.querySelector("." + buttonOrKey);
  activeButton.classList.add("pressed");
  setTimeout(removeAnimation, 200);
}
function removeAnimation() {
  activeButton = document.querySelector("." + buttonOrKey);
  activeButton.classList.remove("pressed");
}
