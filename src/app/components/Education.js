'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGraduationCap, FaCalendar, FaMapMarkerAlt, FaCertificate, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import '@/app/styles/Education.css';

const Education = () => {
    const [expandedId, setExpandedId] = useState(null);

    const educationData = [
        {
            id: 1,
            degree: "Bachelor of Science in Software Engineering",
            institution: "University Of Agriculture Faisalabad",
            location: "Faisalabad",
            period: "2023 - 2027",
            description:"Pursuing a Bachelor's degree in Software Engineering from University of Agriculture Faisalabad. Enhancing my skills in Agentic AI, AI/ML and Data Structures And Algorithms."
        },
        {
            id: 2,
            degree: "ICS",
            institution: "Punjab College Raiwand",
            location: "Raiwand",
            period: "2021 - 2013",
            description: "Successfully completed my ICS with over 95% grades, building a strong foundation in core subjects while enhancing my collaboration skills with societies and the environment."
        },
        {
            id: 3,
            degree: "Matriculation",
            institution: "Government High School No 01",
            location: "Kot Radha Kishen, Kasur",
            period: "2019 - 2021",
            description: "Completed my matriculation with a excellent academic record, developing a strong foundation in core subjects and enhancing my critical thinking skills."
        }
    ];

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <section className="education-section">
            <div className="container">
                <h2 className="section-title">
                    <FaGraduationCap className="title-icon" />
                    Educational Journey
                </h2>
                <div className="timeline">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={edu.id}
                            className="timeline-item"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className="timeline-content">
                                <h3 className="degree">{edu.degree}</h3>
                                <h4 className="institution">{edu.institution}</h4>
                                <p className="info">
                                    <FaMapMarkerAlt className="icon" /> {edu.location}
                                </p>
                                <p className="info">
                                    <FaCalendar className="icon" /> {edu.period}
                                </p>
                                <p className="description">{edu.description}</p>
                                {/* <button className="expand-button" onClick={() => toggleExpand(edu.id)}>
                                    {expandedId === edu.id ? (
                                        <>
                                            <FaChevronUp className="icon" /> Show Less
                                        </>
                                    ) : (
                                        <>
                                            <FaChevronDown className="icon" /> Show More
                                        </>
                                    )}
                                </button> */}
                                <AnimatePresence>
                                    {expandedId === edu.id && (
                                        <motion.div
                                            className="expanded-content"
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="achievements">
                                                <h5><FaCertificate className="icon" /> Achievements</h5>
                                                <ul>
                                                    {edu.achievements.map((achievement, i) => (
                                                        <motion.li
                                                            key={i}
                                                            initial={{ opacity: 0, x: -20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: i * 0.1 }}
                                                        >
                                                            {achievement}
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="courses">
                                                <h5><FaGraduationCap className="icon" /> Key Courses</h5>
                                                <div className="course-tags">
                                                    {edu.courses.map((course, i) => (
                                                        <motion.span
                                                            key={i}
                                                            className="course-tag"
                                                            initial={{ opacity: 0, scale: 0 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            transition={{ delay: i * 0.05 }}
                                                        >
                                                            {course}
                                                        </motion.span>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
