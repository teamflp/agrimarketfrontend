import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRoutes from './routes';
import Header from './components/Header';
import Facts from './components/Facts';
import Services from './components/Services';
import Features from './components/Features';
import Products from './components/Products';
import Testimonial from './components/testimonial';
import Team from './components/Team';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Facts />
      <Services />
      <Features />
      <Products />
      <Testimonial />
      <Team />
      <Blog />

      {/* Conteneur principal */}
      <div className="container mb-lg-5">
        <AppRoutes />
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
