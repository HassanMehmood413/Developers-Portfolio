"use client";
import React, { useState, useEffect } from 'react';
// src/app/page.js
// import React from 'react';
import LoadingScreen from './components/LoadingScreen';
import Menus from './components/menus';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';

export default function Home() {
  return (
    <div>
      {/* <LoadingScreen /> */}
      <Menus />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
