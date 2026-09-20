/* ============================================================
   gta_skills_exp.jsx  ::  Stat Panel (skills) + Mission Log
   ============================================================ */

/* reusable section header */
function SecHead({ kicker, title, em, note }) {
  return (
    <Reveal className="sec-head">
      <div>
        <div className="sec-kicker">
          <span className="tick"></span>
          <span className="hud hud-acc">{kicker}</span>
        </div>
        <h2 className="sec-title">
          {title} {em && <em>{em}</em>}
        </h2>
      </div>
      {note && <div className="sec-note">{note}</div>}
    </Reveal>
  );
}

/* ---------------- STAT PANEL :: skills ---------------- */
function StatPanel() {
  return (
    <section className="section" id="loadout">
      <div className="wrap">
        <SecHead
          kicker="Stat Panel // Loadout"
          title="Capabilities,"
          em="equipped."
          note="Grouped by domain. No proficiency scores, the work in the garage speaks for itself."
        />
        <div className="stat-grid">
          {SKILLS.map((cat, i) => (
            <Reveal className="stat-cell" key={cat.group} d={String((i % 4) + 1)}>
              <div className="sc-top">
                <span className="sc-idx">{String(i + 1).padStart(2, "0")}</span>
                <span className="sc-name">{cat.group}</span>
              </div>
              <div className="stat-blocks" aria-hidden="true">
                {Array.from({ length: 8 }).map((_, k) => (<i key={k}></i>))}
              </div>
              <div className="stat-items">
                {cat.items.map((s) => (<span key={s}>{s}</span>))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- MISSION LOG :: experience ---------------- */
function MissionLog() {
  return (
    <section className="section" id="missions">
      <div className="wrap">
        <SecHead
          kicker="Mission Log // Experience"
          title="Roles"
          em="cleared."
          note="From production agent platforms to open-source governance work across the CNCF ecosystem."
        />
        <div className="missions">
          {EXPERIENCE.map((m, i) => {
            const sCls = m.status === "ACTIVE" ? "active" : m.status === "ONGOING" ? "ongoing" : "";
            return (
              <Reveal className="mission" key={m.code} d={String(Math.min(i, 3))}>
                <div className="m-side">
                  <span className="m-code">{m.code}</span>
                  <span className={`m-status ${sCls}`}>{m.status}</span>
                  <span className="m-period">{m.period}</span>
                </div>
                <div className="m-body">
                  <div className="m-role">{m.role}</div>
                  <div className="m-org">{m.org}</div>
                  <ul className="m-points">
                    {m.points.map((p, k) => (<li key={k}>{p}</li>))}
                  </ul>
                  <div className="chip-row">
                    {m.stack.map((s) => (<span className="chip" key={s}>{s}</span>))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- NUMBERS :: dossier with error bars ---------------- */
function NumbersDossier() {
  return (
    <section className="section" id="numbers">
      <div className="wrap">
        <SecHead
          kicker="Field Report // Calibration"
          title="Numbers, with their"
          em="error bars."
          note="Every headline figure, and precisely what it does not mean."
        />
        <Reveal className="dossier">
          <div className="dossier-row dossier-head">
            <span className="d-claim">Claim</span>
            <span className="d-figure">Figure</span>
            <span className="d-caveat">What it does not mean</span>
          </div>
          {NUMBERS.map((n, i) => (
            <div className="dossier-row" key={i}>
              <span className="d-claim"><span className="d-label" aria-hidden="true">Claim // </span>{n.claim}</span>
              <span className="d-figure"><span className="d-label" aria-hidden="true">Figure // </span>{n.figure}</span>
              <span className="d-caveat"><span className="d-label" aria-hidden="true">Does not mean // </span>{n.caveat}</span>
            </div>
          ))}
        </Reveal>
        <Reveal className="dossier-note" d="1">
          <span className="vi">i</span> {NUMBERS_NOTE}
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, { SecHead, StatPanel, MissionLog, NumbersDossier });
