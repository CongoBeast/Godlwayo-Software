import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ExternalLink, Car, Stethoscope, Wrench } from 'lucide-react';

const products = [
  {
    title: 'Online Drive Hub',
    icon: <Car size={28} />,
    tagline: 'Drive School Management, Simplified',
    description:
      'Running a driving school means juggling bookings, instructors, learner progress, and payments — all at once. Online Drive Hub brings it all under one roof, giving you a fully automated system to schedule lessons, track student milestones, manage your fleet, and collect payments. Less admin. More driving.',
    color: '#3b82f6',
    demoUrl: 'https://onlinedrivehub.com',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&q=80',
  },
  {
    title: "Doctor's Office",
    icon: <Stethoscope size={28} />,
    tagline: 'Better Care Starts with Better Systems',
    description:
      "Small practices deserve powerful tools too. Doctor's Office is a lightweight yet comprehensive practice management system — handle patient appointments, medical records, billing, and follow-ups from a single, secure platform. Spend less time on paperwork and more time with your patients.",
    color: '#10b981',
    demoUrl: 'https://doctorsoffice.app',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80',
  },
  {
    title: 'My Online Garage',
    icon: <Wrench size={28} />,
    tagline: 'Keep Your Workshop Running Smoothly',
    description:
      "Independent mechanic shops run on reputation and efficiency. My Online Garage helps you manage job cards, track vehicle service histories, schedule appointments, and handle invoicing — all in one place. Give your customers a professional experience and give yourself back valuable time.",
    color: '#f59e0b',
    demoUrl: 'https://myonlinegarage.app',
    image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600&q=80',
  },
];

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Col md={4} className="mb-4">
      <div
        className="glass h-100"
        style={{
          borderRadius: 20,
          overflow: 'hidden',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
          boxShadow: hovered
            ? `0 20px 60px rgba(0,0,0,0.5), 0 0 30px ${product.color}22`
            : '0 8px 32px rgba(0,0,0,0.4)',
        }}
      >
        {/* Image with overlay */}
        <div
          style={{ position: 'relative', height: 200, overflow: 'hidden', cursor: 'pointer' }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => window.open(product.demoUrl, '_blank')}
        >
          <img
            src={product.image}
            alt={product.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.4s ease',
              transform: hovered ? 'scale(1.08)' : 'scale(1)',
              filter: hovered ? 'brightness(0.35)' : 'brightness(0.7)',
            }}
          />

          {/* Hover overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              opacity: hovered ? 1 : 0,
              transition: 'opacity 0.3s ease',
              background: 'rgba(5,13,31,0.3)',
            }}
          >
            <div style={{
              background: 'linear-gradient(135deg, #e91e8c, #ff5cb8)',
              borderRadius: 50,
              padding: '10px 24px',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              fontFamily: 'Syne, sans-serif',
              fontWeight: 700,
              fontSize: '0.9rem',
              color: '#fff',
              boxShadow: '0 0 24px rgba(233,30,140,0.5)',
            }}>
              <ExternalLink size={16} /> View Demo
            </div>
            <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', margin: 0 }}>
              {product.demoUrl.replace('https://', '')}
            </p>
          </div>

          {/* Icon badge */}
          <div style={{
            position: 'absolute',
            bottom: 14,
            left: 14,
            background: 'rgba(5,13,31,0.7)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 12,
            padding: '8px 12px',
            color: product.color,
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            fontSize: '0.75rem',
            fontFamily: 'Syne, sans-serif',
            fontWeight: 600,
          }}>
            {product.icon}
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <div style={{
            fontSize: '0.72rem',
            color: product.color,
            fontFamily: 'Syne, sans-serif',
            fontWeight: 700,
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            marginBottom: 6,
          }}>
            {product.tagline}
          </div>
          <h3 style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: '1.3rem',
            color: '#fff',
            marginBottom: '0.75rem',
          }}>
            {product.title}
          </h3>
          <p style={{
            fontSize: '0.87rem',
            color: 'rgba(255,255,255,0.58)',
            lineHeight: 1.75,
            margin: 0,
          }}>
            {product.description}
          </p>

          <div
            style={{
              marginTop: '1.25rem',
              padding: '10px 16px',
              borderRadius: 10,
              background: `${product.color}12`,
              border: `1px solid ${product.color}30`,
              fontSize: '0.8rem',
              color: product.color,
              fontFamily: 'Syne, sans-serif',
              fontWeight: 600,
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s',
            }}
            onClick={() => window.open(product.demoUrl, '_blank')}
            onMouseEnter={e => e.target.style.background = `${product.color}25`}
            onMouseLeave={e => e.target.style.background = `${product.color}12`}
          >
            Explore {product.title} →
          </div>
        </div>
      </div>
    </Col>
  );
};

const ProductsSection = () => {
  return (
    <section id="products" style={{ position: 'relative' }}>
      <Container>
        <div className="text-center mb-5">
          <div className="d-inline-flex align-items-center gap-2 mb-3"
            style={{
              background: 'rgba(233,30,140,0.1)',
              border: '1px solid rgba(233,30,140,0.25)',
              borderRadius: '50px',
              padding: '6px 16px',
              fontSize: '0.78rem',
              color: '#ff5cb8',
              fontFamily: 'Syne, sans-serif',
              fontWeight: 600,
              letterSpacing: '1px',
              textTransform: 'uppercase',
            }}>
            Our Products
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', marginBottom: '1rem' }}>
            Industry-Specific Solutions,<br />
            <span className="gradient-text">Ready When You Are</span>
          </h2>
          <p style={{
            color: 'rgba(255,255,255,0.55)',
            fontSize: '1rem',
            maxWidth: 540,
            margin: '0 auto',
            lineHeight: 1.8,
          }}>
            Each product is purpose-built for a specific industry — not a generic tool with a coat of paint, but a system that understands your world.
          </p>
        </div>

        <Row>
          {products.map((p, i) => <ProductCard key={i} product={p} />)}
        </Row>

        {/* CTA */}
        <div
          className="glass text-center mt-4 p-5"
          style={{ borderRadius: 20 }}
        >
          <p style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', marginBottom: '0.5rem' }}>
            Don't see your industry?
          </p>
          <h4 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, marginBottom: '1.5rem' }}>
            We Build <span className="text-pink">Custom Software</span> Too
          </h4>
          <a
            href="#contact"
            className="btn-pink"
            style={{
              display: 'inline-block',
              padding: '12px 36px',
              borderRadius: 50,
              background: 'linear-gradient(135deg, #e91e8c, #ff5cb8)',
              color: '#fff',
              fontFamily: 'Syne, sans-serif',
              fontWeight: 700,
              textDecoration: 'none',
              boxShadow: '0 0 24px rgba(233,30,140,0.3)',
            }}
          >
            Start a Custom Project
          </a>
        </div>
      </Container>
    </section>
  );
};

export default ProductsSection;