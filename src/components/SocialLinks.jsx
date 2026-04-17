import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const links = [
  {
    id: 1,
    label: 'LinkedIn',
    icon: <FaLinkedin size={16} />,
    href: 'https://www.linkedin.com/in/yannickw/',
    style: 'rounded-tr-md',
  },
  {
    id: 2,
    label: 'GitHub',
    icon: <FaGithub size={16} />,
    href: 'https://github.com/YaniWessi',
  },
  {
    id: 3,
    label: 'Email',
    icon: <HiOutlineMail size={16} />,
    href: 'mailto:yannickwessidjam@gmail.com',
  },
  {
    id: 4,
    label: 'Resume',
    icon: <BsFillPersonLinesFill size={16} />,
    href: '/YannickWessidjamResume.pdf',
    style: 'rounded-br-md',
    download: true,
  },
];

const SocialLinks = () => {
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed z-40">
      <ul>
        {links.map(({ id, label, icon, href, style, download }) => (
          <li
            key={id}
            className={'flex items-center w-36 h-11 px-4 ml-[-96px] hover:ml-[-8px] duration-300 ' + (style || '')}
            style={{
              background: 'var(--surface)',
              borderRight: '1px solid rgba(74,240,196,0.2)',
              borderTop: '1px solid rgba(74,240,196,0.06)',
              borderBottom: '1px solid rgba(74,240,196,0.06)',
            }}
          >
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              download={download}
              className="flex items-center gap-2 w-full font-mono text-xs uppercase tracking-wider"
              style={{ color: 'var(--muted)' }}
            >
              <span style={{ color: 'var(--accent)' }}>{icon}</span>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
