import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

function CountUp({ target, suffix = '+', duration = 2000 }) {
  const [val, setVal] = useState(0)
  const started = useRef(false)
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true
        const steps = 60
        const inc = target / steps
        let cur = 0
        const timer = setInterval(() => {
          cur = Math.min(cur + inc, target)
          setVal(Math.floor(cur))
          if (cur >= target) clearInterval(timer)
        }, duration / steps)
      }
    }, { threshold: 0.5 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, duration])

  return <span ref={ref}>{val}{suffix}</span>
}

const particles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  duration: Math.random() * 8 + 5,
  delay: Math.random() * 4,
}))

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden', padding: '6rem 2rem 4rem',
    }}>
      {/* Gradient orbs */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 80% 70% at 50% 30%, rgba(124,92,255,0.18) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,207,255,0.08) 0%, transparent 70%)',
        top: '20%', right: '-10%', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,107,189,0.06) 0%, transparent 70%)',
        bottom: '10%', left: '-5%', pointerEvents: 'none',
      }} />

      {/* Grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(124,92,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(124,92,255,0.05) 1px, transparent 1px)',
        backgroundSize: '70px 70px', pointerEvents: 'none',
      }} />

      {/* Floating particles */}
      {particles.map(p => (
        <motion.div key={p.id}
          style={{
            position: 'absolute', left: `${p.x}%`, top: `${p.y}%`,
            width: p.size, height: p.size, borderRadius: '50%',
            background: p.id % 3 === 0 ? '#7c5cff' : p.id % 3 === 1 ? '#00cfff' : '#ff6bbd',
            opacity: 0.5, pointerEvents: 'none',
          }}
          animate={{ y: [0, -30, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      <div style={{ position: 'relative', textAlign: 'center', maxWidth: 820 }}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'rgba(124,92,255,0.12)', border: '1px solid rgba(124,92,255,0.35)',
            color: '#7c5cff', padding: '0.4rem 1.1rem', borderRadius: 50,
            fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.5px', marginBottom: '1.5rem',
          }}
        >
          <motion.span
            style={{ width: 7, height: 7, borderRadius: '50%', background: '#7c5cff', display: 'inline-block' }}
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          Open to Opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: 900,
            lineHeight: 1.05, letterSpacing: '-3px', marginBottom: '0.6rem',
            background: 'linear-gradient(135deg, #ffffff 0%, #c8baff 40%, #00cfff 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}
        >
          Ayush Chaudhary
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ fontSize: 'clamp(1rem, 2.5vw, 1.3rem)', color: '#7878a0', marginBottom: '1.2rem', fontWeight: 400 }}
        >
          Software Developer &amp;{' '}
          <span style={{ color: '#00cfff', fontWeight: 600 }}>Data Analyst</span>
        </motion.p>

        {/* Desc */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{ fontSize: '0.97rem', color: '#6060a0', maxWidth: 560, margin: '0 auto 2.5rem', lineHeight: 1.8 }}
        >
          B.Tech Computer Engineering · Delhi Technological University · Building full-stack apps and data-driven solutions.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 35px rgba(124,92,255,0.5)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: '0.8rem 2rem', borderRadius: 10,
              background: 'linear-gradient(135deg, #7c5cff, #5535cc)',
              color: '#fff', fontWeight: 700, fontSize: '0.92rem',
              boxShadow: '0 4px 20px rgba(124,92,255,0.35)',
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
            }}
          >
            🚀 View Projects
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, borderColor: '#7c5cff', color: '#7c5cff' }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: '0.8rem 2rem', borderRadius: 10,
              background: 'transparent', color: '#eeeef8', fontWeight: 600, fontSize: '0.92rem',
              border: '1px solid rgba(110,80,255,0.3)',
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              transition: 'all 0.2s',
            }}
          >
            ✉️ Contact Me
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          style={{ display: 'flex', gap: '3rem', justifyContent: 'center', marginTop: '4rem', flexWrap: 'wrap' }}
        >
          {[
            { count: 600, suffix: '+', label: 'DSA Problems' },
            { count: 5, suffix: '', label: 'Projects Built' },
            { count: 40, suffix: '%', label: 'Processing Time Saved' },
          ].map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '2.2rem', fontWeight: 900,
                background: 'linear-gradient(135deg, #7c5cff, #00cfff)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>
                <CountUp target={s.count} suffix={s.suffix} />
              </div>
              <div style={{ fontSize: '0.78rem', color: '#6060a0', marginTop: '0.2rem' }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
          color: '#4040608', fontSize: '0.75rem', display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: '0.3rem', color: '#404060',
        }}
      >
        <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, transparent, #7c5cff)' }} />
        scroll
      </motion.div>
    </section>
  )
}
