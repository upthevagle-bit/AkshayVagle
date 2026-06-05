import { useState, useEffect } from 'react';
import { useActiveSection } from '../hooks/useActiveSection';

export default function Nav({ recruiterMode, setRecruiterMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(['use-cases', 'experience', 'credentials', 'contact']);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const links = [
    { label: 'Use Cases', href: '#use-cases', id: 'use-cases' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Credentials', href: '#credentials', id: 'credentials' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .nav-desktop-links { display: none !important; }
          .nav-recruiter-toggle { display: none !important; }
          .nav-hamburger { display: flex !important; }
          .nav-resume-btn { display: none !important; }
        }
      `}</style>
      <nav style={{
        position: 'fixed',
        top: 36,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(26,10,2,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        transition: 'background 0.3s, backdrop-filter 0.3s',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
      }}>
        <div style={{
          maxWidth: 1120,
          margin: '0 auto',
          padding: '16px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
        }}>
          <a href="#" style={{
            fontFamily: 'Playfair Display, serif',
            fontWeight: 700,
            fontSize: 20,
            color: 'var(--yellow)',
            flexShrink: 0,
          }}>Akshay Vagle</a>

          <div className="nav-desktop-links" style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
            {links.map(({ label, href, id }) => (
              <a key={id} href={href} style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 14,
                fontWeight: 500,
                color: active === id ? 'var(--orange)' : 'var(--muted)',
                borderBottom: active === id ? '2px solid var(--orange)' : '2px solid transparent',
                paddingBottom: 2,
                transition: 'color 0.2s, border-color 0.2s',
              }}>{label}</a>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
            <label className="nav-recruiter-toggle" style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              cursor: 'pointer',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 12,
              color: 'var(--muted)',
              userSelect: 'none',
            }}>
              <span>💼</span>
              <span>Recruiter Mode</span>
              <div
                role="switch"
                aria-checked={recruiterMode}
                onClick={() => setRecruiterMode(!recruiterMode)}
                style={{
                  width: 40,
                  height: 22,
                  borderRadius: 11,
                  background: recruiterMode ? 'var(--orange)' : 'var(--maroon)',
                  position: 'relative',
                  transition: 'background 0.25s',
                  cursor: 'pointer',
                  flexShrink: 0,
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 3,
                  left: recruiterMode ? 21 : 3,
                  width: 16,
                  height: 16,
                  borderRadius: '50%',
                  background: '#fff',
                  transition: 'left 0.25s',
                }} />
              </div>
            </label>

            <a
              href="/resume/Akshay-Vagle-Resume.pdf"
              download
              className="nav-resume-btn"
              style={{
                background: 'var(--orange)',
                color: '#fff',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 13,
                fontWeight: 600,
                padding: '8px 18px',
                borderRadius: 24,
                whiteSpace: 'nowrap',
              }}
            >Download Resume</a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="nav-hamburger"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'none',
                flexDirection: 'column',
                gap: 5,
                padding: 4,
              }}
              aria-label="Toggle menu"
            >
              <span style={{ display: 'block', width: 24, height: 2, background: 'var(--cream)', borderRadius: 1 }} />
              <span style={{ display: 'block', width: 24, height: 2, background: 'var(--cream)', borderRadius: 1, opacity: menuOpen ? 0 : 1 }} />
              <span style={{ display: 'block', width: 24, height: 2, background: 'var(--cream)', borderRadius: 1 }} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div style={{
            background: 'rgba(26,10,2,0.97)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            borderTop: '1px solid var(--border)',
          }}>
            {links.map(({ label, href, id }) => (
              <a key={id} href={href} onClick={() => setMenuOpen(false)} style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 18,
                color: active === id ? 'var(--orange)' : 'var(--cream)',
              }}>{label}</a>
            ))}
            <a href="/resume/Akshay-Vagle-Resume.pdf" download style={{
              background: 'var(--orange)',
              color: '#fff',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 15,
              fontWeight: 600,
              padding: '12px 20px',
              borderRadius: 24,
              textAlign: 'center',
            }}>Download Resume</a>
          </div>
        )}
      </nav>
    </>
  );
}
