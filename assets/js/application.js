(function() {
  function getFormatedDateOfToday() {
    var today = new Date();
    var year = today.getUTCFullYear();
    var month = today.getUTCMonth() + 1;
    var date = today.getUTCDate();
    return '' + year + (month > 9 ? month : '0' + month) + (date > 9 ? date : '0' + date) + '';
  };
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
    var tags = document.querySelectorAll('[data-tags]');
    var filters = document.querySelectorAll('[data-filter]');
    var filterList = [].slice
      .call(filters)
      .map(function(f) { return f.getAttribute('data-filter'); })
      .filter(function(f) { return f !== 'all'; })
    ;
    filters.forEach(function(filterEl) {
      filterEl.addEventListener('click', function(e) {
        var filterType = e.currentTarget.getAttribute('data-filter');
        tags.forEach(function(tagEl) {
          var tagList = tagEl.getAttribute('data-tags').split(',');
          tagEl.classList.add('hide');
          if (filterType === 'all') {
            tagEl.classList.remove('hide');
            return true;
          }
          filterList.forEach(function(filterValue) {
            if (filterType === filterValue && tagList.indexOf(filterValue) !== -1) {
              tagEl.classList.remove('hide');
            }
          });
        });
      });
    });
    var addedList = document.querySelectorAll('[data-added]');
    addedList.forEach(function(added) {
      var todayDate = +getFormatedDateOfToday();
      var addedDate = +added.getAttribute('data-added');
      if (todayDate - addedDate <= 10) {
        added.classList.remove('hide');
      }
    });
  });
})();
