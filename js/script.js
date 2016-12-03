
$(document).ready(function() {
  $('#main').css('height', $(window).height()-$('.tabmenu').height()-$('#footer').height());
  //  $('#arc').css('left', $(window).width()/2);
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

/*
      var clicked1 = false;
      $('#item1').hover(function() {
            $(this).addClass('tabmenuhover');
            $('#item1').on('click', function() {
              $(this).addClass('tabmenuhover');
              $('#mode1').hide();
              clicked1 = true;

          });},
          function() {
             if (clicked1 == true) {
               return false;
             }
             else {
               $(this).removeClass('tabmenuhover');
          }});


          var clicked2 = false;
          $('#item2').hover(function() {
                $(this).addClass('tabmenuhover');
                $('#item2').on('click', function() {
                  $(this).addClass('tabmenuhover');
                  $('#mode1').hide();
                  clicked2 = true;
              });},
              function() {
                 if (clicked2 == true) {
                   return false;
                 }
                 else {
                   $(this).removeClass('tabmenuhover');
              }});


              $('#item3').hover(function() {
                     $(this).addClass('tabmenuhover');
                 }, function() {
                     $(this).removeClass('tabmenuhover');
                 }
               );


*/

  $('#item1').on('click', function() {
      $('#mode1').hide();
      $('#mode2').hide();
      $('#footer').hide();
      $('#theory').show();
    });

    $('#item2').on('click', function() {
        $('#theory').hide();
        $('#mode2').hide();
        $('#footer').show();
        $('#mode1').show();
      });

      $('#item3').on('click', function() {
          $('#theory').hide();
          $('#mode1').hide();
          $('#footer').show();
          $('#mode2').show();
        });





});
