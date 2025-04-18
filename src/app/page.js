"use client";
import React, { useState, useEffect } from 'react';
// src/app/page.js
// import React from 'react';
import LoadingScreen from './components/LoadingScreen';
import Menus from './components/Menus';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education';
import Skills from './components/Skills';
import 'regenerator-runtime/runtime';
import dynamic from "next/dynamic"
import { Suspense } from "react"
import Achievements from './components/Achievements';

const UltimateSkillsSection = dynamic(() => import("../app/components/Skills"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
})

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
