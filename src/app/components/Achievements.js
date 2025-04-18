"use client";

import React, { useState, useEffect } from "react";
import '../styles/achievements.css';
import Image from "next/image";
import { motion, AnimatePresence } from 'framer-motion';

const Achievements = () => {
    const [activeAchievement, setActiveAchievement] = useState(0);

    // Sample achievements data - replace with your actual achievements
    const achievements = [
        {
            id: 1,
            title: "Selected as Section Leader",
            organization: "Stanford University",
            year: "2025",
            location: "California, USA",
            description:
                "Handpicked from thousands of applicants to serve as a Section Leader for Stanford's Code In Place 2025. Responsible for teaching Python fundamentals—including Karel the Robot, Console Programming, and Graphics—to a global cohort of students from over 350 cities. Provided mentorship, code reviews, and weekly interactive sessions to help beginners build strong foundations in programming.",
            icon: "https://cdnjs.cloudflare.com/ajax/libs/ionicons/7.2.2/svg/leaf-outline.svg",
            icon: "https://cdnjs.cloudflare.com/ajax/libs/ionicons/7.2.2/svg/school-outline.svg",

            link: "https://www.linkedin.com/posts/hassan-mehmood413_stanfordcip2025-sectionleader-teachingcode-activity-7316630528353275904-CvE3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD0autYBDWMLUgrU35ZTKZlWjbKtYVD0RLw" // Add link URL here
        },
        {
            id: 2,
            title: "CS50x Puzzle Day Winner",
            organization: "Harvard University",
            year: "2025",
            location: "Cambridge, USA",
            description:
                "Led a high-performing team to victory at Harvard's CS50x Puzzle Day 2025. Successfully solved all 9 out of 9 intellectually challenging puzzles involving logic, cryptography, and algorithmic thinking, securing 1st place among hundreds of international participants.",
            icon: "https://cdnjs.cloudflare.com/ajax/libs/ionicons/7.2.2/svg/trophy-outline.svg",
            link: "https://www.linkedin.com/posts/hassan-mehmood413_cs50-harvardcs50-cs50puzzleday-activity-7314830520243118080-fo_q?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD0autYBDWMLUgrU35ZTKZlWjbKtYVD0RLw" // Add link URL here
        },
        {
            id: 3,
            title: "Advent of Code 2024 All-Stars",
            organization: "Advent of Code (by Eric Wastl)",
            year: "2024",
            location: "Global (Cambridge, UK)",
            description:
                "Achieved all 50 stars in the prestigious Advent of Code 2024 challenge by completing 25 days of increasingly complex programming puzzles. Demonstrated advanced problem-solving, algorithm design, and daily dedication during the month-long event.",
            icon: "https://cdnjs.cloudflare.com/ajax/libs/ionicons/7.2.2/svg/leaf-outline.svg",
            link: "https://www.linkedin.com/posts/hassan-mehmood413_%F0%9D%90%92%F0%9D%90%9A%F0%9D%90%A7%F0%9D%90%AD%F0%9D%90%9A%F0%9D%90%AC-%F0%9D%90%AC%F0%9D%90%A5%F0%9D%90%9E%F0%9D%90%A2%F0%9D%90%A0%F0%9D%90%A1-%F0%9D%90%AB%F0%9D%90%AE%F0%9D%90%A7%F0%9D%90%AC-%F0%9D%90%A8%F0%9D%90%A7-activity-7277562105355005952-a0gl?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD0autYBDWMLUgrU35ZTKZlWjbKtYVD0RLw" // Add link URL here
        },
        {
            id: 4,
            title: "Hackathon Enthusiast & Winner",
            organization: "Lablab.ai, MLH, Devpost",
            year: "2024 - Present",
            location: "Global",
            description:
                "Actively participated in 16+ hackathons hosted by top platforms like MLH, Lablab.ai, and Devpost. Developed innovative solutions to real-world problems across domains like AI, health tech, and productivity. Recognized with multiple awards and shoutouts for impactful ideas and team leadership.",
            icon: "https://cdnjs.cloudflare.com/ajax/libs/ionicons/7.2.2/svg/mic-outline.svg",
            link: "https://lablab.ai/u/@hassan_mehmood517" // Add link URL here
        },
        {
            id: 5,
            title: "550+ Leetcode Problem Solver",
            organization: "Leetcode",
            year: "2024 - Present",
            location: "Global",
            description:
                "Solved over 550 problems on Leetcode with consistent daily practice and deep focus on data structures and algorithms. Maintained high accuracy while mastering a broad range of topics, including DP, trees, graphs, and greedy algorithms.",
            icon: "https://cdnjs.cloudflare.com/ajax/libs/ionicons/7.2.2/svg/planet-outline.svg",
            link: "https://leetcode.com/u/Hassan_Leigons/" // Add link URL here
        },
        {
            id: 6,
            title: "Meta Hacker Cup - Round 1 Qualifier",
            organization: "Meta",
            year: "2024",
            location: "Global",
            description:
                "Successfully advanced to Round 1 of the prestigious Meta Hacker Cup 2024. An international programming competition organized by Meta (Facebook). Competed against thousands of skilled developers worldwide in Round 0, solving challenging algorithmic problems under strict time constraints. ",
            icon: "https://cdnjs.cloudflare.com/ajax/libs/ionicons/7.2.2/svg/trophy-outline.svg",
            link: "https://metahackercup.devpost.com/"
        }

    ];

    // Auto-rotate achievements
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveAchievement((prev) => (prev + 1) % achievements.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [achievements.length]);

    const titleVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    // Handler for the "More Information" button click
    const handleMoreInfoClick = (e, link) => {
        e.stopPropagation(); // Prevent card click event
        window.open(link, '_blank', 'noopener,noreferrer');
    };

    return (
        <section className="achievements-section">
            <div className="achievements-background">
                <div className="achievements-stars"></div>
                <div className="achievements-twinkling"></div>
            </div>

            <div className="achievements-content">
                <motion.div className="title-container" variants={titleVariants}>
                    <div className="icon-trail">
                        <h2 style={{ color: 'white', fontSize: '3.7rem', display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center', textAlign: 'center' }} className="neo-section-title">International Achievements</h2>
                    </div>
                </motion.div>
                <div className="achievements-underline"></div>

                <div className="achievements-showcase">
                    <div className="achievements-globe">
                        <div className="globe-effect">
                            <div className="globe-circle"></div>
                            <div className="globe-circle"></div>
                            <div className="globe-circle"></div>
                        </div>
                    </div>

                    <div className="achievements-cards-container">
                        {achievements.map((achievement, index) => (
                            <div
                                key={achievement.id}
                                className={`achievement-card ${index === activeAchievement ? 'active' : ''}`}
                                onClick={() => setActiveAchievement(index)}
                            >
                                <div className="achievement-icon">
                                    <object
                                        data={achievement.icon}
                                        type="image/svg+xml"
                                        className="custom-icon"
                                        aria-label={`${achievement.title} icon`}
                                    >
                                        <img
                                            src="/api/placeholder/50/50"
                                            alt="Achievement icon"
                                            width={50}
                                            height={50}
                                        />
                                    </object>
                                </div>
                                <div className="achievement-content">
                                    <h3 className="achievement-title">{achievement.title}</h3>
                                    <div className="achievement-meta">
                                        <p className="achievement-organization">{achievement.organization}</p>
                                        <div className="achievement-details">
                                            <span className="achievement-year">{achievement.year}</span>
                                            <span className="achievement-location">{achievement.location}</span>
                                        </div>
                                    </div>
                                    <p className="achievement-description">{achievement.description}</p>

                                    {/* Enhanced More Info Button with Link */}
                                    <button
                                        onClick={(e) => handleMoreInfoClick(e, achievement.link)}
                                        className="more-info-button"
                                        aria-label={`More information about ${achievement.title}`}
                                    >
                                        More Information
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="button-icon">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                            <polyline points="15 3 21 3 21 9"></polyline>
                                            <line x1="10" y1="14" x2="21" y2="3"></line>
                                        </svg>
                                    </button>
                                </div>
                                <div className="achievement-glow"></div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="achievements-navigation">
                    {achievements.map((_, index) => (
                        <button
                            key={index}
                            className={`nav-dot ${index === activeAchievement ? 'active' : ''}`}
                            onClick={() => setActiveAchievement(index)}
                            aria-label={`View achievement ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            <div className="achievements-footer">
                <div className="achievements-cta">
                    <p>Get To Know More About Me</p>
                    <button
                        className="cta-button" onClick={() => window.open("https://www.linkedin.com/in/hassan-mehmood-01a3a9247/", '_blank', 'noopener,noreferrer')}
                    > Click Here
                </button>
            </div>
        </div>
        </section >
    );
};

export default Achievements;