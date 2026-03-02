import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Zap, Facebook, Linkedin, MessageCircle } from 'lucide-react';

const socials = [
  {
    icon: <Facebook size={18} />,
    label: 'Facebook',
    href: 'https://facebook.com/godlwayosoftware',
    color: '#1877f2',
  },
  {
    icon: <Linkedin size={18} />,
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/godlwayosoftware',
    color: '#0a66c2',
  },
  {
    icon: <MessageCircle size={18} />,
    label: 'WhatsApp',
    href: 'https://wa.me/27000000000',
    color: '#25d366',
  },
];

const links = {
  Products: ['Online Drive Hub', "Doctor's Office", 'My Online Garage'],
  Company: ['About Us', 'Careers', 'Blog'],
  Support: ['FAQ', 'Contact Us', 'Privacy Policy'],
};

const FooterSection = () => {
  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255,255,255,0.07)',
        background: 'rgba(5,13,31,0.6)',
        backdropFilter: 'blur(16px)',
        paddingTop: '64px',
        paddingBottom: '32px',
      }}
    >
      <Container>
        <Row className="gy-5 mb-5">
          {/* Brand column */}
          <Col lg={4}>
            <div className="d-flex align-items-center gap-2 mb-4">
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
              <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.2rem' }}>
                <span className="gradient-text">Godlwayo</span>{' '}
                <span style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 400 }}>Software</span>
              </span>
            </div>
            <p style={{
              color: 'rgba(255,255,255,0.45)',
              fontSize: '0.88rem',
              lineHeight: 1.8,
              maxWidth: 300,
              marginBottom: '1.5rem',
            }}>
              Building intelligent software solutions for small and medium businesses across Africa and beyond.
            </p>

            {/* Social icons */}
            <div className="d-flex gap-2">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 42,
                    height: 42,
                    borderRadius: 12,
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'rgba(255,255,255,0.6)',
                    textDecoration: 'none',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = `${s.color}22`;
                    e.currentTarget.style.borderColor = `${s.color}55`;
                    e.currentTarget.style.color = s.color;
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </Col>

          {/* Links */}
          {Object.entries(links).map(([section, items]) => (
            <Col key={section} sm={4} lg={2} className="offset-lg-0">
              <h6 style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 700,
                fontSize: '0.85rem',
                color: '#fff',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
              }}>
                {section}
              </h6>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {items.map((item) => (
                  <li key={item} style={{ marginBottom: '0.75rem' }}>
                    <a
                      href="#home"
                      style={{
                        color: 'rgba(255,255,255,0.45)',
                        fontSize: '0.87rem',
                        textDecoration: 'none',
                        transition: 'color 0.3s',
                      }}
                      onMouseEnter={e => e.target.style.color = '#ff5cb8'}
                      onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.45)'}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </Col>
          ))}

          {/* Newsletter teaser */}
          <Col lg={3}>
            <h6 style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 700,
              fontSize: '0.85rem',
              color: '#fff',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
            }}>
              Stay Updated
            </h6>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '1rem' }}>
              Get product updates and software tips direct to your inbox.
            </p>
            <div style={{ display: 'flex', gap: 8 }}>
              <input
                type="email"
                placeholder="your@email.com"
                style={{
                  flex: 1,
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 10,
                  padding: '10px 14px',
                  color: '#fff',
                  fontSize: '0.82rem',
                  outline: 'none',
                }}
              />
              <button
                style={{
                  background: 'linear-gradient(135deg, #e91e8c, #ff5cb8)',
                  border: 'none',
                  borderRadius: 10,
                  padding: '10px 16px',
                  color: '#fff',
                  cursor: 'pointer',
                  fontSize: '0.8rem',
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 700,
                  whiteSpace: 'nowrap',
                }}
              >
                Subscribe
              </button>
            </div>
          </Col>
        </Row>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.07)',
          paddingTop: '24px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 12,
        }}>
          <p style={{ margin: 0, color: 'rgba(255,255,255,0.3)', fontSize: '0.82rem' }}>
            © {new Date().getFullYear()} Godlwayo Software. All rights reserved.
          </p>
          <p style={{ margin: 0, color: 'rgba(255,255,255,0.3)', fontSize: '0.82rem' }}>
            Crafted with ♥ for growing businesses
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default FooterSection;