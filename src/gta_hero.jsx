/* ============================================================
   gta_hero.jsx  ::  "Now Entering" hero
   ============================================================ */
function Hero() {
  return (
    <header className="hero section" id="top">
      <div className="wrap hero-in">
        <div className="minimap" aria-hidden="true">
          <span className="ring r1"></span>
          <span className="ring r2"></span>
          <span className="me"></span>
          <span className="hud lbl">NYC</span>
        </div>

        <Reveal className="hero-entering">
          <span className="ln"></span>
          <span className="hud hud-acc">Now Entering</span>
          <span className="hud">// {PROFILE.city}</span>
        </Reveal>

        <Reveal d="1">
          <h1 className="hero-name">
            Bharath Kumar
            <span className="sub">Rajesh</span>
          </h1>
        </Reveal>

        <Reveal d="2">
          <p className="hero-line">
            AI Engineer building <span className="hl">reliable</span> agentic systems.
          </p>
        </Reveal>

        <Reveal d="3">
          <p className="hero-thesis">{PROFILE.thesis}</p>
        </Reveal>

        <Reveal d="3">
          <div className="hero-facts">
            {PROFILE.quickFacts.map((f, i) => (
              <span className="f" key={i}>{f}</span>
            ))}
          </div>
        </Reveal>

        <Reveal d="4">
          <div className="hero-cta">
            <a href="#heist" className="btn btn-primary">View Projects</a>
            <a href={PROFILE.links.github} target="_blank" rel="noopener" className="btn"><Icon.github className="ic" /> GitHub</a>
            <a href={PROFILE.links.resume} target="_blank" rel="noopener" className="btn"><Icon.doc className="ic" /> Resume</a>
            <a href={`mailto:${PROFILE.links.email}`} className="btn"><Icon.mail className="ic" /> Email</a>
          </div>
        </Reveal>

        <Reveal d="5">
          <div className="scroll-cue">
            <span className="hud">scroll to begin</span>
            <span className="bar"></span>
          </div>
        </Reveal>
      </div>
    </header>
  );
}

Object.assign(window, { Hero });
