$(document).ready(function() {


  //////////////////////////
  /* GENERAL AND DEFAULTS */
  //////////////////////////


  // position foooter (tab buttons)
  $('#main').css('height', $(window).height() - $('.tabmenu').height() - $('.footer').height());

  // on window resize set the new positions of the above elements
  window.onresize = function(){ location.reload(); }

  // if a mobile device is present this disables the css hover class
  var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));
  if (isTouch) {
    $('body').removeClass('desktop');
  }

  // some defaults
  $('#item1').addClass('tabmenuhover');
  $('.footer').hide();
  $('#wc').hide();


  //////////////
  /* TAB MENU */
  //////////////


  $('#item1').on('click', function() {
      $('#item1').addClass('tabmenuhover');
      $('#item2').removeClass('tabmenuhover');
      $('#mode1').hide();
      $('.footer').hide();
      $('#theory').fadeIn(250);
    });

  $('#item2').on('click', function() {
      $('#item2').addClass('tabmenuhover');
      $('#item1').removeClass('tabmenuhover');
      $('#theory').hide();
      $('.footer').fadeIn(250);
      $('#mode1').fadeIn(250);
    });


  ////////////////
  /* MAIN LOGIC */
  ////////////////


  // define variables
  var counter = 1; // count of passed questions
  var correct = 0; // count of correct answers
  var firsttry = true; // did the user get it right the first time
  var random = Math.floor((Math.random() * 36) + 1);
  // gets a random number that corresponds to a certain interval
  // intervals are prerecorded so one random numer gets you a ready to use interval
  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', 'tracks/' + random + '.mp3');
  // draw the current stats of the game (questions and answers)
  stats();


  ////////////////////
  /* FOOTER BUTTONS */
  ////////////////////


  // play button
  $('#play').on('click', function() {
    hoverDelay(this, 'footerhover', 300);
    // plays the interval
    audioElement.play();
  });

  // next button
  $('#next').on('click', function() {
    hoverDelay(this, 'footerhover', 300);
    if (counter == 50) {
      reset ();
    } else {
      counter = counter + 1;
      stats();
      // selects random a random interval
      random = Math.floor((Math.random() * 36) + 1);
      audioElement.setAttribute('src', 'tracks/' + random + '.mp3');
      audioElement.play();
      firsttry = true;
  }});

  // reset button
  $('#reset').on('click', function() {
    hoverDelay(this, 'footerhover', 300);
    reset();
  });

  // resets the stats
  function reset() {
    counter = 1;
    correct = 0;
    stats();
    // selects random a random interval
    random = Math.floor((Math.random() * 36) + 1);
    audioElement.setAttribute('src', 'tracks/' + random + '.mp3');
    audioElement.play();
    firsttry = true;
  }

  // draws the current stats of the game (questions and answers)
  function stats() {
    $('#counter').text('Question: ' + counter + '/50');
    $('#correct').text('| Correct: ' + correct + '/' + counter);
  }


  /////////////////
  /* ARC BUTTONS */
  /////////////////


  // if the user clicked this button and the interval is right
  // the user gets the appropriate feedback
  // p4 button
  $('#p4').on('click', function() {
    hoverDelay(this, 'archover', 300)
    if (random % 3 == 1) {
        if (firsttry == true) {
          correct = correct +1;
          wcOut('Perfect!', 'green');
        } else {
          wcOut('Correct', 'yellow');
          }
        } else {
          firsttry = false;
          wcOut('Try Again!', 'red');
          }
  });

  // p5 button
  $('#p5').on('click', function() {
    hoverDelay(this, 'archover', 300)
    if (random % 3 == 2) {
      if (firsttry == true) {
        correct = correct +1;
        wcOut('Perfect!', 'green');
      } else {
        wcOut('Correct', 'yellow');
        }
      } else {
        firsttry = false;
        wcOut('Try Again!', 'red');
        }
  });

  // p8 button
  $('#p8').on('click', function() {
    hoverDelay(this, 'archover', 300)
    if (random % 3 == 0) {
      if (firsttry == true) {
        correct = correct +1;
        wcOut('Perfect!', 'green');
      } else {
        wcOut('Correct', 'yellow');
        }
      } else {
        firsttry = false;
        wcOut('Try Again!', 'red');
        }
  });

  // toggles between classes resembling hover effect
  function hoverDelay(elem, hover, time) {
    $(elem).clearQueue().addClass(hover).delay(time).queue(function(next){
        $(elem).removeClass(hover);
        next();
    });
  }

  // draws the corresponding feedback to the user
  function wcOut(text, color) {
    $("#wc").text(text);
    $('#wc').css('color', color);
    // clears the queue to avoid buildup is user spams the button
    $('#wc').clearQueue().fadeIn(100).delay(1000).queue(function(next){
        $('#wc').fadeOut(100);
        next();
    });
  }


  ///////////////////////
  /* POSITION ELEMENTS */
  ///////////////////////


  // wrong - correct feedback popup
  $('#wc').css('left', $(window).width()/2 - 80);
  $('#wc').css('top', $('.tabmenu').height() + $('#mode1').height()/2);
  // p8 button
  $('#p8').css('left', $(window).width()/2 - 40);
  $('#p8').css('top', $('.tabmenu').height() + 60);
  // p4 button
  $('#p4').css('left', $(window).width()/2 + 80);
  $('#p4').css('top', $('.tabmenu').height() + $('#mode1').height() - 90);
  // p5 button
  $('#p5').css('top', $('.tabmenu').height() + $('#mode1').height() - 90);
  $('#p5').css('left', $(window).width()/2 - 120);

});
