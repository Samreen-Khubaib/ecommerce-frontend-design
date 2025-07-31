# 🛍️ E-commerce Frontend Design

A functional frontend design for an e-commerce website — created using **HTML**, **CSS**, **Bootstrap 5**, and **JavaScript** (with `localStorage`). 
This project mimics the key user flows of a real online store, including browsing, saving items, viewing product details, managing a cart, and applying simple pricing logic.

## 📁 Project Structure
ecommerce-frontend-design/
│
├── index.html → Homepage with banner, categories, and services
├── product-listing.html → Product listing page by category
├── product-grid.html → Grid layout for all products
├── product-detail.html → Single product detail view
├── cart.html → Cart with summary and saved-for-later, Cart logic and local-Storage(in script tag)
│
├── header.html → Reusable site header 
├── footer.html → Reusable site footer
│
├── style.css → Global styles
├── cart.css → Styles specific to cart layout
├── product-listing.css → Styles for category view
├── product-detail.css → Styles for detail page
│
├── product-listing.js → Handles category filtering, wishlist icon, etc.
├── product-detail.js → Manages product detail behavior (add to cart, etc.)
├── main.js →  dropdowns, event listeners
│
├── images/ → Product and UI assets


## 🌟 Key Features

### 🧩 Modular Layout
- **`header.html`** and **`footer.html`** are reusable and loaded dynamically using JavaScript across all pages.

### 🛍 Homepage (`index.html`)
- Hero banner
- Category tiles
- Services section with icons (free delivery, customer support, secure payments)
- Featured product

### 🗂 Product Listing (`product-listing.html`)
- Displays all available products in a list view
- Controlled by `product-listing.js`

### 🧱 Product Grid (`product-grid.html`)
- Displays all available products in a grid view

### 🔍 Product Detail (`product-detail.html`)
- Shows complete product info
- Add to Cart
- Controlled by `product-detail.js`

### 🛒 Cart Page (`cart.html`)
- Add/remove items from cart
- Quantity control
- Subtotal, tax, discount, and total calculation
- Saved-for-later section

📝 Notes
This is a frontend-only project — no backend or database.
Data is hardcoded or pulled from localStorage.


