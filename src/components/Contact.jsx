import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { HiOutlineMail, HiLocationMarker, HiClipboardCopy, HiCheck, HiDownload } from 'react-icons/hi';
import SectionTitle from './SectionTitle';
import { personal } from '../data/portfolio';
import './Contact.css';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${personal.email}`;
    }
  };

  const links = [
    { icon: FaLinkedin, label: 'LinkedIn', sub: 'Connect professionally', url: personal.socials.linkedin },
    { icon: FaGithub, label: 'GitHub', sub: 'Explore my code', url: personal.socials.github },
    { icon: SiLeetcode, label: 'LeetCode', sub: '600+ problems solved', url: personal.socials.leetcode },
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionTitle
          number="07"
          title="Get In"
          accent="Touch"
          subtitle="Open to internships, research collaborations and opportunities in AI and cloud."
        />

        <motion.div
          className="contact-cta glass"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h3>
            Let's build something <span className="gradient-text">intelligent</span> together.
          </h3>
          <p className="text-dim">
            Whether it's a research idea, an internship role or a project, my inbox is always open.
          </p>

          <div className="contact-email">
            <HiOutlineMail />
            <span>{personal.email}</span>
            <button onClick={copyEmail} className={copied ? 'is-copied' : ''} aria-label="Copy email">
              {copied ? <HiCheck /> : <HiClipboardCopy />}
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>

          <div className="contact-actions">
            <a href={`mailto:${personal.email}`} className="btn btn-primary">
              Say hello <HiOutlineMail />
            </a>
            <a href={personal.resume} download target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              Download resume <HiDownload />
            </a>
          </div>

          <p className="contact-loc">
            <HiLocationMarker /> {personal.location}
          </p>
        </motion.div>

        <div className="contact-links">
          {links.map(({ icon: Icon, label, sub, url }, i) => (
            <motion.a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link glass glass-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Icon className="contact-link__icon" />
              <div>
                <h4>{label}</h4>
                <p className="text-dim">{sub}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}