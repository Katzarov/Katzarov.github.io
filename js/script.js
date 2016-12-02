
$(document).ready(function() {
  $('#main').css('height', $(window).height()-$('#tabmenu').height()-$('#footer').height());
  // define variables
  var random = Math.floor((Math.random() * 36) + 1);
  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', 'tracks/' + random + '.mp3');
  //audioElement.play();

  var counter = 1;
  $('#counter').text(counter + '/50');

  var correct = 0;
  $('#correct').text(correct + '/' + counter);

  $('#play').on('click', function() {
  // plays the interval
  audioElement.play();
  });


  $('#next').on('click', function() {
  counter = counter + 1;
  $('#counter').text(counter + '/50');
  $('#correct').text(correct + '/' + counter);
  // selects random a random interval
  random = Math.floor((Math.random() * 36) + 1);
  audioElement.setAttribute('src', 'tracks/' + random + '.mp3');
  audioElement.play();
  });

  $('#p4').on('click', function() {
  // perfect fourth
    if (random % 3 == 1) {
        $('body').append('Good Job' + random);
    } else {
        $('body').append('Wrong' + random);
    }
  });

  $('#p5').on('click', function() {
  // perfect fifth
    if (random % 3 == 2) {
        $('body').append('Good Job' + random);
    } else {
        $('body').append('Wrong' + random);
    }
  });

  $('#p8').on('click', function() {
    // octave
    if (random % 3 == 0) {
        $('body').append('Good Job' + random);
    } else {
        $('body').append('Wrong' + random);
    }
  });

    $('#item1').hover(function() {
           $(this).addClass('tabmenuhover');
       }, function() {
           $(this).removeClass('tabmenuhover');
       }
     );

     $('#item2').hover(function() {
            $(this).addClass('tabmenuhover');
        }, function() {
            $(this).removeClass('tabmenuhover');
        }
      );

      $('#item3').hover(function() {
             $(this).addClass('tabmenuhover');
         }, function() {
             $(this).removeClass('tabmenuhover');
         }
       );

});
