import { useState } from 'react'
import { motion } from 'framer-motion'
import { Section, SectionHeader } from './Section'
import { GitHubIcon, LinkedInIcon, KaggleIcon, EmailIcon, PhoneIcon } from './Icons'

const WEB3FORMS_KEY = 'cd037979-a08e-4b11-9541-5b589253d040'

const links = [
  { icon: <EmailIcon size={18} />,    label: 'Email',    value: 'ayushiaf.ac@gmail.com',        href: 'mailto:ayushiaf.ac@gmail.com',                              color: '#7c5cff' },
  { icon: <PhoneIcon size={18} />,    label: 'Phone',    value: '+91 8210970317',                href: 'tel:+918210970317',                                         color: '#7c5cff' },
  { icon: <GitHubIcon size={18} />,   label: 'GitHub',   value: 'github.com/AyushChaudhary2003', href: 'https://github.com/AyushChaudhary2003',                     color: '#eeeef8' },
  { icon: <LinkedInIcon size={18} />, label: 'LinkedIn', value: 'linkedin.com/in/ayush-chaudhary', href: 'https://www.linkedin.com/in/ayush-chaudhary-652598259/', color: '#0a66c2' },
  { icon: <KaggleIcon size={18} />,   label: 'Kaggle',   value: 'kaggle.com/ayushchaudhary2411', href: 'https://www.kaggle.com/ayushchaudhary2411',                 color: '#20beff' },
]

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const formData = new FormData(e.target)
    formData.append('access_key', WEB3FORMS_KEY)
    formData.append('subject', 'From the Portfolio')
    formData.append('from_name', 'Ayush Portfolio')
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData })
      const data = await res.json()
      if (data.success) { setStatus('sent'); e.target.reset(); setTimeout(() => setStatus('idle'), 4000) }
      else { setStatus('error'); setTimeout(() => setStatus('idle'), 4000) }
    } catch { setStatus('error'); setTimeout(() => setStatus('idle'), 4000) }
  }

  const btnLabel = { idle: 'Send Message ✈️', sending: 'Sending…', sent: '✅ Message Sent!', error: '❌ Failed — try again' }[status]
  const btnBg    = { idle: 'linear-gradient(135deg, #7c5cff, #5535cc)', sending: 'linear-gradient(135deg, #444,#333)', sent: 'linear-gradient(135deg, #00e5a0, #00b57d)', error: 'linear-gradient(135deg, #ff4444, #bb2222)' }[status]

  return (
    <Section id="contact">
      <SectionHeader label="contact" title="Let's Connect" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'start' }}>
        <div>
          <p style={{ color: '#7878a0', lineHeight: 1.85, marginBottom: '2rem' }}>
            I'm open to <strong style={{ color: '#eeeef8' }}>internship</strong>, <strong style={{ color: '#eeeef8' }}>full-time</strong>, and <strong style={{ color: '#eeeef8' }}>freelance</strong> opportunities. Have a project or role in mind? Let's talk!
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            {links.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ x: 6, borderColor: '#7c5cff' }}
                style={{
                  display: 'flex', alignItems: 'center', gap: '1rem',
                  background: 'rgba(18,18,42,0.85)', border: '1px solid rgba(110,80,255,0.15)',
                  borderRadius: 12, padding: '0.9rem 1.2rem',
                  backdropFilter: 'blur(12px)', transition: 'all 0.25s',
                }}
              >
                <div style={{
                  width: 38, height: 38, borderRadius: 10,
                  background: `${l.color}18`, border: `1px solid ${l.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: l.color, flexShrink: 0,
                }}>
                  {l.icon}
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 500 }}>{l.value}</div>
                  <div style={{ fontSize: '0.74rem', color: '#7878a0' }}>{l.label}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            background: 'rgba(18,18,42,0.85)', border: '1px solid rgba(110,80,255,0.15)',
            borderRadius: 20, padding: '2rem', backdropFilter: 'blur(12px)',
          }}
        >
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
            {[
              { id: 'name', label: 'Your Name', type: 'text', placeholder: 'Jane Recruiter' },
              { id: 'email', label: 'Email Address', type: 'email', placeholder: 'jane@company.com' },
            ].map(field => (
              <div key={field.id}>
                <label htmlFor={field.id} style={{ display: 'block', fontSize: '0.78rem', color: '#7878a0', marginBottom: '0.4rem', fontWeight: 500 }}>
                  {field.label}
                </label>
                <input
                  id={field.id} name={field.id} type={field.type} placeholder={field.placeholder} required
                  style={{
                    width: '100%', padding: '0.75rem 1rem',
                    background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(110,80,255,0.18)',
                    borderRadius: 8, color: '#eeeef8', fontFamily: 'Inter, sans-serif',
                    fontSize: '0.9rem', outline: 'none', transition: 'border-color 0.2s',
                  }}
                  onFocus={e => e.target.style.borderColor = '#7c5cff'}
                  onBlur={e => e.target.style.borderColor = 'rgba(110,80,255,0.18)'}
                />
              </div>
            ))}
            <div>
              <label htmlFor="message" style={{ display: 'block', fontSize: '0.78rem', color: '#7878a0', marginBottom: '0.4rem', fontWeight: 500 }}>Message</label>
              <textarea
                id="message" name="message" required placeholder="Hi Ayush, I'd love to discuss an opportunity..." rows={4}
                style={{
                  width: '100%', padding: '0.75rem 1rem',
                  background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(110,80,255,0.18)',
                  borderRadius: 8, color: '#eeeef8', fontFamily: 'Inter, sans-serif',
                  fontSize: '0.9rem', outline: 'none', resize: 'vertical', transition: 'border-color 0.2s',
                }}
                onFocus={e => e.target.style.borderColor = '#7c5cff'}
                onBlur={e => e.target.style.borderColor = 'rgba(110,80,255,0.18)'}
              />
            </div>
            <motion.button
              type="submit"
              disabled={status === 'sending'}
              whileHover={{ scale: status === 'sending' ? 1 : 1.02, boxShadow: '0 8px 30px rgba(124,92,255,0.5)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: '0.85rem',
                background: btnBg,
                color: '#fff', fontWeight: 700, fontSize: '0.9rem',
                border: 'none', borderRadius: 10,
                boxShadow: '0 4px 20px rgba(124,92,255,0.35)',
                transition: 'background 0.3s',
                cursor: status === 'sending' ? 'not-allowed' : 'pointer',
              }}
            >
              {btnLabel}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </Section>
  )
}
