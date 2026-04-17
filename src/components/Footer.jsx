import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const socialLinks = [
  {
    id: 1,
    label: 'LinkedIn',
    icon: <FaLinkedin size={18} />,
    href: 'https://www.linkedin.com/in/yannickw/',
  },
  {
    id: 2,
    label: 'GitHub',
    icon: <FaGithub size={18} />,
    href: 'https://github.com/YaniWessi',
  },
  {
    id: 3,
    label: 'Email',
    icon: <HiOutlineMail size={18} />,
    href: 'mailto:yannickwessidjam@gmail.com',
  },
  {
    id: 4,
    label: 'Resume',
    icon: <BsFillPersonLinesFill size={18} />,
    href: '/YannickWessidjamResume.pdf',
    download: true,
  },
];

function Footer() {
  return (
    <div
      name="contact"
      className="w-full py-24"
      style={{ background: 'var(--bg)', borderTop: '1px solid rgba(74,240,196,0.08)' }}
    >
      <div className="max-w-screen-lg mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-16">

          {/* Left — CTA + social */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--accent)' }}>
                Contact
              </p>
              <h2 className="font-display text-4xl font-black leading-tight" style={{ color: 'var(--text)' }}>
                Let's build something<br />great together.
              </h2>
            </div>
            <p className="text-base font-body" style={{ color: 'var(--muted)' }}>
              Submit the form below to get in touch with me
            </p>
            <div className="flex flex-col gap-4">
              {socialLinks.map(({ id, label, icon, href, download }) => (
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  download={download}
                  className="flex items-center gap-3 w-fit transition-opacity hover:opacity-70"
                  style={{ color: 'var(--muted)' }}
                >
                  <span style={{ color: 'var(--accent)' }}>{icon}</span>
                  <span className="font-mono text-xs uppercase tracking-wider">{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <form
            action="https://getform.io/f/a521a102-d98e-41c3-b35c-f658cbf2d797"
            method="POST"
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-lg text-sm font-body"
              style={{
                background: 'var(--surface)',
                border: '1px solid rgba(107,122,153,0.3)',
                color: 'var(--text)',
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg text-sm font-body"
              style={{
                background: 'var(--surface)',
                border: '1px solid rgba(107,122,153,0.3)',
                color: 'var(--text)',
              }}
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="8"
              className="w-full px-4 py-3 rounded-lg text-sm font-body resize-none"
              style={{
                background: 'var(--surface)',
                border: '1px solid rgba(107,122,153,0.3)',
                color: 'var(--text)',
              }}
            />
            <button
              type="submit"
              className="w-full py-3 rounded-lg font-mono text-xs uppercase tracking-widest font-medium transition-opacity hover:opacity-80"
              style={{ background: 'var(--accent)', color: 'var(--bg)' }}
            >
              Send Message
            </button>
          </form>

        </div>

        <div
          className="mt-16 pt-8 text-center"
          style={{ borderTop: '1px solid rgba(107,122,153,0.15)' }}
        >
          <p className="font-mono text-xs" style={{ color: 'var(--muted)' }}>
            © 2026 Yannick Wessidjam. Built with React + Vite.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
