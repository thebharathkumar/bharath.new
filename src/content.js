/* ============================================================
   content.js  ::  single source of truth
   thebharath.co  //  AI Engineer portfolio (GTA homage)
   Rules honored: no em dashes, no invented metrics, NLP-only
   for Compsoft, verified figures only. Artie Labs PRs were
   opened (never merged). MCP Trust Scanner is roadmap only.
   ============================================================ */

window.PROFILE = {
  name: "Bharath Kumar Rajesh",
  title: "AI Engineer",
  city: "New York City",
  coords: "40.7128 N, 74.0060 W",
  relocation: ["Bay Area", "Dallas", "Orlando", "Seattle"],
  headline: "AI Engineer building reliable agentic systems.",
  thesis:
    "I build the triage, eval, and governance tooling that makes agents trustworthy in production.",
  quickFacts: ["MS CS, Pace Seidenberg", "GPA 3.87", "New York City", "Open to relocation"],
  roles: ["AI Engineer", "Forward Deployed Engineer", "Software Engineer"],
  sponsorship:
    "On F-1 OPT. Will require H-1B sponsorship in the future.",
  links: {
    github: "https://github.com/thebharathkumar",
    linkedin: "https://linkedin.com/in/thebharathkumar",
    medium: "https://medium.com/@thebharathkumar",
    twitter: "https://twitter.com/passdweed",
    portfolio: "https://thebharath.co",
    email: "bharath.kr702@gmail.com",
    resume: "/resume.pdf",
  },
};

/* category palette (used for project tags + filters) */
window.CATS = {
  Flagship: "var(--cat-flagship)",
  Agents: "var(--cat-agents)",
  "Evals and Observability": "var(--cat-evals)",
  RAG: "var(--cat-rag)",
  "Governance and Trust": "var(--cat-govern)",
  "ML and Research": "var(--cat-ml)",
  Integration: "var(--cat-integration)",
};

/* ---- BOOT sequence lines ---- */
window.BOOT = [
  "initializing thebharath.co",
  "loading agent runtime ...... ok",
  "mounting eval harness ....... ok",
  "tracing via opentelemetry ... ok",
  "press any key to enter",
];

/* ---- SKILLS :: stat panel (categorical, no numeric claims) ---- */
window.SKILLS = [
  { group: "Agentic", items: ["LangGraph", "LangChain", "MCP", "Multi-agent orchestration", "Tool-calling", "Prompt versioning"] },
  { group: "Models", items: ["Claude on Amazon Bedrock", "OpenAI API", "Prompt engineering", "OpenRouter", "LiteLLM", "Fireworks", "Streaming and SSE"] },
  { group: "RAG", items: ["Retrieval pipelines", "Grounded generation", "Span-level citations", "Verifier loops"] },
  { group: "Evals and Observability", items: ["OpenTelemetry", "OpenTelemetry GenAI semconv", "OTLP", "Eval harnesses", "LLM-as-judge", "Drift and cost monitoring", "Grafana", "Prometheus", "Mutation testing", "pytest", "Vitest", "Playwright"] },
  { group: "Backend", items: ["Python", "FastAPI", "Go", "Node.js", "Java / Spring Boot", "gRPC", "GraphQL", "Fastify", "Prisma", "BullMQ", "Zod"] },
  { group: "Frontend", items: ["TypeScript", "React", "Next.js", "Tailwind", "Vite", "TanStack Query"] },
  { group: "Cloud and Infra", items: ["AWS (Bedrock, EC2, S3, Lambda, SageMaker)", "Azure", "GCP", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "AWS CDK", "ECS", "Docker Compose"] },
  { group: "Data", items: ["Postgres", "DuckDB", "SQLite", "Redis"] },
];

