// src/components/Header.jsx

import React from 'react';
import Nav from './nav';
import Carousel from './Carousel';
import Banner from './Banner';
import About from './About';

export default function Header() {
  return (
    <>
        <Nav />
        <Carousel />
        <Banner />
        <About />

    </>
  );
}
