import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { HiArrowUp } from 'react-icons/hi';
import { personal } from '../data/portfolio';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  const socials = [
    { icon: FaGithub, url: personal.socials.github, label: 'GitHub' },
    { icon: FaLinkedin, url: personal.socials.linkedin, label: 'LinkedIn' },
    { icon: SiLeetcode, url: personal.socials.leetcode, label: 'LeetCode' },
  ];

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <a href="#home" className="footer__logo">
            Sheena<span className="gradient-text">.</span>
          </a>
          <p className="footer__copy">
            © {year} {personal.name}. Built with React and Vite.
          </p>
        </div>

        <div className="footer__socials">
          {socials.map(({ icon: Icon, url, label }) => (
            <a key={label} href={url} target="_blank" rel="noopener noreferrer" aria-label={label}>
              <Icon />
            </a>
          ))}
        </div>

        <a href="#home" className="footer__top" aria-label="Back to top">
          <HiArrowUp />
        </a>
      </div>
    </footer>
  );
}