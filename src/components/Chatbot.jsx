import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ─── Data ──────────────────────────────────────────────────────────────────
const INFO = {
  email: 'ayushiaf.ac@gmail.com',
  phone: '+91 8210970317',
  github: 'github.com/AyushChaudhary2003',
  linkedin: 'linkedin.com/in/ayush-chaudhary-652598259',
  kaggle: 'kaggle.com/ayushchaudhary2411',
  sdeSkills: 'Java · Spring Boot · React.js · Redux · JavaScript · C++ · REST APIs · MySQL · Git · Maven · Postman',
  analyticsSkills: 'Python · Pandas · NumPy · SQL · Power BI · Matplotlib · Seaborn · Excel · EDA · ETL · Scikit-learn',
  experience: 'Data Science & ML Intern @ YBI Foundation (Dec 2025 – Feb 2026)\n• Analyzed 10,000+ records\n• Built ML pipelines with 95% consistency\n• Improved model accuracy by 12%',
  education: 'B.Tech Computer Engineering\nDelhi Technological University · 2022–2026\nCGPA: 6.34',
  achievements: '• 600+ DSA problems solved\n• 2 Kaggle analytics projects published',
  projects: {
    music: {
      name: '🎵 Music Trends Dashboard',
      type: 'SDE',
      tech: 'React 18 · Redux Toolkit · REST API · Tailwind CSS',
      points: [
        'Integrates 5+ Apple Music API endpoints tracking trends across 10+ regions',
        'Redux Toolkit reduces re-renders by 40%',
        'Achieved 95+ Lighthouse score for performance & accessibility',
      ],
    },
    ems: {
      name: '👥 Employee Management System',
      type: 'SDE',
      tech: 'Java · Spring Boot · MySQL · React · Maven',
      points: [
        'Automates tracking for 500+ employee records, cutting workload by 40%',
        'MySQL schemas optimized for 10,000+ entries — 35% faster retrieval',
        '15+ secure REST APIs with sub-200ms response times',
      ],
    },
    pl: {
      name: '💰 P&L Automation & Margin Analysis',
      type: 'Analyst',
      tech: 'Python · Pandas · NumPy · Matplotlib · Seaborn',
      points: [
        'Automated P&L reporting across FMCG, Staples, Pharma, F&V categories',
        'Computes Gross Margin %, EBIT Margin %, COGS % from raw inputs',
        '5-chart stakeholder dashboard: trend, heatmap, waterfall',
      ],
    },
    inventory: {
      name: '📦 Inventory Intelligence Dashboard',
      type: 'Analyst',
      tech: 'Python · Pandas · NumPy · Matplotlib · Seaborn',
      points: [
        'Tracks 5 SKUs across 3 warehouses with weighted-avg cost valuation',
        'Demand vs supply variance with shrinkage tracking (180 ledger records)',
        '6-chart dashboard surfacing stockout risks & plan deviations',
      ],
    },
    dl: {
      name: '🧠 Deep Learning & Data Analytics',
      type: 'Both',
      tech: 'Python · Scikit-learn · Matplotlib · CNN · LSTM',
      points: [
        'EDA on 7+ high-dimensional datasets including MNIST & CIFAR-10',
        'CNN and LSTM (Seq2Seq) models achieving 85.8% accuracy',
        'Automated ETL pipelines cut processing time by 40%',
      ],
    },
  },
}

