/* ============================================================
   Mohamed Aziz Jallali — Portfolio
   jQuery + Three.js
   ============================================================ */

/* ---------- DATA ---------- */
const MISSIONS = [
  {
    date: "09/2022", title: "Summer Internship — Internal Archives Website",
    org: "Imprimerie Officielle de la République Tunisienne · Radès",
    points: [
      "Built an internal website to streamline and optimise the management of the company's archives.",
      "Designed a robust, scalable backend architecture with Laravel.",
      "Improved interactivity with JavaScript and simplified DOM handling and events with jQuery.",
      "Styled the interface with CSS and structured content with HTML5 for compatibility and accessibility."
    ],
    tags: ["Laravel", "JavaScript", "jQuery", "CSS", "HTML5"]
  },
  {
    date: "02/2023 — 06/2023", title: "PFE Internship — Social Media Platform",
    org: "Telecom For Future · Soliman, Tunisia",
    points: [
      "Developed the prototype of a video-sharing mobile application.",
      "Designed the UI with Flutter for an attractive, high-performance cross-platform app.",
      "Integrated Firebase: authentication, real-time database, cloud storage and Cloud Functions.",
      "Tested and optimised the app for a smooth user experience."
    ],
    tags: ["Flutter", "Firebase", "Auth", "Realtime DB", "Cloud Storage", "Cloud Functions"]
  },
  {
    date: "06/2025 — 07/2025", title: "Internship — Jira/Trello-style Project Management Platform",
    org: "PGS INTL · Mégrine, Tunisia",
    points: [
      "Designed and built a web platform for project management inspired by Jira and Trello.",
      "Implemented tickets, user management, task assignment, kanban boards and more.",
      "Integrated secure authentication and role management (admin, user, supervisor).",
      "Worked with internal teams to define business needs and turn them into concrete features."
    ],
    tags: ["Spring Boot", "Vue.js", "MS SQL Server", "JWT", "REST API", "JavaScript", "CSS"]
  },
  {
    date: "16/06/2026 — 18/08/2026", title: "Summer Internship — Payroll Management Web App",
    org: "AVO Carbon Group · Same Tunisie Service",
    points: [
      "Designed and built a payroll web app covering employees, attendance, salaries and family data.",
      "Spring Boot backend exposed through REST APIs, persisted in PostgreSQL.",
      "React + Vite frontend integrated with the backend, with real-time notifications.",
      "Redis for session management; authentication via Google OAuth 2.0 and email/password.",
      "FastAPI service using Sentence Transformers and scikit-learn for multilingual semantic mapping of CSV/Excel columns to Java entity attributes."
    ],
    extra: [
      "The mapper matches columns automatically despite language differences (French, English, Arabic), phrasing variations and some spelling mistakes — making heterogeneous dataset imports much easier."
    ],
    tags: ["Java", "Spring Boot", "React", "Vite", "PostgreSQL", "Redis", "FastAPI", "Sentence Transformers", "scikit-learn", "NLP", "OAuth 2.0"]
  }
];

