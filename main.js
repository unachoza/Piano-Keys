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
function playC(){
var audio = new Audio('https://res.cloudinary.com/dh41vh9dx/video/upload/v1550351595/203479__tesabob2001__c3.mp3')
audio.play()
}
function playA(){
  var audio = new Audio('https://res.cloudinary.com/dh41vh9dx/video/upload/v1550351888/203458__tesabob2001__a3.mp3')
  audio.play()
  }
  function playG(){
    var audio = new Audio('https://res.cloudinary.com/dh41vh9dx/video/upload/v1550352021/203493__tesabob2001__g3.mp3')
    audio.play()
    }
    function playB(){
      var audio = new Audio('https://res.cloudinary.com/dh41vh9dx/video/upload/v1550352148/203463__tesabob2001__b3.mp3')
      audio.play()
      }
      function playE(){
        var audio = new Audio('https://res.cloudinary.com/dh41vh9dx/video/upload/v1550352222/203470__tesabob2001__e3.mp3')
        audio.play()
        }
        function playF(){
          var audio = new Audio('https://res.cloudinary.com/dh41vh9dx/video/upload/v1550352328/203468__tesabob2001__f3.mp3')
          audio.play()
          }
          function playD(){
            var audio = new Audio('https://res.cloudinary.com/dh41vh9dx/video/upload/v1550352546/203486__tesabob2001__d3.mp3')
            audio.play()
            }
            function playMiddleC(){
              var audio = new Audio('https://res.cloudinary.com/dh41vh9dx/video/upload/v1550352725/203478__tesabob2001__c4-middle-c.mp3 ')
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