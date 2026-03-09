import { Gamepad2, ShoppingCart, Star, Search, Menu } from 'lucide-react';
import React from 'react';

const games = [
  {
    id: 1,
    title: "Cyberpunk 2077",
    price: "$59.99",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1605901309584-818e25960b8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["RPG", "Action"]
  },
  {
    id: 2,
    title: "Elden Ring",
    price: "$49.99",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["RPG", "Fantasy"]
  },
  {
    id: 3,
    title: "God of War Ragnarök",
    price: "$69.99",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Action", "Story"]
  },
  {
    id: 4,
    title: "Spider-Man 2",
    price: "$69.99",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1621259182978-fbf93132e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Action", "Adventure"]
  }
];

function App() {
  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo-section">
            <Gamepad2 className="logo-icon" />
            <span className="logo-text">GameStore</span>
          </div>
          <div className="search-bar">
            <Search className="search-icon" size={20} />
            <input type="text" placeholder="Search games..." />
          </div>
          <div className="nav-actions">
            <button className="cart-button">
              <ShoppingCart size={20} />
              <span className="cart-badge">3</span>
            </button>
            <button className="menu-button">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <h1>Discover Your Next Great Adventure</h1>
          <p>Explore thousands of games across all genres. Join millions of players worldwide.</p>
          <button className="cta-button">Browse Catalog</button>
        </div>
      </div>

      {/* Games Grid */}
      <main className="main-content">
        <div className="section-header">
          <h2>Trending Now</h2>
          <button className="view-all">View All</button>
        </div>
        
        <div className="games-grid">
          {games.map((game) => (
            <div key={game.id} className="game-card">
              <div className="card-image-wrapper">
                <img src={game.image} alt={game.title} className="game-image" />
                <div className="game-price">{game.price}</div>
              </div>
              <div className="game-info">
                <h3>{game.title}</h3>
                <div className="game-meta">
                  <div className="rating">
                    <Star size={16} className="star-icon" />
                    <span>{game.rating}</span>
                  </div>
                  <div className="tags">
                    {game.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