// ─── Screens definition ────────────────────────────────────────────────────
// Each screen: { message, options: [{label, next, resume?}] }
function getScreen(id, extra) {
  const p = INFO.projects

  switch (id) {
    case 'main':
      return {
        message: "👋 Hi! I'm Ayush's portfolio assistant.\n\nAyush is a B.Tech Computer Engineering student at DTU, skilled in both full-stack development and data analytics. What would you like to explore?",
        options: [
          { label: '💻 SDE Resume', next: 'sde' },
          { label: '📊 Analyst Resume', next: 'analyst' },
          { label: '📁 Projects', next: 'projects' },
          { label: '🛠 Skills', next: 'skills' },
          { label: '💼 Experience', next: 'experience' },
          { label: '📬 Contact', next: 'contact' },
        ],
      }

    case 'sde':
      return {
        message: `💻 **SDE Resume Highlights**\n\n🎓 B.Tech CSE, DTU (2022–2026)\n\n🔹 **Core Skills:**\n${INFO.sdeSkills}\n\n🔹 **Key Projects:**\n• Music Trends Dashboard — React 18, Redux, REST API (95+ Lighthouse score)\n• Employee Management System — Java, Spring Boot, MySQL (500+ records, 15+ APIs)\n\n🔹 **Internship:**\nData Science & ML Intern @ YBI Foundation\nBuilt ML pipelines with 95% consistency, improved accuracy by 12%\n\n🏆 600+ DSA problems solved`,
        resume: 'sde',
        options: [
          { label: '📁 View SDE Projects', next: 'sde-projects' },
          { label: '🏠 Main Menu', next: 'main' },
        ],
      }

    case 'analyst':
      return {
        message: `📊 **Analyst Resume Highlights**\n\n🎓 B.Tech CSE, DTU (2022–2026)\n\n🔹 **Core Skills:**\n${INFO.analyticsSkills}\n\n🔹 **Key Projects:**\n• P&L Automation Tool — automated reporting across FMCG, Pharma, F&V with 5-chart dashboard\n• Inventory Intelligence Dashboard — 5 SKUs × 3 warehouses, stockout risk analysis\n• Deep Learning & Analytics — CNN/LSTM models at 85.8% accuracy on MNIST & CIFAR-10\n\n🔹 **Internship:**\nData Science & ML Intern @ YBI Foundation\nAnalyzed 10,000+ records, built end-to-end ETL pipelines, 12% accuracy improvement\n\n📊 2 published Kaggle notebooks`,
        resume: 'analyst',
        options: [
          { label: '📁 View Analyst Projects', next: 'analyst-projects' },
          { label: '🏠 Main Menu', next: 'main' },
        ],
      }

    case 'projects':
      return {
        message: '📁 **Ayush has built 5 projects.**\n\nWhich one would you like to know about?',
        options: [
          { label: p.music.name, next: 'project', projectKey: 'music' },
          { label: p.ems.name, next: 'project', projectKey: 'ems' },
          { label: p.pl.name, next: 'project', projectKey: 'pl' },
          { label: p.inventory.name, next: 'project', projectKey: 'inventory' },
          { label: p.dl.name, next: 'project', projectKey: 'dl' },
          { label: '🏠 Main Menu', next: 'main' },
        ],
      }

    case 'sde-projects':
      return {
        message: '💻 **SDE Projects** — pick one:',
        options: [
          { label: p.music.name, next: 'project', projectKey: 'music' },
          { label: p.ems.name, next: 'project', projectKey: 'ems' },
          { label: '← Back', next: 'sde' },
          { label: '🏠 Main Menu', next: 'main' },
        ],
      }

    case 'analyst-projects':
      return {
        message: '📊 **Analyst Projects** — pick one:',
        options: [
          { label: p.pl.name, next: 'project', projectKey: 'pl' },
          { label: p.inventory.name, next: 'project', projectKey: 'inventory' },
          { label: p.dl.name, next: 'project', projectKey: 'dl' },
          { label: '← Back', next: 'analyst' },
          { label: '🏠 Main Menu', next: 'main' },
        ],
      }

    case 'project': {
      const proj = p[extra?.projectKey] || p.music
      const pts = proj.points.map(pt => `• ${pt}`).join('\n')
      return {
        message: `**${proj.name}**\n🏷 ${proj.type} · ${proj.tech}\n\n${pts}`,
        options: [
          { label: '📁 Other Projects', next: 'projects' },
          { label: '🏠 Main Menu', next: 'main' },
        ],
      }
    }

    case 'skills':
      return {
        message: `🛠 **Technical Skills**\n\n💻 **SDE / Full-Stack:**\n${INFO.sdeSkills}\n\n📊 **Data & Analytics:**\n${INFO.analyticsSkills}\n\n🧠 **ML / AI:**\nScikit-learn · CNNs · LSTMs · Predictive Modeling\n\n⚙️ **Tools & Platforms:**\nGit · Postman · Power BI · Excel · Jupyter · VS Code`,
        options: [
          { label: '💻 SDE Resume', next: 'sde' },
          { label: '📊 Analyst Resume', next: 'analyst' },
          { label: '🏠 Main Menu', next: 'main' },
        ],
      }

    case 'experience':
      return {
        message: `💼 **Work Experience**\n\n**Data Science & ML Intern — YBI Foundation**\nDec 2025 – Feb 2026 · Gurugram, India\n• Analyzed 3+ structured datasets with 10,000+ records\n• Built supervised ML pipelines with 95% data consistency\n• Automated preprocessing across 15+ features\n• Improved baseline model accuracy by 12%\n• Developed end-to-end ETL pipelines for reporting cycles\n\n🎓 **Education**\n${INFO.education}\n\n🏆 **Achievements**\n${INFO.achievements}\n\n📜 Internship certificate available on request`,
        options: [
          { label: '📁 Projects', next: 'projects' },
          { label: '💻 SDE Resume', next: 'sde' },
          { label: '📊 Analyst Resume', next: 'analyst' },
          { label: '🏠 Main Menu', next: 'main' },
        ],
      }

    case 'contact':
      return {
        message: `📬 **Contact Ayush**\n\n✉️ ${INFO.email}\n📱 ${INFO.phone}\n🐙 ${INFO.github}\n💼 ${INFO.linkedin}\n📊 ${INFO.kaggle}`,
        options: [
          { label: '📥 Download SDE Resume', next: 'dl-sde', isDownload: 'sde' },
          { label: '📥 Download Analyst Resume', next: 'dl-analyst', isDownload: 'analyst' },
          { label: '🏠 Main Menu', next: 'main' },
        ],
      }

    default:
      return getScreen('main')
  }
}

