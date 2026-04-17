import React from 'react';
import yannickImage from '../assets/Yannick.jpg';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className="min-h-screen w-full flex items-center" style={{ background: 'var(--bg)' }}>
      <div className="max-w-screen-lg mx-auto px-8 pt-24 pb-16 flex flex-col md:flex-row items-center gap-16 w-full">

        {/* Text */}
        <div className="flex-1 flex flex-col gap-6">

          {/* Available pill */}
          <div
            className="w-fit flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs uppercase tracking-widest"
            style={{
              border: '1px solid var(--accent)',
              color: 'var(--accent)',
              background: 'rgba(74,240,196,0.06)',
            }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--accent)' }} />
            Available for new opportunities
          </div>

          {/* Heading */}
          <h1 className="font-display text-4xl sm:text-5xl font-black leading-tight" style={{ color: 'var(--text)' }}>
            Customer-Focused<br />Software Engineer
          </h1>

          {/* Bio */}
          <p className="text-base leading-relaxed max-w-md font-body" style={{ color: 'var(--muted)' }}>
            I'm an engineer at the intersection of code and customer outcomes. With a background bridging sales,
            support, and full-stack engineering, I write SQL, ship React interfaces, and design the workflows
            that hold products together.
          </p>

          {/* Stat badges */}
          <div className="flex gap-3 flex-wrap">
            <span
              className="px-4 py-2 rounded-lg font-mono text-xs"
              style={{ background: 'var(--surface)', color: 'var(--accent2)', border: '1px solid rgba(91,138,245,0.2)' }}
            >
              ⚡ Full-Stack
            </span>
            <span
              className="px-4 py-2 rounded-lg font-mono text-xs"
              style={{ background: 'var(--surface)', color: 'var(--accent2)', border: '1px solid rgba(91,138,245,0.2)' }}
            >
              📍 NYC
            </span>
          </div>

          {/* CTAs */}
          <div className="flex gap-4 flex-wrap mt-2">
            <Link
              to="projects"
              smooth
              duration={500}
              className="px-6 py-3 rounded-md font-body font-medium text-sm cursor-pointer transition-opacity hover:opacity-80"
              style={{ background: 'var(--accent)', color: 'var(--bg)' }}
            >
              View Portfolio
            </Link>
            <Link
              to="contact"
              smooth
              duration={500}
              className="px-6 py-3 rounded-md font-body font-medium text-sm cursor-pointer transition-opacity hover:opacity-80"
              style={{ border: '1px solid var(--accent)', color: 'var(--accent)', background: 'transparent' }}
            >
              Let's Talk
            </Link>
          </div>
        </div>

        {/* Photo — first on mobile, right on desktop */}
        <div className="flex-shrink-0 order-first md:order-last">
          <img
            src={yannickImage}
            alt="Yannick Wessidjam"
            className="rounded-2xl w-64 md:w-80 object-cover"
            style={{ border: '2px solid rgba(74,240,196,0.15)' }}
          />
        </div>

      </div>
    </div>
  );
};

export default Home;
