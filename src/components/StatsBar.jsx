import { useCountUp } from '../hooks/useCountUp';

function StatItem({ label, sub, staticDisplay, target }) {
  const { count, ref } = useCountUp(target || 0, 2000);

  function formatCount(n) {
    if (target >= 1000000) return '$2M+';
    if (target >= 1000) return '5K+';
    return n + '+';
  }

  return (
    <div ref={ref} style={{
      textAlign: 'center',
      padding: '40px 16px',
      borderRight: '1px solid var(--border)',
      flex: '1 1 180px',
    }}>
      <div style={{
        fontFamily: 'Playfair Display, serif',
        fontWeight: 900,
        fontSize: 38,
        color: 'var(--yellow)',
        lineHeight: 1,
        marginBottom: 8,
      }}>
        {staticDisplay || formatCount(count)}
      </div>
      <div style={{
        fontFamily: 'DM Sans, sans-serif',
        fontWeight: 500,
        fontSize: 11,
        color: 'var(--muted)',
        textTransform: 'uppercase',
        letterSpacing: '0.12em',
        marginBottom: 4,
      }}>{label}</div>
      <div style={{
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: 10,
        color: 'var(--muted)',
        fontStyle: 'italic',
      }}>{sub}</div>
    </div>
  );
}

export default function StatsBar() {
  return (
    <div style={{
      background: 'var(--bg2)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
    }}>
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <StatItem target={2000000} label="Wholesale Revenue Supported" sub="Retail, wholesale & eCommerce" />
          <StatItem target={5000} label="Products Managed" sub="Across all channels" />
          <StatItem target={5} label="Live Digital Products" sub="Built & deployed" />
          <div style={{
            flex: '1 1 180px',
            textAlign: 'center',
            padding: '40px 16px',
            borderRight: '1px solid var(--border)',
          }}>
            <div style={{
              fontFamily: 'Playfair Display, serif',
              fontWeight: 900,
              fontSize: 38,
              color: 'var(--yellow)',
              marginBottom: 8,
            }}>Google ✓</div>
            <div style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 500,
              fontSize: 11,
              color: 'var(--muted)',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              marginBottom: 4,
            }}>Analytics & Ads Certified</div>
            <div style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 10,
              color: 'var(--muted)',
              fontStyle: 'italic',
            }}>Verified May 2026</div>
          </div>
          <div style={{
            flex: '1 1 180px',
            textAlign: 'center',
            padding: '40px 16px',
          }}>
            <div style={{
              fontFamily: 'Playfair Display, serif',
              fontWeight: 900,
              fontSize: 38,
              color: 'var(--yellow)',
              marginBottom: 8,
            }}>MBA</div>
            <div style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 500,
              fontSize: 11,
              color: 'var(--muted)',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              marginBottom: 4,
            }}>Business Foundation</div>
            <div style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 10,
              color: 'var(--muted)',
              fontStyle: 'italic',
            }}>High Distinctions</div>
          </div>
        </div>
      </div>
    </div>
  );
}
