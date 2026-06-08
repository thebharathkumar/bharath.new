/* ============================================================
   gta_components.jsx  ::  shared utilities, HUD, icons, nav
   ============================================================ */
const { useState, useEffect, useRef, useMemo } = React;

const REDUCE = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* robust in-view trigger, works even when document is backgrounded */
function observeInView(el, cb, opts) {
  if (!el) return () => {};
  let done = false;
  const fire = () => { if (done) return; done = true; cb(); io.disconnect(); clearTimeout(t); };
  const inView = () => {
    const r = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight || 800;
    return r.top < vh * 0.92 && r.bottom > 0;
  };
  const io = new IntersectionObserver(
    (es) => es.forEach((e) => e.isIntersecting && fire()),
    opts || { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
  );
  io.observe(el);
  requestAnimationFrame(() => inView() && fire());
  const t = setTimeout(() => inView() && fire(), 1200);
  return () => { io.disconnect(); clearTimeout(t); };
}

function Reveal({ children, d, as, className = "", ...rest }) {
  const ref = useRef(null);
  const Tag = as || "div";
  useEffect(() => observeInView(ref.current, () => ref.current && ref.current.classList.add("in")), []);
  return <Tag ref={ref} className={`reveal ${className}`} data-d={d} {...rest}>{children}</Tag>;
}

const catColor = (cat) => (window.CATS && window.CATS[cat]) || "var(--accent)";

/* ---- icon set ---- */
const Icon = {
  github: (p) => (<svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7 0-.7 0-.7 1.2 0 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.6 18.3 5 18.3 5c.7 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5A11.5 11.5 0 0 0 23.5 12C23.5 5.7 18.3.5 12 .5z" /></svg>),
  linkedin: (p) => (<svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" /></svg>),
  mail: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>),
  medium: (p) => (<svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M2.5 6.5A.9.9 0 0 0 2.2 5.8L.5 3.8V3.5h5.3l4.1 9 3.6-9H24v.3l-1.4 1.4a.4.4 0 0 0-.16.4v10a.4.4 0 0 0 .16.4l1.4 1.4v.3h-6.9v-.3l1.4-1.4c.14-.14.14-.18.14-.4V8.2l-4 10.2h-.5l-4.7-10.2v6.8c-.04.3.06.6.27.8l1.9 2.3v.3H2.2v-.3l1.9-2.3c.2-.2.3-.5.26-.8V6.5z" /></svg>),
  twitter: (p) => (<svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M18.2 2H21l-6.4 7.3L22.5 22h-6.6l-5-6.6-5.8 6.6H2.3l6.9-7.9L1.5 2h6.7l4.6 6.1L18.2 2zm-2.3 18h1.8L7.6 3.9H5.6L15.9 20z" /></svg>),
  spotify: (p) => (<svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 1.5A10.5 10.5 0 1 0 22.5 12 10.5 10.5 0 0 0 12 1.5zm4.6 15.2a.7.7 0 0 1-1 .24c-2.7-1.65-6.1-2-10.1-1.1a.7.7 0 1 1-.3-1.37c4.4-1 8.2-.6 11.2 1.24a.7.7 0 0 1 .2.99zm1.24-2.74a.88.88 0 0 1-1.2.29c-3.1-1.9-7.8-2.46-11.46-1.35a.88.88 0 1 1-.5-1.68c4.2-1.27 9.4-.65 12.9 1.5a.88.88 0 0 1 .26 1.24zm.1-2.85C14.34 8.97 8.2 8.77 4.7 9.83a1.05 1.05 0 1 1-.6-2C8.1 6.6 14.9 6.84 19 9.2a1.05 1.05 0 1 1-1.06 1.82z" /></svg>),
  pin: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}><path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11z" /><circle cx="12" cy="10" r="2.6" /></svg>),
  doc: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5M9 13h6M9 17h6" /></svg>),
  ext: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M7 17 17 7M9 7h8v8" /></svg>),
  search: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.2-3.2" /></svg>),
};

/* ---- BOOT sequence ---- */
function Boot() {
  const [lines, setLines] = useState([]);
  const [gone, setGone] = useState(false);
  useEffect(() => {
    if (REDUCE || sessionStorage.getItem("booted")) { setGone(true); return; }
    sessionStorage.setItem("booted", "1");
    let i = 0;
    const push = () => {
      setLines((p) => [...p, BOOT[i]]);
      i++;
      if (i < BOOT.length) setTimeout(push, 230);
    };
    const start = setTimeout(push, 180);
    const dismiss = setTimeout(() => setGone(true), 1700);
    const onKey = () => setGone(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("click", onKey);
    return () => { clearTimeout(start); clearTimeout(dismiss); window.removeEventListener("keydown", onKey); window.removeEventListener("click", onKey); };
  }, []);
  if (REDUCE) return null;
  return (
    <div className={`boot ${gone ? "gone" : ""}`} aria-hidden="true">
      <div className="boot-inner">
        {lines.map((l, k) => (
          <div className="boot-line" key={k}>
            <span className="dim">&gt;</span> {l}
            {k === lines.length - 1 && k < BOOT.length - 1 && <span className="boot-cursor"></span>}
          </div>
        ))}
        <div className="boot-bar"><i></i></div>
      </div>
    </div>
  );
}

/* ---- HUD coordinate readout (updates on scroll) ---- */
function CoordReadout() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setPct(h > 0 ? Math.min(100, Math.round((window.scrollY / h) * 100)) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="coord tr">
      <div>POS <span className="v">{PROFILE.coords}</span></div>
      <div>DEPTH <span className="v">{String(pct).padStart(3, "0")}%</span></div>
    </div>
  );
}

/* ---- MISSION PASSED toast on reaching contact ---- */
function MissionToast() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const el = document.getElementById("safehouse");
    if (!el) return;
    let fired = false;
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => {
        if (e.isIntersecting && !fired) {
          fired = true;
          setShow(true);
          setTimeout(() => setShow(false), 3400);
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div className={`toast ${show ? "show" : ""}`} role="status">
      <div className="t-k">OBJECTIVE COMPLETE</div>
      <div className="t-v">MISSION PASSED</div>
    </div>
  );
}

/* ---- cheat code :: toggles alternate "wanted" accent theme ---- */
function CheatCode() {
  useEffect(() => {
    const seq = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
    let idx = 0;
    const onKey = (e) => {
      const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      if (k === seq[idx]) {
        idx++;
        if (idx === seq.length) { document.documentElement.classList.toggle("wanted"); idx = 0; }
      } else {
        idx = k === seq[0] ? 1 : 0;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return null;
}

/* ---- NAV ---- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="wrap nav-in">
        <a href="#top" className="brand"><span className="star">✦</span> the<b>bharath</b>.co</a>
        <div className="nav-links">
          {NAV.map((n) => (<a key={n.id} href={`#${n.id}`}>{n.label}</a>))}
        </div>
        <div className="nav-actions">
          <a href={PROFILE.links.github} target="_blank" rel="noopener" className="nav-cta" style={{ background: "transparent", color: "var(--text)", border: "1px solid var(--line2)" }}>GitHub</a>
          <a href="#safehouse" className="nav-cta">Contact</a>
        </div>
      </div>
    </nav>
  );
}

Object.assign(window, { observeInView, Reveal, Icon, catColor, Boot, CoordReadout, MissionToast, CheatCode, Nav, REDUCE });
