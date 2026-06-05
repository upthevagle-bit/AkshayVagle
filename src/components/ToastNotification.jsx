import { motion, AnimatePresence } from 'framer-motion';

export default function ToastNotification({ message, visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 60, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: 60, x: '-50%' }}
          style={{
            position: 'fixed',
            bottom: 100,
            left: '50%',
            zIndex: 9998,
            background: 'linear-gradient(90deg, var(--orange), var(--yellow))',
            color: '#1A0A02',
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 700,
            fontSize: 15,
            padding: '16px 28px',
            borderRadius: 12,
            boxShadow: '0 8px 32px rgba(232,93,4,0.4)',
            whiteSpace: 'nowrap',
          }}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
