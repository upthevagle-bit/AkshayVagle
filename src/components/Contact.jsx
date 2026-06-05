import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" style={{
      background: 'var(--maroon)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600, height: 600,
        background: 'radial-gradient(circle, rgba(232,93,4,0.25) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ textAlign: 'center', position: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">Contact</p>
          <h2 style={{ color: 'var(--cream)', marginBottom: 20, marginTop: 12 }}>
            Looking for someone who can connect marketing, business and execution?
          </h2>
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 17,
            color: 'var(--text)',
            maxWidth: 600,
            margin: '0 auto 40px',
            lineHeight: 1.75,
          }}>
            Available for Digital Marketing, eCommerce, Analytics, Marketing Operations,
            Business Improvement and Project Coordination roles in Melbourne.
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 32 }}>
            <a href="/resume/Akshay-Vagle-Resume.pdf" download style={{
              background: 'var(--yellow)',
              color: '#1A0A02',
              padding: '14px 28px',
              borderRadius: 30,
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 15,
            }}>Download Resume</a>
            <a href="https://www.linkedin.com/in/akshayvagle/" target="_blank" rel="noopener noreferrer" style={{
              border: '2px solid var(--cream)',
              color: 'var(--cream)',
              padding: '12px 28px',
              borderRadius: 30,
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 600,
              fontSize: 15,
            }}>View LinkedIn ↗</a>
            <a href="mailto:upthevagle@gmail.com" style={{
              border: '2px solid var(--cream)',
              color: 'var(--cream)',
              padding: '12px 28px',
              borderRadius: 30,
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 600,
              fontSize: 15,
            }}>Email Me</a>
            <a href="tel:+61448657660" style={{
              border: '2px solid var(--cream)',
              color: 'var(--cream)',
              padding: '12px 28px',
              borderRadius: 30,
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 600,
              fontSize: 15,
            }}>📞 +61 448 657 660</a>
            <a href="https://akshay-vagle-portfolio.vercel.app" target="_blank" rel="noopener noreferrer" style={{
              border: '2px solid var(--cream)',
              color: 'var(--cream)',
              padding: '12px 28px',
              borderRadius: 30,
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 600,
              fontSize: 15,
            }}>View Portfolio ↗</a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            <span style={{
              width: 8, height: 8, borderRadius: '50%',
              background: '#22c55e',
              animation: 'pulse 2s ease infinite',
              display: 'inline-block',
              flexShrink: 0,
            }} />
            <span style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 11,
              color: 'var(--cream)',
              letterSpacing: '0.08em',
            }}>Available for immediate start · Melbourne & remote</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
