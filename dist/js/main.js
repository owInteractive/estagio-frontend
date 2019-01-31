window.onscroll = function() {

  var navbar = $('#navbar');
  if (document.body.scrollTop > 132 || document.documentElement.scrollTop > 132) {
    navbar.addClass('scrollBarAnimation');
  } else {
    navbar.removeClass('scrollBarAnimation');
  }

};

$(document).ready(function(){
  $('#phone').inputmask("(99) 9 9999-9999");
});
