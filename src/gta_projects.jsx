/* ============================================================
   gta_projects.jsx  ::  Heist Board (featured) + Garage (grid)
   ============================================================ */

/* ---- copyable pip install command ---- */
function PipInstall({ cmd }) {
  const [copied, setCopied] = useState(false);
  const copy = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const done = () => { setCopied(true); setTimeout(() => setCopied(false), 1400); };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(cmd).then(done).catch(() => {});
    } else {
      done();
    }
  };
  return (
    <div
      className="pip"
      onClick={copy}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") copy(e); }}
      role="button"
      tabIndex={0}
      aria-label={`Copy ${cmd} to clipboard`}
      title="Copy to clipboard"
    >
      <span className="pip-dollar">$</span>
      <code>{cmd}</code>
      <span className="pip-copy">{copied ? "copied" : "copy"}</span>
    </div>
  );
}

/* ---------------- HEIST BOARD :: featured ---------------- */
function Flagship({ p }) {
  return (
    <Reveal className="heist-flag">
      <a className="flagship" href={p.repo} target="_blank" rel="noopener" style={{ "--cardc": catColor(p.tags[0]) }}>
        <div className="fl-l">
          <span className="fl-tag">
            <span className="keystone">Keystone</span> Flagship Project
          </span>
          <h3 className="fl-name">{p.name}</h3>
          <p className="fl-desc">{p.desc}</p>
          <div className="chip-row" style={{ marginTop: 22 }}>
            {p.stack.map((s) => (<span className="chip" key={s}>{s}</span>))}
          </div>
        </div>
        <div className="fl-r">
          <div className="fl-status">
            <span className="pulse"></span> STATUS: SHIPPED
          </div>
          <div className="fl-diagram" aria-hidden="true">
            <div><span className="node">4 connectors</span> <span className="arrow">&rarr;</span> one canonical model</div>
            <div><span className="node">5 weighted signals</span> <span className="arrow">&rarr;</span> per-signal breakdown</div>
            <div><span className="node">3-layer idempotency</span> <span className="arrow">+</span> human approval</div>
            <div><span className="node">append-only audit</span> <span className="arrow">before / after / actor</span></div>
            <div className="arrow" style={{ marginTop: 8 }}>125 unit &middot; 75 integration tests</div>
          </div>
          {p.perf && <span className="hud">{p.perf}</span>}
        </div>
      </a>
    </Reveal>
  );
}

/* ---- MCP Trust Scanner, re-presented as a labelled roadmap card ---- */
function RoadmapCard({ p }) {
  return (
    <Reveal className="heist-flag">
      <a className="flagship roadmap-card" href={p.repo} target="_blank" rel="noopener" style={{ "--cardc": catColor(p.tags[0]) }}>
        <div className="fl-l">
          <span className="fl-tag">
            <span className="keystone">Roadmap</span> Not yet built
          </span>
          <h3 className="fl-name">{p.name}</h3>
          <p className="fl-desc">{p.desc}</p>
          <div className="chip-row" style={{ marginTop: 22 }}>
            {p.stack.map((s) => (<span className="chip" key={s}>{s}</span>))}
          </div>
        </div>
        <div className="fl-r">
          <div className="fl-status">
            <span className="pulse"></span> STATUS: ON THE ROADMAP
          </div>
          <div className="fl-diagram" aria-hidden="true">
            <div><span className="node">agent-triage</span> <span className="arrow">+</span></div>
            <div><span className="node">mcp-otel-audit</span> <span className="arrow">+</span></div>
            <div><span className="node">super-mcp-eval</span> <span className="arrow">+</span></div>
            <div><span className="node">obindoc</span></div>
            <div className="arrow">&nbsp;&nbsp;&nbsp;&darr;</div>
            <div><span className="node">&#9656; MCP Trust Scanner</span></div>
            <div className="arrow" style={{ marginTop: 8 }}>scan &middot; score &middot; rank</div>
          </div>
          <span className="hud">Will unify the observability and governance work into one public audit tool.</span>
        </div>
      </a>
    </Reveal>
  );
}

