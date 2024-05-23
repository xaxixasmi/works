window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    var distanceY = window.pageYOffset || document.documentElement.scrollTop;
    if (distanceY > 0) {
      header.style.height = '0';
    } else {
      header.style.height = '100vh';
    }
  });
  