// ─── Markdown-lite renderer ────────────────────────────────────────────────
function renderLine(line, i) {
  const isBullet = line.startsWith('• ')
  const content = isBullet ? line.slice(2) : line
  const parts = content.split(/\*\*(.*?)\*\*/g)
  const rendered = parts.map((p, j) =>
    j % 2 === 1 ? <strong key={j} style={{ color: '#eeeef8' }}>{p}</strong> : p
  )
  if (isBullet) return <div key={i} style={{ paddingLeft: '0.5rem', marginBottom: '0.2rem', display: 'flex', gap: '0.4rem' }}><span style={{ color: '#7c5cff', flexShrink: 0 }}>▸</span><span>{rendered}</span></div>
  if (line === '') return <div key={i} style={{ height: '0.35rem' }} />
  return <div key={i} style={{ marginBottom: '0.05rem' }}>{rendered}</div>
}

function RenderMsg({ text }) {
  return (
    <div style={{ fontSize: '0.83rem', lineHeight: 1.75 }}>
      {text.split('\n').map((line, i) => renderLine(line, i))}
    </div>
  )
}

// ─── Download helper ───────────────────────────────────────────────────────
async function triggerDownload(type) {
  const filename = type === 'sde'
    ? 'Ayush_Chaudhary_SDE_Resume.pdf'
    : 'Ayush_Chaudhary_Analyst_Resume.pdf'
  try {
    const res = await fetch(`/${filename}`)
    const blob = await res.blob()
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url; a.download = filename
    document.body.appendChild(a); a.click()
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)
  } catch {
    window.open(`/${filename}`, '_blank')
  }
}

