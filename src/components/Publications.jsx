import { motion } from 'framer-motion';
import { HiDocumentText, HiExternalLink } from 'react-icons/hi';
import SectionTitle from './SectionTitle';
import { publications } from '../data/portfolio';
import './Publications.css';

export default function Publications() {
  return (
    <section id="publications" className="section">
      <div className="container">
        <SectionTitle
          number="03"
          title="Research"
          accent="Publications"
          subtitle="Peer-reviewed work published with IEEE."
        />

        <div className="pubs">
          {publications.map((p, i) => {
            const hasLink = p.link && p.link !== '#';
            return (
              <motion.article
                key={i}
                className="pub glass glass-hover"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: 'easeOut' }}
              >
                <div className="pub__top">
                  <span className="pub__num">Paper {String(i + 1).padStart(2, '0')}</span>
                  <span className="tag tag-blue">
                    {p.venue}{p.year ? ` · ${p.year}` : ''}
                  </span>
                </div>

                <div className="pub__icon">
                  <HiDocumentText />
                </div>

                <h3 className="pub__title">{p.title}</h3>
                <p className="pub__desc text-dim">{p.description}</p>

                {p.tags.length > 0 && (
                  <div className="tag-list pub__tags">
                    {p.tags.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                )}

                {hasLink ? (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="pub__link">
                    Read paper <HiExternalLink />
                  </a>
                ) : (
                  <span className="pub__link pub__link--soon">Link coming soon</span>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}