"use client";
import React, { useState, useEffect } from 'react';
// src/app/page.js
// import React from 'react';
import LoadingScreen from './components/LoadingScreen';
import Menus from '../app/components/Menus';
import About from './components/about.js';
import Projects from './components/projects.js';
import Contact from './components/contact.js';
// import Footer from './components/Footer';
import Education from './components/education.js';
// import Skills from './components/Skills';
import 'regenerator-runtime/runtime';
import dynamic from "next/dynamic"
import { Suspense } from "react"
import Achievements from './components/achievements.js';


export default function Home() {
  return (
    <div>
      {/* <LoadingScreen /> */}
      <Menus />
      <Achievements />
      <Education />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