const PROJECTS = [
  {
    cat: "ai", name: "SmartWater", kind: "Academic project · Prediction platform",
    sum: "Predicts next year's water consumption and cost from the user's annual usage.",
    points: [
      "User enters annual water consumption; the engine predicts next year's consumption and cost.",
      "XGBoost models combined with clustering to segment consumption profiles.",
      "Analysis of trends, stability and consumption behaviour from historical data.",
      "Decision KPIs and interactive analytical dashboards.",
      "Spring Boot backend exposing REST APIs to run the prediction engine.",
      "Desktop app with React and Electron for advanced result visualisation."
    ],
    tags: ["XGBoost", "Machine Learning", "Clustering", "Python", "Spring Boot", "REST API", "React", "Electron", "Data Viz"]
  },
  {
    cat: "web", name: "Dar Al Hiwar", kind: "Academic project · Community platform",
    sum: "Community web platform combining a content gallery with a discussion forum.",
    points: [
      "Spring Boot backend: users, roles, categories and posts via REST APIs.",
      "Main categories defined by the admin; sub-categories created by members.",
      "Sub-category creators automatically become moderators, managing posts and comments.",
      "Dynamic, reactive Vue.js frontend.",
      "Posts (messages, images, links), comments and discussions."
    ],
    tags: ["Spring Boot", "Vue.js", "REST API", "Java", "JavaScript", "HTML", "CSS"]
  },
  {
    cat: "web", name: "Payroll Platform", kind: "Internship · AVO Carbon Group",
    sum: "Employees, attendance, salaries and family data, with an NLP-powered import mapper.",
    points: [
      "Spring Boot + PostgreSQL backend, React + Vite frontend, Redis sessions.",
      "Google OAuth 2.0 and email/password authentication.",
      "FastAPI microservice with Sentence Transformers for multilingual semantic column mapping (FR / EN / AR)."
    ],
    tags: ["Spring Boot", "React", "PostgreSQL", "Redis", "FastAPI", "NLP", "OAuth 2.0"]
  },
  {
    cat: "web", name: "Project Management Platform", kind: "Internship · PGS INTL",
    sum: "A Jira/Trello-inspired platform with kanban boards, tickets and role-based access.",
    points: [
      "Tickets, user management, task assignment and kanban boards.",
      "JWT authentication with admin, user and supervisor roles.",
      "Spring Boot REST API, Vue.js frontend, Microsoft SQL Server."
    ],
    tags: ["Spring Boot", "Vue.js", "SQL Server", "JWT", "REST API"]
  },
  {
    cat: "mobile", name: "Media Social Platform", kind: "PFE · Telecom For Future",
    sum: "Cross-platform mobile app for sharing video content about social issues in Tunisia.",
    points: [
      "Video-sharing prototype built with Flutter.",
      "Firebase for authentication, real-time database, cloud storage and Cloud Functions.",
      "Tested and optimised for a fluid experience."
    ],
    tags: ["Flutter", "Firebase", "Cloud Functions"]
  },
  {
    cat: "web", name: "Internal Archives System", kind: "Internship · Imprimerie Officielle",
    sum: "Web platform to manage and organise a company's internal archives.",
    points: [
      "Laravel backend, JavaScript and jQuery for interactivity.",
      "HTML5 and CSS for an accessible, friendly interface."
    ],
    tags: ["Laravel", "JavaScript", "jQuery", "CSS", "HTML5"]
  },
  {
    cat: "ai", name: "Anime Recommender", kind: "Personal project · Recommender system",
    sum: "Anime recommendations using SVD and collaborative filtering on a Kaggle dataset.",
    points: [
      "Singular Value Decomposition combined with collaborative filtering.",
      "Kaggle dataset, machine learning techniques and data visualisation in Python."
    ],
    tags: ["Python", "SVD", "Collaborative Filtering", "Kaggle", "Data Viz"]
  }
];

const SKILLS = {
  "Databases":   { color: "#00e5ff", items: ["Oracle", "MySQL", "Firebase", "SQL Server", "PostgreSQL", "Redis"] },
  "Frameworks":  { color: "#ff2bd6", items: ["Laravel", "Angular", "React", "Spring Boot", "JEE", "Flutter", "Vue.js", "FastAPI", "Vite", "Electron"] },
  "ML / AI":     { color: "#b6ff3c", items: ["XGBoost", "Clustering", "Neural Nets", "Backprop", "NLP", "scikit-learn", "Sentence Transformers", "KPIs"] },
  "Languages":   { color: "#ffb02e", items: ["Java", "Python", "C", "C++", "SQL", "Bash", "PL/SQL", "PHP", "JavaScript"] },
  "Tools":       { color: "#a78bfa", items: ["Git", "Docker", "GitHub", "Tomcat", "JBoss 7", "WildFly", "Agile", "Scrum", "JWT", "OAuth 2.0"] }
};

