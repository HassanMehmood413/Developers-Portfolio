'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Education.css';

const Education = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.querySelector('.education-universe');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  // Particle animation effect for active card
  useEffect(() => {
    if (!isVisible) return;

    const activeCard = cardRefs.current[activeIndex];
    if (!activeCard) return;

    const createParticle = () => {
      if (!activeCard) return;

      const particle = document.createElement('div');
      particle.classList.add('edu-particle');

      // Random position, size and color
      const size = Math.random() * 10 + 2;
      const xPos = Math.random() * activeCard.offsetWidth;
      const yPos = Math.random() * activeCard.offsetHeight;
      const duration = Math.random() * 2 + 1;
      const delay = Math.random() * 0.5;

      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${xPos}px`;
      particle.style.bottom = `${yPos}px`;
      particle.style.opacity = Math.random() * 0.6 + 0.2;
      particle.style.animationDuration = `${duration}s`;
      particle.style.animationDelay = `${delay}s`;

      activeCard.appendChild(particle);

      setTimeout(() => {
        if (particle.parentNode === activeCard) {
          activeCard.removeChild(particle);
        }
      }, (duration + delay) * 1000);
    };

    const particleInterval = setInterval(createParticle, 300);

    return () => clearInterval(particleInterval);
  }, [activeIndex, isVisible]);

  const educationData = [
    {
      id: 1,
      emoji: "🎓",
      degree: "Bachelor of Science in Software Engineering",
      institution: "University Of Agriculture Faisalabad",
      location: "📍 Faisalabad",
      period: "🗓️ 2023 - 2027",
      description: "Pursuing a Bachelor's degree in Software Engineering from University of Agriculture Faisalabad. Enhancing my skills in Agentic AI, AI/ML and Data Structures And Algorithms.",
      color: "#4361EE",
      achievements: ["Dean's List for Academic Excellence", "Lead Developer for University Hackathon", "AI Research Assistant"],
      skills: ["Machine Learning", "Deep Learning", "Data Structures", "Algorithm Design","Agentic AI Development", "Full Stack Development"]
    },
    {
      id: 2,
      emoji: "🔬",
      degree: "ICS",
      institution: "Punjab College Raiwand",
      location: "📍 Raiwand",
      period: "🗓️ 2021 - 2023",
      description: "Successfully completed my ICS with over 95% grades, building a strong foundation in core subjects while enhancing my collaboration skills with societies and the environment.",
      color: "#3A0CA3",
      achievements: ["Top of Class", "Science Olympiad Winner", "Math Club President"],
      skills: ["Physics", "Mathematics", "Computer Science", "Critical Thinking", "Problem Solving"]
    },
    {
      id: 3,
      emoji: "📚",
      degree: "Matriculation",
      institution: "Government High School No 01",
      location: "📍 Kot Radha Kishen, Kasur",
      period: "🗓️ 2019 - 2021",
      description: "Completed my matriculation with an excellent academic record, developing a strong foundation in core subjects and enhancing my critical thinking skills.",
      color: "#F72585",
      achievements: ["School Prefect", "Science Fair Winner", "Debate Champion"],
      skills: ["Communication", "Basic Programming", "Leadership", "Teamwork"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const emojiVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.2
      }
    },
    hover: {
      scale: 1.2,
      rotate: 15,
      transition: { duration: 0.3 }
    }
  };

  const slideVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
    exit: { x: -100, opacity: 0, transition: { duration: 0.5 } }
  };

  const skillVariants = {
    hidden: { scale: 0 },
    visible: custom => ({
      scale: 1,
      transition: {
        delay: custom * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    })
  };

  const achievementVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: custom => ({
      opacity: 1,
      x: 0,
      transition: { delay: custom * 0.15, duration: 0.5 }
    })
  };


  const titleVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="education-universe">
      <div className="edu-stars"></div>
      <div className="edu-shooting-star"></div>
      <div className="edu-shooting-star delayed"></div>

      <motion.div
        className="edu-header"
        initial={{ opacity: 0, y: -50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.6 }}
      >
        <div className="edu-title-wrapper">

          <motion.div className="title-container" variants={titleVariants}>
            <div className="icon-trail">
              {/* <PiStackDuotone className="title-icon" />
                                  <TbBulb className="title-icon" />
                                  <TbWorldSearch className="title-icon" /> */}
              <h2 style={{color: 'white'}} className="neo-section-title">Educational Journey</h2>
            </div>
            {/* <h2 className="neo-section-title">Experience Journey</h2> */}
          </motion.div>
        </div>
        <p className="edu-subheading">Navigating the cosmos of knowledge and academic discovery</p>
      </motion.div>

      <div className="edu-galaxy">
        <motion.div
          className="edu-orbit"
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              className={`edu-planet ${activeIndex === index ? 'active' : ''}`}
              style={{
                '--planet-color': edu.color,
                '--glow-color': `${edu.color}80`
              }}
              onClick={() => setActiveIndex(index)}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="edu-planet-emoji"
                initial="hidden"
                animate="visible"
                variants={emojiVariants}
              >
                {edu.emoji}
              </motion.span>
              <span className="edu-planet-name">{edu.degree}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="edu-showcase"
          initial={{ opacity: 0, x: 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className="edu-hologram"
              ref={el => {
                if (el && !cardRefs.current.includes(el)) {
                  cardRefs.current[activeIndex] = el;
                }
              }}
              style={{ '--hologram-color': educationData[activeIndex].color }}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={slideVariants}
            >
              <div className="edu-hologram-beam"></div>
              <div className="edu-hologram-header">
                <motion.span
                  className="edu-big-emoji"
                  variants={emojiVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                >
                  {educationData[activeIndex].emoji}
                </motion.span>
                <div>
                  <h3 className="edu-degree-title">{educationData[activeIndex].degree}</h3>
                  <div className="edu-institution-name">{educationData[activeIndex].institution}</div>
                </div>
              </div>

              <div className="edu-hologram-body">
                <div className="edu-meta-info">
                  <div className="edu-meta-item">
                    {educationData[activeIndex].location}
                  </div>
                  <div className="edu-meta-item">
                    {educationData[activeIndex].period}
                  </div>
                </div>

                <div className="edu-narrative">
                  {educationData[activeIndex].description}
                </div>

                <div className="edu-achievements">
                  <h4>🏆 Achievements</h4>
                  <ul className="edu-achievement-list">
                    {educationData[activeIndex].achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        custom={i}
                        variants={achievementVariants}
                        initial="hidden"
                        animate="visible"
                        className="edu-achievement-item"
                      >
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="edu-skills">
                  <h4>⚡ Skills Developed</h4>
                  <div className="edu-skill-cloud">
                    {educationData[activeIndex].skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        custom={i}
                        variants={skillVariants}
                        initial="hidden"
                        animate="visible"
                        className="edu-skill-tag"
                        style={{
                          backgroundColor: `${educationData[activeIndex].color}30`,
                          borderColor: `${educationData[activeIndex].color}80`
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="edu-hologram-rings">
                <div className="edu-ring"></div>
                <div className="edu-ring delay-1"></div>
                <div className="edu-ring delay-2"></div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;