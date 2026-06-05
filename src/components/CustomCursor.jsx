import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    let x = 0, y = 0;
    let cx = 0, cy = 0;

    function onMove(e) {
      x = e.clientX;
      y = e.clientY;
    }

    window.addEventListener('mousemove', onMove);

    let raf;
    function animate() {
      cx += (x - cx) * 0.15;
      cy += (y - cy) * 0.15;
      if (dot) {
        dot.style.transform = `translate(${cx - 12}px, ${cy - 12}px)`;
      }
      raf = requestAnimationFrame(animate);
    }
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 24,
        height: 24,
        borderRadius: '50%',
        background: 'var(--orange)',
        pointerEvents: 'none',
        zIndex: 99999,
        mixBlendMode: 'difference',
        willChange: 'transform',
      }}
    />
  );
}
