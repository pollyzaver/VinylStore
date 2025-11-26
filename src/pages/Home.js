import React, { useState, useEffect, useRef } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal'

const Home = ({ onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const itemsPerPage = 9;
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Ref для секции каталога
  const catalogRef = useRef(null);

  const filters = [
    { key: 'all', label: 'Все' },
    { key: 'rock', label: 'Рок' },
    { key: 'electronic', label: 'Электроника' },
    { key: 'alternative', label: 'Альтернатива' },
    { key: 'metal', label: 'Метал' },
    { key: 'pop', label: 'Поп' }
  ];

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(p => p.category === activeFilter));
    }
    setCurrentPage(1);
  }, [activeFilter]);

  // Функция для прокрутки к каталогу
  const scrollToCatalog = () => {
    if (catalogRef.current) {
      catalogRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Прокрутка при смене страницы
  useEffect(() => {
    if (currentPage > 1) {
      scrollToCatalog();
    }
  }, [currentPage]);

  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <main id="main-content" className="main-content">
      {/* Hero Section */}
      <section className="page-hero" aria-labelledby="hero-title">
        <div className="container">
          <div className="hero-content">
            <h1 id="hero-title" className="hero-title">Добро пожаловать в мир винила!</h1>
            <p className="hero-subtitle">Наслаждайтесь аутентичным звучанием с 2023 года</p>
            <div className="hero-actions">
              <a href="#catalog" className="btn btn-primary">Смотреть каталог</a>
              <button 
                className="btn btn-white"
                onClick={() => onNavigate('about')} // ← ИСПОЛЬЗУЕМ onNavigate
              >
                Узнать больше
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="container">
          <div className="section-content">
            <h2 className="section-title">Почему выбирают винил?</h2>
            <p className="section-subtitle">Уникальные преимущества аналогового звука</p>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">♪</div>
                <h3>Аутентичный звук</h3>
                <p>Тёплый аналоговый звук, который невозможно воспроизвести цифровыми средствами</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">★</div>
                <h3>Коллекционная ценность</h3>
                <p>Виниловые пластинки - это не только музыка, но и ценные коллекционные предметы</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">◉</div>
                <h3>Уникальный дизайн</h3>
                <p>Большие обложки с произведениями искусства, которые становятся частью интерьера</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section с ref */}
      <section id="catalog" className="catalog-section" ref={catalogRef}>
        <div className="container">
          <div className="card">
            <h2 className="section-title">Популярные пластинки</h2>
            <p className="section-subtitle">Лучшие предложения этого месяца</p>

            <div className="catalog-filters">
              {filters.map(filter => (
                <button
                  key={filter.key}
                  className={`filter-button ${activeFilter === filter.key ? 'active' : ''}`}
                  data-filter={filter.key}
                  aria-pressed={activeFilter === filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            <div className="catalog-grid">
              {currentProducts.map(product => (
                <ProductCard key={product.id} product={product} onProductClick={handleProductClick} />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="pagination">
                <button 
                  className="pagination-prev" 
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(prev => prev - 1)}
                >
                  ← Назад
                </button>
                <div className="pagination-pages">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      className={`pagination-page ${currentPage === page ? 'active' : ''}`}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </button>
                  ))}
                </div>
                <button 
                  className="pagination-next" 
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(prev => prev + 1)}
                >
                  Вперед →
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="card">
            <h2 className="section-title">Частые вопросы</h2>
            <p className="section-subtitle">Всё, что нужно знать о покупке винила</p>

            <div className="accordion">
              <div className="accordion-item">
                <input type="checkbox" id="acc1" className="accordion-input" />
                <label htmlFor="acc1" className="accordion-button">
                  Как сделать заказ?
                  <span className="accordion-icon">+</span>
                </label>
                <div className="accordion-content">
                  <p>Можно через сайт, по телефону или в магазине.</p>
                </div>
              </div>

              <div className="accordion-item">
                <input type="checkbox" id="acc2" className="accordion-input" />
                <label htmlFor="acc2" className="accordion-button">
                  Есть ли доставка?
                  <span className="accordion-icon">+</span>
                </label>
                <div className="accordion-content">
                  <p>Да, по всей России. В Москве — в день заказа.</p>
                </div>
              </div>

              <div className="accordion-item">
                <input type="checkbox" id="acc3" className="accordion-input" />
                <label htmlFor="acc3" className="accordion-button">
                  Как ухаживать за пластинками?
                  <span className="accordion-icon">+</span>
                </label>
                <div className="accordion-content">
                  <p>Храните пластинки вертикально, избегайте прямого солнечного света и пыли. Используйте специальные щетки для очистки.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Готовы начать коллекцию?</h2>
            <p>Получите бесплатную консультацию по подбору винила от наших экспертов</p>
            <div className="cta-actions">
              <button 
                className="btn btn-primary"
                onClick={() => onNavigate('contacts', '#contact-form')}
              >
                Связаться с нами
              </button>
              <a href="tel:+79501893557" className="btn btn-white">Позвонить</a>
            </div>
          </div>
        </div>
      </section>
      <ProductModal 
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
};

export default Home;