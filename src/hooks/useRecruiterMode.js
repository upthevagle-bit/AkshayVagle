import { useState, useEffect } from 'react';

export function useRecruiterMode() {
  const [recruiterMode, setRecruiterMode] = useState(false);

  useEffect(() => {
    if (recruiterMode) {
      document.body.classList.add('recruiter-mode');
    } else {
      document.body.classList.remove('recruiter-mode');
    }
  }, [recruiterMode]);

  return [recruiterMode, setRecruiterMode];
}
