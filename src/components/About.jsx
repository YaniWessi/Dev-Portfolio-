import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full min-h-screen flex items-center" style={{ background: 'var(--surface)' }}>
      <div className="max-w-screen-lg px-8 py-24 mx-auto flex flex-col justify-center w-full">

        <div className="mb-12">
          <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--accent)' }}>
            About me
          </p>
          <p className="font-display text-4xl font-black" style={{ color: 'var(--text)' }}>
            Who I Am
          </p>
        </div>

        <div className="flex flex-col gap-6 max-w-3xl">
          <p className="text-base leading-relaxed font-body" style={{ color: 'var(--muted)' }}>
            I'm a full-stack engineer who came up through sales before code — which means I build with the user in mind,
            not just the spec. As the child of West African immigrants and the first college graduate in my family, I
            learned early that adapting fast and solving the problem in front of you isn't optional. That's how I
            approach engineering.
          </p>
          <p className="text-base leading-relaxed font-body" style={{ color: 'var(--muted)' }}>
            I've shipped production features used by millions: at Propel, a Brooklyn-based fintech serving 5M+
            low-income Americans, I built geolocation tooling and debugged data pipelines at scale. At Empower
            Innovations, I redesigned a fraud resolution workflow that cut resolution time from 2 weeks to 1 day,
            and built rate-limiting middleware that held up through 200K+ requests per hour during live election traffic.
          </p>
          <p className="text-base leading-relaxed font-body" style={{ color: 'var(--muted)' }}>
            I work across the full stack — React, Python, Node.js, PostgreSQL, Flask, Redis — and I'm just as
            comfortable in a SQL investigation as I am in a customer escalation call. Based in Brooklyn. Currently
            open to my next opportunity.
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;
