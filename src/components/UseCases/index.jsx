import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projects } from '../../data/projects';
import FilterBar from './FilterBar';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

export default function UseCases({ recruiterMode }) {
  const [filter, setFilter] = useState('ALL');
  const [modal, setModal] = useState(null);

  const filtered = filter === 'ALL' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="use-cases">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Proof of Work</p>
          <h2 style={{ color: 'var(--cream)', marginBottom: 16 }}>
            Business problems translated into practical digital products.
          </h2>
          <p>Each use case starts with a real business challenge and ends with the commercial value created.</p>
        </div>

        <FilterBar active={filter} onChange={setFilter} />

        <motion.div
          layout
          className="use-cases-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(460px, 1fr))',
            gap: 20,
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onExplore={setModal}
                recruiterMode={recruiterMode}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {modal && <ProjectModal project={modal} onClose={() => setModal(null)} />}
    </section>
  );
}
