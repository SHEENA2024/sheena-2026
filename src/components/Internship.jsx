import { motion } from 'framer-motion';
import { HiBriefcase, HiCalendar, HiCheckCircle } from 'react-icons/hi';
import SectionTitle from './SectionTitle';
import ImageFrame from './ImageFrame';
import { internship } from '../data/portfolio';
import './Internship.css';

export default function Internship() {
  const x = internship;

  return (
    <section id="internship" className="section">
      <div className="container">
        <SectionTitle
          number="02"
          title="Research"
          accent="Internship"
          subtitle="Hands-on research experience building medical AI systems."
        />

        <div className="timeline">
          <span className="timeline__dot" />

          <motion.div
            className="intern glass glass-hover"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="intern__head">
              <div className="intern__icon">
                <HiBriefcase />
              </div>
              <div>
                <h3>{x.role}</h3>
                <p className="intern__org gradient-text">{x.organization}</p>
              </div>
              <span className="intern__date">
                <HiCalendar /> {x.duration}
              </span>
            </div>

            <p className="intern__summary text-dim">{x.summary}</p>

            <ul className="intern__points">
              {x.points.map((p) => (
                <li key={p}>
                  <HiCheckCircle />
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            <div className="tag-list">
              {x.tags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>

            {x.images.length > 0 && (
              <div className="intern__gallery">
                {x.images.map((src, i) => (
                  <ImageFrame
                    key={i}
                    src={src}
                    alt={`Internship photo ${i + 1}`}
                    label={`Add internship image ${i + 1}`}
                    ratio="16 / 10"
                  />
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}