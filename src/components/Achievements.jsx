import { motion } from 'framer-motion';
import { FaCode, FaTrophy, FaHeartbeat, FaLightbulb, FaAward } from 'react-icons/fa';
import { HiExternalLink, HiBadgeCheck } from 'react-icons/hi';
import SectionTitle from './SectionTitle';
import ImageFrame from './ImageFrame';
import { featuredCert, certifications, achievements } from '../data/portfolio';
import './Achievements.css';

const icons = {
  code: FaCode,
  trophy: FaTrophy,
  heart: FaHeartbeat,
  bulb: FaLightbulb,
};

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

export default function Achievements() {
  const fc = featuredCert;
  const hasVerify = fc.verify && fc.verify !== '#';

  return (
    <section id="achievements" className="section">
      <div className="container">
        <SectionTitle
          number="05"
          title="Achievements &"
          accent="Certifications"
          subtitle="Milestones from hackathons, competitive coding and cloud certification."
        />

        <div className="certs">
          <motion.div className="cert-featured glass" {...reveal(0)}>
            <div className="cert-featured__badge">
              <ImageFrame
                src={fc.badge}
                alt={`${fc.title} badge`}
                label="Add AWS badge"
                ratio="1 / 1"
                className="badge-frame"
              />
            </div>
            <div className="cert-featured__info">
              <span className="cert-featured__label">
                <HiBadgeCheck /> Certified
              </span>
              <h3>{fc.title}</h3>
              <p className="text-dim">
                {fc.issuer} · <span className="cert-featured__code">{fc.code}</span>
              </p>
              {hasVerify && (
                <a href={fc.verify} target="_blank" rel="noopener noreferrer" className="btn btn-outline cert-featured__btn">
                  Verify credential <HiExternalLink />
                </a>
              )}
            </div>
          </motion.div>

          <div className="certs__list">
            {certifications.map((c, i) => (
              <motion.div key={c.title} className="cert-item glass glass-hover" {...reveal(0.1 + i * 0.1)}>
                <div className="cert-item__icon">
                  <FaAward />
                </div>
                <div>
                  <h4>{c.title}</h4>
                  <p className="text-dim">{c.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <h3 className="ach__heading">
          <FaTrophy /> Achievements
        </h3>

        <div className="ach-grid">
          {achievements.map((a, i) => {
            const Icon = icons[a.icon] || FaTrophy;
            return (
              <motion.div key={a.title} className="ach glass glass-hover" {...reveal(i * 0.1)}>
                <div className="ach__icon">
                  <Icon />
                </div>
                <div>
                  <h4>{a.title}</h4>
                  <p className="text-dim">{a.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}