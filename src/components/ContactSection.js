import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

const contactDetails = [
  { icon: <Mail size={20} />, label: 'Email Us', value: 'hello@godlwayo.com' },
  { icon: <Phone size={20} />, label: 'Call Us', value: '+27 00 000 0000' },
  { icon: <MapPin size={20} />, label: 'Location', value: 'South Africa' },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  const inputStyle = {
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 12,
    color: '#fff',
    padding: '12px 16px',
    fontSize: '0.9rem',
    transition: 'border-color 0.3s',
  };

  return (
    <section id="contact">
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
            <MessageCircle size={14} /> Get in Touch
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', marginBottom: '1rem' }}>
            Let's Build Something<br />
            <span className="gradient-text">Great Together</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', maxWidth: 480, margin: '0 auto', lineHeight: 1.8 }}>
            Whether you're ready to get started or just have a few questions — we'd love to hear from you.
          </p>
        </div>

        <Row className="gy-4 align-items-start">
          {/* Contact Info */}
          <Col lg={4}>
            <div className="glass p-4 h-100" style={{ borderRadius: 20 }}>
              <h5 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, marginBottom: '1.5rem' }}>
                Contact Information
              </h5>
              {contactDetails.map((item, i) => (
                <div key={i} className="d-flex align-items-start gap-3 mb-4">
                  <div style={{
                    background: 'rgba(233,30,140,0.12)',
                    borderRadius: 10,
                    padding: 10,
                    color: '#ff5cb8',
                    flexShrink: 0,
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <p style={{ margin: 0, fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '1px' }}>{item.label}</p>
                    <p style={{ margin: 0, color: '#fff', fontWeight: 500 }}>{item.value}</p>
                  </div>
                </div>
              ))}

              <div style={{
                marginTop: '2rem',
                padding: '20px',
                borderRadius: 14,
                background: 'linear-gradient(135deg, rgba(233,30,140,0.12), rgba(255,92,184,0.05))',
                border: '1px solid rgba(233,30,140,0.2)',
              }}>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>
                  🚀 &nbsp; We typically respond within <span style={{ color: '#ff5cb8', fontWeight: 600 }}>24 hours</span>. Let's talk about your project.
                </p>
              </div>
            </div>
          </Col>

          {/* Form */}
          <Col lg={8}>
            <div className="glass p-4 p-md-5" style={{ borderRadius: 20 }}>
              {submitted && (
                <Alert style={{
                  background: 'rgba(233,30,140,0.15)',
                  border: '1px solid rgba(233,30,140,0.3)',
                  color: '#ff5cb8',
                  borderRadius: 12,
                }}>
                  ✓ Message sent! We'll get back to you shortly.
                </Alert>
              )}
              <Form onSubmit={handleSubmit}>
                <Row className="gy-3">
                  <Col md={6}>
                    <Form.Label style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>Your Name</Form.Label>
                    <Form.Control
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'rgba(233,30,140,0.5)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Label style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      required
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'rgba(233,30,140,0.5)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                    />
                  </Col>
                  <Col md={12}>
                    <Form.Label style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>Subject</Form.Label>
                    <Form.Control
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="I'd like to enquire about..."
                      required
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'rgba(233,30,140,0.5)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                    />
                  </Col>
                  <Col md={12}>
                    <Form.Label style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your business and what you're looking to build..."
                      required
                      style={{ ...inputStyle, resize: 'none' }}
                      onFocus={e => e.target.style.borderColor = 'rgba(233,30,140,0.5)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                    />
                  </Col>
                  <Col md={12}>
                    <Button
                      type="submit"
                      className="btn-pink d-flex align-items-center gap-2 mt-2"
                      style={{ fontSize: '0.95rem' }}
                    >
                      <Send size={16} /> Send Message
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactSection;