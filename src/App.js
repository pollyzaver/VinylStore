import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import './styles/App.css';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  console.log('Current page:', currentPage); // Для отладки

  const renderPage = () => {
    console.log('Rendering page:', currentPage); // Для отладки
    
    switch (currentPage) {
      case 'about':
        return <About onNavigate={setCurrentPage} />;
      case 'contacts':
        return <Contacts />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <CartProvider>
      <div className="App">
        <Header 
          onCartClick={() => setIsCartOpen(true)}
          onNavigate={setCurrentPage}
          currentPage={currentPage}
        />
        {renderPage()}
        <Footer />
        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </CartProvider>
  );
}

export default App;