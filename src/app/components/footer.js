'use client';

import React, { useState } from 'react';
import { FaLinkedin, FaTwitter, FaYoutube, FaGithub, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import '../styles/footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup logic here
    console.log(`Signed up with email: ${email}`);
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__info">
          <h2 className="footer__title">Hassan Mehmood</h2>
          <p className="footer__description">CONSISTENCY | PERSEVERANCE | DEVOTION</p>
          <div className="footer__cta">
            <a href="#contact" className="footer__button">Get In Touch</a>
          </div>
        </div>
        <div className="footer__social">
          <h3 className="footer__subtitle">Connect With Me</h3>
          <div className="footer__social-icons">
            <a href="https://www.linkedin.com/in/hassan-mehmood-01a3a9247/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://x.com/H_legions" target="_blank" rel="noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://www.youtube.com/@TECH_COMP-R" target="_blank" rel="noreferrer" aria-label="YouTube">
              <FaYoutube />
            </a>
            <a href="https://github.com/HassanMehmood413/HassanMehmood413" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://leetcode.com/u/Hassan_Leigons/" target="_blank" rel="noreferrer" aria-label="LeetCode">
              <SiLeetcode />
            </a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; {currentYear} Hassan Mehmood. All rights reserved.</p>
        <a href="https://HassanMehmood.com" target="_blank" rel="noreferrer">
          Made with <span className="heart">❤️</span> by Hassan Mehmood
        </a>
      </div>
      <div className="footer__background">
        <div className="footer__blob footer__blob--1"></div>
        <div className="footer__blob footer__blob--2"></div>
        <div className="footer__blob footer__blob--3"></div>
      </div>
    </footer>
  );
};

export default Footer;
