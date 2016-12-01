
$(document).ready(function() {
  // define variables
  var random = Math.floor((Math.random() * 36) + 1);
  var audioElement = document.createElement('audio');


  $('#click').on('click', function() {
  // selects random a random interval
  random = Math.floor((Math.random() * 36) + 1);
  audioElement.setAttribute('src', 'tracks/' + random + '.mp3');
  audioElement.play();
  });

  $('#p4').on('click', function() {
  // perfect fourth
    if (random == 1 ||
        random == 4 ||
        random == 7 ||
        random == 10 ||
        random == 13 ||
        random == 16 ||
        random == 19 ||
        random == 22 ||
        random == 25 ||
        random == 28 ||
        random == 31 ||
        random == 34) {
        $('body').append('Good Job' + random);
    } else {
        $('body').append('Wrong' + random);
    }
  });

  $('#p5').on('click', function() {
  // perfect fifth
    if (random == 2 ||
        random == 5 ||
        random == 8 ||
        random == 11 ||
        random == 14 ||
        random == 17 ||
        random == 20 ||
        random == 23 ||
        random == 26 ||
        random == 29 ||
        random == 32 ||
        random == 35) {
        $('body').append('Good Job' + random);
    } else {
        $('body').append('Wrong' + random);
    }
  });

  $('#p8').on('click', function() {
    // octave
    if (random == 3 ||
        random == 6 ||
        random == 9 ||
        random == 12 ||
        random == 15 ||
        random == 18 ||
        random == 21 ||
        random == 24 ||
        random == 27 ||
        random == 30 ||
        random == 33 ||
        random == 36){
        $('body').append('Good Job' + random);
    } else {
        $('body').append('Wrong' + random);
    }
  });




});