const DEFAULT_SIGNALS = [
  { text: "Mohamed Aziz Jallali is a dedicated and hardworking individual who always brings new ideas to the table.", author: "Mohammed Chedli Kouka" },
  { text: "I had the pleasure of working with Mohamed on multiple projects, and his technical expertise is unmatched.", author: "Ahmed Bensaid" },
  { text: "Mohamed's creativity and problem-solving skills are exceptional. He always delivers high-quality work.", author: "TELECOM FOR FUTURE" }
];

/* ---------- HELPERS ---------- */
const $win = $(window);
let progress = 0, mouse = { x: 0, y: 0 }, smooth = { x: 0, y: 0 };

/* ---------- BUILD DOM ---------- */
function buildMissions() {
  const $fp = $("#flightpath");
  MISSIONS.forEach((m, i) => {
    const $card = $(`<div class="fp reveal"><div class="fp-node">${String(i + 1).padStart(2, "0")}</div>
      <div class="fp-card"><div class="fp-date"></div><h3></h3><div class="fp-org"></div><ul class="main"></ul><ul class="extra"></ul><div class="tags"></div></div></div>`);
    $card.find(".fp-date").text(m.date);
    $card.find("h3").text(m.title);
    $card.find(".fp-org").text(m.org);
    m.points.forEach(p => $card.find("ul.main").append($("<li>").text(p)));
    if (m.extra) {
      m.extra.forEach(p => $card.find("ul.extra").append($("<li>").text(p)));
      $card.find("ul.main").after('<span class="more">+ expand details</span>');
    }
    m.tags.forEach(t => $card.find(".tags").append($("<span>").text(t)));
    $fp.append($card);
  });
  $fp.on("click", ".more", function () {
    const $x = $(this).siblings("ul.extra").slideToggle(300);
    $(this).text($x.is(":visible") ? "+ expand details" : "− collapse");
  });
}

function buildLab() {
  const $g = $("#lab-grid");
  PROJECTS.forEach((p, i) => {
    const $c = $(`<article class="lab-card reveal" data-cat="${p.cat}" data-i="${i}">
      <span class="num"></span><h3></h3><p></p><div class="tags"></div></article>`);
    $c.find(".num").text(`SPECIMEN ${String(i + 1).padStart(2, "0")} · ${p.cat.toUpperCase()}`);
    $c.find("h3").text(p.name);
    $c.find("p").text(p.sum);
    p.tags.slice(0, 4).forEach(t => $c.find(".tags").append($("<span>").text(t)));
    $g.append($c);
  });

  $("#filters").on("click", ".chip", function () {
    $(".chip").removeClass("active"); $(this).addClass("active");
    const f = $(this).data("f");
    $(".lab-card").each(function () {
      const show = f === "all" || $(this).data("cat") === f;
      $(this).stop(true).fadeTo(250, show ? 1 : 0, function () { $(this).toggleClass("hide", !show); });
      if (show) $(this).removeClass("hide");
    });
  });

  $g.on("click", ".lab-card", function () {
    const p = PROJECTS[$(this).data("i")];
    $("#m-kind").text("// " + p.kind.toUpperCase());
    $("#m-title").text(p.name);
    $("#m-points").empty(); p.points.forEach(x => $("#m-points").append($("<li>").text(x)));
    $("#m-tags").empty(); p.tags.forEach(t => $("#m-tags").append($("<span>").text(t)));
    $("#modal").css("display", "flex").hide().fadeIn(250);
  });
  $("#modal-close").on("click", () => $("#modal").fadeOut(200));
  $("#modal").on("click", e => { if (e.target.id === "modal") $("#modal").fadeOut(200); });
  $(document).on("keydown", e => { if (e.key === "Escape") $("#modal").fadeOut(200); });

  // spotlight on hover
  $g.on("mousemove", ".lab-card", function (e) {
    const r = this.getBoundingClientRect();
    $(this).css({ "--mx": (e.clientX - r.left) + "px", "--my": (e.clientY - r.top) + "px" });
  });
}

