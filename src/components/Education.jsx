import { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { HiAcademicCap, HiLocationMarker, HiCalendar } from 'react-icons/hi';
import SectionTitle from './SectionTitle';
import ImageFrame from './ImageFrame';
import { education } from '../data/portfolio';
import './Education.css';

const R = 70;
const C = 2 * Math.PI * R;

function CgpaRing({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState('0.00');

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 2,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(v.toFixed(2)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <div ref={ref} className="cgpa">
      <svg viewBox="0 0 160 160" className="cgpa__svg">
        <defs>
          <linearGradient id="cgpaGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00ffa3" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
        <circle cx="80" cy="80" r={R} className="cgpa__track" />
        <motion.circle
          cx="80"
          cy="80"
          r={R}
          className="cgpa__bar"
          stroke="url(#cgpaGrad)"
          strokeDasharray={C}
          initial={{ strokeDashoffset: C }}
          animate={{ strokeDashoffset: inView ? C * (1 - value / 10) : C }}
          transition={{ duration: 2, ease: 'easeOut' }}
        />
      </svg>
      <div className="cgpa__center">
        <span className="cgpa__value gradient-text">{display}</span>
        <span className="cgpa__label">CGPA / 10</span>
      </div>
    </div>
  );
}

export default function Education() {
  const e = education;

  return (
    <section id="education" className="section">
      <div className="container">
        <SectionTitle
          number="01"
          title="My"
          accent="Education"
          subtitle="Building strong foundations in computer science, AI and machine learning."
        />

        <motion.div
          className="edu glass"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="edu__info">
            <div className="edu__icon">
              <HiAcademicCap />
            </div>
            <h3 className="edu__degree">{e.degree}</h3>
            <p className="edu__spec gradient-text">{e.specialization}</p>
            <p className="edu__inst">{e.institution}</p>

            <div className="edu__meta">
              <span><HiCalendar /> {e.duration}</span>
              <span><HiLocationMarker /> {e.location}</span>
            </div>

            <h4 className="edu__sub">Core coursework</h4>
            <div className="tag-list">
              {e.coursework.map((c) => (
                <span key={c} className="tag">{c}</span>
              ))}
            </div>
          </div>

          <div className="edu__side">
            <CgpaRing value={e.cgpa} />
            {e.images.map((src, i) => (
              <ImageFrame key={i} src={src} alt="CIT campus" label="Add college image" ratio="16 / 10" />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}