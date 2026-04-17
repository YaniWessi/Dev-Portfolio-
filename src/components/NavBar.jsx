import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const links = [
  { id: 1, link: 'home' },
  { id: 2, link: 'about' },
  { id: 3, link: 'projects' },
  { id: 4, link: 'experience' },
  { id: 5, link: 'contact' },
];

function NavBar() {
  const [nav, setNav] = useState(false);

  return (
    <nav
      className="fixed w-full z-50 h-16 flex items-center justify-between px-8"
      style={{
        background: 'rgba(8,12,20,0.75)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(74,240,196,0.08)',
      }}
    >
      <span className="font-display text-2xl font-black" style={{ color: 'var(--accent)' }}>
        YW
      </span>

      <ul className="hidden md:flex gap-8">
        {links.map(({ id, link }) => (
          <li key={id}>
            <Link to={link} smooth duration={500} className="nav-link">
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <button
        onClick={() => setNav(!nav)}
        className="md:hidden cursor-pointer"
        style={{ color: 'var(--muted)' }}
      >
        {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {nav && (
        <ul
          className="absolute top-16 left-0 w-full flex flex-col items-center gap-7 py-10 md:hidden"
          style={{
            background: 'var(--surface)',
            borderBottom: '1px solid rgba(74,240,196,0.08)',
          }}
        >
          {links.map(({ id, link }) => (
            <li key={id}>
              <Link
                to={link}
                smooth
                duration={500}
                onClick={() => setNav(false)}
                className="nav-link"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default NavBar;
