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
import Education from './components/Education';
import Skills from './components/Skills';
import 'regenerator-runtime/runtime';
import dynamic from "next/dynamic"
import { Suspense } from "react"

const UltimateSkillsSection = dynamic(() => import("../app/components/Skills"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
})

export default function Home() {
  return (
    <div>
      {/* <LoadingScreen /> */}
      <Menus />
      <Education />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