function buildSignals() {
  let stored = [];
  try { stored = JSON.parse(localStorage.getItem("az_signals") || "[]"); } catch (e) {}
  const all = DEFAULT_SIGNALS.concat(stored);
  const $l = $("#signals-list").empty();
  all.forEach(s => {
    const $s = $('<div class="signal reveal"><p></p><b></b></div>');
    $s.find("p").text(s.text); $s.find("b").text("— " + s.author);
    $l.append($s);
  });
  observeReveal();
}
$("#signal-form").on("submit", function (e) {
  e.preventDefault();
  const text = $("#signal-text").val().trim(), author = $("#signal-author").val().trim();
  if (!text || !author) return;
  let stored = [];
  try { stored = JSON.parse(localStorage.getItem("az_signals") || "[]"); } catch (e) {}
  stored.push({ text, author });
  try { localStorage.setItem("az_signals", JSON.stringify(stored)); } catch (e) {}
  this.reset();
  buildSignals();
  $("#signals-list .signal").last().addClass("in");
});

/* ---------- SKILL SPHERE (manual 3D projection) ---------- */
function buildSphere() {
  const $s = $("#sphere"), nodes = [], legend = $("#skill-legend");
  Object.entries(SKILLS).forEach(([group, g]) => {
    g.items.forEach(it => nodes.push({ t: it, g: group, c: g.color }));
    legend.append(`<div class="legend-row" data-g="${group}" style="border-left-color:${g.color}"><b style="color:${g.color}">${group.toUpperCase()}</b><span>${g.items.join(" · ")}</span></div>`);
  });
  const n = nodes.length, ga = Math.PI * (3 - Math.sqrt(5));
  nodes.forEach((o, i) => {
    const y = 1 - (i / (n - 1)) * 2, r = Math.sqrt(1 - y * y), th = ga * i;
    o.x = Math.cos(th) * r; o.y = y; o.z = Math.sin(th) * r;
    o.$ = $('<span class="node"></span>').text(o.t).css("color", o.c).appendTo($s);
    o.$.on("mouseenter", () => $(`.legend-row[data-g="${o.g}"]`).addClass("on"))
       .on("mouseleave", () => $(".legend-row").removeClass("on"));
  });
  let ax = 0, ay = 0;
  function tick() {
    const W = $s.width(), H = $s.height(), R = Math.min(W, H) * 0.42;
    ay += 0.004 + mouse.x * 0.01; ax += mouse.y * -0.006;
    const cy = Math.cos(ay), sy = Math.sin(ay), cx = Math.cos(ax), sx = Math.sin(ax);
    nodes.forEach(o => {
      let x = o.x * cy - o.z * sy, z = o.x * sy + o.z * cy;
      let y = o.y * cx - z * sx; z = o.y * sx + z * cx;
      const s = (z + 2) / 3;
      o.$.css({
        transform: `translate(calc(-50% + ${x * R * 1.25}px), calc(-50% + ${y * R}px)) scale(${0.55 + s * 0.7})`,
        opacity: 0.25 + s * 0.75, zIndex: Math.round(s * 100)
      });
    });
    requestAnimationFrame(tick);
  }
  tick();
}

