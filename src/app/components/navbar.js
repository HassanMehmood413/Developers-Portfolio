"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import hassan from '../images/hassan.png';
import '@/app/styles/navbar.css';
import '@/app/index.css'


const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('');
    const pathname = usePathname();

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "#Experience", label: "Experience" },
        { href: "#projects", label: "Projects" },
        { href: "#container_footer", label: "Contact" }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'experience', 'projects', 'container_footer'];
            let currentActiveSection = '';

            sections.forEach((sectionId) => {
                const section = document.getElementById(sectionId);
                if (section && window.scrollY >= section.offsetTop - 100) {
                    currentActiveSection = sectionId;
                }
            });

            setActiveLink(currentActiveSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsSidebarOpen(false);
    }, []); // Removed unnecessary pathname dependency

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <>
            <motion.nav 
                className="navbar" 
                id='nav'
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            >
                <div className="img">
                    <Image 
                        src={hassan || "/placeholder.svg"} 
                        alt="Hassan Mehmood" 
                        width={60} 
                        height={60}
                        placeholder="blur"
                    />
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Hassan Mehmood
                    </motion.span>
                </div>

                <div className="options">
                    <ul className="hideonmobile">
                        {navLinks.map((link, index) => (
                            <motion.li 
                                key={link.href}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link 
                                    href={link.href}
                                    className={activeLink === link.href.replace('#', '') ? 'active' : ''}
                                >
                                    {link.label}
                                </Link>
                            </motion.li>
                        ))}
                    </ul>
                    <button className='bar' onClick={toggleSidebar} aria-label="Toggle menu">
                        <FaBars size={24} color="#00b4d8" />
                    </button>
                </div>
            </motion.nav>

            <AnimatePresence>
                {isSidebarOpen && (
                    <motion.div 
                        className='fixed-sidebar'
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                    >
                        <ul>
                            <li>
                                <button onClick={toggleSidebar} className='closebar' aria-label="Close menu">
                                    <FaTimes size={30} color="#00b4d8" />
                                </button>
                            </li>
                            {navLinks.map((link, index) => (
                                <motion.li 
                                    key={link.href}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link 
                                        href={link.href}
                                        onClick={toggleSidebar}
                                        className={activeLink === link.href.replace('#', '') ? 'active' : ''}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
