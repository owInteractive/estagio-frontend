window.onscroll = function() {
  
  var navbar = document.getElementById("navbar");
  if (document.body.scrollTop > 132 || document.documentElement.scrollTop > 132) {
    navbar.classList.add('scrollBarAnimation');
  } else {
    navbar.classList.remove('scrollBarAnimation');
  }

};