/* ---------- TERMINAL ---------- */
function buildTerminal() {
  const $b = $("#term-body"), $i = $("#term-in");
  const hist = []; let hp = 0;
  const out = (html, cls = "out") => { $b.append($(`<div class="${cls}"></div>`).html(html)); $b.scrollTop($b[0].scrollHeight); };
  const esc = s => $("<div>").text(s).html();
  const CMDS = {
    help: () => "commands: about, projects, internships, skills, education, certs, contact, goto <sector>, theme, clear",
    about: () => "Mohamed Aziz Jallali — Software Engineering student (Polytech Intl). Full-stack + ML. Based in Hammam Chott, Ben Arous, Tunisia.",
    projects: () => PROJECTS.map((p, i) => `${i + 1}. ${esc(p.name)} — ${esc(p.sum)}`).join("\n"),
    internships: () => MISSIONS.map(m => `[${esc(m.date)}] ${esc(m.org)}`).join("\n"),
    skills: () => Object.entries(SKILLS).map(([g, v]) => `${g}: ${v.items.join(", ")}`).join("\n"),
    education: () => "Cycle Ingénieur en Génie Logiciel — Polytech Intl (2024–present)\nLicence en Informatique — ISTIC (2020–2023)",
    certs: () => "IBM Big Data Engineer (2021)\nNVIDIA Fundamentals of Deep Learning (Nov 2025)\nIT Specialist — Java (Certiport)",
    contact: () => 'email: <a href="mailto:azizjallali.99@gmail.com">azizjallali.99@gmail.com</a>\nlinkedin: <a target="_blank" rel="noopener" href="https://www.linkedin.com/in/mohamed-aziz-jallali-534b88233/">mohamed-aziz-jallali</a>\nphone: +216 51 147 163',
    theme: () => { const h = Math.floor(Math.random() * 360); document.documentElement.style.setProperty("--a", `hsl(${h},100%,60%)`); document.documentElement.style.setProperty("--b", `hsl(${(h + 150) % 360},100%,60%)`); return "accent shifted to hue " + h; },
    clear: () => { $b.empty(); return null; }
  };
  const safe = new Set(["help","about","skills","education","certs","contact","theme","clear","projects","internships"]);
  function run(raw) {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;
    out("$ " + esc(raw), "cmd");
    if (cmd.startsWith("goto ")) {
      const t = cmd.slice(5).trim(), map = { origin: "hero", log: "log", lab: "lab", skills: "skills", creds: "creds", signals: "signals" };
      if (map[t]) { out("warping to " + t + "..."); $("html,body").animate({ scrollTop: $("#" + map[t]).offset().top }, 1200); }
      else out("unknown sector. try: " + Object.keys(map).join(", "));
      return;
    }
    if (cmd === "sudo hire aziz") { out("permission granted. sending offer letter... (just kidding, but please do email me!)"); return; }
    if (safe.has(cmd)) { const r = CMDS[cmd](); if (r) out(r); }
    else out("command not found: " + esc(cmd) + " — type 'help'");
  }
  out("Welcome. Type 'help' to list commands.");
  $i.on("keydown", e => {
    if (e.key === "Enter") { const v = $i.val(); if (v.trim()) { hist.push(v); hp = hist.length; } run(v); $i.val(""); }
    else if (e.key === "ArrowUp") { if (hp > 0) $i.val(hist[--hp]); e.preventDefault(); }
    else if (e.key === "ArrowDown") { if (hp < hist.length - 1) $i.val(hist[++hp]); else { hp = hist.length; $i.val(""); } }
  });
  $(".term").on("click", () => $i.trigger("focus"));
}

/* ---------- UI EFFECTS ---------- */
function typing() {
  const words = ["full-stack platforms.", "ML-powered features.", "REST APIs that scale.", "mobile apps with Flutter.", "things that feel alive."];
  let w = 0, c = 0, del = false;
  (function step() {
    const word = words[w];
    $("#typed").text(word.slice(0, c));
    if (!del && c === word.length) { del = true; return setTimeout(step, 1400); }
    if (del && c === 0) { del = false; w = (w + 1) % words.length; }
    c += del ? -1 : 1;
    setTimeout(step, del ? 35 : 70);
  })();
}

function counters() {
  $("[data-count]").each(function () {
    const $e = $(this), to = +$e.data("count");
    $({ v: 0 }).animate({ v: to }, { duration: 1600, step: v => $e.text(Math.floor(v)), complete: () => $e.text(to) });
  });
}

function observeReveal() {
  if (!("IntersectionObserver" in window)) { $(".reveal,.langs").addClass("in"); return; }
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { $(e.target).addClass("in"); io.unobserve(e.target); }
  }), { threshold: 0.12 });
  $(".reveal:not(.in), .langs:not(.in)").each(function () { io.observe(this); });
}

function tilt() {
  $(document).on("mousemove", ".tilt, .lab-card", function (e) {
    const r = this.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
    this.style.transform = `perspective(800px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) scale(1.02)`;
  }).on("mouseleave", ".tilt, .lab-card", function () { this.style.transform = ""; });
}

