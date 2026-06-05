import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { capabilities } from '../data/capabilities';

function CapabilityCard({ cap, index }) {
  const barRef = useRef(null);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.width = cap.fill + '%';
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [cap.fill]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ borderLeftColor: 'var(--orange)' }}
      style={{
        background: 'var(--card)',
        borderLeft: '3px solid var(--maroon)',
        borderTop: '1px solid var(--border)',
        borderRight: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        borderRadius: '0 10px 10px 0',
        padding: '24px',
        transition: 'border-left-color 0.25s',
      }}
    >
      <h3 style={{ color: 'var(--cream)', marginBottom: 8, fontSize: 18 }}>{cap.title}</h3>
      <p style={{
        fontFamily: 'DM Sans, sans-serif',
        fontSize: 14,
        color: 'var(--muted)',
        lineHeight: 1.6,
        marginBottom: 16,
      }}>{cap.description}</p>

      <div style={{
        height: 3,
        background: 'rgba(255,255,255,0.06)',
        borderRadius: 2,
        overflow: 'hidden',
      }}>
        <div
          ref={barRef}
          style={{
            height: '100%',
            width: 0,
            background: 'linear-gradient(90deg, var(--orange), var(--yellow))',
            borderRadius: 2,
            transition: 'width 1.2s ease',
            willChange: 'width',
          }}
        />
      </div>
    </motion.div>
  );
}

export default function Capabilities() {
  return (
    <section id="capabilities" style={{ background: 'var(--bg3)' }}>
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Capability Areas</p>
          <h2 style={{ color: 'var(--cream)', marginBottom: 16 }}>Grouped by business outcome.</h2>
          <p>Not a skills list. These are the outcomes I've been hired to deliver.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
          {capabilities.map((cap, i) => (
            <CapabilityCard key={cap.title} cap={cap} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
