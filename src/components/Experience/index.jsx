import { timelineEntries } from '../../data/timeline';
import TimelineNode from './TimelineNode';

export default function Experience() {
  return (
    <section id="experience" style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Real Business Experience</p>
          <h2 style={{ color: 'var(--cream)', marginBottom: 16 }}>Where this capability comes from.</h2>
          <p>Real roles, real budgets, real accountability — not just side projects.</p>
        </div>

        <div style={{ maxWidth: 720 }}>
          {timelineEntries.map((entry, i) => (
            <TimelineNode
              key={i}
              entry={entry}
              index={i}
              isLast={i === timelineEntries.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
