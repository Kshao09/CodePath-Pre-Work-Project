const cluePauseTime = 333;
const nextClueWaitTime = 1000;
const time = 60000;

var pattern = [2, 2, 4, 3, 2, 1, 2, 4];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;;
var clueHoldTime = 1000;
var timer;
var timerDelay;
var intervalID;
var numOfMistakes;

function startGame() {
  progress = 0;
  guessCounter = 0;
  gamePlaying = true;
  clueHoldTime = 1000;
  timer = 0;
  numOfMistakes = 0;
  timerDelay = 0;
  for (var i = 0; i < 6; i++) {
        pattern[i] = Math.floor(Math.random() * 6 + 1);
  }
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function startTimer() {
  timer = time;
  timerDelay = nextClueWaitTime + clueHoldTime * (progress + 1) + cluePauseTime * progress;
  intervalID = setInterval(startDelay, 100);
}

function startDelay() {
  timerDelay -= 100;
  if (timerDelay <= 0) {
    clearInterval(intervalID);
    intervalID = setInterval(decreaseTimer, 1000);
  }
}

function decreaseTimer() {
  print(timer/1000);
  document.getElementById("timer").classList.remove("hidden");
  timer = timer - 1000;
  if (timer === -2000) {
    stopTimer();
    loseGame();
  }
}

function stopTimer() {
  clearInterval(intervalID);
  document.getElementById("timer").classList.add("hidden");
}

function print(text) {
  if (text === 1) {
    document.getElementById("timer").innerHTML = text + " Seconds Remaining";
  }
  else{
    document.getElementById("timer").innerHTML = text + " Seconds Remaining";
  }
}

function stopGame() {
  stopTimer();
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  guessCounter = 0;
  if (gamePlaying) {
    lightButton(btn);
    if (btn === 1) {
      startAudio(btn, clueHoldTime);
    } else if (btn === 2) {
      startAudio(btn, clueHoldTime);
    } else if (btn === 3) {
      startAudio(btn, clueHoldTime);
    } else if (btn === 4) {
      startAudio(btn, clueHoldTime);
    } else if (btn === 5) {
      startAudio(btn, clueHoldTime);
    } else {
      startAudio(btn, clueHoldTime);
    }
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  let delay = nextClueWaitTime;
  for (let i = 0; i <= progress; i++) {
    setTimeout(playSingleClue, delay, pattern[i]);
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
  startTimer();
  clueHoldTime -= 25;
}
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
  
function startAudio(btn) {
  var audioId = document.getElementById("audio"+btn);
  audioId.play();
  
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.050);
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, 200);
}

function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.050);
  tonePlaying = false;
}
function loseGame() {
  stopGame();
  alert("Game over, You lost.")
}

function winGame() {
  stopGame();
  alert("Contratulations, You won!");
}

function guess(btn) {
   if (btn == pattern[guessCounter]) {
      if (guessCounter == progress) {
        if (progress === 8) {
          winGame();
        } else {
          progress++;
          playClueSequence();
        }
      } else {
        guessCounter++;
      }
   } else if (btn != pattern[guessCounter]) {
          progress++;
          numOfMistakes++;
          stopTimer();
          alert("You still have " + (3-numOfMistakes) + " chances left!");
          playClueSequence();
          if (numOfMistakes == 3) {
              loseGame();
          }
     }
}