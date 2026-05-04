import { motion } from 'framer-motion'
import { Section, SectionHeader } from './Section'

const cards = [
  { icon: '🚀', title: 'Full-Stack Dev', desc: 'React, Spring Boot, MySQL, REST APIs', color: '#7c5cff' },
  { icon: '📊', title: 'Data Analytics', desc: 'Python, Pandas, Power BI, EDA, ETL', color: '#00cfff' },
  { icon: '🤖', title: 'Machine Learning', desc: 'Scikit-learn, CNNs, LSTM, Predictive Modeling', color: '#ff6bbd' },
  { icon: '🧩', title: 'DSA & Systems', desc: '600+ problems, DBMS, OS, System Design', color: '#00e5a0' },
]

export default function About() {
  return (
    <Section id="about" dark>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
        <div>
          <SectionHeader label="about me" title="Who I Am" />
          {[
            <>I'm a <strong style={{ color: '#eeeef8' }}>4th-year Computer Engineering student</strong> at Delhi Technological University with a dual focus: building robust full-stack applications and deriving actionable insights from data.</>,
            <>My internship at <strong style={{ color: '#00cfff' }}>YBI Foundation</strong> sharpened my ML pipeline skills on real-world datasets — EDA to deployment. On the dev side, I've shipped production-grade apps with React, Spring Boot, and REST APIs.</>,
            <>I thrive at the intersection of <strong style={{ color: '#7c5cff' }}>software engineering and data analytics</strong> — equally at home writing clean Java APIs or building a stakeholder-ready Seaborn dashboard.</>,
          ].map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              style={{ color: '#7878a0', marginBottom: '1rem', lineHeight: 1.85 }}
            >
              {text}
            </motion.p>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem' }}>
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, type: 'spring', stiffness: 120 }}
              whileHover={{ y: -6, boxShadow: `0 20px 40px ${card.color}22` }}
              style={{
                background: 'rgba(18,18,42,0.85)', border: '1px solid rgba(110,80,255,0.15)',
                borderRadius: 16, padding: '1.3rem', backdropFilter: 'blur(12px)',
                transition: 'border-color 0.3s',
                cursor: 'default',
              }}
            >
              <div style={{ fontSize: '1.6rem', marginBottom: '0.6rem' }}>{card.icon}</div>
              <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.3rem' }}>{card.title}</div>
              <div style={{ fontSize: '0.78rem', color: '#7878a0', lineHeight: 1.5 }}>{card.desc}</div>
              <div style={{ width: 24, height: 2, background: card.color, borderRadius: 1, marginTop: '0.8rem' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