/* ---- EXPERIENCE :: mission log ---- */
window.EXPERIENCE = [
  {
    code: "M-01",
    status: "CLEARED",
    role: "Applied AI Engineer (Graduate Assistant appointment)",
    org: "Pace University, Seidenberg School",
    period: "Mar 2025 to May 2026",
    points: [
      "Built and ran a production multi-agent platform on LangGraph and Claude (Amazon Bedrock) serving 10,000+ daily users at 99.5% uptime across 12 zero-regression releases.",
      "Built the evaluation pipeline the platform shipped against: 200+ automated grader tests per release scoring per-prompt quality in CI, which caught 4 silent prompt-template regressions before they reached production.",
      "Unified 50,000+ documents into one retrieval pipeline reaching 92% MRR@5 and cutting retrieval latency 60%.",
      "Bridged live systems of record through MCP servers, handling malformed upstream responses, silent tool-call drift, and auth expiry mid-session.",
      "Instrumented the platform with OpenTelemetry and Grafana for latency, token throughput, and quality drift.",
    ],
    stack: ["Python", "LangGraph", "Bedrock", "MCP", "FastAPI", "TypeScript", "React", "Postgres", "OpenTelemetry", "Grafana", "AWS", "Azure"],
  },
  {
    code: "M-02",
    status: "CLEARED",
    role: "Software Development Intern",
    org: "Let's Be The Change",
    period: "Sep 2023 to May 2024",
    points: [
      "Cut API P99 latency 80%, from 2,000ms to 400ms, by re-architecting query patterns and introducing a Redis cache layer.",
      "Integrated Stripe, SendGrid and Twilio end to end behind Java and Spring Boot APIs and webhooks, with zero post-launch incidents across 1,000+ users.",
      "Shipped an A/B test on recommendation logic in under 3 weeks, producing a 20% retention lift and a 35% reduction in onboarding abandonment.",
    ],
    stack: ["Java", "Spring Boot", "React", "Redis", "Stripe", "SendGrid", "Twilio"],
  },
  {
    code: "M-03",
    status: "CLEARED",
    role: "ML Research Intern",
    org: "Compsoft Technologies",
    period: "Aug 2023 to Sep 2023",
    points: [
      "Built a sentiment analysis system using NLP, reaching 90% accuracy.",
      "Deployed it as a Flask service on AWS.",
    ],
    stack: ["Python", "NLP", "scikit-learn", "Flask", "AWS"],
  },
  {
    code: "OSS",
    status: "ONGOING",
    role: "Open Source Contributor",
    org: "Layer5 / Meshery, Artie Labs, faramesh-core",
    period: "2023 to Present",
    points: [
      "Layer5 / Meshery (CNCF): 800+ lines of Go and Python across five merged pull requests.",
      "faramesh-core: 9 pull requests, including merged PR #33 (delegation token policy).",
      "Artie Labs: three Go pull requests opened (#1731, #1732, #1733).",
    ],
    stack: ["Go", "Python", "Kubernetes", "CDC", "Governance"],
  },
];

/* ---- NUMBERS :: dossier, every figure with its caveat ---- */
window.NUMBERS = [
  {
    claim: "Agent platform scale",
    figure: "10,000+ daily users, 99.5% uptime",
    caveat:
      "University population, not consumer traffic. Load is bursty around the academic calendar, not flat.",
  },
  {
    claim: "Eval pipeline",
    figure: "200+ grader tests, 4 regressions caught",
    caveat:
      "Graders are automated plus rubric-scored, not a held-out human panel. Four caught is four I know about.",
  },
  {
    claim: "loopcheck calibration",
    figure: "precision 1.00, recall 0.33",
    caveat:
      "A 15-file labelled set. The README says outright that 15 files is too small to estimate precision and recall reliably. Recall 0.33 is bad and it is published anyway.",
  },
  {
    claim: "P99 latency",
    figure: "2,000ms to 400ms",
    caveat:
      "Query re-architecture plus a cache on a small service, not a distributed systems rewrite.",
  },
];
window.NUMBERS_NOTE =
  "Every figure above is published in a public README or came off a committed benchmark report.";

/* ---- PROJECTS :: heist board + garage ----
   featured: shown on the heist board.
   flagship: keystone slot.  roadmap: labelled, not yet built.
   badge:   small pill text (e.g. IN PROGRESS, ROADMAP).
   pypi:    copyable install command.
   tags[0] drives the card accent color.                    */
