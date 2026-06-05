import { motion, AnimatePresence } from 'framer-motion';

export default function RecruiterSidebar({ visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ x: 280, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 280, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          style={{
            position: 'fixed',
            top: '50%',
            right: 0,
            transform: 'translateY(-50%)',
            zIndex: 150,
            background: 'var(--bg2)',
            border: '1px solid rgba(250,196,5,0.3)',
            borderRight: 'none',
            borderRadius: '12px 0 0 12px',
            padding: '24px 20px',
            width: 220,
          }}
        >
          <div style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 10,
            color: 'var(--yellow)',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            marginBottom: 16,
          }}>Recruiter Snapshot</div>

          <div style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 13,
            color: 'var(--cream)',
            marginBottom: 16,
            lineHeight: 1.8,
          }}>
            <div>Digital Marketing Lead</div>
            <div>eCommerce Manager</div>
            <div>Marketing Operations</div>
          </div>

          {[
            { value: '$2M+', label: 'Revenue Supported' },
            { value: '5K+', label: 'Products Managed' },
            { value: '5+', label: 'Live Digital Products' },
          ].map(({ value, label }) => (
            <div key={label} style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 8,
              paddingBottom: 8,
              borderBottom: '1px solid var(--border)',
            }}>
              <span style={{
                fontFamily: 'Playfair Display, serif',
                fontWeight: 700,
                fontSize: 18,
                color: 'var(--yellow)',
              }}>{value}</span>
              <span style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 11,
                color: 'var(--muted)',
              }}>{label}</span>
            </div>
          ))}

          <a
            href="/resume/Akshay-Vagle-Resume.pdf"
            download
            style={{
              display: 'block',
              background: 'var(--orange)',
              color: '#fff',
              textAlign: 'center',
              padding: '10px',
              borderRadius: 8,
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 13,
              fontWeight: 600,
              marginTop: 16,
              marginBottom: 12,
            }}
          >Download Resume</a>

          <div style={{ display: 'flex', alignItems: 'center', gap: 6, justifyContent: 'center' }}>
            <span style={{
              width: 7, height: 7, borderRadius: '50%',
              background: '#22c55e',
              display: 'inline-block',
              animation: 'pulse 2s ease infinite',
              flexShrink: 0,
            }} />
            <span style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 10,
              color: 'var(--cream)',
            }}>Available immediately</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