function cursor() {
  const $c = $("#cursor"), $r = $("#cursor-ring");
  let rx = 0, ry = 0, cx = 0, cy = 0;
  $(document).on("mousemove", e => {
    cx = e.clientX; cy = e.clientY;
    $c.css({ left: cx, top: cy });
    mouse.x = (e.clientX / innerWidth - .5) * 2;
    mouse.y = (e.clientY / innerHeight - .5) * 2;
  });
  (function loop() { rx += (cx - rx) * .15; ry += (cy - ry) * .15; $r.css({ left: rx, top: ry }); requestAnimationFrame(loop); })();
  $(document).on("mouseenter", "a,button,.lab-card,.more,input,textarea", () => $r.addClass("hover"))
             .on("mouseleave", "a,button,.lab-card,.more,input,textarea", () => $r.removeClass("hover"));
}

function hud() {
  const sectors = ["hero", "log", "lab", "skills", "creds", "signals", "terminal"];
  const names = { hero: "ORIGIN", log: "MISSION LOG", lab: "THE LAB", skills: "SKILL SPHERE", creds: "CREDENTIALS", signals: "SIGNALS", terminal: "TERMINAL" };
  function update() {
    const max = document.documentElement.scrollHeight - innerHeight;
    progress = max > 0 ? Math.min(1, Math.max(0, scrollY / max)) : 0;
    $("#prog").css("width", progress * 100 + "%");
    $("#t-depth").text(String(Math.floor(progress * 9999)).padStart(4, "0"));
    let cur = "hero";
    sectors.forEach(s => { if ($("#" + s).offset().top - innerHeight * .4 <= scrollY) cur = s; });
    $("#sectors a").removeClass("on").filter(`[data-s="${cur}"]`).addClass("on");
    $("#t-sector").text(names[cur]);
  }
  $win.on("scroll resize", update); update();
  $("a[href^='#']").on("click", function (e) {
    const t = $(this.getAttribute("href"));
    if (t.length) { e.preventDefault(); $("html,body").stop().animate({ scrollTop: t.offset().top }, 1100); }
  });
}

