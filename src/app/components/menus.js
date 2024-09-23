"use client"; // Ensure this component is marked as a Client Component

import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import menus from '../images/menus.jpg';
import Lottie from 'lottie-react';
import animationData from '../images/zero.json';
import LinkedinIcon from '../images/linkedin-dark.svg';
import TwitterIcon from '../images/twitter-dark.svg';
import YoutubeIcon from '../images/yt-dark.svg';
import GithubIcon from '../images/github-dark.svg';
import Leetcode from '../images/leetcode.svg';

const Section1 = () => {
    const lottieRef = useRef(null);

    useEffect(() => {
        // Intersection Observer Setup
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        });

        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => observer.observe(el));

        // Cleanup observer on component unmount
        return () => {
            hiddenElements.forEach((el) => observer.unobserve(el));
        };
    }, []); // Empty dependency array ensures this effect runs once on mount

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/JS_Chapterwise_Notes.pdf'; // Path to your CV file in the public folder
        link.download = 'My_CV.pdf'; // The name of the file that will be downloaded
        link.click();
    };

    return (
        <div>
            <div className="backgroundimage">
                <div className="image">
                    <Image
                        src={menus}
                        alt="Menu Image"
                    />
                    <div className="menuwrite">
                        <h1 className="myname hidden">Hey, I&apos;m Hassan Mehmood</h1>
                    </div>
                    <div className="menutext hidden">
                        <p className='menutextp2'>Software Engineer and Trainer</p>
                        <p className='menutextp1'>
                            As a Software Engineer, I have a multifaceted skill set, specializing in the development of Generative AI solutions (using Python, LLMs, Vectara, and RAG), as well as web (FrontEnd Development). In addition, I have experience as a Tech Trainer, where I guided students at <span className='icodeguru'>ICodeGuru</span>.
                        </p>
                    </div>
                    <div className="social_icons">
                        <div className="socialicons">
                            <div className="home-hero__socials">
                                <div className="home-hero__social">
                                    <a href="https://www.linkedin.com/in/hassan-mehmood-01a3a9247/" className="home-hero__social-icon-link" rel="noreferrer" target="_blank">
                                        <LinkedinIcon className="home-hero__social-icon" />
                                    </a>
                                </div>
                                <div className="home-hero__social">
                                    <a href="https://x.com/H_legions" className="home-hero__social-icon-link" rel="noreferrer" target="_blank">
                                        <TwitterIcon className="home-hero__social-icon" />
                                    </a>
                                </div>
                                <div className="home-hero__social">
                                    <a href="https://www.youtube.com/@TECH_COMP-R" className="home-hero__social-icon-link home-hero__social-icon-link--bd-none" rel="noreferrer" target="_blank">
                                        <YoutubeIcon className="home-hero__social-icon" />
                                    </a>
                                </div>
                                <div className="home-hero__social">
                                    <a href="https://github.com/HassanMehmood413/HassanMehmood413" className="home-hero__social-icon-link" rel="noreferrer" target="_blank">
                                        <GithubIcon className="home-hero__social-icon" />
                                    </a>
                                </div>
                                <div className="home-hero__social">
                                    <a href="https://leetcode.com/u/Hassan_Leigons/" className="home-hero__social-icon-link" rel="noreferrer" target="_blank">
                                        <Leetcode className="home-hero__social-icon" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div onClick={handleDownload} className="menuButton">
                        <button>
                            <p>Download CV</p>
                        </button>
                    </div>
                    <div className='lottie'>
                        <Lottie
                            animationData={animationData}
                            loop={true}
                            style={{ width: 40, height: 50 }}
                            tabIndex="0"
                            ref={lottieRef} // Reference to the Lottie element
                        />
                    </div>
                </div>

                <div className="alllinks"></div>
            </div>
        </div>
    );
}

export default Section1;
