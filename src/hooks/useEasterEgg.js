import { useEffect, useState } from 'react';

export function useEasterEgg(onTrigger) {
  const [typed, setTyped] = useState('');

  useEffect(() => {
    function handleKey(e) {
      setTyped((prev) => {
        const next = (prev + e.key).slice(-4);
        if (next === 'hire') {
          onTrigger();
          return '';
        }
        return next;
      });
    }

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onTrigger]);
}