const gh = "https://github.com/thebharathkumar/";
window.PROJECTS = [
  {
    slug: "ForgeSync",
    name: "ForgeSync",
    featured: true,
    flagship: true,
    desc:
      "Reconciliation infrastructure for construction finance. Ingests invoices from four connectors with genuinely different wire formats, normalizes to one canonical model where money is an integer count of minor units, then matches records with five weighted, fully decomposable signals and shows the per-signal breakdown rather than a black-box score. Every mutation to an external system requires human approval and is idempotent at three layers, with an append-only audit trail of before state, after state and actor. 125 unit and 75 integration tests, the integration suite running against real PostgreSQL and Redis rather than fakes.",
    perf:
      "Scoring runs roughly 25x faster than ingestion, so the bottleneck is I/O and not the engine. Measured on a 4 vCPU Xeon at 2.8GHz, single threaded, with everything co-located.",
    stack: ["TypeScript strict", "Fastify", "PostgreSQL", "Prisma", "Redis", "BullMQ", "React", "AWS CDK"],
    tags: ["Flagship", "Governance and Trust", "Integration"],
    repo: gh + "ForgeSync",
  },
  {
    slug: "MCP-Trust-Scanner",
    name: "MCP Trust Scanner",
    roadmap: true,
    badge: "ROADMAP",
    desc:
      "A public scanner and leaderboard that audits MCP servers for trust, conformance, and reliability, unifying the observability and governance work into one tool. On the roadmap, not yet built.",
    stack: ["Python", "MCP", "OpenTelemetry"],
    tags: ["Governance and Trust"],
    repo: "https://github.com/thebharathkumar",
  },
  {
    slug: "agent-triage",
    name: "agent-triage",
    featured: true,
    pypi: "pip install agent-triage",
    desc:
      "Ranks multi-agent failures by severity, frequency, and recovery from OpenTelemetry or NDJSON traces. CLI, FastAPI dashboard, OTLP receiver, optional LLM root-cause analysis. pip-installable, typed, tested.",
    stack: ["Python", "FastAPI", "OpenTelemetry", "SQLite"],
    tags: ["Agents", "Evals and Observability"],
    repo: gh + "agent-triage",
  },
  {
    slug: "agent-rx",
    name: "agent-rx",
    desc:
      "Closes the loop on agent-triage: diagnose, propose, A/B test and accept fixes for multi-agent failures, with a learned prioritizer that decides what is worth fixing.",
    stack: ["Python"],
    tags: ["Agents"],
    repo: gh + "agent-rx",
  },
  {
    slug: "loopcheck",
    name: "loopcheck",
    featured: true,
    desc:
      "Verifier-first agent loop that grades its own grader, using mutation testing as ground truth so a test only counts when it catches deliberately broken code. Reports precision 1.00 and recall 0.33 at the 0.85 accept threshold on a 15-file labelled set, published alongside the caveat that 15 files is too small to estimate either number reliably. 86 tests, and a tamper-evident HMAC-chained audit log.",
    stack: ["Python", "Mutation testing", "Confidence scoring", "HMAC audit chain"],
    tags: ["Agents", "Evals and Observability"],
    repo: gh + "loopcheck",
  },
  {
    slug: "costfloor",
    name: "costfloor",
    featured: true,
    desc:
      "Finds the cheapest model per task family that shows no silent regression against the expensive baseline. Six structural detectors and no LLM judge. Reports cost in tokens only and deliberately refuses to quote a dollar saving without an operator-supplied rate card. 1,527 lines, 47 tests all passing, green CI on Python 3.11 and 3.12, with an offline demo that runs in about 0.3 seconds and needs no API key.",
    stack: ["Python"],
    tags: ["Evals and Observability"],
    repo: gh + "costfloor",
  },
  {
    slug: "downgrade",
    name: "downgrade",
    badge: "IN PROGRESS",
    desc:
      "Measures silent quality regression when a model router downgrades a request. Six routing arms across Fireworks FireRouter, Fireworks Nexus, OpenRouter auto and LiteLLM, scored by four structural detectors plus two LLM judges over a six-type regression taxonomy. Instrumented with OpenTelemetry GenAI semantic conventions. Statistical testing is still in progress.",
    stack: ["Python", "OpenTelemetry GenAI Semconv", "OpenRouter", "LiteLLM"],
    tags: ["Evals and Observability"],
    repo: gh + "downgrade",
  },
  {
    slug: "mcp-otel-audit",
    name: "mcp-otel-audit",
    featured: true,
    desc:
      "Public audit of four MCP OpenTelemetry instrumentations against the official OTel semantic conventions (v1.40.0). Fully reproducible report and writeup.",
    stack: ["Python", "OpenTelemetry"],
    tags: ["Evals and Observability", "Governance and Trust"],
    repo: gh + "mcp-otel-audit",
  },
  {
    slug: "super-mcp-eval",
    name: "super-mcp-eval",
    featured: true,
    desc:
      "Evaluation harness for MCP servers and the agents that use them: schema compliance, tool-selection accuracy with Wilson 95% confidence intervals, DuckDB persistence, Streamlit dashboard.",
    stack: ["Python", "DuckDB", "Streamlit"],
    tags: ["Evals and Observability"],
    repo: gh + "super-mcp-eval",
  },
  {
    slug: "obindoc",
    name: "obindoc",
    featured: true,
    desc:
      "Grounded RAG over a PDF with span-level citations, a verifier loop, and a tamper-evident HMAC-chained audit log. Under 900 lines, 29 tests.",
    stack: ["Python", "RAG"],
    tags: ["RAG", "Governance and Trust"],
    repo: gh + "obindoc",
  },
  {
    slug: "agent-flight-recorder",
    name: "agent-flight-recorder",
    desc:
      "Claude Code skills for agent observability and tamper-evident audit trails: hash-chained audit logs, OTel tracing, deterministic evals, and failure triage. 74 tests, 97% coverage.",
    stack: ["Python", "OpenTelemetry"],
    tags: ["Evals and Observability", "Governance and Trust"],
    repo: gh + "agent-flight-recorder",
  },
  {
    slug: "klaviyo-agent-demo",
    name: "klaviyo-agent-demo",
    featured: true,
    desc:
      "LangGraph multi-agent demo: an autonomous marketing campaign generator using tool-calling and orchestration across specialized agents. Live deployment.",
    stack: ["Python", "LangGraph"],
    tags: ["Agents"],
    repo: gh + "klaviyo-agent-demo",
  },
  {
    slug: "streamsense",
    name: "streamsense",
    featured: true,
    desc:
      "Multimodal human activity recognition on PAMAP2: a late-fusion CNN plus transformer with ONNX export, int8 quantization, and a FastAPI inference server for near-real-time inference on wearable IMU streams.",
    stack: ["Python", "PyTorch", "ONNX", "FastAPI"],
    tags: ["ML and Research"],
    repo: gh + "streamsense",
  },
  {
    slug: "vehicle-damage-detection",
    name: "vehicle-damage-detection",
    desc:
      "Vehicle damage instance segmentation. YOLO11s-seg fine-tuned on CarDD reaching 0.753 mask mAP50 held out, with an imbalance ablation, error analysis, a robustness suite, and a FastAPI and Docker inference service.",
    stack: ["Python", "PyTorch", "YOLO", "FastAPI", "Docker", "Streamlit"],
    tags: ["ML and Research"],
    repo: gh + "vehicle-damage-detection",
  },
  /* ---- garage only ---- */
  {
    slug: "faramesh-core",
    name: "faramesh-core",
    desc: "Runtime governance engine for AI agents.",
    stack: ["Python", "Governance"],
    tags: ["Governance and Trust"],
    repo: gh + "faramesh-core",
  },
  {
    slug: "reconciliation-break-triage-agent",
    name: "reconciliation-break-triage-agent",
    desc: "Agent that triages reconciliation breaks in a fintech clearing workflow.",
    stack: ["Python", "Agents"],
    tags: ["Agents"],
    repo: gh + "reconciliation-break-triage-agent",
  },
  {
    slug: "swe-bench-lite-agent",
    name: "swe-bench-lite-agent",
    desc: "Coding agent targeting the SWE-bench Lite task set.",
    stack: ["Python", "Agents"],
    tags: ["Agents"],
    repo: gh + "swe-bench-lite-agent",
  },
  {
    slug: "pm-skill-attribution",
    name: "pm-skill-attribution",
    desc: "Portfolio-manager skill-attribution backtester.",
    stack: ["Python", "Quant"],
    tags: ["ML and Research"],
    repo: gh + "pm-skill-attribution",
  },
  {
    slug: "agentic-observation",
    name: "agentic-observation",
    desc: "Observability experiments for agent runtimes.",
    stack: ["Python", "OpenTelemetry"],
    tags: ["Evals and Observability"],
    repo: gh + "agentic-observation",
  },
  {
    slug: "Eval-harness",
    name: "Eval-harness",
    desc: "Lightweight evaluation harness scaffolding.",
    stack: ["Python"],
    tags: ["Evals and Observability"],
    repo: gh + "Eval-harness",
  },
  /* ---- garage index only (one-line entries) ---- */
  {
    slug: "bridge-demo",
    name: "bridge-demo",
    desc: "Lender Fit Explainer. Eligible, Not, or Borderline verdicts behind deterministic hard filters. Express and vanilla JS, 18 offline smoke tests.",
    stack: ["Express", "JavaScript"],
    tags: ["Governance and Trust"],
    repo: gh + "bridge-demo",
  },
  {
    slug: "jober",
    name: "jober",
    desc: "Bus factor analysis. 69 tests, MIT.",
    stack: [],
    tags: ["ML and Research"],
    repo: gh + "jober",
  },
  {
    slug: "Claimtrace",
    name: "Claimtrace",
    desc: "Multi-agent contradiction detection.",
    stack: [],
    tags: ["Agents"],
    repo: gh + "Claimtrace",
  },
  {
    slug: "project-transfer",
    name: "project-transfer",
    desc: "Pace University course equivalency, migrated to Azure production.",
    stack: ["Azure"],
    tags: ["Integration"],
    repo: gh + "project-transfer",
  },
];

