'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FiCode, FiExternalLink, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useTheme } from 'next-themes';
import Portfolio from '../images/portfolio.png';
import spot from '../images/spot.png';
import Feelbetter from '../images/feel.png';

import malama from "../images/malama.png";
import spotify from "../images/spotify.png";
import aipost from '../images/ai_post.png'
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
            title: 'Personal Portfolio Website',
            description: 'A sleek and interactive portfolio website showcasing my skills, projects, and experiences as a web developer.',
            technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Next.js'],
            modalDescription: 'This portfolio is a fully responsive and modern web application designed to present my expertise in web development. It includes a detailed showcase of my projects, an about-me section, and an interactive contact form. Built with Next.js for optimized performance, the website leverages Bootstrap for styling and JavaScript for interactive elements.',
            codeLink: 'https://github.com/HassanMehmood413/NextJS_14_Port',
            liveLink: 'https://hassanmehmood0.vercel.app/',
            features: [
                'Fully responsive design for seamless viewing on all devices',
                'Dedicated project showcase with live previews and source code links',
                'Interactive contact form with validation and email integration',
                'Optimized performance with Next.js features like dynamic routing and image optimization'
            ],
            challenges: 'One of the main challenges was implementing a smooth and visually appealing transition while ensuring it worked consistently across different browsers and devices. Additionally, optimizing performance and maintaining a clean, modular codebase in Next.js required strategic planning.',
            lessons: 'Through this project, I deepened my understanding of Next.js and its features, such as server-side rendering (SSR) and static site generation (SSG). I also improved my skills in advanced CSS techniques, including animations and theme toggling, to create an engaging user experience. Moreover, I learned best practices for structuring a scalable and maintainable web application.'
        },
        {
            id: 'blog',
            image: spot,
            title: 'SPOT CONNECT',
            description: 'An AI-powered platform for real-time network issue reporting and live updates.',
            technologies: ['Next.js', 'FastAPI', 'PostgreSQL', 'SerperAPI', 'IPINFO'],
            modalDescription: 'SpotConnect enables users to report network issues like slow speeds and outages in real time. Using AI and geolocation, it alerts ISPs, local authorities, and technical teams for faster resolution. Users also receive live updates on connectivity in their area.',
            codeLink: 'https://github.com/HassanMehmood413/SPOT-CONNECT',
            liveLink: 'https://yourblogwebsite.com',
            features: [
                'Real-time issue reporting',
                'AI-driven analytics',
                'Geolocation-based alerts',
                'Live network updates',
                'User-friendly interface'
            ],
            challenges: 'Ensuring accurate geolocation tracking and optimizing data retrieval speed.',
            lessons: 'Enhanced my skills in AI-driven solutions, real-time data handling, and full-stack optimization.'
        },
        {
            id: 'spotify',
            image: spotify,
            title: 'Spotify Clone',
            description: 'A sleek, responsive music player inspired by Spotify.',
            technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
            modalDescription: 'A Spotify-inspired music player built with HTML, CSS, Bootstrap, and JavaScript. It features smooth animations, transitions, and a user-friendly interface for an immersive experience.',
            codeLink: 'https://github.com/HassanMehmood413/Spotify_Clone_2024-June-',
            liveLink: 'https://yourspotifyclone.com',
            features: [
                'Music playback',
                'Playlist management',
                'Responsive design'
            ],
            challenges: 'Syncing the audio player with the UI and ensuring smooth transitions.',
            lessons: 'Improved my skills in audio integration, UI/UX design, and interactive web development.'
        },
        {
            id: 'articlesift',
            image: aipost,
            title: 'AI Post Creator',
            description: 'AI-powered analysis, content generation, and audio conversion using Crew AI.',
            technologies: ['Serper API', 'Streamlit', 'Browserless API', 'Crew AI', 'Multi-Agent System'],
            modalDescription: 'AI Post Creator is a Streamlit-powered application that uses Agentic Workflow (Crew AI) to make users posts by asking the targeted audiance, platform, tone of the posts and many other things. Furthurmore , user can also check whether the provided news is fake or not.',
            codeLink: 'https://github.com/yourusername/articlesift',
            liveLink: 'https://ai-post-creator2-btaji.streamlit.app/',
            features: [
                'Tell the Topic, Target audiance, Platform and many other things. We will create your post :)',
                'User can also change the tone, length of posts and also can include emojis if he want to',
                'Automated content generation with Crew AI',
                'Fact-checking with AI agents',
                'For more accurate information, user can also check if the news or information is fake or not'
            ],
            challenges: 'Integrating Crew AIs multi-agent framework while ensuring accurate and efficient content validation.',
            lessons: 'Learned to implement Crew AI for multi-agent automation, improving AI-driven content workflows and accuracy in fact-checking.'
        },
        {
            id: 'feelbetter',
            image: Feelbetter,
            title: 'FeelBetter Buddy',
            description: 'AI-powered emotional analysis for text, emails, articles, and audio.',
            technologies: [
                'Streamlit', 'Pandas', 'NumPy', 'Google API', 'Together API',
                'ML', 'SoundDevice', 'Streamlit Mic Recorder'
            ],
            modalDescription: 'FeelBetter Buddy is a web app that analyzes emotional tone in text, emails, articles, and speech. Using AI models, it provides insights into emotional context and generates empathetic responses, enhancing communication understanding.',
            codeLink: 'https://github.com/yourusername/feelbetter-buddy',
            liveLink: 'https://aiemotions.streamlit.app/',
            features: [
                'Text & email emotion analysis',
                'Article content extraction & analysis',
                'Google search integration',
                'AI-driven emotional insights',
                'Audio emotion detection',
                'Interactive visualizations',
                'Downloadable results'
            ],
            challenges: 'Optimizing AI models for real-time emotional analysis and ensuring accurate multilingual support.',
            lessons: 'Enhanced my knowledge in AI-driven sentiment analysis, web scraping, and interactive data visualization.'
        },
        {
            id: 'malama-ai',
            image: malama,
            title: 'Malama AI',
            description: 'AI-powered skin disease recognition using advanced machine learning models.',
            technologies: [
                'LLM 3.370b', 'Dinov2', 'Next.js', 'Flask',
                'Tailwind CSS', 'PostgreSQL'
            ],
            modalDescription: 'Malama AI is a machine learning-powered application for recognizing various skin diseases. Built with Next.js for an interactive frontend and Flask for a scalable backend, it leverages the LLM 3.370b model fine-tuned on Dinov2 for improved accuracy.',
            codeLink: 'https://github.com/HassanMehmood413/MalamaAI',
            liveLink: 'https://malama-ai.streamlit.app',
            features: [
                'AI-powered disease recognition',
                'Interactive Next.js frontend',
                'Scalable Flask backend',
                'Enhanced accuracy with LLM 3.370b and Dinov2'
            ],
            challenges: 'Optimizing the models accuracy and ensuring seamless integration between the frontend and backend.',
            lessons: 'Gained experience in AI model deployment, full-stack development, and optimizing ML models for real-world applications.'
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
                                <Image
                                    src={project.image || "/placeholder.svg"}
                                    alt={project.title}
                                    fill
                                    style={{ objectFit: "cover" }}
                                />                            </div>
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
                                <Image
                                    src={modalContent.image || "/placeholder.svg"}
                                    alt={modalContent.title}
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
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
