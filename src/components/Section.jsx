import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function Section({ id, children, dark }) {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section id={id} ref={ref} style={{
      padding: '6rem 2rem',
      background: dark ? 'rgba(10,10,25,0.9)' : 'transparent',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}

export { Section }

export function SectionHeader({ label, title }) {
  return (
    <div style={{ marginBottom: '3rem' }}>
      <h2 style={{
        fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 900,
        letterSpacing: '-1.5px', marginBottom: '0.8rem',
      }}>{title}</h2>
      <div style={{
        width: 50, height: 3,
        background: 'linear-gradient(90deg, #7c5cff, #00cfff)',
        borderRadius: 2,
      }} />
    </div>
  )
}