window.FILTERS = ["All", "Flagship", "Agents", "Evals and Observability", "RAG", "Governance and Trust", "ML and Research", "Integration"];

/* ---- EDUCATION ---- */
window.EDUCATION = [
  {
    school: "Pace University, Seidenberg School",
    degree: "M.S. Computer Science",
    detail: "GPA 3.87. May 2026.",
  },
  {
    school: "Visvesvaraya Technological University (VTU)",
    degree: "Bachelor of Engineering",
    detail: "Computer Science.",
  },
];

/* ---- CERTIFICATIONS :: trophy case ---- */
window.CERTS = [
  { badge: "ANT", title: "Building with Claude on Amazon Bedrock", issuer: "Anthropic", date: "Mar 2026" },
  { badge: "SAA", title: "AWS Certified Solutions Architect, Associate", issuer: "Amazon Web Services", date: "Jan 2026" },
  { badge: "RH", title: "Red Hat Certified System Administrator (RHCSA)", issuer: "Red Hat", date: "2022" },
];

/* ---- PUBLICATIONS :: trophy case ---- */
window.PUBLICATIONS = [
  {
    venue: "Springer Nature",
    meta: "ICACECS 2023 · Corresponding Author",
    title: "Deep CNN plant and medicinal species classification",
    detail: "89% accuracy.",
  },
  {
    venue: "IJARESM",
    meta: "November 2023",
    title: "Driver Drowsiness Detection",
    detail: "Dlib EAR plus Keras CNN, Android app, 93% pass rate.",
  },
];

/* ---- WRITING ---- */
window.WRITING = [
  {
    title: "Medium",
    meta: "Essays and engineering notes on agents, evals, and observability.",
    href: window.PROFILE.links.medium,
  },
  {
    title: "mcp-otel-audit writeup",
    meta: "Public audit of four MCP OpenTelemetry instrumentations against the OTel semantic conventions.",
    href: "https://github.com/thebharathkumar/mcp-otel-audit",
  },
];

window.NAV = [
  { id: "loadout", label: "Skills" },
  { id: "missions", label: "Experience" },
  { id: "numbers", label: "Numbers" },
  { id: "heist", label: "Projects" },
  { id: "garage", label: "Garage" },
  { id: "trophies", label: "Trophies" },
  { id: "safehouse", label: "Contact" },
];
