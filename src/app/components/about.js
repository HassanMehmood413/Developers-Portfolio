"use client";
import React, { useEffect } from 'react';

const About = () => {
    const handleContactClick = () => {
        window.location.href = 'https://mail.google.com/mail/?view=cm&to=ihassan463m@gmail.com';
    };

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

    return (
        <div>
            <div className="maincontainer" id='about'>

                <div className="aboutme hidden">
                    <h1>About Me</h1>
                    <div className="bottomline"></div>
                    <div className="para">
                        <p>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.</p>
                    </div>
                </div>

                <div className="gridcolumn hidden">
                    <div className="onecolumn">
                        <div className="knowme">
                            <h2 className='hidden'>Get To Know Me</h2>
                            <p className='p1 hidden'>
                                Hello! I'm Hassan,
                                <strong className='hidden'> a full-stack software engineer </strong>
                                from Lahore, PK.
                            </p>

                            <p className='p2 hidden'>
                                As a Software Engineer, I have a multifaceted skill set, specializing in the development of Generative AI solutions (using Python, LLMs, Vectara, and RAG), as well as web (FrontEnd Development). In addition, I have experience as a Tech Trainer, where I guided students at <span>ICodeGuru</span>. I possess a varied background, having contributed to team projects in a professional capacity, competed in global hackathons @<a className='lablab' href="https://lablab.ai/u/@hassan_mehmood517" target='_blank' rel="noopener noreferrer"> Lablab.ai </a>.
                                As a tech trainer at <a className='lablab' target='_blank' rel="noopener noreferrer"> ICodeGuru </a>, I've taught DSA to aspiring students by simplifying complex programming concepts (wanna see how I provide training to my students? <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTIfocJUVuGFBAoDRGEqgNOQD16chYRfjbEXQO9tDJknQx-OYUFfKPtnPKND8mVJZplTbiGFF88LDtW/pubhtml" target='_blank' rel="noopener noreferrer">Click Here</a> to see my sessions).
                                I have participated in multiple AI International Hackathons.
                            </p>
                        </div>

                        <div className="button hidden">
                            <button onClick={handleContactClick}>Contact Me</button>
                        </div>
                    </div>

                    <div className="secondcolumn hidden">
                        <div className="skills hidden">
                            <h2>Skills</h2>
                            <div className="skills hidden">
                                <div className="skills__skill">Pandas</div>
                                <div className="skills__skill">Python</div>
                                <div className="skills__skill">JavaScript</div>
                                <div className="skills__skill">Typescript</div>
                                <div className="skills__skill">React Js</div>
                                <div className="skills__skill">Next Js</div>
                                <div className="skills__skill">Generative AI</div>
                                <div className="skills__skill">Machine Learning</div>
                                <div className="skills__skill">LLMs</div>
                                <div className="skills__skill">Bootstrap-5</div>
                                <div className="skills__skill">DSA</div>
                                <div className="skills__skill">React</div>
                                <div className="skills__skill">HTML</div>
                                <div className="skills__skill">CSS</div>
                                <div className="skills__skill">WordPress</div>
                                <div className="skills__skill">GIT</div>
                                <div className="skills__skill">GitHub</div>
                                <div className="skills__skill">Responsive Design</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default About;
