import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingContactBtn() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#contact"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: 'spring', damping: 15, stiffness: 200 }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          aria-label="Contact me"
          style={{
            position: 'fixed',
            bottom: 32,
            right: 32,
            zIndex: 200,
            background: 'var(--orange)',
            borderRadius: 26,
            height: 52,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            padding: hovered ? '0 20px' : '0',
            minWidth: 52,
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            boxShadow: '0 4px 24px rgba(232,93,4,0.4)',
            transition: 'padding 0.25s ease, min-width 0.25s ease',
          }}
        >
          <span style={{ fontSize: 20, flexShrink: 0 }}>✉</span>
          <AnimatePresence>
            {hovered && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 600,
                  fontSize: 14,
                  color: '#fff',
                  overflow: 'hidden',
                }}
              >Let's talk</motion.span>
            )}
          </AnimatePresence>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
