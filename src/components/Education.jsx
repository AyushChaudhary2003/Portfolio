import { motion } from 'framer-motion'
import { Section, SectionHeader } from './Section'

const edu = [
  {
    degree: 'B.Tech in Computer Engineering',
    school: 'Delhi Technological University',
    location: 'New Delhi, India',
    year: '2022 – 2026',
    score: '6.34 CGPA',
    color: '#7c5cff',
  },
  {
    degree: 'CBSE — Class XII',
    school: 'Teresa International Academy',
    location: 'Patna, India',
    year: '2021',
    score: '81.8%',
    color: '#00cfff',
  },
  {
    degree: 'CBSE — Class X',
    school: 'KV Bailey Road',
    location: 'Patna, India',
    year: '2019',
    score: '93.4%',
    color: '#00e5a0',
  },
]

export default function Education() {
  return (
    <Section id="education" dark>
      <SectionHeader label="education" title="Academic Background" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {edu.map((e, i) => (
          <motion.div
            key={e.degree}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6, type: 'spring', stiffness: 100 }}
            whileHover={{ x: 6, borderColor: e.color }}
            style={{
              background: 'rgba(18,18,42,0.85)', border: '1px solid rgba(110,80,255,0.15)',
              borderRadius: 16, padding: '1.4rem 1.8rem',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem',
              backdropFilter: 'blur(12px)', transition: 'all 0.3s',
              borderLeft: `3px solid ${e.color}`,
            }}
          >
            <div>
              <div style={{ fontWeight: 800, fontSize: '1rem', marginBottom: '0.2rem' }}>{e.degree}</div>
              <div style={{ color: e.color, fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.2rem' }}>{e.school}</div>
              <div style={{ color: '#7878a0', fontSize: '0.78rem' }}>📍 {e.location}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{
                fontFamily: "'Fira Code', monospace", fontSize: '0.75rem', color: '#7c5cff',
                background: 'rgba(124,92,255,0.1)', border: '1px solid rgba(124,92,255,0.2)',
                padding: '0.2rem 0.65rem', borderRadius: 50, marginBottom: '0.6rem', display: 'inline-block',
              }}>{e.year}</div>
              <div style={{
                fontSize: '1.2rem', fontWeight: 900,
                background: `linear-gradient(135deg, ${e.color}, #fff)`,
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>{e.score}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
