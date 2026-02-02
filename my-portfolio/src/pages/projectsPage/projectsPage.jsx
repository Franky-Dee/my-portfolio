import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './projectsPage.css';

const projects = [
  { id: 1, title: 'Alpha', icon: '🅰️', desc: 'Placeholder description for Alpha app. Brief overview goes here.', tech: ['React', 'Vite', 'CSS'] },
  { id: 2, title: 'Beta', icon: '🅱️', desc: 'Placeholder description for Beta app. Brief overview goes here.', tech: ['Node', 'Express'] },
  { id: 3, title: 'Gamma', icon: '⚛️', desc: 'Placeholder description for Gamma app. Brief overview goes here.', tech: ['React', 'Framer Motion'] },
  { id: 4, title: 'Delta', icon: '🔺', desc: 'Placeholder description for Delta app. Brief overview goes here.', tech: ['Python', 'FastAPI'] },
  { id: 5, title: 'Epsilon', icon: '🧪', desc: 'Placeholder description for Epsilon app. Brief overview goes here.', tech: ['TypeScript', 'Vite'] },
];

function ProjectsPage({ onClose }) {
  const [selected, setSelected] = useState(null);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const onEsc = (e) => { if (e.key === 'Escape') onClose?.(); };
    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, [onClose]);

  const fanPositions = projects.map((_, i) => {
    const spread = 40; // degrees
    const baseRot = -spread / 2 + (spread / (projects.length - 1)) * i;
    const offset = -120 + i * 60;
    return { rotate: baseRot, x: offset };
  });

  const header = 'PROJECTS';
  const letterVariants = {
    animate: (i) => ({
      y: [0, -30, 0],
      transition: { duration: 2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.1 },
    }),
  };

  return (
    <AnimatePresence>
      <motion.div
        className="projects-overlay"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', stiffness: 160, damping: 20 }}
        onClick={() => selected && setSelected(null)}
      >
        {selected && (
          <motion.div
            className="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
        <div className="projects-header">
          {header.split('').map((ch, idx) => (
            <motion.span
              key={`proj-h-${idx}`}
              className="projects-header-letter"
              custom={idx}
              variants={letterVariants}
              animate="animate"
            >
              {ch}
            </motion.span>
          ))}
        </div>
        <div className="cards-stage">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              className="card"
              layoutId={`card-${p.id}`}
              initial={{ y: -80, opacity: 0, scale: 0.8 }}
              animate={{ y: 0, opacity: 1, scale: 1, rotate: fanPositions[i].rotate, x: fanPositions[i].x }}
              transition={{ delay: 0.12 * i, type: 'spring', stiffness: 300, damping: 16 }}
              whileHover={{ scale: 1.15, y: -12, rotate: 0, zIndex: 10 }}
              onHoverStart={() => setHovered(p.id)}
              onHoverEnd={() => setHovered(null)}
              onClick={() => setSelected(p)}
            >
              <div className="card-icon" aria-hidden>{p.icon}</div>
              <div className={`card-title ${hovered === p.id ? 'visible' : ''}`}>{p.title}</div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selected && (
            <motion.div
              className="card-expanded"
              layoutId={`card-${selected.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: 'spring', stiffness: 360, damping: 28 }}
            >
              <div className="expanded-grid">
                <div className="expanded-image" />
                <div className="expanded-content">
                  <div className="expanded-title">{selected.title}</div>
                  <div className="expanded-desc">{selected.desc}</div>
                  <div className="expanded-tech">
                    {selected.tech?.map((t) => (
                      <span key={t} className="tech-badge">{t}</span>
                    ))}
                  </div>
                  <div className="expanded-hint">Click anywhere to close</div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}

export default ProjectsPage;
