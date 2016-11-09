(function() {
  window.addEventListener('load', function() {
    var toggle = document.querySelector('.navbar-toggle');
    var collapse = document.querySelector('.navbar-collapse');
    toggle.addEventListener('click', function() {
      collapse.classList.toggle('hidden-xs');
    });
    if (window.location.hash) {
      var anchor = document.querySelector(window.location.hash);
      anchor.nextElementSibling.classList.add('featured');
    }
  });
})();
