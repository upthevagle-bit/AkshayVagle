import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [showScroll, setShowScroll] = useState(true);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -150]);

  useEffect(() => {
    const handler = () => setShowScroll(window.scrollY < 100);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: 120,
      paddingBottom: 80,
    }}>
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: 500, height: 500,
        background: 'radial-gradient(circle, rgba(232,93,4,0.18) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0,
        width: 360, height: 360,
        background: 'radial-gradient(circle, rgba(250,196,5,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        <motion.div style={{ y }}>
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Melbourne, AU · Open to Work · MBA · Google Certified
          </motion.p>

          <h1 style={{ marginBottom: 24, marginTop: 16 }}>
            {[
              { word: 'Akshay', color: 'var(--cream)', shadow: 'none' },
              { word: 'Singh', color: 'var(--yellow)', shadow: '0 0 40px rgba(250,196,5,0.3)' },
              { word: 'Vagle', color: 'var(--yellow)', shadow: '0 0 40px rgba(250,196,5,0.3)' },
            ].map(({ word, color, shadow }, i) => (
              <motion.span
                key={word}
                style={{
                  display: 'block',
                  color,
                  textShadow: shadow,
                  willChange: 'transform',
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 500,
              fontSize: 15,
              color: 'var(--orange-light)',
              textTransform: 'uppercase',
              letterSpacing: '0.14em',
              marginBottom: 20,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Digital Marketing · eCommerce · Analytics · Business Operations
          </motion.p>

          <motion.p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 18,
              color: 'var(--muted)',
              maxWidth: 580,
              lineHeight: 1.8,
              marginBottom: 32,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            I build digital systems that help businesses generate leads, improve customer
            experience, benchmark performance, and make better marketing decisions.
          </motion.p>

          <motion.div
            style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 40 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {[
              'Lead generation systems',
              'Customer experience tools',
              'Marketing dashboards',
              'eCommerce workflows',
            ].map((chip) => (
              <span key={chip} style={{
                padding: '6px 14px',
                borderRadius: 20,
                border: '1px solid var(--orange)',
                background: 'var(--glow-orange)',
                color: 'var(--orange-light)',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 13,
              }}>{chip}</span>
            ))}
          </motion.div>

          <motion.div
            style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center', marginBottom: 48 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <a href="#use-cases" style={{
              background: 'var(--orange)',
              color: '#fff',
              padding: '14px 28px',
              borderRadius: 30,
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 600,
              fontSize: 15,
            }}>View Use Cases</a>
            <a href="/resume/Akshay-Vagle-Resume.pdf" download style={{
              border: '2px solid var(--yellow)',
              color: 'var(--yellow)',
              padding: '12px 28px',
              borderRadius: 30,
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 600,
              fontSize: 15,
            }}>Download Resume</a>
            <a
              href="https://www.linkedin.com/in/akshayvagle/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--muted)', fontFamily: 'DM Sans, sans-serif', fontSize: 14 }}
            >View LinkedIn ↗</a>
          </motion.div>

          <motion.div
            style={{
              borderTop: '1px solid var(--border)',
              paddingTop: 20,
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 11,
              color: 'var(--muted)',
              letterSpacing: '0.05em',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            MBA (Digital Marketing)&nbsp;&nbsp;·&nbsp;&nbsp;Google Analytics Certified&nbsp;&nbsp;·&nbsp;&nbsp;Google Ads Certified&nbsp;&nbsp;·&nbsp;&nbsp;Professional Engineer
          </motion.div>
        </motion.div>
      </div>

      {showScroll && (
        <div style={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          animation: 'bounce 1.5s ease infinite',
          color: 'var(--muted)',
          fontSize: 28,
          lineHeight: 1,
        }}>⌄</div>
      )}
    </section>
  );
}
