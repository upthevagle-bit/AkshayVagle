const categories = ['ALL', 'Lead Gen', 'Analytics', 'eCommerce', 'Builds', 'Automation', 'AI'];

export default function FilterBar({ active, onChange }) {
  return (
    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 40 }}>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          style={{
            padding: '8px 18px',
            borderRadius: 20,
            border: '1px solid var(--orange)',
            background: active === cat ? 'var(--orange)' : 'transparent',
            color: active === cat ? '#1A0A02' : 'var(--orange)',
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 13,
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
        >{cat}</button>
      ))}
    </div>
  );
}
