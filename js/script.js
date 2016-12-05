
$(document).ready(function() {
  $('#main').css('height', $(window).height()-$('.tabmenu').height()-$('.footer').height());

  var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));
  if (isTouch) {
    $('body').removeClass('desktop');
  }


  //$('#arc').css('left', $(window).width()/2);
  // define variables
  var random = Math.floor((Math.random() * 36) + 1);
  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', 'tracks/' + random + '.mp3');
  //audioElement.play();

  var counter = 1;
  $('#counter').text('Question: ' + counter + '/50');

  var correct = 0;
  $('#correct').text('| Correct: ' + correct + '/' + counter);

  $('#play').on('click', function() {
  // plays the interval
  audioElement.play();
  });


  $('#next').on('click', function() {
  counter = counter + 1;
  $('#counter').text('Question: ' + counter + '/50');
  $('#correct').text('| Correct: ' + correct + '/' + counter);
  // selects random a random interval
  random = Math.floor((Math.random() * 36) + 1);
  audioElement.setAttribute('src', 'tracks/' + random + '.mp3');
  audioElement.play();
  firsttry = true;
  });

  var firsttry = true;
  $('#p4').on('click', function() {
  // perfect fourth
    if (random % 3 == 1) {
        if (firsttry == true) {
        $('body').append('Good Job!' + random);
        correct = correct +1;
      } else {
        $('body').append('Correct' + random);
      }
    } else {
        $('body').append('Try Again' + random);
        firsttry = false;
    }
  });

  $('#p5').on('click', function() {
  // perfect fifth
    if (random % 3 == 2) {
      if (firsttry == true) {
      $('body').append('Good Job!' + random);
      correct = correct +1;
    } else {
      $('body').append('Correct' + random);
    }
  } else {
      $('body').append('Try Again' + random);
      firsttry = false;
    }
  });

  $('#p8').on('click', function() {
    // octave
    if (random % 3 == 0) {
      if (firsttry == true) {
      $('body').append('Good Job!' + random);
      correct = correct +1;
    } else {
      $('body').append('Correct' + random);
    }
  } else {
      $('body').append('Try Again' + random);
      firsttry = false;
    }
  });

$('#item1').addClass('tabmenuhover');
$('#mode1').hide();
$('#mode2').hide();
$('.footer').hide();


  $('#item1').on('click', function() {
      $('#item1').addClass('tabmenuhover');
      $('#item2').removeClass('tabmenuhover');
      $('#item3').removeClass('tabmenuhover');
      $('#mode1').hide();
      $('#mode2').hide();
      $('.footer').hide();
      $('#theory').fadeIn(250);
    });

  $('#item2').on('click', function() {
      $('#item2').addClass('tabmenuhover');
      $('#item1').removeClass('tabmenuhover');
      $('#item3').removeClass('tabmenuhover');
      $('#theory').hide();
      $('#mode2').hide();
      $('.footer').fadeIn(250);
      $('#mode1').fadeIn(250);
    });

  $('#item3').on('click', function() {
      $('#item3').addClass('tabmenuhover');
      $('#item1').removeClass('tabmenuhover');
      $('#item2').removeClass('tabmenuhover');
      $('#theory').hide();
      $('#mode1').hide();
      $('.footer').fadeIn(250);
      $('#mode2').fadeIn(250);
    });


    $("#wc").text("New word");
    $("#wc").text("New word2");
    $('#wc').css('left', $(window).width()/2);
    $('#wc').css('top', $('#mode1').height()/2);


});
