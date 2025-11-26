import React from 'react';

const About = ({ onNavigate }) => {
  return (
    <main className="main">
      <div className="container">
        {/* Hero Section */}
        <section className="page-hero">
          <div className="container">
            <h1 className="hero-title">О нашем магазине</h1>
            <p className="hero-subtitle">С 2023 года мы дарим музыку в самом качественном формате — на виниле.</p>
          </div>
        </section>

        {/* Features Grid */}
        <div className="features-grid" style={{gap: 'var(--space-lg)', marginTop: 'var(--space-2xl)'}}>
          <div className="feature-card" style={{padding: 'var(--space-lg)'}}>
            <div className="feature-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
              </svg>
            </div>
            <h3>Аутентичность</h3>
            <p style={{color: 'var(--vinyl-muted)', lineHeight: '1.6'}}>Сохраняем оригинальное звучание и атмосферу классических записей</p>
          </div>

          <div className="feature-card" style={{padding: 'var(--space-lg)'}}>
            <div className="feature-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                <path d="M12 6a6 6 0 0 0 0 12 6 6 0 0 0 0-12z"/>
              </svg>
            </div>
            <h3>Сообщество</h3>
            <p style={{color: 'var(--vinyl-muted)', lineHeight: '1.6'}}>Объединяем ценителей качественной музыки и виниловой культуры</p>
          </div>

          <div className="feature-card" style={{padding: 'var(--space-lg)'}}>
            <div className="feature-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
              </svg>
            </div>
            <h3>Качество</h3>
            <p style={{color: 'var(--vinyl-muted)', lineHeight: '1.6'}}>Только оригинальные пластинки и профессиональное обслуживание</p>
          </div>
        </div>

        {/* История */}
        <section className="history-section" style={{paddingBlock: 'var(--space-2xl)'}}>
          <div className="section-content">
            <h2 className="section-title">Наша история</h2>
            <div className="timeline-grid" style={{gap: 'var(--space-xl)', marginTop: 'var(--space-xl)'}}>
              <div className="timeline-item" style={{padding: 'var(--space-md) 0', textAlign: 'center'}}>
                <div className="year-circle" style={{marginBottom: 'var(--space-sm)'}}>2023</div>
                <h4>Основание</h4>
                <p style={{color: 'var(--vinyl-muted)', lineHeight: '1.6'}}>Открытие первого магазина винила в Москве</p>
              </div>
              <div className="timeline-item" style={{padding: 'var(--space-md) 0', textAlign: 'center'}}>
                <div className="year-circle" style={{marginBottom: 'var(--space-sm)'}}>500+</div>
                <h4>Коллекция</h4>
                <p style={{color: 'var(--vinyl-muted)', lineHeight: '1.6'}}>Более 500 уникальных виниловых пластинок в ассортименте</p>
              </div>
              <div className="timeline-item" style={{padding: 'var(--space-md) 0', textAlign: 'center'}}>
                <div className="year-circle" style={{marginBottom: 'var(--space-sm)'}}>100%</div>
                <h4>Качество</h4>
                <p style={{color: 'var(--vinyl-muted)', lineHeight: '1.6'}}>Только оригинальные издания и профессиональный сервис</p>
              </div>
            </div>
          </div>
        </section>

        {/* Команда */}
        <section className="team-section" style={{paddingBlock: 'var(--space-2xl)'}}>
          <div className="section-content">
            <h2 className="section-title">Наша команда</h2>
            <div className="team-grid" style={{gap: 'var(--space-xl)', marginTop: 'var(--space-xl)'}}>
              <div className="team-card" style={{padding: 'var(--space-lg)', background: 'var(--vinyl-card)', boxShadow: 'var(--shadow-sm)', borderRadius: 'var(--radius-lg)', textAlign: 'center'}}>
                <div className="team-photo">
                  <img 
                    src={process.env.PUBLIC_URL + "/assets/rich.jpg"} 
                    alt="Рихард Круспе - основатель магазина VinylStore" 
                    style={{width: '100%', aspectRatio: '1', objectFit: 'cover', borderRadius: 'var(--radius-md)', marginBottom: 'var(--space-md)'}}
                  />
                </div>
                <h4>Рихард Круспе</h4>
                <p className="team-role" style={{color: 'var(--vinyl-muted)', fontWeight: '600', marginBottom: 'var(--space-sm)'}}>Основатель</p>
                <p style={{color: 'var(--vinyl-muted)', lineHeight: '1.6'}}>15 лет в музыкальной индустрии, эксперт по виниловым изданиям</p>
              </div>
              <div className="team-card" style={{padding: 'var(--space-lg)', background: 'var(--vinyl-card)', boxShadow: 'var(--shadow-sm)', borderRadius: 'var(--radius-lg)', textAlign: 'center'}}>
                <div className="team-photo">
                  <img 
                    src={process.env.PUBLIC_URL + "/assets/gore.jpg"} 
                    alt="Мартин Гор - музыкальный эксперт магазина VinylStore" 
                    style={{width: '100%', aspectRatio: '1', objectFit: 'cover', borderRadius: 'var(--radius-md)', marginBottom: 'var(--space-md)'}}
                  />
                </div>
                <h4>Мартин Гор</h4>
                <p className="team-role" style={{color: 'var(--vinyl-muted)', fontWeight: '600', marginBottom: 'var(--space-sm)'}}>Музыкальный эксперт</p>
                <p style={{color: 'var(--vinyl-muted)', lineHeight: '1.6'}}>Знаток классики рока и джаза, помогает с подбором коллекции</p>
              </div>
              <div className="team-card" style={{padding: 'var(--space-lg)', background: 'var(--vinyl-card)', boxShadow: 'var(--shadow-sm)', borderRadius: 'var(--radius-lg)', textAlign: 'center'}}>
                <div className="team-photo">
                  <img 
                    src={process.env.PUBLIC_URL + "/assets/molko.jpg"} 
                    alt="Брайн Молко - технический специалист магазина VinylStore" 
                    style={{width: '100%', aspectRatio: '1', objectFit: 'cover', borderRadius: 'var(--radius-md)', marginBottom: 'var(--space-md)'}}
                  />
                </div>
                <h4>Брайн Молко</h4>
                <p className="team-role" style={{color: 'var(--vinyl-muted)', fontWeight: '600', marginBottom: 'var(--space-sm)'}}>Технический специалист</p>
                <p style={{color: 'var(--vinyl-muted)', lineHeight: '1.6'}}>Заботится о качестве звука и состоянии пластинок</p>
              </div>
            </div>
          </div>
        </section>

        {/* Достижения */}
        <section className="achievements-section" style={{paddingBlock: 'var(--space-2xl)'}}>
          <div className="section-content">
            <h2 className="section-title">Наши достижения</h2>
            <div className="stats-grid" style={{gap: 'var(--space-lg)', marginTop: 'var(--space-xl)'}}>
              <div className="stat-card" style={{background: 'var(--vinyl-light-bg)', borderRadius: 'var(--radius-md)', padding: 'var(--space-lg)', textAlign: 'center', transition: 'var(--transition-slow)'}}>
                <div className="stat-number" style={{fontSize: 'var(--text-2xl)', fontWeight: '700', color: 'var(--vinyl-red)', marginBottom: 'var(--space-xs)'}}>500+</div>
                <div className="stat-label" style={{fontSize: 'var(--text-sm)', color: 'var(--vinyl-muted)'}}>Пластинок в каталоге</div>
              </div>
              <div className="stat-card" style={{background: 'var(--vinyl-light-bg)', borderRadius: 'var(--radius-md)', padding: 'var(--space-lg)', textAlign: 'center', transition: 'var(--transition-slow)'}}>
                <div className="stat-number" style={{fontSize: 'var(--text-2xl)', fontWeight: '700', color: 'var(--vinyl-red)', marginBottom: 'var(--space-xs)'}}>98%</div>
                <div className="stat-label" style={{fontSize: 'var(--text-sm)', color: 'var(--vinyl-muted)'}}>Довольных клиентов</div>
              </div>
              <div className="stat-card" style={{background: 'var(--vinyl-light-bg)', borderRadius: 'var(--radius-md)', padding: 'var(--space-lg)', textAlign: 'center', transition: 'var(--transition-slow)'}}>
                <div className="stat-number" style={{fontSize: 'var(--text-2xl)', fontWeight: '700', color: 'var(--vinyl-red)', marginBottom: 'var(--space-xs)'}}>3</div>
                <div className="stat-label" style={{fontSize: 'var(--text-sm)', color: 'var(--vinyl-muted)'}}>Года на рынке</div>
              </div>
              <div className="stat-card" style={{background: 'var(--vinyl-light-bg)', borderRadius: 'var(--radius-md)', padding: 'var(--space-lg)', textAlign: 'center', transition: 'var(--transition-slow)'}}>
                <div className="stat-number" style={{fontSize: 'var(--text-2xl)', fontWeight: '700', color: 'var(--vinyl-red)', marginBottom: 'var(--space-xs)'}}>24/7</div>
                <div className="stat-label" style={{fontSize: 'var(--text-sm)', color: 'var(--vinyl-muted)'}}>Поддержка</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section" style={{paddingBlock: 'var(--space-2xl)'}}>
          <div className="container">
            <div className="cta-content" style={{textAlign: 'center'}}>
              <h2 style={{fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-lg)', fontWeight: '700'}}>Готовы начать коллекцию?</h2>
              <p style={{color: 'var(--vinyl-text)', opacity: '0.9', marginBottom: 'var(--space-lg)', fontSize: 'var(--text-lg)'}}>
                Свяжитесь с нами сегодня и получите бесплатную консультацию по подбору винила.
              </p>
              <button 
                className="btn btn-primary"
                onClick={() => onNavigate('contacts', '#contact-form')}
              >
                Связаться с нами
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;