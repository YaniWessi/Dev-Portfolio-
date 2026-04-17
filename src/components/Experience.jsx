import React from 'react';

const techs = [
  { id: 1,  emoji: '🌐', title: 'HTML',       category: 'Markup'   },
  { id: 2,  emoji: '🎨', title: 'CSS',        category: 'Styling'  },
  { id: 3,  emoji: '⚡', title: 'JavaScript', category: 'Language' },
  { id: 4,  emoji: '⚛️', title: 'React',      category: 'Framework'},
  { id: 5,  emoji: '🔴', title: 'Redis',      category: 'Database' },
  { id: 6,  emoji: '🐍', title: 'Python',     category: 'Language' },
  { id: 7,  emoji: '🐙', title: 'GitHub',     category: 'DevOps'   },
  { id: 8,  emoji: '💨', title: 'Tailwind',   category: 'Styling'  },
  { id: 9,  emoji: '🟢', title: 'Node.js',    category: 'Runtime'  },
  { id: 10, emoji: '🐘', title: 'PostgreSQL', category: 'Database' },
  { id: 11, emoji: '🌶️', title: 'Flask',      category: 'Framework'},
];

function Experience() {
  return (
    <div name="experience" className="w-full min-h-screen py-24" style={{ background: 'var(--surface)' }}>
      <div className="max-w-screen-lg mx-auto px-8">

        <div className="mb-14">
          <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--accent)' }}>
            Stack
          </p>
          <p className="font-display text-4xl font-black" style={{ color: 'var(--text)' }}>
            Experience
          </p>
          <p className="mt-3 text-sm font-body" style={{ color: 'var(--muted)' }}>
            These are the technologies I've worked with
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {techs.map(({ id, emoji, title, category }) => (
            <div
              key={id}
              className="flex items-center gap-3 px-4 py-3 rounded-lg transition-transform hover:scale-105 duration-200"
              style={{ background: 'var(--bg)', border: '1px solid rgba(74,240,196,0.08)' }}
            >
              <span className="text-2xl">{emoji}</span>
              <div>
                <p className="text-sm font-medium font-body" style={{ color: 'var(--text)' }}>{title}</p>
                <p className="font-mono text-xs" style={{ color: 'var(--muted)' }}>{category}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Experience;
