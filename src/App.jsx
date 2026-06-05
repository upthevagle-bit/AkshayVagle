import { lazy, Suspense, useState, useCallback } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/SEO';
import CustomCursor from './components/CustomCursor';
import RecruiterBanner from './components/RecruiterBanner';
import Nav from './components/Nav';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import FloatingContactBtn from './components/FloatingContactBtn';
import RecruiterSidebar from './components/RecruiterSidebar';
import ToastNotification from './components/ToastNotification';
import { useRecruiterMode } from './hooks/useRecruiterMode';
import { useEasterEgg } from './hooks/useEasterEgg';
import './styles/variables.css';
import './styles/global.css';
import './styles/animations.css';

const UseCases = lazy(() => import('./components/UseCases/index'));
const Experience = lazy(() => import('./components/Experience/index'));
const Credentials = lazy(() => import('./components/Credentials'));
const Capabilities = lazy(() => import('./components/Capabilities'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function Confetti() {
  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 9997 }}>
      {Array.from({ length: 60 }).map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: 8,
            height: 8,
            borderRadius: i % 2 === 0 ? '50%' : 2,
            background: i % 2 === 0 ? '#E85D04' : '#FAC405',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 40}%`,
            animation: `confettiFall ${1 + Math.random() * 2}s ease-out forwards`,
            animationDelay: `${Math.random() * 0.5}s`,
          }}
        />
      ))}
    </div>
  );
}

const SectionFallback = () => (
  <div style={{ height: 200, background: 'var(--bg)' }} />
);

export default function App() {
  const [recruiterMode, setRecruiterMode] = useRecruiterMode();
  const [showToast, setShowToast] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const triggerEasterEgg = useCallback(() => {
    setShowConfetti(true);
    setShowToast(true);
    setTimeout(() => {
      setShowConfetti(false);
      setShowToast(false);
    }, 4000);
  }, []);

  useEasterEgg(triggerEasterEgg);

  return (
    <HelmetProvider>
      <SEO />
      <CustomCursor />
      {showConfetti && <Confetti />}
      <ToastNotification message="Great instinct. Let's talk. 👇" visible={showToast} />
      <RecruiterBanner />
      <Nav recruiterMode={recruiterMode} setRecruiterMode={setRecruiterMode} />
      <RecruiterSidebar visible={recruiterMode} />

      <main>
        <Hero />
        <StatsBar />
        <Suspense fallback={<SectionFallback />}>
          <UseCases recruiterMode={recruiterMode} />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Credentials />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Capabilities />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Footer />
        </Suspense>
      </main>

      <FloatingContactBtn />
    </HelmetProvider>
  );
}
