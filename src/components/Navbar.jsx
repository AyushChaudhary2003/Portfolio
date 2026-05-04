import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = links.map(l => document.getElementById(l.toLowerCase()))
      sections.forEach(sec => {
        if (sec && window.scrollY >= sec.offsetTop - 120) setActive(sec.id)
      })
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed', top: 0, width: '100%', zIndex: 1000,
        background: scrolled ? 'rgba(7,7,16,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(110,80,255,0.15)' : '1px solid transparent',
        padding: '1rem 2.5rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        transition: 'all 0.4s ease',
      }}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        style={{
          fontSize: '1.4rem', fontWeight: 900, letterSpacing: '-1px',
          background: 'linear-gradient(135deg, #7c5cff, #00cfff)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        }}
      >
        AC.
      </motion.div>

      {/* Desktop links */}
      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0 }} className="nav-desktop">
        {links.map(link => (
          <motion.li key={link} whileHover={{ y: -2 }}>
            <a
              href={`#${link.toLowerCase()}`}
              style={{
                color: active === link.toLowerCase() ? '#7c5cff' : '#7878a0',
                fontSize: '0.88rem', fontWeight: 500,
                transition: 'color 0.2s',
                position: 'relative',
              }}
            >
              {link}
              {active === link.toLowerCase() && (
                <motion.div
                  layoutId="nav-indicator"
                  style={{
                    position: 'absolute', bottom: -4, left: 0, right: 0,
                    height: 2, background: '#7c5cff', borderRadius: 1,
                  }}
                />
              )}
            </a>
          </motion.li>
        ))}
      </ul>

      {/* Hamburger (mobile) */}
      <motion.button
        className="nav-hamburger"
        onClick={() => setMenuOpen(o => !o)}
        whileTap={{ scale: 0.9 }}
        style={{
          display: 'none', background: 'transparent', border: 'none',
          color: '#eeeef8', fontSize: '1.4rem', cursor: 'pointer', padding: '0.2rem',
        }}
      >
        {menuOpen ? '✕' : '☰'}
      </motion.button>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute', top: '100%', left: 0, right: 0,
              background: 'rgba(7,7,16,0.97)', backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(110,80,255,0.2)',
              listStyle: 'none', padding: '1rem 2rem', display: 'flex',
              flexDirection: 'column', gap: '1.2rem',
            }}
          >
            {links.map(link => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  style={{ color: '#eeeef8', fontWeight: 600, fontSize: '1rem' }}
                >
                  {link}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      <style>{`
        @media(max-width:768px){
          .nav-desktop{ display:none !important; }
          .nav-hamburger{ display:flex !important; }
        }
      `}</style>
    </motion.nav>
  )
}
