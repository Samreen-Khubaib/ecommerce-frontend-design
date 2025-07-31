// Load header dynamically and attach event listeners after injection
fetch('header.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('header-placeholder').innerHTML = data;

    // Wait for the DOM update, then bind the search form logic
    const form = document.getElementById("searchForm");

    if (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();

        const keyword = document.getElementById("searchInput").value.trim();
        const category = document.getElementById("categoryDropdown").value;

        if (!keyword && !category) {
          alert("Please enter a search term or select a category.");
          return;
        }

        let url = "product-listing.html?";
        if (keyword) url += `search=${encodeURIComponent(keyword)}`;
        if (category) url += `${keyword ? "&" : ""}category=${encodeURIComponent(category)}`;

        window.location.href = url;
      });

      // Also handle category selection separately
      const dropdown = document.getElementById("categoryDropdown");
      if (dropdown) {
        dropdown.addEventListener("change", function () {
          const keyword = document.getElementById("searchInput").value.trim();
          const category = this.value;

          if (!keyword && category) {
            window.location.href = `product-listing.html?category=${encodeURIComponent(category)}`;
          }
        });
      }
    }
  });

// Load footer
fetch('footer.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('footer-placeholder').innerHTML = data;
  });


// Dropdown toggle behavior
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
