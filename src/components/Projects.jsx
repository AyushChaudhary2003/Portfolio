import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Section, SectionHeader } from './Section'
import { GitHubIcon, KaggleIcon } from './Icons'

function LiveIcon({ size = 13 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  )
}

const projects = [
  {
    icon: '🎵', name: 'Music Trends Dashboard', type: 'sde',
    desc: 'Real-time visualization platform integrating 5+ Apple Music API endpoints tracking global trends across 10+ regions. Redux state management cut re-renders by 40%; 95+ Lighthouse score.',
    tech: ['React 18', 'Redux Toolkit', 'REST API', 'Tailwind CSS'],
    link: 'https://ayush-music-eight.vercel.app/', linkLabel: 'Live', color: '#7c5cff',
  },
  {
    icon: '👥', name: 'Employee Management System', type: 'sde',
    desc: 'Full-stack app automating tracking for 500+ employee records. MySQL schemas optimized for 10,000+ entries (35% faster retrieval). 15+ secure REST APIs with sub-200ms response times.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'React', 'Maven'],
    link: 'https://crud-application-snowy.vercel.app/', linkLabel: 'Live', color: '#ff6bbd',
  },
  {
    icon: '💰', name: 'P&L Automation & Margin Analysis', type: 'analyst',
    desc: 'Automated P&L reporting across 4 categories (FMCG, Staples, Pharma, F&V) computing Gross Margin %, EBIT %, and COGS %. 5-chart stakeholder dashboard with variance waterfall analysis.',
    tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    link: 'https://www.kaggle.com/code/ayushchaudhary2411/pnl-automation-margin-analysis', linkLabel: 'Kaggle', color: '#00cfff',
  },
  {
    icon: '📦', name: 'Inventory Intelligence Dashboard', type: 'analyst',
    desc: 'Automated inventory ledger for 5 SKUs across 3 warehouses with weighted-average cost valuation. 6-chart operational dashboard surfacing stockout risks over 180 ledger records.',
    tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    link: 'https://www.kaggle.com/code/ayushchaudhary2411/inventory-intelligence-dashboard', linkLabel: 'Kaggle', color: '#00e5a0',
  },
  {
    icon: '🧠', name: 'Deep Learning & Data Analytics', type: 'analyst',
    desc: 'EDA on 7+ high-dimensional datasets (MNIST, CIFAR-10). CNN and LSTM architectures achieving 85.8% accuracy. Automated ETL pipelines cutting data processing time by 40%.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'CNN', 'LSTM', 'Matplotlib'],
    link: 'https://github.com/AyushChaudhary2003/Deep-Learning', linkLabel: 'GitHub', color: '#c084fc',
  },
]

const filters = [
  { key: 'all', label: 'All Projects' },
  { key: 'sde', label: 'SDE' },
  { key: 'analyst', label: 'Analyst' },
]

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const filtered = filter === 'all'
    ? projects
    : projects.filter(p => p.type === filter || p.type === 'both')

  return (
    <Section id="projects">
      <SectionHeader label="projects" title="What I've Built" />

      {/* Filter tabs */}
      <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
        {filters.map(f => (
          <motion.button
            key={f.key}
            onClick={() => setFilter(f.key)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '0.5rem 1.2rem', borderRadius: 50,
              border: filter === f.key ? '1px solid #7c5cff' : '1px solid rgba(110,80,255,0.2)',
              background: filter === f.key ? 'rgba(124,92,255,0.2)' : 'transparent',
              color: filter === f.key ? '#7c5cff' : '#7878a0',
              fontWeight: 600, fontSize: '0.82rem', transition: 'all 0.2s',
            }}
          >
            {f.label}
          </motion.button>
        ))}
      </div>

      <motion.div
        layout
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.4rem' }}
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.div
              key={p.name}
              layout
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: -20 }}
              transition={{ duration: 0.45, delay: i * 0.07, type: 'spring', stiffness: 120 }}
              whileHover={{ y: -8, boxShadow: `0 24px 50px ${p.color}18` }}
              style={{
                background: 'rgba(18,18,42,0.85)', border: '1px solid rgba(110,80,255,0.15)',
                borderRadius: 20, padding: '1.8rem', backdropFilter: 'blur(12px)',
                position: 'relative', overflow: 'hidden', transition: 'border-color 0.3s',
              }}
            >
              {/* Top color bar */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                  background: `linear-gradient(90deg, ${p.color}, transparent)`,
                  transformOrigin: 'left',
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.8rem' }}>
                <span style={{ fontSize: '1.8rem' }}>{p.icon}</span>
                <a
                  href={p.link} target="_blank" rel="noreferrer"
                  style={{
                    fontSize: '0.75rem', color: '#7878a0',
                    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(110,80,255,0.15)',
                    padding: '0.25rem 0.65rem', borderRadius: 6,
                    display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                    transition: 'all 0.2s',
                  }}
                >
                  {p.linkLabel === 'GitHub' ? <GitHubIcon size={13} />
                    : p.linkLabel === 'Kaggle' ? <KaggleIcon size={13} />
                    : <LiveIcon size={13} />}
                  {p.linkLabel}
                </a>
              </div>
              <h3 style={{ fontWeight: 800, fontSize: '1rem', marginBottom: '0.75rem' }}>{p.name}</h3>
              <p style={{ color: '#7878a0', fontSize: '0.84rem', lineHeight: 1.75, marginBottom: '1rem' }}>{p.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {p.tech.map(t => (
                  <span key={t} style={{
                    fontFamily: "'Fira Code', monospace", fontSize: '0.72rem',
                    padding: '0.2rem 0.6rem', borderRadius: 4,
                    background: `${p.color}10`, border: `1px solid ${p.color}22`, color: p.color,
                  }}>{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  )
}
