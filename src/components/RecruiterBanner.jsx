export default function RecruiterBanner() {
  return (
    <div style={{
      background: 'linear-gradient(90deg, #7B1818 0%, #E85D04 50%, #FAC405 100%)',
      padding: '8px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '8px',
      position: 'relative',
      zIndex: 101,
    }}>
      <span style={{
        color: '#1A0A02',
        fontFamily: 'DM Sans, sans-serif',
        fontSize: 12,
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
      }}>
        Open to work in Melbourne · Digital Marketing · eCommerce · Analytics · Operations
      </span>
      <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <span style={{
          width: 8, height: 8, borderRadius: '50%',
          background: '#22c55e',
          animation: 'pulse 2s ease infinite',
          display: 'inline-block',
          flexShrink: 0,
        }} />
        <span style={{
          color: '#1A0A02',
          fontFamily: 'DM Sans, sans-serif',
          fontSize: 12,
          fontWeight: 700,
        }}>Available immediately</span>
      </span>
    </div>
  );
}
