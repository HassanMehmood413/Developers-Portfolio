import React from 'react'
import LinkedinIcon from '../images/linkedin-dark.svg';
import TwitterIcon from '../images/twitter-dark.svg';
import YoutubeIcon from '../images/yt-dark.svg';
import GithubIcon from '../images/github-dark.svg';
import Leetcode from '../images/leetcode.svg'

const Footer = () => {
  return (
    <div>
      <div className="mainfooter">
        <div className="container">
          <p className="ftitle">Hassan Mehmood</p>
          <p className="fpara">
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </p>
        </div>
        <div className="social_icons2">
          <div className="socialicons">
            <div className="home-hero__socials2">
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

        <div class="main-footer__lower">
          &copy; Copyright
          <script>
            document.write(new Date().getFullYear());
          </script>
          . Made by
          <a rel="noreferrer" target="_blank" href="https://HassanMehmood.com"
          >Hassan Mehmood</a>
        </div>
      </div>
    </div >
  )
}

export default Footer
