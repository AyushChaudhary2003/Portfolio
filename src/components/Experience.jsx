import { motion } from 'framer-motion'
import { Section, SectionHeader } from './Section'

const bullets = [
  'Analyzed 3+ structured datasets (10,000+ records) using Python, reducing manual data processing time by 40%.',
  'Built supervised learning pipelines with 95% data consistency, automating preprocessing, feature engineering (15+ features), and evaluation.',
  'Trained and benchmarked 5 distinct ML models, improving baseline prediction accuracy by 12% on real-world test data.',
  'Developed end-to-end ETL pipelines for data validation, cleaning, and feature engineering across 15+ variables throughout reporting cycles.',
]

export default function Experience() {
  return (
    <Section id="experience" dark>
      <SectionHeader label="experience" title="Work History" />
      <div style={{ position: 'relative', paddingLeft: '2rem' }}>
        {/* Timeline line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          style={{
            position: 'absolute', left: 0, top: 0, bottom: 0, width: 2,
            background: 'linear-gradient(to bottom, #7c5cff, #00cfff, transparent)',
            transformOrigin: 'top',
          }}
        />
        <motion.div
          style={{
            position: 'absolute', left: -6, top: 0,
            width: 14, height: 14, borderRadius: '50%',
            background: '#7c5cff', border: '3px solid #070710',
            boxShadow: '0 0 16px rgba(124,92,255,0.8)',
          }}
          animate={{ boxShadow: ['0 0 10px rgba(124,92,255,0.6)', '0 0 25px rgba(124,92,255,0.9)', '0 0 10px rgba(124,92,255,0.6)'] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ x: 4 }}
          style={{
            background: 'rgba(18,18,42,0.85)', border: '1px solid rgba(110,80,255,0.15)',
            borderRadius: 18, padding: '1.8rem', backdropFilter: 'blur(12px)',
            transition: 'border-color 0.3s',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.3rem' }}>
            <span style={{ fontWeight: 800, fontSize: '1.05rem' }}>Data Science & ML Intern</span>
            <span style={{
              fontFamily: "'Fira Code', monospace", fontSize: '0.76rem', color: '#7c5cff',
              background: 'rgba(124,92,255,0.12)', border: '1px solid rgba(124,92,255,0.25)',
              padding: '0.2rem 0.7rem', borderRadius: 50,
            }}>Dec 2025 – Feb 2026</span>
          </div>
          <div style={{ color: '#00cfff', fontWeight: 600, fontSize: '0.9rem', marginBottom: '1.2rem' }}>
            YBI Foundation · Gurugram, India
          </div>
          <ul style={{ listStyle: 'none' }}>
            {bullets.map((b, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                style={{
                  color: '#7878a0', fontSize: '0.88rem', lineHeight: 1.75,
                  paddingLeft: '1.2rem', position: 'relative', paddingBottom: '0.3rem',
                }}
              >
                <span style={{ position: 'absolute', left: 0, color: '#7c5cff', fontWeight: 700 }}>▸</span>
                {b}
              </motion.li>
            ))}
          </ul>

          {/* Certificate link */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.5 }}
            style={{ marginTop: '1.4rem' }}
          >
            <motion.a
              href="https://drive.google.com/file/d/1-mkwbZ_5IGFis8AsoccqXfJd_EGpwPne/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.03, boxShadow: '0 6px 24px rgba(124,92,255,0.35)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.5rem 1.1rem', borderRadius: 10,
                background: 'rgba(124,92,255,0.12)',
                border: '1px solid rgba(124,92,255,0.35)',
                color: '#a080ff', fontWeight: 600, fontSize: '0.82rem',
                textDecoration: 'none', transition: 'all 0.2s',
              }}
            >
              🏅 View Internship Certificate ↗
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  )
}