/* ---------- THREE.JS SPACE ---------- */
function space() {
  if (typeof THREE === "undefined") return;
  const canvas = document.getElementById("space");
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x05060d, 0.0065);
  const camera = new THREE.PerspectiveCamera(65, 1, 0.1, 800);
  camera.position.z = 30;

  // starfield tunnel
  const N = 5000, pos = new Float32Array(N * 3), col = new Float32Array(N * 3);
  const palette = [new THREE.Color("#00e5ff"), new THREE.Color("#ff2bd6"), new THREE.Color("#b6ff3c"), new THREE.Color("#ffffff")];
  for (let i = 0; i < N; i++) {
    pos[i * 3] = (Math.random() - .5) * 220;
    pos[i * 3 + 1] = (Math.random() - .5) * 220;
    pos[i * 3 + 2] = 60 - Math.random() * 520;
    const c = palette[Math.floor(Math.random() * palette.length)];
    col.set([c.r, c.g, c.b], i * 3);
  }
  const pg = new THREE.BufferGeometry();
  pg.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  pg.setAttribute("color", new THREE.BufferAttribute(col, 3));
  const stars = new THREE.Points(pg, new THREE.PointsMaterial({ size: 0.55, vertexColors: true, transparent: true, opacity: .85, depthWrite: false }));
  scene.add(stars);

  // landmarks, one per sector
  const landmarks = [];
  const geos = [
    new THREE.IcosahedronGeometry(7, 1),
    new THREE.TorusKnotGeometry(5, 1.4, 120, 14),
    new THREE.OctahedronGeometry(7, 0),
    new THREE.TorusGeometry(7, 0.7, 12, 60),
    new THREE.DodecahedronGeometry(6.5, 0),
    new THREE.TetrahedronGeometry(8, 0),
    new THREE.SphereGeometry(7, 20, 14)
  ];
  const hues = [.52, .85, .25, .1, .7, .55, .92];
  geos.forEach((g, i) => {
    const m = new THREE.MeshBasicMaterial({ color: new THREE.Color().setHSL(hues[i], 1, .6), wireframe: true, transparent: true, opacity: .55 });
    const mesh = new THREE.Mesh(g, m);
    mesh.position.set(i === 0 ? 14 : (i % 2 ? -20 : 20), i === 0 ? 2 : (i % 3 - 1) * 5, -i * 70 - 5);
    scene.add(mesh); landmarks.push(mesh);
    // inner glow core
    const core = new THREE.Mesh(new THREE.SphereGeometry(1.2, 12, 12), new THREE.MeshBasicMaterial({ color: m.color }));
    mesh.add(core);
  });

  // orbiting rings around hero landmark
  const ring = new THREE.Mesh(new THREE.RingGeometry(11, 11.15, 90), new THREE.MeshBasicMaterial({ color: 0x00e5ff, side: THREE.DoubleSide, transparent: true, opacity: .5 }));
  ring.rotation.x = Math.PI / 2.4; landmarks[0].add(ring);

  // floating data shards (ambient)
  const shards = [];
  for (let i = 0; i < 70; i++) {
    const s = new THREE.Mesh(new THREE.BoxGeometry(.6, .6, .6), new THREE.MeshBasicMaterial({ color: palette[i % 3], wireframe: true, transparent: true, opacity: .6 }));
    s.position.set((Math.random() - .5) * 90, (Math.random() - .5) * 60, 20 - Math.random() * 440);
    s.userData.v = { x: Math.random() * .02, y: Math.random() * .02 };
    scene.add(s); shards.push(s);
  }

  function resize() { renderer.setSize(innerWidth, innerHeight, false); camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix(); }
  $win.on("resize", resize); resize();

  let camZ = 30, t = 0;
  (function loop() {
    t += 0.01;
    smooth.x += (mouse.x - smooth.x) * .05; smooth.y += (mouse.y - smooth.y) * .05;

    const targetZ = 30 - progress * 440;
    camZ += (targetZ - camZ) * .06;
    camera.position.z = camZ;
    camera.position.x = smooth.x * 4 + Math.sin(progress * Math.PI * 4) * 6;
    camera.position.y = -smooth.y * 3 + Math.cos(progress * Math.PI * 3) * 3;
    camera.rotation.z = Math.sin(progress * Math.PI * 6) * 0.05;
    camera.lookAt(camera.position.x * .3, camera.position.y * .3, camZ - 40);

    landmarks.forEach((m, i) => { m.rotation.x += .003 + i * .0004; m.rotation.y += .004; });
    ring.rotation.z += .006;
    shards.forEach(s => { s.rotation.x += s.userData.v.x; s.rotation.y += s.userData.v.y; });
    stars.rotation.z = t * .02;

    // global hue drift along the path
    const h = (0.52 + progress * .5) % 1;
    stars.material.size = .5 + Math.sin(t * 3) * .05;
    scene.fog.color.setHSL(h, .6, .03);

    renderer.render(scene, camera);
    requestAnimationFrame(loop);
  })();
}

/* ---------- BOOT ---------- */
function boot() {
  const lines = ["> initialising portfolio kernel...", "> loading three.js renderer............ ok", "> mounting mission log................. ok", "> compiling skill sphere............... ok", "> calibrating flight path.............. ok", "> welcome, traveller."];
  let i = 0;
  const $log = $("#boot-log");
  const iv = setInterval(() => { if (i < lines.length) $log.append(lines[i++] + "\n"); else clearInterval(iv); }, 280);
  $({ v: 0 }).animate({ v: 100 }, {
    duration: 1900, easing: "swing",
    step: v => { $("#boot-fill").css("width", v + "%"); $("#boot-pct").text(Math.floor(v) + "%"); },
    complete: () => $("#boot").fadeOut(600, () => { typing(); counters(); })
  });
}

/* ---------- INIT ---------- */
$(function () {
  buildMissions(); buildLab(); buildSphere(); buildTerminal(); buildSignals();
  tilt(); cursor(); hud(); space(); observeReveal(); boot();
});