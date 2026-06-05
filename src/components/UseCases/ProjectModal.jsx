import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.75)',
          backdropFilter: 'blur(8px)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}
      >
        <motion.div
          key="modal"
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            background: 'var(--bg2)',
            border: '1px solid var(--border)',
            borderRadius: '20px 20px 0 0',
            padding: '48px',
            maxWidth: 900,
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            position: 'relative',
          }}
        >
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 3,
            background: 'linear-gradient(90deg, #7B1818, #E85D04, #FAC405)',
            borderRadius: '20px 20px 0 0',
          }} />

          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              position: 'absolute', top: 20, right: 20,
              background: 'var(--maroon)',
              border: 'none',
              color: 'var(--cream)',
              width: 36, height: 36,
              borderRadius: '50%',
              fontSize: 16,
              cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >✕</button>

          <p className="eyebrow">Case {project.id} · {project.category}</p>
          <h2 style={{ color: 'var(--cream)', marginTop: 8, marginBottom: 4 }}>{project.title}</h2>
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 14,
            fontStyle: 'italic',
            color: 'var(--orange)',
            marginBottom: 32,
          }}>{project.brand}</p>

          <div style={{
            background: 'var(--bg3)',
            border: '1px solid var(--border)',
            borderRadius: 12,
            height: 200,
            marginBottom: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--muted)',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 12,
          }}>[ Live project screenshot ]</div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 24,
            marginBottom: 40,
          }}>
            {[
              { label: 'Challenge', text: project.challenge },
              { label: 'Solution', text: project.solution },
              { label: 'Value', text: project.value },
            ].map(({ label, text }) => (
              <div key={label} style={{
                background: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: 10,
                padding: 20,
              }}>
                <div style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: 10,
                  color: 'var(--yellow)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.18em',
                  marginBottom: 10,
                }}>{label}</div>
                <p style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 14,
                  color: 'var(--muted)',
                  lineHeight: 1.65,
                }}>{text}</p>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32 }}>
            {project.tags.map((t) => <span key={t} className="tag-pill">{t}</span>)}
          </div>

          <div style={{
            background: 'rgba(232,93,4,0.08)',
            border: '1px solid rgba(232,93,4,0.3)',
            borderRadius: 10,
            padding: '20px 24px',
          }}>
            <div style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 10,
              color: 'var(--orange)',
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              marginBottom: 8,
            }}>What this shows recruiters</div>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 14,
              color: 'var(--cream)',
              lineHeight: 1.6,
            }}>{project.recruiterInsight}</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
