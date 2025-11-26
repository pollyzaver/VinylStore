import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';

const ProductModal = ({ product, isOpen, onClose }) => {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product);
    
    setTimeout(() => {
      setIsAdding(false);
    }, 300);
  };

  if (!isOpen || !product) return null;

  return (
    <div 
      className="modal-overlay" 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button 
          className="modal-close"
          onClick={onClose}
          aria-label="Закрыть окно"
        >
          ×
        </button>

        <div className="modal-body">
          <div className="modal-image">
            <img 
              src={process.env.PUBLIC_URL + product.image} 
              alt={`Обложка альбома ${product.title}`}
            />
            {product.badge && <div className="product-badge">{product.badge}</div>}
          </div>

          <div className="modal-info">
            <h2 id="modal-title" className="modal-title">{product.title}</h2>
            <p className="modal-artist">{product.description}</p>

            <div className="modal-details">
              <div className="detail-item">
                <span className="detail-label">Год выпуска:</span>
                <span className="detail-value">{product.year}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Жанр:</span>
                <span className="detail-value">{product.genre}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Формат:</span>
                <span className="detail-value">{product.format}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Категория:</span>
                <span className="detail-value">
                  {product.category === 'rock' && 'Рок'}
                  {product.category === 'electronic' && 'Электроника'}
                  {product.category === 'alternative' && 'Альтернатива'}
                  {product.category === 'metal' && 'Метал'}
                  {product.category === 'pop' && 'Поп'}
                  {product.category === 'other' && 'Другое'}
                </span>
              </div>
            </div>

            <div className="modal-description">
              <h3>Об альбоме</h3>
              <p>{getAlbumDescription(product)}</p>
            </div>

            <div className="modal-price">{product.price.toLocaleString()} ₽</div>

            <button 
              className={`btn btn-primary modal-add-btn ${isAdding ? 'adding' : ''}`}
              onClick={handleAddToCart}
              disabled={isAdding}
            >
              {isAdding ? 'Добавляется...' : 'Добавить в корзину'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Функция для генерации описания альбома (оставьте вашу существующую функцию)
const getAlbumDescription = (product) => {
  const descriptions = {
    // ... ваши существующие описания ...
    'default': `Альбом "${product.title}" ${product.description ? `группы ${product.description}` : ''}, выпущенный в ${product.year} году. ${product.format === '7" Single' ? 'Редкий сингл' : 'Коллекционное издание'} на виниле.`
  };

  return descriptions[product.title] || descriptions.default;
};

export default ProductModal;