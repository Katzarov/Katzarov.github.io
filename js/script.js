
$(document).ready(function() {
  $('#main').css('height', $(window).height()-$('.tabmenu').height()-$('.footer').height());

  window.onresize = function(){ location.reload(); }

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

  $('#play').addClass('footerhover').delay(300).queue(function(next){
      $('#play').removeClass('footerhover');
      next();
  });


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

$('#wc').hide();
  var firsttry = true;
  $('#p4').on('click', function() {
  // perfect fourth
    if (random % 3 == 1) {
        if (firsttry == true) {
        $("#wc").text('Good Job!');
        correct = correct +1;
        $('#wc').css('color', 'green');
        $('#wc').clearQueue().fadeIn(100).delay(1000).queue(function(next){
            $('#wc').fadeOut(100);
            next();
        });

      } else {
        $("#wc").text('Correct');
        $('#wc').css('color', 'yellow');
        $('#wc').clearQueue().fadeIn(100).delay(1000).queue(function(next){
            $('#wc').fadeOut(100);
            next();
        });
      }
    } else {
        $("#wc").text('Try Again!');
        firsttry = false;
        $('#wc').css('color', 'red');
        $('#wc').clearQueue().fadeIn(100).delay(1000).queue(function(next){
            $('#wc').fadeOut(100);
            next();
        });
    }
  });

  $('#p5').on('click', function() {
  // perfect fifth
    if (random % 3 == 2) {
      if (firsttry == true) {
      $("#wc").text('Good Job!');
      correct = correct +1;
    } else {
      $("#wc").text('Correct');
    }
  } else {
      $("#wc").text('Try Again!');
      firsttry = false;
    }
  });

  $('#p8').on('click', function() {
    // octave
    if (random % 3 == 0) {
      if (firsttry == true) {
      $("#wc").text('Good Job!');
      correct = correct +1;
    } else {
      $("#wc").text('Correct');
    }
  } else {
      $("#wc").text('Try Again!');
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


    $('#wc').css('left', $(window).width()/2 - 80);
    $('#wc').css('top', $('.tabmenu').height() + $('#mode1').height()/2);

    $('#p8').css('left', $(window).width()/2 - 20);
    $('#p8').css('top', $('.tabmenu').height() + 60);

    $('#p4').css('left', $(window).width()/2 + 100);
    $('#p4').css('top', $('.tabmenu').height() + $('#mode1').height() - 90);


    $('#p5').css('left', $(window).width()/2 - 120);
    $('#p5').css('top', $('.tabmenu').height() + $('#mode1').height() - 90);

});
