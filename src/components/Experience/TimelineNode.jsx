import { motion } from 'framer-motion';

export default function TimelineNode({ entry, index, isLast }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{
        display: 'grid',
        gridTemplateColumns: '110px 24px 1fr',
        gap: '0 20px',
        alignItems: 'flex-start',
      }}
    >
      <div style={{
        fontFamily: 'Playfair Display, serif',
        fontWeight: 700,
        fontSize: 15,
        color: 'var(--yellow)',
        textAlign: 'right',
        paddingTop: 18,
        lineHeight: 1.3,
      }}>{entry.year}</div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{
          width: 14, height: 14,
          borderRadius: '50%',
          background: 'var(--orange)',
          border: '3px solid var(--bg2)',
          marginTop: 18,
          flexShrink: 0,
          position: 'relative',
          zIndex: 1,
        }} />
        {!isLast && (
          <div style={{
            width: 2,
            background: 'var(--maroon)',
            flexGrow: 1,
            minHeight: 60,
            marginTop: 4,
          }} />
        )}
      </div>

      <div style={{
        background: 'var(--card)',
        border: '1px solid var(--border)',
        borderRadius: 10,
        padding: '20px 24px',
        marginBottom: 20,
      }}>
        <div style={{
          fontFamily: 'DM Sans, sans-serif',
          fontWeight: 600,
          fontSize: 15,
          color: 'var(--cream)',
          marginBottom: 4,
        }}>{entry.company}</div>
        <div style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: 14,
          color: 'var(--orange)',
          marginBottom: 8,
        }}>{entry.role}</div>
        <p style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: 14,
          color: 'var(--muted)',
          lineHeight: 1.6,
          marginBottom: 12,
        }}>{entry.summary}</p>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {entry.tags.map((t) => <span key={t} className="tag-pill">{t}</span>)}
        </div>
      </div>
    </motion.div>
  );
}
