import { motion } from 'framer-motion';
import './SectionTitle.css';

export default function SectionTitle({ number, title, accent, subtitle }) {
  return (
    <motion.div
      className="section-title"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {number && <span className="section-title__num">// {number}</span>}
      <h2>
        {title} {accent && <span className="gradient-text">{accent}</span>}
      </h2>
      {subtitle && <p className="text-dim">{subtitle}</p>}
      <div className="section-title__line" />
    </motion.div>
  );
}