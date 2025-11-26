import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product, onProductClick }) => {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Предотвращаем открытие модалки при клике на кнопку
    setIsAdding(true);
    addToCart(product);
    
    setTimeout(() => {
      setIsAdding(false);
    }, 300);
  };

  const handleCardClick = () => {
    if (onProductClick) {
      onProductClick(product);
    }
  };

  return (
    <article 
      className="product-card" 
      data-category={product.category}
      onClick={handleCardClick}
      style={{ cursor: 'pointer' }}
    >
      <div className="product-image">
        {product.badge && <div className="product-badge">{product.badge}</div>}
        <img 
          src={process.env.PUBLIC_URL + product.image} 
          alt={`Обложка альбома ${product.title} - ${product.description}`}
          loading="lazy"
        />
      </div>
      
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-description">{product.description}</p>
        
        <div className="product-meta">
          <span className="product-year">{product.year}</span>
          <span className="product-genre">{product.genre}</span>
          <span className="product-format">{product.format}</span>
        </div>
        
        <div className="product-footer">
          <div className="product-price">{product.price.toLocaleString()} ₽</div>
          <button 
            className={`add-to-cart-btn ${isAdding ? 'adding' : ''}`}
            onClick={handleAddToCart}
            aria-label={`Добавить ${product.title} в корзину за ${product.price} рублей`}
            disabled={isAdding}
          >
            {isAdding ? 'Добавляется...' : 'Добавить в корзину'}
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;