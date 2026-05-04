import { motion } from 'framer-motion'
import { Section, SectionHeader } from './Section'

const categories = [
  {
    icon: '📊', title: 'Data & Analytics', color: '#7c5cff',
    tags: ['Python', 'Pandas', 'NumPy', 'SQL', 'MySQL', 'PostgreSQL', 'Power BI', 'EDA', 'ETL'],
  },
  {
    icon: '🤖', title: 'Machine Learning', color: '#00cfff',
    tags: ['Scikit-learn', 'Matplotlib', 'Seaborn', 'CNN', 'LSTM', 'Regression', 'Classification', 'Jupyter', 'Kaggle'],
  },
  {
    icon: '💻', title: 'Software Development', color: '#ff6bbd',
    tags: ['Java', 'Spring Boot', 'React.js', 'Redux', 'JavaScript', 'HTML5/CSS3', 'Tailwind', 'REST APIs', 'C++'],
  },
  {
    icon: '🛠️', title: 'Tools & Concepts', color: '#00e5a0',
    tags: ['Git', 'Maven', 'Postman', 'Excel', 'VS Code', 'DSA', 'DBMS', 'OOP', 'System Design'],
  },
]

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeader label="technical skills" title="What I Work With" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.2rem' }}>
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.12, duration: 0.6, type: 'spring', stiffness: 100 }}
            whileHover={{ borderColor: cat.color, boxShadow: `0 0 30px ${cat.color}18` }}
            style={{
              background: 'rgba(18,18,42,0.85)', border: '1px solid rgba(110,80,255,0.15)',
              borderRadius: 18, padding: '1.6rem', backdropFilter: 'blur(12px)',
              transition: 'all 0.3s',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.2rem' }}>
              <div style={{
                width: 40, height: 40, borderRadius: 10, fontSize: '1.1rem',
                background: `${cat.color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>{cat.icon}</div>
              <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>{cat.title}</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
              {cat.tags.map((tag, ti) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: ci * 0.1 + ti * 0.04, duration: 0.3 }}
                  whileHover={{ scale: 1.1, background: `${cat.color}28` }}
                  style={{
                    padding: '0.28rem 0.75rem', borderRadius: 50,
                    fontSize: '0.75rem', fontWeight: 500,
                    background: `${cat.color}10`, border: `1px solid ${cat.color}28`,
                    color: cat.color, cursor: 'default',
                    transition: 'all 0.2s',
                  }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
