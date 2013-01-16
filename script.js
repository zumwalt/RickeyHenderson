//  =============================================================================
//  Rickey Henderson
//  A jQuery plugin for sliding input hinting.
//  =============================================================================

$(document).ready(function(){
  
  $('#input').each(function(){
    var input = $(this),
        label = $(this).parent().find('.label'),
        width = input.width() - label.width();

    input.on('focus', function(){
      label.animate({
        left: width
      }, 200, function(){});
    });

    input.keyup(function(){
      label.animate({
        opacity: 0.15
      }, 100, function(){});

      if (input.val().length === 0) {
        label.animate({
          opacity: 1
        }, 100, function(){});
      }
    });

    input.on('blur', function(){
      if (input.val().length === 0) {
        label.animate({
          opacity: 1,
          left: '22px'
        }, 200, function(){});
      }
    });

    label.on('click', function(){
      input.focus();
    });

  });

});
