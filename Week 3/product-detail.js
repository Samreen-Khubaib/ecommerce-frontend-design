
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      // Remove active from all
      tabs.forEach(t => t.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));

      // Add active to clicked tab
      tab.classList.add("active");
      const target = tab.getAttribute("data-tab");
      document.getElementById(target).classList.add("active");
    });
  });


function addToCart() {
  const btn = document.querySelector('.add-to-cart');
  const title = btn.getAttribute('data-title');
  const price = parseFloat(btn.getAttribute('data-price'));
  const image = btn.getAttribute('data-image');

  const newItem = {
    title,
    price,
    image,
    quantity: 1
  };

  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Check if item already exists
  const existing = cart.find(item => item.title === newItem.title);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push(newItem);
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  alert("Item added to cart!");
}


