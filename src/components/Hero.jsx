import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { HiDownload, HiArrowRight, HiOutlineMail } from 'react-icons/hi';
import ImageFrame from './ImageFrame';
import { personal, stats } from '../data/portfolio';
import './Hero.css';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
});

export default function Hero() {
  const sequence = personal.roles.flatMap((role) => [role, 1800]);

  const socials = [
    { icon: FaGithub, url: personal.socials.github, label: 'GitHub' },
    { icon: FaLinkedin, url: personal.socials.linkedin, label: 'LinkedIn' },
    { icon: SiLeetcode, url: personal.socials.leetcode, label: 'LeetCode' },
    { icon: HiOutlineMail, url: `mailto:${personal.email}`, label: 'Email' },
  ];

  return (
    <section id="home" className="hero">
      <div className="container hero__grid">
        <div className="hero__text">
          <motion.p className="hero__hello" {...fadeUp(0.1)}>
            Hi there, I'm
          </motion.p>

          <motion.h1 className="hero__name" {...fadeUp(0.2)}>
            <span className="gradient-text">{personal.name}</span>
          </motion.h1>

          <motion.div className="hero__role" {...fadeUp(0.3)}>
            <span className="hero__prompt">&gt;</span>
            <TypeAnimation sequence={sequence} repeat={Infinity} speed={50} wrapper="span" />
          </motion.div>

          <motion.p className="hero__tagline text-dim" {...fadeUp(0.4)}>
            {personal.tagline}
          </motion.p>

          <motion.div className="hero__actions" {...fadeUp(0.5)}>
            <a href="#projects" className="btn btn-primary">
              View projects <HiArrowRight />
            </a>
            <a
              href={personal.resume}
              className="btn btn-outline"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              Download resume <HiDownload />
            </a>
          </motion.div>

          <motion.div className="hero__socials" {...fadeUp(0.6)}>
            {socials.map(({ icon: Icon, url, label }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hero__social glass"
              >
                <Icon />
              </a>
            ))}
          </motion.div>

          <motion.div className="hero__stats" {...fadeUp(0.7)}>
            {stats.map(({ value, label }) => (
              <div key={label} className="hero__stat">
                <span className="hero__stat-value gradient-text">{value}</span>
                <span className="hero__stat-label">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
        >
          <div className="hero__photo-wrap">
            <div className="hero__ring" />
            <ImageFrame
              src={personal.profileImage}
              alt={personal.name}
              label="Add profile photo"
              ratio="1 / 1"
              rounded
              className="hero__photo"
            />
            <span className="hero__badge hero__badge--ai glass">AI / ML</span>
            <span className="hero__badge hero__badge--cloud glass">AWS Cloud</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}