'use client';

import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa';
import '@/app/styles/Skills.css';

const Skills = () => {
    const controls = useAnimation();

    const skillsData = [
        {
            category: "Frontend",
            icon: <FaCode />,
            skills: [
                { name: "React", level: 90 },
                { name: "Next.js", level: 85 },
                { name: "HTML5", level: 95 },
                { name: "CSS3", level: 90 },
                { name: "JavaScript", level: 95 },
                { name: "TypeScript", level: 85 },
            ]
        },
        {
            category: "Backend",
            icon: <FaServer />,
            skills: [
                { name: "Node.js", level: 85 },
                { name: "Python", level: 90 },
                { name: "Express.js", level: 80 },
                { name: "RESTful APIs", level: 85 },
                { name: "MongoDB", level: 85 },
                { name: "MySQL", level: 80 },
                { name: "PostgreSQL", level: 75 },
            ]
        },
        {
            category: "ML/DL",
            icon: <FaDatabase />,
            skills: [
                { name: "Numpy", level: 70 },
                { name: "Pandas", level: 70 },
                { name: "Seaborn", level: 70 },
                { name: "Matplotlib", level: 70 },
                { name: "Sickit-learn", level: 70 },
                { name: "Tensorflow", level: 70 },
                { name: "Keras", level: 70 },
                { name: "OpenCV", level: 70 },
            ]
        },
        {
            category: "DevOps & Tools",
            icon: <FaTools />,
            skills: [
                { name: "Git", level: 90 },
                { name: "Docker", level: 80 },
                { name: "AWS", level: 75 },
                { name: "CI/CD", level: 70 },
            ]
        },
    ];

    useEffect(() => {
        controls.start(i => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1 }
        }));
    }, [controls]);

    return (
        <section className="skills-section" id="skills">
            <div className="container">
                <h2 className="section-title">Technical Proficiencies</h2>
                <div className="skills-grid">
                    {skillsData.map((category, index) => (
                        <motion.div
                            key={category.category}
                            className="skill-category"
                            initial={{ opacity: 0, y: 20 }}
                            animate={controls}
                            custom={index}
                        >
                            <h3 className="category-title">
                                {category.icon}
                                {category.category}
                            </h3>
                            <div className="skills-list">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.name}
                                        className="skill-item"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: skillIndex * 0.1 }}
                                    >
                                        <div className="skill-info">
                                            <span className="skill-name">{skill.name}</span>
                                            <span className="skill-level">{skill.level}%</span>
                                        </div>
                                        <div className="skill-bar-bg">
                                            <motion.div
                                                className="skill-bar"
                                                initial={{ width: 0 }}
                                                animate={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1, ease: "easeInOut" }}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
