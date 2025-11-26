import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = ({ onCartClick, onNavigate, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { getCartItemsCount } = useCart();

  const handleNavigation = (page) => {
    if (onNavigate) {
      onNavigate(page);
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <a href="#main-content" className="skip-link">Перейти к основному содержимому</a>
      
      <header className="site-header" role="banner">
        <div className="container">
          {/* Логотип */}
          <button 
            className="logo" 
            onClick={() => handleNavigation('home')}
            style={{
              background: 'none', 
              border: 'none', 
              color: 'inherit', 
              font: 'inherit', 
              cursor: 'pointer', 
              fontSize: 'var(--text-2xl)', 
              fontWeight: '800'
            }}
          >
            VinylStore
          </button>

          {/* Правая часть шапки - корзина и бургер */}
          <div className="header-actions">
            {/* Кнопка корзины - всегда видима */}
            <button 
              className="cart-button header-cart"
              onClick={() => {
                onCartClick();
                setIsMenuOpen(false);
              }}
              aria-label={`Открыть корзину, ${getCartItemsCount()} товаров`}
            >
              <span className="cart-icon">🛒</span>
              {getCartItemsCount() > 0 && (
                <span className="cart-count">{getCartItemsCount()}</span>
              )}
            </button>

            {/* Бургер меню */}
            <button 
              className="nav-toggle"
              aria-label="Открыть меню"
              aria-expanded={isMenuOpen}
              aria-controls="primary-navigation"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </button>
          </div>

          {/* Навигационное меню */}
          <nav 
            id="primary-navigation" 
            className={`site-nav ${isMenuOpen ? 'active' : ''}`}
            aria-label="Основная навигация"
          >
            <ul className="nav-menu">
              <li>
                <button 
                  className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
                  onClick={() => handleNavigation('home')}
                  style={{
                    background: 'none', 
                    border: 'none', 
                    color: 'inherit', 
                    font: 'inherit', 
                    cursor: 'pointer', 
                    width: '100%', 
                    textAlign: 'left', 
                    padding: 'var(--space-sm) var(--space-md)'
                  }}
                >
                  Главная
                </button>
              </li>
              <li>
                <button 
                  className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
                  onClick={() => handleNavigation('about')}
                  style={{
                    background: 'none', 
                    border: 'none', 
                    color: 'inherit', 
                    font: 'inherit', 
                    cursor: 'pointer', 
                    width: '100%', 
                    textAlign: 'left', 
                    padding: 'var(--space-sm) var(--space-md)'
                  }}
                >
                  О нас
                </button>
              </li>
              <li>
                <button 
                  className={`nav-link ${currentPage === 'contacts' ? 'active' : ''}`}
                  onClick={() => handleNavigation('contacts')}
                  style={{
                    background: 'none', 
                    border: 'none', 
                    color: 'inherit', 
                    font: 'inherit', 
                    cursor: 'pointer', 
                    width: '100%', 
                    textAlign: 'left', 
                    padding: 'var(--space-sm) var(--space-md)'
                  }}
                >
                  Контакты
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div 
        className={`overlay ${isMenuOpen ? 'active' : ''}`} 
        tabIndex="-1" 
        aria-hidden="true"
        onClick={() => setIsMenuOpen(false)}
      />
    </>
  );
};

export default Header;