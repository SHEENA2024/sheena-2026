import { motion } from 'framer-motion';
import { HiLightBulb, HiPresentationChartBar, HiUserGroup, HiCalendar } from 'react-icons/hi';
import SectionTitle from './SectionTitle';
import ImageFrame from './ImageFrame';
import { volunteering } from '../data/portfolio';
import './Volunteering.css';

const icons = [HiLightBulb, HiPresentationChartBar, HiUserGroup];

export default function Volunteering() {
  return (
    <section id="volunteering" className="section">
      <div className="container">
        <SectionTitle
          number="06"
          title="Leadership &"
          accent="Volunteering"
          subtitle="Giving back to the tech community through leadership, teaching and learning."
        />

        <div className="vol-list">
          {volunteering.map((v, i) => {
            const Icon = icons[i] || HiUserGroup;
            const cols = Math.min(v.images.length, 3);

            return (
              <motion.article
                key={v.role}
                className="vol glass"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                <div className="vol__head">
                  <div className="vol__icon">
                    <Icon />
                  </div>
                  <div className="vol__titles">
                    <h3>{v.role}</h3>
                    <p className="vol__org gradient-text">{v.organization}</p>
                  </div>
                  {v.duration && (
                    <span className="vol__date">
                      <HiCalendar /> {v.duration}
                    </span>
                  )}
                </div>

                <p className="vol__desc text-dim">{v.description}</p>

                {v.images.length > 0 && (
                  <div className="vol__gallery" style={{ '--cols': cols }}>
                    {v.images.map((src, j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 + j * 0.12 }}
                      >
                        <ImageFrame
                          src={src}
                          alt={`${v.role} photo ${j + 1}`}
                          label={`Add image ${j + 1}`}
                          ratio="4 / 3"
                          className={src.endsWith('/athera1.jpeg') ? 'img-frame--athera1' : ''}
                        />
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}