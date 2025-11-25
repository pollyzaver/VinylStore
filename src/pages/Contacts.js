import React, { useState } from 'react';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePhoneInput = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.startsWith('8')) value = '7' + value.slice(1);
    if (value.length > 11) value = value.slice(0, 11);

    let formatted = '+7';
    if (value.length > 1) formatted += ' (' + value.slice(1, 4);
    if (value.length >= 4) formatted += ') ' + value.slice(4, 7);
    if (value.length >= 7) formatted += '-' + value.slice(7, 9);
    if (value.length >= 9) formatted += '-' + value.slice(9, 11);

    setFormData(prev => ({
      ...prev,
      phone: formatted
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneValue = formData.phone.replace(/\D/g, '');
    if (phoneValue.length !== 11) {
      alert('Введите корректный номер телефона в формате +7 (XXX) XXX-XX-XX');
      return;
    }
    // Здесь будет отправка формы
    console.log('Form submitted:', formData);
    alert('Сообщение отправлено!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <main className="main">
      <div className="container">
        {/* Hero */}
        <section className="page-hero" style={{paddingBlock: 'var(--space-2xl)', textAlign: 'center'}}>
          <h1 className="hero-title">Свяжитесь с нами</h1>
          <p className="hero-subtitle">Мы всегда рады новым проектам и готовы ответить на все ваши вопросы</p>
        </section>

        {/* Контактная информация */}
        <div className="contact-info-section">
          <div className="contact-card">
            <h2>Контактная информация</h2>
            <p>📍 <strong>Адрес:</strong> г. Москва, ул. 11-я Парковая, 36</p>
            <p>📞 <strong>Телефон:</strong> +7 (950) 189-35-57</p>
            <p>✉️ <strong>Email:</strong> pollzyaver777@gmail.com</p>
            <p>💬 <strong>Telegram:</strong> @meinewelllt</p>
          </div>
          <div className="contact-card">
            <h2>Режим работы</h2>
            <ul>
              <li><strong>Пн–Пт:</strong> 9:00 – 18:00</li>
              <li><strong>Сб:</strong> 10:00 – 16:00</li>
              <li><strong>Вс:</strong> выходной</li>
              <li><strong>Техподдержка:</strong> круглосуточно</li>
            </ul>
          </div>
        </div>

        {/* Форма обратной связи */}
        <section className="contact-form-section" style={{paddingBlock: 'var(--space-xl)'}}>
          <div className="section-content" style={{maxWidth: '800px', marginInline: 'auto'}}>
            <h2 style={{textAlign: 'center'}}>Форма обратной связи</h2>
            <p style={{textAlign: 'center', color: 'var(--vinyl-muted)', marginBottom: 'var(--space-lg)'}}>
              Заполните форму ниже, и мы свяжемся с вами в течение 2 часов
            </p>
            <form onSubmit={handleSubmit} style={{display: 'grid', gap: 'var(--space-md)'}}>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: 'var(--space-md)'}}>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Ваше имя *" 
                  required 
                  value={formData.name}
                  onChange={handleInputChange}
                  style={{flex: '1 1 45%', padding: 'var(--space-sm)'}}
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Ваш email *" 
                  required 
                  value={formData.email}
                  onChange={handleInputChange}
                  style={{flex: '1 1 45%', padding: 'var(--space-sm)'}}
                />
              </div>
              <input 
                type="tel" 
                name="phone"
                placeholder="+7 (___) ___-__-__" 
                required 
                value={formData.phone}
                onChange={handlePhoneInput}
                style={{padding: 'var(--space-sm)'}}
              />
              <select 
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                style={{padding: 'var(--space-sm)'}}
              >
                <option value="">Выберите тему</option>
                <option value="consultation">Консультация</option>
                <option value="order">Заказ пластинки</option>
                <option value="support">Техническая поддержка</option>
                <option value="partnership">Сотрудничество</option>
                <option value="other">Другое</option>
              </select>
              <textarea 
                name="message"
                rows="6" 
                placeholder="Сообщение *" 
                required 
                value={formData.message}
                onChange={handleInputChange}
                style={{padding: 'var(--space-sm)'}}
              />
              <button type="submit" className="btn btn-primary" style={{alignSelf: 'center', padding: 'var(--space-md) var(--space-lg)'}}>
                Отправить сообщение
              </button>
            </form>
          </div>
        </section>

        {/* Карта */}
        <section className="map-section" style={{paddingBlock: 'var(--space-xl)'}}>
          <div className="section-content" style={{maxWidth: '1000px', marginInline: 'auto'}}>
            <h2 style={{textAlign: 'center', marginBottom: 'var(--space-md)'}}>📍 Как нас найти</h2>
            <div style={{width: '100%', aspectRatio: '16/9'}}>
              <iframe 
                src="https://yandex.ru/map-widget/v1/?ll=37.805680%2C55.801121&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1Njc1MjQ1MRJB0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsIDExLdGPINCf0LDRgNC60L7QstCw0Y8g0YPQu9C40YbQsCwgMzYiCg0DORdCFVk0X0I%2C&z=16" 
                title="Карта офиса"
                allowFullScreen 
                loading="lazy"
                style={{width: '100%', height: '100%', borderRadius: '10px'}}
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Contacts;