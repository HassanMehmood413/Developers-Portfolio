'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { SiOpenai, SiGithubsponsors, SiDevpost, SiMlb } from 'react-icons/si';
import { TbBulb, TbArrowBigRightLinesFilled, TbCircleCheckFilled, TbWorldSearch } from 'react-icons/tb';
import { PiSparkleDuotone, PiPuzzlePieceDuotone, PiStackDuotone, PiPlanetDuotone } from 'react-icons/pi';
import { LuThermometerSnowflake, LuBrainCircuit, LuBraces, LuBookOpen } from 'react-icons/lu';
import '@/app/styles/About.css';

const Experience = () => {
    const experiences = [
        {
            company: "ICodeGuru",
            role: "Tech Trainer",
            period: "Jan 2022 - Present",
            description: "As a Tech Trainer at ICodeGuru, I specialize in guiding aspiring developers through the intricacies of Data Structures and Algorithms (DSA). My role involves breaking down complex programming concepts into digestible, practical knowledge.\nOrganized different sessions of DSA to teach underprevilidge students\n",
            name: 'Check My Sessions:',
            link: 'https://github.com/HassanMehmood413/My_All_Lectures-ICodeGuru-',
            color: "#FF5757",
            MainIcon: LuBrainCircuit,
            SecIcon: LuBraces
        },
        {
            company: "Section Leader @Stanford University",
            role: "Section Leader",
            period: "April 2025 - Present",
            description: "Selected as a Section Leader at Stanford Code In Place, where I will teach the basics of Python with Karel the Robot, Console Programming, and Graphics Programming. I lead a section of international students online from 350 cities. I helped 100+ international folks worldwide, including countries like the USA, Canada, Russia, the UK, India, Bangladesh, Brazil, and Germany, to grow their careers in programming.\n",
            name: 'Click to know more',
            link: 'https://www.linkedin.com/posts/hassan-mehmood413_stanfordcip2025-sectionleader-teachingcode-activity-7316630528353275904-CvE3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD0autYBDWMLUgrU35ZTKZlWjbKtYVD0RLw',
            color: "#8A2BE2",
            MainIcon: LuBookOpen,
            SecIcon: PiPlanetDuotone
        },
        {
            company: "Lablab.ai",
            role: "Hackathon Participant",
            period: "Multiple events (2024 - Present)",
            description: "At Lablab.ai hackathons, I've had the opportunity to work on cutting-edge AI projects, collaborating with diverse international teams to solve real-world problems using the latest in artificial intelligence and machine learning.",
            name: 'Check my Lablab.ai Profile',
            link: 'https://lablab.ai/u/@hassan_mehmood517',
            color: "#00C2A8",
            MainIcon: SiOpenai,
            SecIcon: PiPuzzlePieceDuotone
        },
        {
            company: "Major League Hacking (MLH)",
            role: "Hackathon Participant",
            period: "October 2024 - Present",
            description: "An incredible experience participating in a hackathon organized by Major League Hacking (MLH), one of the most prestigious and well-known hackathon organizations. Our team consists of four international members collaborating on an innovative STEM project. We are leveraging cutting-edge technologies to develop a solution that addresses real-world challenges, emphasizing creativity, teamwork, and technical excellence.",
            name: "Click here to know more:",
            link: "https://www.linkedin.com/posts/hassan-mehmood-01a3a9247_%F0%9D%90%80-%F0%9D%90%A9%F0%9D%90%A5%F0%9D%90%9A%F0%9D%90%AD%F0%9D%90%9F%F0%9D%90%A8%F0%9D%90%AB%F0%9D%90%A6-%F0%9D%90%B0%F0%9D%90%A1%F0%9D%90%9E%F0%9D%90%AB%F0%9D%90%9E-%F0%9D%90%B2%F0%9D%90%A8%F0%9D%90%AE-%F0%9D%90%9C%F0%9D%90%9A%F0%9D%90%A7-activity-7261246314443636736-dsMJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD0autYBDWMLUgrU35ZTKZlWjbKtYVD0RLw",
            color: "#FFB114",
            MainIcon: SiMlb,
            SecIcon: PiSparkleDuotone
        },
    ];

    const [expandedCard, setExpandedCard] = useState(null);
    const [visibleElements, setVisibleElements] = useState([]);
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);
    const [scrollDirection, setScrollDirection] = useState('down');
    const [activeColorScheme, setActiveColorScheme] = useState(0);
    const prevScrollY = useRef(0);

    // Color schemes rotation
    const colorSchemes = [
        { bg: '#0F0F1A', text: '#F1F1F6', accent: '#FF5757' },
        { bg: '#1E1B2C', text: '#F8F7FF', accent: '#8A2BE2' },
        { bg: '#051A28', text: '#E0F7FF', accent: '#00C2A8' },
        { bg: '#291D0F', text: '#FFF8E0', accent: '#FFB114' },
    ];

    // Animation variants
    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { staggerChildren: 0.3 }
        }
    };
    
    const titleVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    // Track scroll for direction and changing color scheme
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const direction = latest > prevScrollY.current ? 'down' : 'up';
        prevScrollY.current = latest;
        setScrollDirection(direction);
        
        // Change color scheme based on scroll position
        if (Math.abs(latest - prevScrollY.current) > 50) {
            setActiveColorScheme((prev) => (prev + 1) % colorSchemes.length);
            prevScrollY.current = latest;
        }
    });

    // Intersection observer setup
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setVisibleElements(prev => [...prev, entry.target.dataset.index]);
                    } else {
                        setVisibleElements(prev => prev.filter(i => i !== entry.target.dataset.index));
                    }
                });
            },
            { threshold: 0.2 }
        );

        cardsRef.current.forEach(card => {
            if (card) observer.observe(card);
        });

        return () => {
            cardsRef.current.forEach(card => {
                if (card) observer.unobserve(card);
            });
        };
    }, []);

    const toggleExpand = (index) => {
        setExpandedCard(expandedCard === index ? null : index);
    };

    // Current color scheme
    const currentScheme = colorSchemes[activeColorScheme];

    return (
        <motion.section
            ref={sectionRef}
            className="neo-experience-section"
            style={{
                backgroundColor: currentScheme.bg,
                color: currentScheme.text,
                '--accent-color': currentScheme.accent
            }}
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
        >
            <motion.div 
                className="orbital-background"
                animate={{ 
                    rotate: [0, 360], 
                    scale: [1, 1.05, 1] 
                }}
                transition={{ 
                    rotate: { duration: 40, ease: "linear", repeat: Infinity },
                    scale: { duration: 8, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }
                }}
            />
            
            <div className="neo-container">
                <motion.div className="title-container" variants={titleVariants}>
                    <div className="icon-trail">
                        {/* <PiStackDuotone className="title-icon" />
                        <TbBulb className="title-icon" />
                        <TbWorldSearch className="title-icon" /> */}
                    </div>
                    <h2 className="neo-section-title">Experience Journey</h2>
                </motion.div>
                
                <div className="experience-hexagon-grid">
                    {experiences.map((exp, index) => {
                        const isEven = index % 2 === 0;
                        const isVisible = visibleElements.includes(String(index));
                        
                        return (
                            <motion.div
                                key={exp.company}
                                ref={el => cardsRef.current[index] = el}
                                data-index={index}
                                className={`hexagon-card ${expandedCard === index ? 'expanded' : ''}`}
                                style={{
                                    '--card-color': exp.color,
                                }}
                                initial={{ opacity: 0, y: 50 }}
                                animate={isVisible ? { 
                                    opacity: 1, 
                                    y: 0,
                                    transition: { duration: 0.7, ease: "backOut" }
                                } : {}}
                                onClick={() => toggleExpand(index)}
                            >
                                <div className="card-pulse" style={{ backgroundColor: exp.color }} />
                                
                                <div className="card-content">
                                    <div className="icon-cluster">
                                        <exp.MainIcon className="main-icon" />
                                        <exp.SecIcon className="secondary-icon" />
                                    </div>
                                    
                                    <div className="card-header">
                                        <span className="time-period">{exp.period}</span>
                                        <h3 className="company-title">{exp.company}</h3>
                                        <div className="role-tag">
                                            <TbCircleCheckFilled className="role-icon" />
                                            <span>{exp.role}</span>
                                        </div>
                                    </div>
                                    
                                    <AnimatePresence>
                                        {expandedCard === index && (
                                            <motion.div 
                                                className="expandable-details"
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                            >
                                                <p className="exp-description">{exp.description}</p>
                                                
                                                <a 
                                                    href={exp.link} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="neo-link"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <span>{exp.name}</span>
                                                    <TbArrowBigRightLinesFilled className="link-icon" />
                                                </a>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                    
                                    {expandedCard !== index && (
                                        <div className="card-teaser">
                                            <p>{exp.description.split('\n')[0].substring(0, 70)}...</p>
                                        </div>
                                    )}
                                </div>
                                
                                <div className="card-indicator">
                                    <motion.div 
                                        className="indicator-dot"
                                        animate={{ 
                                            scale: [1, 1.2, 1],
                                            opacity: [0.7, 1, 0.7]
                                        }}
                                        transition={{ 
                                            duration: 2,
                                            repeat: Infinity,
                                            repeatType: "reverse"
                                        }}
                                    />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </motion.section>
    );
};

export default Experience;