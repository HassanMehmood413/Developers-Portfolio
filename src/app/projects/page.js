'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FiCode, FiExternalLink, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useTheme } from 'next-themes';
import Portfolio from '../images/portfolio.png';
import spot from '../images/spot.png';
import article from '../images/article.jpg';
import Feelbetter from '../images/feelbetter.png';
import malama from "../images/malama.png";
import spotify from "../images/spotify.png";
import '@/app/styles/project.css';

const Projects = () => {
    const [modalContent, setModalContent] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const { theme, setTheme } = useTheme();
    const projectsRef = useRef(null);
    const isInView = useInView(projectsRef, { once: true });

    const openModal = (project, index) => {
        setModalContent(project);
        setCurrentIndex(index);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'unset';
    };

    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
        setModalContent(projects[(currentIndex + 1) % projects.length]);
    };

    const prevProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
        setModalContent(projects[(currentIndex - 1 + projects.length) % projects.length]);
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') closeModal();
            if (event.key === 'ArrowRight') nextProject();
            if (event.key === 'ArrowLeft') prevProject();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [closeModal, nextProject, prevProject]); // Added dependencies

    const projects = [
        {
            id: 'portfolio',
            image: Portfolio,
            title: 'Portfolio',
            description: 'My personal portfolio showcasing my skills and projects.',
            technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Next.js'],
            modalDescription: 'This is my portfolio which I have built using HTML, CSS, Bootstrap, JavaScript, and Next.js. It showcases my skills, projects, and experiences in web development.',
            codeLink: 'https://github.com/yourusername/portfolio',
            liveLink: 'https://yourportfolio.com',
            features: ['Responsive design', 'Dark mode', 'Project showcase', 'Contact form'],
            challenges: 'Implementing a seamless dark mode transition and ensuring cross-browser compatibility.',
            lessons: 'Improved my skills in Next.js and learned about advanced CSS techniques for creating engaging user interfaces.'
        },
        {
            id: 'blog',
            image: spot,
            title: 'Blog Website',
            description: 'A blog platform for sharing the latest news and articles.',
            technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
            modalDescription: 'My blog website where you can get the latest blogs and news about different fields. I built this blog while learning web development, using HTML, CSS, JavaScript, and Bootstrap.',
            codeLink: 'https://github.com/yourusername/blog-website',
            liveLink: 'https://yourblogwebsite.com',
            features: ['Responsive layout', 'Category filtering', 'Search functionality', 'Comment system'],
            challenges: 'Implementing a robust comment system and optimizing image loading for faster page speeds.',
            lessons: 'Gained experience in building interactive web applications and improved my understanding of web performance optimization.'
        },
        {
            id: 'spotify',
            image: spotify,
            title: 'Spotify Clone',
            description: 'A Spotify-inspired music player with a sleek interface.',
            technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
            modalDescription: 'This is a Spotify Clone Website that I have made using HTML, CSS, Bootstrap, and JavaScript. I built this website to practice my web development skills, incorporating animations, transitions, and a beautiful UI.',
            codeLink: 'https://github.com/yourusername/spotify-clone',
            liveLink: 'https://yourspotifyclone.com',
            features: ['Music playback', 'Playlist management', 'User authentication', 'Responsive design'],
            challenges: 'Implementing the audio player functionality and syncing it with the user interface.',
            lessons: 'Deepened my understanding of working with audio in web applications and improved my skills in creating complex user interfaces.'
        },
        {
            id: 'articlesift',
            image: article,
            title: 'ArticleSift',
            description: 'An AI-powered article analysis and audio generation tool.',
            technologies: ['Llama 3.1', 'Google API', 'Streamlit', 'Language Translator'],
            modalDescription: 'ArticleSift is a Streamlit application designed to help users fetch news articles, ask questions about them, and listen to audio versions of the content. It supports multiple languages and includes custom styling to enhance user experience.',
            codeLink: 'https://github.com/yourusername/articlesift',
            liveLink: 'https://articlesift.streamlit.app',
            features: ['Article fetching', 'AI-powered Q&A', 'Multi-language support', 'Text-to-speech conversion'],
            challenges: 'Integrating multiple APIs and ensuring smooth functionality across different languages.',
            lessons: 'Gained valuable experience in working with AI models and improved my skills in building data-driven web applications.'
        },
        {
            id: 'techjobs',
            image: Feelbetter,
            title: 'Tech Jobs Recommender',
            description: 'AI-powered job recommendations and search platform.',
            technologies: ['Llama 3.1', 'AI/ML API', 'Google API', 'CSV', 'Streamlit', 'Pandas'],
            modalDescription: 'This Streamlit app provides job recommendations based on job titles, job description summarization using LLaMA, translation of job descriptions, and job search functionality via Google Custom Search API.',
            codeLink: 'https://github.com/yourusername/tech-jobs-recommender',
            liveLink: 'https://techjobsrecommender.streamlit.app',
            features: ['Job recommendations', 'Description summarization', 'Multi-language support', 'Custom job search'],
            challenges: 'Developing accurate recommendation algorithms and handling large datasets efficiently.',
            lessons: 'Improved my skills in data analysis and machine learning, and learned about building recommendation systems.'
        },
        {
            id: 'techease',
            image: malama,
            title: 'Tech Ease',
            description: 'AI assistant for solving tech and mobile device issues.',
            technologies: ['Granite Model', 'IBM Watsonax API', 'Streamlit', 'Google API', 'Summarizer'],
            modalDescription: 'Tech Ease is a Streamlit application designed to assist users with solutions for electronic device and mobile phone issues. By inputting a description of their problem, users receive AI-generated solutions.',
            codeLink: 'https://github.com/yourusername/tech-ease',
            liveLink: 'https://techease.streamlit.app',
            features: ['AI-powered problem solving', 'Multi-language support', 'Solution summarization', 'Related article search'],
            challenges: 'Ensuring accurate and helpful AI-generated solutions and integrating multiple APIs seamlessly.',
            lessons: 'Gained experience in working with advanced AI models and improved my skills in creating user-friendly interfaces for complex applications.'
        },
    ];

    return (
        <section className="projects" id="projects" ref={projectsRef}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h2 className="section-title">PROJECTS</h2>
                    <div className="section-underline"></div>
                    <p className="section-description">
                        Here you will find some of the personal projects that I created during my front-end journey
                    </p>
                    <Link href="/projects" className="view-all-button">
                        View All
                    </Link>
                </motion.div>
                <div className="project-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="project-card"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}
                            onClick={() => openModal(project, index)}
                        >
                            <div className="project-image">
                                <Image src={project.image || "/placeholder.svg"} alt={project.title} layout="fill" objectFit="cover" />
                            </div>
                            <div className="project-overlay">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-technologies">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <AnimatePresence>
                {isModalOpen && modalContent && (
                    <motion.div
                        className="modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                    >
                        <motion.div
                            className="modal-content"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 50, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="close-button" onClick={closeModal}>
                                <FiX />
                            </button>
                            <div className="modal-image-container">
                                <Image src={modalContent.image || "/placeholder.svg"} alt={modalContent.title} layout="fill" objectFit="cover" />
                                <button className="nav-button prev" onClick={prevProject}>
                                    <FiChevronLeft />
                                </button>
                                <button className="nav-button next" onClick={nextProject}>
                                    <FiChevronRight />
                                </button>
                            </div>
                            <div className="modal-content-scroll">
                                <h2>{modalContent.title}</h2>
                                <p className="modal-description">{modalContent.modalDescription}</p>
                                <div className="modal-section">
                                    <h3>Technologies Used</h3>
                                    <div className="modal-technologies">
                                        {modalContent.technologies.map((tech, index) => (
                                            <span key={index} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="modal-section">
                                    <h3>Key Features</h3>
                                    <ul className="feature-list">
                                        {modalContent.features.map((feature, index) => (
                                            <li key={index}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="modal-section">
                                    <h3>Challenges</h3>
                                    <p>{modalContent.challenges}</p>
                                </div>
                                <div className="modal-section">
                                    <h3>Lessons Learned</h3>
                                    <p>{modalContent.lessons}</p>
                                </div>
                                <div className="modal-actions">
                                    <a href={modalContent.codeLink} className="action-button" target="_blank" rel="noopener noreferrer">
                                        <FiCode /> View Code
                                    </a>
                                    <a href={modalContent.liveLink} className="action-button" target="_blank" rel="noopener noreferrer">
                                        <FiExternalLink /> View Live
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
