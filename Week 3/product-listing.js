
// Display category name from URL param
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category');
if (category) {
  const displayName = {
    'automobile': 'Automobiles',
    'clothes': 'Clothes and wear',
    'home': 'Home interiors',
    'tech': 'Computer and tech',
    'tools': 'Tools and equipments',
    'sports': 'Sports and outdoor',
    'pets': 'Animal and pets',
    'machinery': 'Machinery tools',
    'more': 'More category'
  };


  document.getElementById("categoryName").textContent = displayName[category] || category;
}

  document.getElementById('gridView').addEventListener('click', function () {
    window.location.href = 'grid.html'; // or dynamically switch view
  });

  document.getElementById('listView').addEventListener('click', function () {
    window.location.href = 'product-listing.html'; // or dynamically switch view
  });


    function toggleSection(id) {
    const section = document.getElementById(id);
    section.classList.toggle('collapsed');
  }