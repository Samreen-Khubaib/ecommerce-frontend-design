
document.addEventListener("DOMContentLoaded", function () {
  var toggles = document.querySelectorAll('.dropdown-toggle');

  for (var i = 0; i < toggles.length; i++) {
    toggles[i].addEventListener('click', function (e) {
      e.preventDefault();

      var id = this.getAttribute('data-toggle');
      var dropdown = document.getElementById(id);

      if (dropdown) {
        dropdown.classList.toggle('show');
      }

      var allMenus = document.querySelectorAll('.dropdown-menu');
      for (var j = 0; j < allMenus.length; j++) {
        if (allMenus[j] !== dropdown) {
          allMenus[j].classList.remove('show');
        }
      }
    });
  }

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.dropdown')) {
      var allMenus = document.querySelectorAll('.dropdown-menu');
      for (var k = 0; k < allMenus.length; k++) {
        allMenus[k].classList.remove('show');
      }
    }
  });
});
