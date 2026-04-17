import React from 'react';
import dashBoard from '../assets/portfolio/dashBoard.jpg';
import betterProfessor from '../assets/portfolio/betterProfessor.jpg';
import phoneStore from '../assets/portfolio/phoneStore.jpg';

const portfolios = [
  {
    id: 1,
    src: dashBoard,
    title: 'Admin Dashboard',
    description: 'A full-featured admin dashboard with data visualization and user management.',
    tech: ['React', 'Tailwind', 'Node.js'],
    code: 'https://github.com/YaniWessi/AdminDashboard.git',
    demo: '#',
  },
  {
    id: 2,
    src: betterProfessor,
    title: 'Better Professor',
    description: 'A platform helping professors manage student assignments and feedback.',
    tech: ['React', 'Redux', 'Node.js'],
    code: 'https://github.com/bw-better-professor/frontend.git',
    demo: '#',
  },
  {
    id: 3,
    src: phoneStore,
    title: 'Cite Verte',
    description: 'An e-commerce phone store with product listings and cart functionality.',
    tech: ['React', 'Flask', 'PostgreSQL'],
    code: 'https://github.com/YaniWessi/CiteVerte.git',
    demo: '#',
  },
];

const Projects = () => {
  return (
    <div name="projects" className="w-full min-h-screen py-24" style={{ background: 'var(--bg)' }}>
      <div className="max-w-screen-lg mx-auto px-8">

        <div className="mb-14">
          <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--accent)' }}>
            Work
          </p>
          <p className="font-display text-4xl font-black" style={{ color: 'var(--text)' }}>
            Portfolio
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {portfolios.map(({ id, src, title, description, tech, code, demo }) => (
            <div
              key={id}
              className="group rounded-xl overflow-hidden"
              style={{ background: 'var(--surface)', border: '1px solid rgba(74,240,196,0.08)' }}
            >
              {/* Thumbnail with hover overlay */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={src}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'rgba(8,12,20,0.88)' }}
                >
                  <div className="flex flex-wrap gap-2">
                    {tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-xs px-2 py-1 rounded"
                        style={{ background: 'rgba(74,240,196,0.12)', color: 'var(--accent)' }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card body */}
              <div className="p-5">
                <h3 className="font-display font-black text-lg mb-2" style={{ color: 'var(--text)' }}>
                  {title}
                </h3>
                <p className="text-sm leading-relaxed mb-4 font-body" style={{ color: 'var(--muted)' }}>
                  {description}
                </p>
                <div className="flex gap-3">
                  <a
                    href={code}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center py-2 rounded font-mono text-xs uppercase tracking-wider transition-opacity hover:opacity-70"
                    style={{ border: '1px solid var(--accent)', color: 'var(--accent)' }}
                  >
                    Code
                  </a>
                  <a
                    href={demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center py-2 rounded font-mono text-xs uppercase tracking-wider transition-opacity hover:opacity-70"
                    style={{ background: 'var(--accent)', color: 'var(--bg)' }}
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Projects;
