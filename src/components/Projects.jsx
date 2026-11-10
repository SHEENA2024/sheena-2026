import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { HiChip, HiCloud } from 'react-icons/hi';
import SectionTitle from './SectionTitle';
import { projects } from '../data/portfolio';
import './Projects.css';

const filters = [
  { id: 'all', label: 'All' },
  { id: 'ai', label: 'AI / ML' },
  { id: 'cloud', label: 'Cloud' },
];

export default function Projects() {
  const [active, setActive] = useState('all');

  const count = (id) =>
    id === 'all' ? projects.length : projects.filter((p) => p.category.includes(id)).length;

  const visible =
    active === 'all' ? projects : projects.filter((p) => p.category.includes(active));

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionTitle
          number="04"
          title="Featured"
          accent="Projects"
          subtitle="From RAG-powered assistants to serverless ML on AWS."
        />

        <div className="filters glass">
          {filters.map((f) => (
            <button
              key={f.id}
              className={`filters__btn ${active === f.id ? 'is-active' : ''}`}
              onClick={() => setActive(f.id)}
            >
              {active === f.id && (
                <motion.span
                  layoutId="filterPill"
                  className="filters__pill"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="filters__label">
                {f.label} <span className="filters__count">{count(f.id)}</span>
              </span>
            </button>
          ))}
        </div>

        <motion.div layout className="projects">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => {
              const hasLink = p.github && p.github !== '#';
              const isCloud = p.category.includes('cloud');
              const Icon = isCloud && !p.category.includes('ai') ? HiCloud : HiChip;

              return (
                <motion.article
                  layout
                  key={p.title}
                  className="project glass glass-hover"
                  initial={{ opacity: 0, scale: 0.92, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                  <div className="project__top">
                    <div className={`project__icon ${isCloud ? 'is-cloud' : ''}`}>
                      <Icon />
                    </div>
                    <div className="project__cats">
                      {p.category.includes('ai') && <span className="tag">AI</span>}
                      {isCloud && <span className="tag tag-blue">Cloud</span>}
                    </div>
                  </div>

                  <h3 className="project__title">{p.title}</h3>
                  <p className="project__subtitle gradient-text">{p.subtitle}</p>
                  <p className="project__desc text-dim">{p.description}</p>

                  <div className="project__tech">
                    {p.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>

                  {hasLink ? (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="project__link">
                      <FaGithub /> View code
                    </a>
                  ) : (
                    <span className="project__link project__link--soon">
                      <FaGithub /> Code coming soon
                    </span>
                  )}
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}