import { motion } from 'framer-motion';

export default function ProjectCard({ project, onExplore, recruiterMode }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      style={{
        background: 'var(--card)',
        border: '1px solid var(--border)',
        borderRadius: 12,
        padding: '28px',
        position: 'relative',
        overflow: 'hidden',
        willChange: 'transform',
      }}
    >
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 3,
        background: 'linear-gradient(90deg, #7B1818, #E85D04, #FAC405)',
      }} />

      <span style={{
        position: 'absolute', top: 16, right: 16,
        background: 'var(--maroon)',
        color: 'var(--cream)',
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: 10,
        padding: '3px 10px',
        borderRadius: 10,
      }}>{project.category}</span>

      <div style={{
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: 11,
        color: 'var(--maroon-light)',
        textTransform: 'uppercase',
        marginTop: 8,
        marginBottom: 8,
      }}>Case {project.id}</div>

      <h3 style={{ color: 'var(--cream)', marginBottom: 4, fontSize: 20 }}>{project.title}</h3>
      <p style={{
        fontFamily: 'DM Sans, sans-serif',
        fontSize: 12,
        color: 'var(--orange)',
        fontStyle: 'italic',
        marginBottom: 20,
      }}>{project.brand}</p>

      {[
        { label: 'Challenge', text: project.challenge },
        { label: 'Solution', text: project.solution },
        { label: 'Value', text: project.value },
      ].map(({ label, text }) => (
        <div key={label} style={{ marginBottom: 12 }}>
          <div style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 10,
            color: 'var(--yellow)',
            textTransform: 'uppercase',
            letterSpacing: '0.18em',
            marginBottom: 4,
          }}>{label}</div>
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 14,
            color: 'var(--muted)',
            lineHeight: 1.65,
          }}>{text}</p>
        </div>
      ))}

      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', margin: '16px 0' }}>
        {project.tags.map((t) => <span key={t} className="tag-pill">{t}</span>)}
      </div>

      {recruiterMode && (
        <div style={{
          background: 'rgba(250,196,5,0.1)',
          border: '1px solid rgba(250,196,5,0.4)',
          borderRadius: 8,
          padding: '10px 14px',
          marginBottom: 12,
          fontFamily: 'DM Sans, sans-serif',
          fontSize: 12,
          color: 'var(--yellow)',
        }}>
          ★ Relevance: {project.recruiterInsight}
        </div>
      )}

      <button
        onClick={() => onExplore(project)}
        style={{
          background: 'none',
          border: 'none',
          color: 'var(--orange)',
          fontFamily: 'DM Sans, sans-serif',
          fontSize: 13,
          fontWeight: 600,
          cursor: 'pointer',
          padding: 0,
          marginTop: 4,
        }}
      >Explore →</button>
    </motion.div>
  );
}
