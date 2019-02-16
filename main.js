alert('now')

// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
keys.forEach(function(key){
  notes.push(document.getElementById(key));
})
console.log(notes)

//functions that change the color of the keys
function keyPlay(){
event.target.style.backgroundColor = 'blue'
}
function keyReturn(){
  event.target.style.backgroundColor = ''
}

//function with event handler properties
function name(note){
  note.onmousedown = keyPlay
  note.onmouseup = keyReturn
}

//loop that runs the array elements through the function
notes.forEach( note => {
  name(note)
})

// adding audio files
function play(){
var audio = new Audio('https://res.cloudinary.com/dh41vh9dx/video/upload/v1538523340/audiocheck.net_sin_400Hz_-3dBFS_3s.wav')
audio.play()
}

  // variables store buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

//stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden= true;

//function for the first progress button
nextOne.onclick = function(){
  nextTwo.hidden = false
  nextOne.hidden = true
  document.getElementById('letter-note-five').innerHTML = 'D'
  document.getElementById('letter-note-six').innerHTML = 'C'
}


// function for the second progress button
nextTwo.onclick = function(){
  nextThree.hidden = false
  nextTwo.hidden = true
  lastLyric.style.display = 'inline-block'
  document.getElementById('letter-note-three').innerHTML = 'G'
  document.getElementById('letter-note-four').innerHTML = 'E'
  document.getElementById('letter-note-five').innerHTML = 'C'
  document.getElementById('letter-note-six').innerHTML = 'B'
  document.getElementById('word-five').innerHTML = 'DEAR';
  document.getElementById('word-six').innerHTML = 'FRI-';
}
//function for the third progress button
nextThree.onclick = function(){
  startOver.hidden = false
  nextThree.hidden = true
  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('word-six').innerHTML = 'YOU';

  document.getElementById('letter-note-one').innerHTML = 'F';
  document.getElementById('letter-note-two').innerHTML = 'F';
  document.getElementById('letter-note-three').innerHTML = 'E';
  document.getElementById('letter-note-four').innerHTML = 'C';
  document.getElementById('letter-note-five').innerHTML = 'D';
  document.getElementById('letter-note-six').innerHTML = 'C';
  lastLyric.style.display = 'none'
}
//function for the startOver button
startOver.onclick = function() {
  nextOne.hidden = false;
  startOver.hidden = true;
   document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'B';
}