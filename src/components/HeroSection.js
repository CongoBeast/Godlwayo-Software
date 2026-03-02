import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ArrowRight, Layers, Cpu, Shield } from 'lucide-react';

const stats = [
  { icon: <Layers size={18} />, label: 'Ready-Made Products', value: '3+' },
  { icon: <Cpu size={18} />, label: 'Industries Served', value: '5+' },
  { icon: <Shield size={18} />, label: 'Uptime Guarantee', value: '99.9%' },
];

const HeroSection = () => {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '100px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative orbs */}
      <div style={{
        position: 'absolute', width: 500, height: 500,
        borderRadius: '50%', top: '-100px', right: '-100px',
        background: 'radial-gradient(circle, rgba(233,30,140,0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', width: 300, height: 300,
        borderRadius: '50%', bottom: '50px', left: '-80px',
        background: 'radial-gradient(circle, rgba(17,35,71,0.8) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <Container>
        <Row className="align-items-center gy-5">
          <Col lg={7}>
            {/* Badge */}
            <div
              className="d-inline-flex align-items-center gap-2 mb-4"
              style={{
                background: 'rgba(233,30,140,0.12)',
                border: '1px solid rgba(233,30,140,0.3)',
                borderRadius: '50px',
                padding: '8px 18px',
                fontSize: '0.82rem',
                color: '#ff5cb8',
                fontFamily: 'Syne, sans-serif',
                fontWeight: 600,
                letterSpacing: '0.5px',
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#ff5cb8', display: 'inline-block' }} />
              Software Built for Real Business
            </div>

            <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Powerful Software<br />
              <span className="gradient-text">Tailored for SMEs</span><br />
              Across Every Industry
            </h1>

            <p style={{
              fontSize: '1.1rem',
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.8,
              maxWidth: 520,
              marginBottom: '2.5rem',
            }}>
              We design and deliver intelligent software solutions — both ready-to-deploy products and fully custom builds — empowering small and medium businesses to streamline operations, serve customers better, and scale with confidence.
            </p>

            <div className="d-flex flex-wrap gap-3">
              <Button className="btn-pink d-flex align-items-center gap-2" href="#products">
                Explore Our Products <ArrowRight size={16} />
              </Button>
              <Button className="btn-outline-glass" href="#contact">
                Let's Build Together
              </Button>
            </div>
          </Col>

          <Col lg={5}>
            {/* Stats glass card */}
            <div className="glass p-4" style={{ borderRadius: 24 }}>
              <p style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: '0.78rem',
                color: 'rgba(255,255,255,0.4)',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                marginBottom: '1.5rem',
              }}>
                Why Businesses Choose Us
              </p>

              {stats.map((s, i) => (
                <div
                  key={i}
                  className="d-flex align-items-center gap-3 mb-3"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    borderRadius: 12,
                    padding: '16px 20px',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}
                >
                  <div style={{
                    background: 'rgba(233,30,140,0.15)',
                    borderRadius: 10,
                    padding: 10,
                    color: '#ff5cb8',
                  }}>
                    {s.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.4rem', color: '#fff' }}>{s.value}</div>
                    <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)' }}>{s.label}</div>
                  </div>
                </div>
              ))}

              <div style={{
                marginTop: '1.5rem',
                padding: '16px',
                borderRadius: 12,
                background: 'linear-gradient(135deg, rgba(233,30,140,0.15), rgba(255,92,184,0.08))',
                border: '1px solid rgba(233,30,140,0.2)',
                textAlign: 'center',
              }}>
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>
                  ✦ &nbsp; Ready-made or fully custom — <span style={{ color: '#ff5cb8', fontWeight: 600 }}>we've got you covered</span>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;