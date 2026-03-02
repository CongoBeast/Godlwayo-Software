import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Zap } from 'lucide-react';

const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      style={{
        background: scrolled
          ? 'rgba(5, 13, 31, 0.85)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
        transition: 'all 0.4s ease',
        padding: '14px 0',
      }}
    >
      <Container>
        {/* Brand */}
        <Navbar.Brand
          href="#home"
          className="d-flex align-items-center gap-2"
          style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.3rem' }}
        >
          <div
            style={{
              background: 'linear-gradient(135deg, #e91e8c, #ff5cb8)',
              borderRadius: '8px',
              padding: '6px',
              display: 'flex',
              alignItems: 'center',
              boxShadow: '0 0 16px rgba(233,30,140,0.4)',
            }}
          >
            <Zap size={18} color="#fff" />
          </div>
          <span className="gradient-text">Godlwayo</span>
          <span style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 400 }}>Software</span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="main-nav"
          style={{ borderColor: 'rgba(255,255,255,0.15)' }}
        >
          <span style={{
            display: 'block', width: 22, height: 2,
            background: '#fff', marginBottom: 5, borderRadius: 2,
          }} />
          <span style={{
            display: 'block', width: 22, height: 2,
            background: '#e91e8c', marginBottom: 5, borderRadius: 2,
          }} />
          <span style={{
            display: 'block', width: 22, height: 2,
            background: '#fff', borderRadius: 2,
          }} />
        </Navbar.Toggle>

        <Navbar.Collapse id="main-nav">
          <Nav className="mx-auto gap-1">
            {['Home', 'Products', 'Contact'].map((item) => (
              <Nav.Link
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{
                  color: 'rgba(255,255,255,0.75)',
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  letterSpacing: '0.5px',
                  padding: '8px 18px',
                  borderRadius: '50px',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => {
                  e.target.style.color = '#fff';
                  e.target.style.background = 'rgba(255,255,255,0.07)';
                }}
                onMouseLeave={e => {
                  e.target.style.color = 'rgba(255,255,255,0.75)';
                  e.target.style.background = 'transparent';
                }}
              >
                {item}
              </Nav.Link>
            ))}
          </Nav>
          <Button
            href="#contact"
            className="btn-pink"
            style={{ fontSize: '0.9rem' }}
          >
            Get Started
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;