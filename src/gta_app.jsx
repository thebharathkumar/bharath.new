/* ============================================================
   gta_app.jsx  ::  root composition (runs last)
   ============================================================ */
function App() {
  return (
    <React.Fragment>
      <Boot />
      <div className="bg-grid"></div>
      <div className="bg-vignette"></div>
      <div className="bg-scan"></div>
      <CoordReadout />
      <CheatCode />
      <MissionToast />
      <Nav />
      <Hero />
      <main>
        <StatPanel />
        <MissionLog />
        <HeistBoard />
        <Garage />
        <TrophyCase />
        <Safehouse />
      </main>
      <Foot />
      <div className="cheat-hint" aria-hidden="true">↑↑↓↓←→←→ B A</div>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
