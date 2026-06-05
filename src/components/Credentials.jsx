import { motion } from 'framer-motion';
import { credentials } from '../data/credentials';

export default function Credentials() {
  return (
    <section id="credentials">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Verified Credentials</p>
          <h2 style={{ color: 'var(--cream)', marginBottom: 16 }}>Formal proof behind the practical work.</h2>
          <p>Every credential links to its public verification page.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
          {credentials.map((cred, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{
                background: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: 10,
                padding: '24px',
                transition: 'border-color 0.25s',
              }}
              whileHover={{ borderColor: 'rgba(250,196,5,0.5)' }}
            >
              <div style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: 10,
                color: 'var(--yellow)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: 8,
              }}>{cred.issuer}</div>

              <div style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 600,
                fontSize: 15,
                color: 'var(--cream)',
                marginBottom: 6,
                lineHeight: 1.4,
              }}>{cred.name}</div>

              <div style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: 10,
                color: 'var(--muted)',
                marginBottom: 4,
              }}>
                {cred.date}{cred.id ? ` · ID: ${cred.id}` : ''}
              </div>

              {cred.note && (
                <div style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: 10,
                  color: 'var(--muted)',
                  marginBottom: 12,
                }}>{cred.note}</div>
              )}

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 16 }}>
                <span style={{
                  background: 'rgba(232,93,4,0.15)',
                  border: '1px solid rgba(232,93,4,0.4)',
                  color: 'var(--orange)',
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 11,
                  padding: '3px 10px',
                  borderRadius: 10,
                }}>Verified ✓</span>

                {cred.link && (
                  <a
                    href={cred.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: 12,
                      color: 'var(--orange)',
                      fontWeight: 600,
                    }}
                  >Verify Credential →</a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