// ─── Main Component ────────────────────────────────────────────────────────
export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [screenId, setScreenId] = useState('main')
  const [extra, setExtra] = useState(null)
  const scrollRef = useRef()

  const screen = getScreen(screenId, extra)

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [screenId])

  const handleOption = (opt) => {
    if (opt.isDownload) {
      triggerDownload(opt.isDownload)
      return
    }
    setExtra(opt.projectKey ? { projectKey: opt.projectKey } : null)
    setScreenId(opt.next)
  }

  return (
    <>
      {/* FAB */}
      <motion.button
        onClick={() => { setOpen(o => !o); setScreenId('main'); setExtra(null) }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.93 }}
        animate={open ? {} : {
          boxShadow: ['0 0 0 0 rgba(124,92,255,0.6)', '0 0 0 18px rgba(124,92,255,0)', '0 0 0 0 rgba(124,92,255,0)'],
        }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 2000,
          width: 60, height: 60, borderRadius: '50%',
          background: 'linear-gradient(135deg, #7c5cff, #00cfff)',
          border: 'none', color: '#fff', fontSize: '1.5rem',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 8px 30px rgba(124,92,255,0.5)', cursor: 'pointer',
        }}
      >
        <AnimatePresence mode="wait">
          <motion.span key={open ? 'x' : 'chat'}
            initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {open ? '✕' : '💬'}
          </motion.span>
        </AnimatePresence>
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 40 }}
            transition={{ duration: 0.35, type: 'spring', stiffness: 200, damping: 22 }}
            style={{
              position: 'fixed',
              bottom: '5.5rem', right: '1rem',
              left: window.innerWidth < 480 ? '1rem' : 'auto',
              width: window.innerWidth < 480 ? 'auto' : 380,
              maxHeight: 540,
              background: 'rgba(13,13,30,0.97)', backdropFilter: 'blur(24px)',
              border: '1px solid rgba(124,92,255,0.25)', borderRadius: 24,
              display: 'flex', flexDirection: 'column',
              boxShadow: '0 30px 80px rgba(0,0,0,0.5)',
              overflow: 'hidden', zIndex: 1999,
            }}
          >
            {/* Header */}
            <div style={{
              padding: '1rem 1.3rem',
              background: 'linear-gradient(135deg, rgba(124,92,255,0.2), rgba(0,207,255,0.1))',
              borderBottom: '1px solid rgba(124,92,255,0.15)',
              display: 'flex', alignItems: 'center', gap: '0.8rem', flexShrink: 0,
            }}>
              <div style={{
                width: 38, height: 38, borderRadius: '50%',
                background: 'linear-gradient(135deg, #7c5cff, #00cfff)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem',
              }}>🤖</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>Ayush's Assistant</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.72rem', color: '#7878a0' }}>
                  <motion.span
                    style={{ width: 6, height: 6, borderRadius: '50%', background: '#00e5a0', display: 'inline-block' }}
                    animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  Online
                </div>
              </div>
              {screenId !== 'main' && (
                <motion.button
                  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                  onClick={() => { setScreenId('main'); setExtra(null) }}
                  style={{
                    marginLeft: 'auto', background: 'rgba(124,92,255,0.15)',
                    border: '1px solid rgba(124,92,255,0.3)', borderRadius: 8,
                    color: '#9090d0', fontSize: '0.72rem', padding: '0.25rem 0.6rem',
                    cursor: 'pointer', fontWeight: 600,
                  }}
                >🏠 Menu</motion.button>
              )}
            </div>

            {/* Content */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>

              {/* Bot message */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={screenId + (extra?.projectKey || '')}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.28 }}
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(124,92,255,0.15)',
                    borderRadius: '16px 16px 16px 4px',
                    padding: '0.8rem 1rem',
                    color: '#d0d0f0',
                  }}
                >
                  <RenderMsg text={screen.message} />
                </motion.div>
              </AnimatePresence>

              {/* Resume download buttons */}
              <AnimatePresence>
                {screen.resume && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.15 }}
                    style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}
                  >
                    {(screen.resume === 'sde' || screen.resume === 'both') && (
                      <motion.a
                        whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                        href="/Ayush_Chaudhary_SDE_Resume.pdf"
                        download="Ayush_Chaudhary_SDE_Resume.pdf"
                        style={{
                          padding: '0.4rem 0.9rem', borderRadius: 8,
                          background: 'linear-gradient(135deg, #7c5cff, #5535cc)',
                          color: '#fff', fontWeight: 600, fontSize: '0.76rem',
                          textDecoration: 'none', display: 'inline-block',
                        }}
                      >⬇ SDE Resume</motion.a>
                    )}
                    {(screen.resume === 'analyst' || screen.resume === 'both') && (
                      <motion.a
                        whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                        href="/Ayush_Chaudhary_Analyst_Resume.pdf"
                        download="Ayush_Chaudhary_Analyst_Resume.pdf"
                        style={{
                          padding: '0.4rem 0.9rem', borderRadius: 8,
                          background: 'linear-gradient(135deg, #00cfff, #0090bb)',
                          color: '#fff', fontWeight: 600, fontSize: '0.76rem',
                          textDecoration: 'none', display: 'inline-block',
                        }}
                      >⬇ Analyst Resume</motion.a>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              <div ref={scrollRef} />
            </div>

            {/* Option buttons */}
            <div style={{
              padding: '0.75rem',
              borderTop: '1px solid rgba(124,92,255,0.12)',
              display: 'flex', flexDirection: 'column', gap: '0.45rem',
              flexShrink: 0,
            }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={screenId + '-opts'}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}
                >
                  {screen.options.map((opt, i) => (
                    <motion.button
                      key={opt.label}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ x: 4, background: 'rgba(124,92,255,0.2)' }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => handleOption(opt)}
                      style={{
                        padding: '0.5rem 0.9rem', borderRadius: 10, textAlign: 'left',
                        background: 'rgba(124,92,255,0.08)',
                        border: '1px solid rgba(124,92,255,0.2)',
                        color: '#c0c0e8', fontWeight: 500, fontSize: '0.8rem',
                        cursor: 'pointer', transition: 'background 0.2s',
                        fontFamily: 'Inter, sans-serif',
                      }}
                    >
                      {opt.label}
                    </motion.button>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
