import { useEffect, useState } from 'react';
import Image from 'next/image';
import Portfolio from '../images/portfolio.png';
import news from '../images/Newspaper.jpg';
import dance from '../images/danceacademy.jpg';
import article from '../images/article.jpg';
import linkedinjob from '../images/Linkedinjobs.png';
import techease from "../images/techease.png";
import spotify from "../images/spotify.png"

import Link from 'next/link';

const Projects = () => {
    const [modalContent, setModalContent] = useState(null);

    useEffect(() => {
        const modal = document.getElementById('modal');
        const closeButton = document.getElementById('close');

        const closeModal = () => {
            modal.style.display = 'none'; // Close the modal
        };

        closeButton.onclick = closeModal;

        window.onclick = function (event) {
            if (event.target === modal) {
                closeModal(); // Close the modal if clicked outside
            }
        };

        return () => {
            closeButton.onclick = null;
            window.onclick = null;
        };
    }, []);

    const openModal = (project) => {
        setModalContent(project);
        document.getElementById('modal').style.display = 'block'; // Show the modal
    };

    const projects = [
        {
            id: 'restaurant',
            image: Portfolio,
            title: 'Portfolio',
            description: 'This is my portfolio which I have build using Html , Css , Bootstrap , Javascript , Next Js.',
            technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Next Js'],
            modalDescription: 'This is my portfolio which I have build using HTML , CSS , BOOTSTRAP , JAVASCRIPT , NEXT JS.',
            codeLink: 'link-to-restaurant-code'
        },
        {
            id: 'blog',
            image: news,
            title: 'Blog Website',
            description: 'My blog website where you can get latest blogs, news about different ...',
            technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
            modalDescription: 'My blog website where you can get latest blogs, news about different fields. I build this blog when I am learning web development. I build it using Html , Css , Javascript , Bootstrap',
            codeLink: 'link-to-blog-code'
        },
        {
            id: 'spotify',
            image: spotify,
            title: 'Spotify Clone',
            description: 'This is the Spotify Clone Website that I have made using Html , Css , Bootstrap ,  Javascript....',
            technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
            modalDescription: 'This is the Spotify Clone Website that I have made using Html , Css , Bootstrap ,  Javascript. I have build this website so i can practice my website skills. I have used animations , transitions, beautiful UI in this website',
            codeLink: 'link-to-dance-code'
        },
        {
            id: 'articlesift',
            image: article,
            title: 'ArticleSift',
            description: 'ArticleSift is a Streamlit application designed to help users fetch news articles..',
            technologies: ['Llama 3.1', 'Google API', 'Streamlit', 'Language Translator'],
            modalDescription: 'ArticleSift is a Streamlit application designed to help users fetch news articles, ask questions about them, and listen to audio versions of the content. It supports multiple languages and includes custom styling to enhance user experience.The backend is built using Streamlit and provides endpoints for fetching articles using a URL or title provided by the user, answering questions related to the article, and generating audio in various languages. The app enables users to fetch and process news articles either by URL or title. The backend then parses the article and handles tasks such as translating the content into different languages if needed. ',
            codeLink: 'link-to-articlesift-code'
        },
        {
            id: 'techjobs',
            image: linkedinjob,
            title: 'Tech Jobs Recommender',
            description: 'This Streamlit app provides job recommendations based on job titles...',
            technologies: ['Llama 3.1', 'AI/ML API', 'Google API', 'CSV', 'Streamlit', 'Pandas'],
            modalDescription: `
            This Streamlit app provides job recommendations based on job titles, job description summarization using LLaMA, 
            translation of job descriptions, and job search functionality via Google Custom Search API. It also supports 
            LinkedIn job searches and text-to-speech synthesis.
            The backend is built using Streamlit and provides endpoints for searching jobs according to the input provided by the user 
            and also gives recommendations for different jobs by selecting the job with detailed descriptions. Furthermore, you can 
            also search for different latest articles and news about the available jobs in different locations just by giving the location.
        `, codeLink: 'link-to-techjobs-code'
        },
        {
            id: 'spotify',
            image: techease,
            title: 'Tech Ease',
            description: 'Tech Ease is a Streamlit application designed to assist users with solutions for electronic devices...',
            technologies: ['Granite Model', 'IBM Watsonax API', 'Streamlit', 'Google API', 'Summarizer'],
            modalDescription: 'Tech Ease is a Streamlit application designed to assist users with solutions for electronic device and mobile phone issues. By inputting a description of their problem, users receive AI-generated solutions, which can be translated into different languages, summarized, or used to find related articles. This application leverages IBM Watsonx AI for generating solutions and Google Custom Search API for retrieving relevant articles. The translation feature uses Google Translate.',
            codeLink: 'link-to-techease-code'
        },
       
    ];

    return (
        <div>
            <div className="mainprojects" >
                <p className='titleproject' >Projects</p>
                <div className="bottomline2"></div>
                <span className="myprojects" style={{ color: '#7B7B7B' }}>
                    Here you will find some of the personal projects that I created during my front-end journey
                </span>

                <div className="view_button">
                    <Link href={"/projects"}><button>View All</button></Link>
                </div>
                <div className="projectlists">
                    {projects.map(project => (
                        <div className="nft" key={project.id} onClick={() => openModal(project)}>
                            <div className="main">
                                <Image className='tokenImage' src={project.image} alt={project.title} />
                                <h2 style={{ color: '#ced4da' }}>{project.title}</h2>
                                <div className="technologies">
                                    {project.technologies.map(skill => (
                                        <div className="skill" key={skill}>{skill}</div>
                                    ))}
                                </div>
                                <hr />
                                <p className='description' style={{ color: 'white' }}>{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="modal" id="modal">
                    <div className="modal-content">
                        <span className="close" id="close">&times;</span>
                        {modalContent && (
                            <>
                                <Image className='modal-image' src={modalContent.image} alt={modalContent.title} />
                                <h2 style={{ color: '#ced4da' }}>{modalContent.title}</h2>
                                <p className='modal-description' style={{ color: '#ced4da' }}>{modalContent.modalDescription}</p>
                                <hr />
                                <a href={modalContent.codeLink} className="view-code">View Code</a>
                                <a href={modalContent.codeLink} className="view-code">View Live</a>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
