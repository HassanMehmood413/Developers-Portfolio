'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { FaBriefcase, FaCalendar, FaChevronDown, FaChevronUp, FaStar, FaCode } from 'react-icons/fa';
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
            color: "#4A90E2"
        },
        {
            company: "Lablab.ai",
            role: "Hackathon Participant",
            period: "Multiple events (2024 - Present)",
            description: "At Lablab.ai hackathons, I've had the opportunity to work on cutting-edge AI projects, collaborating with diverse international teams to solve real-world problems using the latest in artificial intelligence and machine learning.",
            name: 'Check my Lablab.ai Profile',
            link: 'https://lablab.ai/u/@hassan_mehmood517',
            color: "#FF6B6B"
        },
        {
            "company": "Major League Hacking (MLH)",
            "role": "Hackathon Participant",
            "period": "October 2024 - Present",
            "description": "An incredible experience participating in a hackathon organized by Major League Hacking (MLH), one of the most prestigious and well-known hackathon organizations. Our team consists of four international members collaborating on an innovative STEM project. We are leveraging cutting-edge technologies to develop a solution that addresses real-world challenges, emphasizing creativity, teamwork, and technical excellence.",
            "name": "Click here to learn more:",
            "link": "https://www.linkedin.com/posts/hassan-mehmood-01a3a9247_%F0%9D%90%80-%F0%9D%90%A9%F0%9D%90%A5%F0%9D%90%9A%F0%9D%90%AD%F0%9D%90%9F%F0%9D%90%A8%F0%9D%90%AB%F0%9D%90%A6-%F0%9D%90%B0%F0%9D%90%A1%F0%9D%90%9E%F0%9D%90%AB%F0%9D%90%9E-%F0%9D%90%B2%F0%9D%90%A8%F0%9D%90%AE-%F0%9D%90%9C%F0%9D%90%9A%F0%9D%90%A7-activity-7261246314443636736-dsMJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD0autYBDWMLUgrU35ZTKZlWjbKtYVD0RLw",
            "color": "#50E3C2"
        },
    ];

    const [expandedIndex, setExpandedIndex] = useState(null);
    const [isInView, setIsInView] = useState(false);
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    // Directly use the experiences array since filtering is removed
    const displayedExperiences = experiences;

    return (
        <motion.section
            ref={sectionRef}
            className="experience-section"
            style={{ opacity, scale }}
        >
            <div className="container" id='Experience'>
                <h2 className="section-title">Professional Experience</h2>
                {/* Removed the search bar */}
                <div className="experience-grid">
                    <AnimatePresence>
                        {displayedExperiences.map((exp, index) => (
                            <motion.div
                                key={exp.company}
                                className="experience-card"
                                initial={{ opacity: 0, y: 50 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                exit={{ opacity: 0, y: -50 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                style={{
                                    '--card-color': exp.color,
                                    '--card-color-light': `${exp.color}22`
                                }}
                            >
                                <div className="card-header">
                                    {exp.logo && (
                                        <img src={exp.logo || "/placeholder.svg"} alt={`${exp.company} logo`} className="company-logo" />
                                    )}
                                    <h3 className="company-name">{exp.company}</h3>
                                    <h4 className="role-title">{exp.role}</h4>
                                    <p className="period">
                                        <FaCalendar className="icon" /> {exp.period}
                                    </p>
                                </div>
                                <p className="description">{exp.description}</p>
                                <motion.div
                                    className="expandable-content"
                                    initial={false}
                                    animate={{ height: expandedIndex === index ? 'auto' : 0 }}
                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                >
                                    <div className="technologies">
                                        <h5 className="flex items-center text-lg font-semibold text-gray-800">
                                            <FaCode className="section-icon mr-2 text-blue-600" /> {exp.name}
                                        </h5>
                                        <div className="tech-tags mt-2">
                                            <a
                                                href={exp.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-block px-4 py-2 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                                            >
                                                Check Here
                                            </a>
                                        </div>
                                    </div>

                                </motion.div>
                                <button className="expand-button" onClick={() => toggleExpand(index)}>
                                    {expandedIndex === index ? (
                                        <>
                                            <FaChevronUp className="icon" /> Show Less
                                        </>
                                    ) : (
                                        <>
                                            <FaChevronDown className="icon" /> Show More
                                        </>
                                    )}
                                </button>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </motion.section>
    );
};

export default Experience;
