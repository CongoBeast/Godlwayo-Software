import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationBar from './components/NavigationBar';
import HeroSection from './components/HeroSection';
import ProductsSection from './components/ProductsSection';
import VideoSection from './components/VideoSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';

function App() {
  return (
    <div className="bg-mesh">
      <NavigationBar />
      <HeroSection />
      <ProductsSection />
      <VideoSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}

export default App;