function PCard({ p, i }) {
  const c = catColor(p.tags[0]);
  return (
    <Reveal d={String((i % 3) + 1)} style={{ display: "flex" }}>
      <a className="pcard" href={p.repo} target="_blank" rel="noopener" style={{ "--cardc": c, flex: 1 }}>
        <div className="pc-top">
          <span className="pc-cat">{p.tags[0]}</span>
          <span className="pc-link"><Icon.github /></span>
        </div>
        <div className="pc-name">{p.name}{p.badge && <span className="pc-dev">{p.badge}</span>}</div>
        <p className="pc-desc">{p.desc}</p>
        <div className="pc-foot">
          {p.pypi && <PipInstall cmd={p.pypi} />}
          <div className="chip-row pc-stack">
            {p.stack.map((s) => (<span className="chip" key={s}>{s}</span>))}
          </div>
        </div>
      </a>
    </Reveal>
  );
}

function HeistBoard() {
  const flagship = PROJECTS.find((p) => p.flagship);
  const roadmap = PROJECTS.find((p) => p.roadmap);
  const featured = PROJECTS.filter((p) => p.featured && !p.flagship);
  return (
    <section className="section" id="heist">
      <div className="wrap">
        <SecHead
          kicker="Heist Board // Featured"
          title="The"
          em="crew."
          note="The reliability-tooling thesis, shipped. Every artifact ladders up to trustworthy agents in production."
        />
        <div style={{ display: "grid", gap: 14 }}>
          {flagship && <Flagship p={flagship} />}
          {roadmap && <RoadmapCard p={roadmap} />}
          <div className="heist-grid">
            {featured.map((p, i) => (<PCard p={p} i={i} key={p.slug} />))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- GARAGE :: filterable / searchable ---------------- */
function Garage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return PROJECTS.filter((p) => {
      const inCat = cat === "All" || p.tags.includes(cat) || (cat === "Flagship" && p.flagship);
      const inQ = !query || (p.name + " " + p.desc + " " + p.stack.join(" ")).toLowerCase().includes(query);
      return inCat && inQ;
    });
  }, [q, cat]);

  return (
    <section className="section" id="garage">
      <div className="wrap">
        <SecHead
          kicker="The Garage // Full Index"
          title="Every"
          em="build."
          note="Search and filter the full repository index. Cards link out to source."
        />
        <Reveal className="garage-bar">
          <label className="search">
            <Icon.search />
            <input
              type="text"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="search builds, stacks, descriptions..."
              aria-label="Search projects"
            />
          </label>
          <span className="garage-count">{String(filtered.length).padStart(2, "0")} / {String(PROJECTS.length).padStart(2, "0")}</span>
        </Reveal>
        <Reveal className="filters" d="1">
          {FILTERS.map((f) => (
            <button key={f} className={`filter ${cat === f ? "on" : ""}`} onClick={() => setCat(f)}>
              {f}
            </button>
          ))}
        </Reveal>
        <div className="garage-grid" style={{ marginTop: 22 }}>
          {filtered.map((p, i) => {
            const c = catColor(p.tags[0]);
            return (
              <Reveal d={String((i % 3) + 1)} key={p.slug} style={{ display: "flex" }}>
                <a className="gcard" href={p.repo} target="_blank" rel="noopener" style={{ "--cardc": c, flex: 1 }}>
                  <div className="gc-top">
                    <span className="gc-name">{p.name}{p.badge && <span className="pc-dev">{p.badge}</span>}</span>
                    <span className="gc-link"><Icon.ext /></span>
                  </div>
                  <span className="gc-cat">{p.tags.join(" · ")}</span>
                  <p className="gc-desc">{p.desc}</p>
                  {p.pypi && <PipInstall cmd={p.pypi} />}
                  <div className="chip-row gc-stack">
                    {p.stack.slice(0, 4).map((s) => (<span className="chip" key={s}>{s}</span>))}
                  </div>
                </a>
              </Reveal>
            );
          })}
          {filtered.length === 0 && <div className="garage-empty">// no builds match that query</div>}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { PipInstall, Flagship, RoadmapCard, HeistBoard, Garage });
