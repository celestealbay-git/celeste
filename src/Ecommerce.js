import React from "react";
import './Ecommerce.css';

function Ecommerce() {
  const products = [
  { id: 1, name: "Hoodie", price: "$15" },
  { id: 2, name: "T-Shirt", price: "$17" },
  { id: 3, name: "Jacket", price: "$16" },
  { id: 4, name: "Jeans", price: "$10" },
  { id: 5, name: "Cotton Shirt", price: "$13" },
  { id: 6, name: "Red Dress", price: "$11" },
  { id: 7, name: "Formals", price: "$22" },
  { id: 8, name: "Sherwani", price: "$25" },
];

  return (
    <div className="container">
      
      {/* Navbar */}
      <nav className="navbar">
        <h2>ShopLogo</h2>
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>Blog</li>
          <li>Pages</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>New Trend</h1>
          <p>Discover the latest fashion styles.</p>
          <button>Shop Now</button>
        </div>
        <div className="hero-img"></div>
      </section>

      {/* Categories */}
      <section className="categories">
        <div className="cat">Women Collection</div>
        <div className="cat">Men Collection</div>
        <div className="cat">Kids Collection</div>
        <div className="cat">Gift Cards</div>
      </section>

      {/* Products */}
      <section className="products">
        <h2>Our Trendy Products</h2>
        <div className="product-grid">
          {products.map((p) => (
            <div className="card" key={p.id}>
              <div className="img"></div>
              <h4>{p.name}</h4>
              <p>{p.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Promo Section */}
      <section className="promo">
        <div>
          <h2>Deal of the Week</h2>
          <p>Save up to 50% on selected items!</p>
          <button>Shop Now</button>
        </div>
        <div className="promo-img"></div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 E-Commerce React Site</p>
      </footer>

    </div>
  );

}

export default Ecommerce;
