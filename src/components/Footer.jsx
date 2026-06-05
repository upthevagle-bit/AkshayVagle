export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg)',
      borderTop: '1px solid var(--border)',
      padding: '40px 0',
    }}>
      <div
        className="container footer-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          alignItems: 'center',
          gap: 20,
        }}
      >
        <div style={{
          fontFamily: 'Playfair Display, serif',
          fontWeight: 700,
          fontSize: 18,
          color: 'var(--yellow)',
        }}>Akshay Singh Vagle</div>

        <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
          {[
            { label: 'Use Cases', href: '#use-cases' },
            { label: 'Credentials', href: '#credentials' },
            { label: 'Contact', href: '#contact' },
          ].map(({ label, href }) => (
            <a key={label} href={href} style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 12,
              color: 'var(--muted)',
            }}>{label}</a>
          ))}
        </div>

        <div
          className="footer-right"
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 11,
            color: 'var(--muted)',
            textAlign: 'right',
          }}
        ><a href="tel:+61448657660" style={{ color: 'var(--muted)' }}>+61 448 657 660</a> · upthevagle@gmail.com · Melbourne, AU · 2026</div>
      </div>
    </footer>
  );
}
