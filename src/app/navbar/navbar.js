import React, { useState } from 'react';

const AthimartNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const shopCategories = [
    { 
      icon: '💻', 
      title: 'Technology', 
      subtitle: 'AI Gadgets & Smart Devices',
      items: ['Smart Wearables', 'Home Automation', 'Connected Devices']
    },
    { 
      icon: '🏃', 
      title: 'Fitness', 
      subtitle: 'Gear & Wearables',
      items: ['Fitness Trackers', 'Gym Tech Accessories', 'Workout Tools']
    },
    { 
      icon: '👔', 
      title: 'Lifestyle', 
      subtitle: 'Fashion & Accessories',
      items: ['Clothing', 'Fashion Items', 'Premium Accessories']
    },
    { 
      icon: '🌿', 
      title: 'Tradition', 
      subtitle: 'Natural Essences & Agarwood',
      items: ['Oud Oil', 'Sandalwood', 'Frankincense', 'Myrrh', 'Rose Otto']
    },
  ];

  const services = [
    { 
      icon: '⚙️', 
      title: 'IT Solutions', 
      subtitle: 'ERP & Enterprise Systems',
      items: ['Licensed Software', 'ERP Systems', 'Business Management']
    },
    { 
      icon: '🤖', 
      title: 'AI Automation', 
      subtitle: 'Intelligent Business Tools',
      items: ['AI Products', 'Smart Commerce', 'Automation Solutions']
    },
    { 
      icon: '📱', 
      title: 'Digital Solutions', 
      subtitle: 'Apps & Web Development',
      items: ['Mobile Apps', 'E-Commerce Platforms', 'Web Development']
    },
    { 
      icon: '🚚', 
      title: 'Shipping Services', 
      subtitle: 'Global Delivery Solutions',
      items: ['Drop Shipping', 'Direct Shipping', 'Worldwide Delivery']
    },
  ];

  return (
    <>
      {/* Top Navigation Bar */}
      <nav style={{
        width: '100%',
        background: 'rgba(0, 0, 0, 0.95)',
        backdropFilter: 'blur(12px)',
        color: 'white',
        borderBottom: '1px solid #2d2d2d',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 24px',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '80px',
          }}>
            
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{
                  fontSize: '1.875rem',
                  fontWeight: '900',
                  letterSpacing: '-0.5px',
                  background: 'linear-gradient(to right, #ffffff, #d1d1d1, #a0a0a0)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  ATHIMART
                </span>
                <span style={{
                  fontSize: '0.6rem',
                  color: '#666',
                  letterSpacing: '1px',
                  marginTop: '-4px',
                }}>
                  Powered by Tokilo
                </span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div style={{
              display: window.innerWidth >= 1024 ? 'flex' : 'none',
              alignItems: 'center',
              gap: '32px',
            }}>
              {/* Shop Dropdown */}
              <div 
                style={{ position: 'relative' }}
                onMouseEnter={() => setActiveMenu('SHOP')}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button style={{
                  fontSize: '11px',
                  fontWeight: '700',
                  letterSpacing: '2px',
                  color: activeMenu === 'SHOP' ? 'white' : '#b0b0b0',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '8px 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  transition: 'color 0.2s',
                }}>
                  <span>SHOP</span>
                  <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  right: '0',
                  height: '2px',
                  background: 'linear-gradient(to right, #06b6d4, #a855f7)',
                  transform: activeMenu === 'SHOP' ? 'scaleX(1)' : 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: 'transform 0.3s',
                }} />
                
                {/* Dropdown Menu */}
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: '0',
                  marginTop: '8px',
                  width: '280px',
                  background: 'rgba(0, 0, 0, 0.95)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid #2d2d2d',
                  borderRadius: '12px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                  opacity: activeMenu === 'SHOP' ? 1 : 0,
                  visibility: activeMenu === 'SHOP' ? 'visible' : 'hidden',
                  transform: activeMenu === 'SHOP' ? 'translateY(0)' : 'translateY(-8px)',
                  transition: 'all 0.3s',
                }}>
                  <div style={{ padding: '8px 0' }}>
                    {shopCategories.map((category, index) => (
                      <a
                        key={index}
                        href="#"
                        style={{
                          display: 'flex',
                          alignItems: 'start',
                          gap: '12px',
                          padding: '12px 16px',
                          color: '#b0b0b0',
                          textDecoration: 'none',
                          transition: 'all 0.2s',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = 'white';
                          e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = '#b0b0b0';
                          e.currentTarget.style.background = 'transparent';
                        }}
                      >
                        <span style={{ fontSize: '20px', marginTop: '2px' }}>{category.icon}</span>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontWeight: '600', fontSize: '14px', marginBottom: '2px' }}>
                            {category.title}
                          </div>
                          <div style={{ fontSize: '11px', color: '#666' }}>
                            {category.subtitle}
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Services Dropdown */}
              <div 
                style={{ position: 'relative' }}
                onMouseEnter={() => setActiveMenu('SERVICES')}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button style={{
                  fontSize: '11px',
                  fontWeight: '700',
                  letterSpacing: '2px',
                  color: activeMenu === 'SERVICES' ? 'white' : '#b0b0b0',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '8px 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  transition: 'color 0.2s',
                }}>
                  <span>SERVICES</span>
                  <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  right: '0',
                  height: '2px',
                  background: 'linear-gradient(to right, #06b6d4, #a855f7)',
                  transform: activeMenu === 'SERVICES' ? 'scaleX(1)' : 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: 'transform 0.3s',
                }} />
                
                {/* Dropdown Menu */}
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: '0',
                  marginTop: '8px',
                  width: '300px',
                  background: 'rgba(0, 0, 0, 0.95)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid #2d2d2d',
                  borderRadius: '12px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                  opacity: activeMenu === 'SERVICES' ? 1 : 0,
                  visibility: activeMenu === 'SERVICES' ? 'visible' : 'hidden',
                  transform: activeMenu === 'SERVICES' ? 'translateY(0)' : 'translateY(-8px)',
                  transition: 'all 0.3s',
                }}>
                  <div style={{ padding: '8px 0' }}>
                    {services.map((service, index) => (
                      <a
                        key={index}
                        href="#"
                        style={{
                          display: 'flex',
                          alignItems: 'start',
                          gap: '12px',
                          padding: '12px 16px',
                          color: '#b0b0b0',
                          textDecoration: 'none',
                          transition: 'all 0.2s',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = 'white';
                          e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = '#b0b0b0';
                          e.currentTarget.style.background = 'transparent';
                        }}
                      >
                        <span style={{ fontSize: '20px', marginTop: '2px' }}>{service.icon}</span>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontWeight: '600', fontSize: '14px', marginBottom: '2px' }}>
                            {service.title}
                          </div>
                          <div style={{ fontSize: '11px', color: '#666' }}>
                            {service.subtitle}
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Markets Dropdown */}
              <div 
                style={{ position: 'relative' }}
                onMouseEnter={() => setActiveMenu('MARKETS')}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button style={{
                  fontSize: '11px',
                  fontWeight: '700',
                  letterSpacing: '2px',
                  color: activeMenu === 'MARKETS' ? 'white' : '#b0b0b0',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '8px 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  transition: 'color 0.2s',
                }}>
                  <span>MARKETS</span>
                  <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  right: '0',
                  height: '2px',
                  background: 'linear-gradient(to right, #06b6d4, #a855f7)',
                  transform: activeMenu === 'MARKETS' ? 'scaleX(1)' : 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: 'transform 0.3s',
                }} />
                
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: '0',
                  marginTop: '8px',
                  width: '250px',
                  background: 'rgba(0, 0, 0, 0.95)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid #2d2d2d',
                  borderRadius: '12px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                  opacity: activeMenu === 'MARKETS' ? 1 : 0,
                  visibility: activeMenu === 'MARKETS' ? 'visible' : 'hidden',
                  transform: activeMenu === 'MARKETS' ? 'translateY(0)' : 'translateY(-8px)',
                  transition: 'all 0.3s',
                }}>
                  <div style={{ padding: '8px 0' }}>
                    {[
                      { icon: '🇶🇦', title: 'Gulf Countries', subtitle: 'Qatar, UAE, Saudi Arabia' },
                      { icon: '🇱🇰', title: 'Sri Lanka', subtitle: 'Headquarters & Operations' },
                      { icon: '🇪🇺', title: 'Europe', subtitle: 'Select Markets' },
                    ].map((market, index) => (
                      <a
                        key={index}
                        href="#"
                        style={{
                          display: 'flex',
                          alignItems: 'start',
                          gap: '12px',
                          padding: '12px 16px',
                          color: '#b0b0b0',
                          textDecoration: 'none',
                          transition: 'all 0.2s',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = 'white';
                          e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = '#b0b0b0';
                          e.currentTarget.style.background = 'transparent';
                        }}
                      >
                        <span style={{ fontSize: '20px', marginTop: '2px' }}>{market.icon}</span>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontWeight: '600', fontSize: '14px', marginBottom: '2px' }}>
                            {market.title}
                          </div>
                          <div style={{ fontSize: '11px', color: '#666' }}>
                            {market.subtitle}
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Simple Links */}
              <a href="#" style={{
                fontSize: '11px',
                fontWeight: '700',
                letterSpacing: '2px',
                color: '#b0b0b0',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => e.target.style.color = 'white'}
              onMouseLeave={(e) => e.target.style.color = '#b0b0b0'}>
                ABOUT US
              </a>
              <a href="#" style={{
                fontSize: '11px',
                fontWeight: '700',
                letterSpacing: '2px',
                color: '#b0b0b0',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => e.target.style.color = 'white'}
              onMouseLeave={(e) => e.target.style.color = '#b0b0b0'}>
                CONTACT
              </a>
            </div>

            {/* Right Side Icons */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}>
              
              {/* Search Icon - Always visible */}
              <button style={{
                color: 'white',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#b0b0b0'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* User Icon - Always visible */}
              <button style={{
                color: 'white',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#b0b0b0'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>

              {/* Cart Icon - Desktop only */}
              <button style={{
                position: 'relative',
                color: 'white',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px',
                transition: 'color 0.2s',
                display: window.innerWidth >= 1024 ? 'block' : 'none',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#b0b0b0'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>
                <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span style={{
                  position: 'absolute',
                  top: '2px',
                  right: '2px',
                  background: 'linear-gradient(to right, #ef4444, #ec4899)',
                  color: 'white',
                  fontSize: '10px',
                  fontWeight: '700',
                  borderRadius: '50%',
                  width: '18px',
                  height: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  0
                </span>
              </button>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                style={{
                  display: window.innerWidth >= 1024 ? 'none' : 'block',
                  color: 'white',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '8px',
                }}
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '80px',
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.98)',
          zIndex: 999,
          overflowY: 'auto',
          padding: '20px',
        }}>
          <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            {[...shopCategories, ...services].map((item, index) => (
              <a
                key={index}
                href="#"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '16px',
                  color: 'white',
                  textDecoration: 'none',
                  borderBottom: '1px solid #2d2d2d',
                }}
              >
                <span style={{ fontSize: '24px' }}>{item.icon}</span>
                <div>
                  <div style={{ fontWeight: '600', fontSize: '16px' }}>{item.title}</div>
                  <div style={{ fontSize: '12px', color: '#666', marginTop: '2px' }}>{item.subtitle}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default AthimartNavigation;