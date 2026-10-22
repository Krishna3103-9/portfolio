/* ==========================================================================
   Krishna Kumar Maurya — portfolio interactions
   ========================================================================== */

(() => {
  "use strict";

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const baseTitle = document.title;

  /* ---------------------------------------------------------------------
     Case study content
     --------------------------------------------------------------------- */

  const PROJECTS = {
    "learning-paths": {
      index: "01",
      title: "Learning paths that explain themselves",
      client: "IBM · Remote",
      year: "2026",
      role: "Product design + full-stack intern",
      timeline: "Jun — Jul 2026 · 6 weeks",
      team: "Cross-functional, remote",
      focus: "Learner profiling, API design, interface states",
      theme: "blue",
      principle: "If the system can’t explain the next step, it’s a list — not a path.",
      annotation: "Interface principle / 01",
      flow: ["Business requirement", "Learner profile", "Sequenced path", "Why this next"],
      lede: "An internship project turning a learner profile into a sequenced path — and making every recommendation explain itself.",
      problem: [
        "Most learning products answer “what should I learn?” with an undifferentiated catalogue. The learner still has to do the sequencing work: judge prerequisites, guess the order, and trust a recommendation engine they can’t see.",
        "For IBM’s personalised learning path project, the brief was to turn a profile into a path. The real design problem was confidence: a path is only useful if the learner understands why it looks the way it does."
      ],
      did: [
        "Translated business requirements into user flows and a profile model: goals, current skills, time available and prior learning.",
        "Designed and built 15+ REST APIs and the user-profiling logic behind recommendations, then validated behaviour with structured test cases.",
        "Defined the interface states for new profiles, sparse data and conflicting goals — the moments where generic dashboards usually fall apart.",
        "Documented specifications and design decisions so recommendation changes stayed legible to the rest of the team.",
        "Worked in Agile cycles with code reviews and feedback, iterating on recommendation logic and performance."
      ],
      decisions: [
        {
          t: "A path, not a percentage",
          d: "A completion bar says how far you’ve come. A sequence says what to do next. I made the path the primary object — current step, time cost, and what it unlocks."
        },
        {
          t: "Every suggestion carries a reason",
          d: "Each step includes a short “why this next” line drawn from profile signals: prior React work, a stated goal, available time. When confidence is low, the interface offers alternatives instead of pretending certainty."
        },
        {
          t: "Design the thin-data states first",
          d: "New learners have almost no signal. I specified the empty, partial and conflicting-goal states before the happy path, so the product stayed honest instead of inventing precision."
        }
      ],
      outcome: "The system shipped as a working proof of concept: 15+ REST APIs, user profiling, recommendation logic and test coverage, with specs and rationale documented for the team. It turned an abstract “AI recommends courses” idea into an interface a learner could actually read.",
      next: "Run comprehension tests with real learners — can they explain back why a step was recommended? — and instrument where they abandon the path. I’d also test whether showing alternatives increases trust or creates choice paralysis.",
      stack: ["React / Next.js", "Python", "REST APIs", "Agile / Scrum", "Design documentation", "Test cases"],
      nextSlug: "agent-console"
    },

    "agent-console": {
      index: "02",
      title: "Watching agents think",
      client: "Personal product · AI systems",
      year: "2026",
      role: "Design + full-stack",
      timeline: "2026",
      team: "Solo build",
      focus: "Dashboard IA, status system, orchestration",
      theme: "ink",
      principle: "Motion isn’t progress. Show me what changed, what’s stuck, and what needs me.",
      annotation: "Interface principle / 02",
      flow: ["Agent run", "Status", "Decisions", "Report"],
      lede: "A real-time dashboard for a company staffed by AI agents — designed so you can tell the difference between working, stuck and finished.",
      problem: [
        "Multi-agent systems generate a lot of activity and very little meaning. Logs scroll, statuses flicker, and the person watching has no idea whether the system is making progress or quietly failing.",
        "For the AI Company Simulator, I designed and built the surface that answers three questions in order: what is happening, what changed, and what needs me?"
      ],
      did: [
        "Built the React/Next.js console for agent status, task progress and generated reports.",
        "Designed one status system across the product: queued, running, blocked and done — each with a label, a last action and a timestamp.",
        "Worked against a Python/FastAPI multi-agent backend where specialist agents report to a CEO agent, with persistent memory in pgvector.",
        "Made reports first-class artifacts: stable layouts for recommendations, reasoning and sources instead of a wall of model output.",
        "Debugged orchestration and tool use across web research and financial analysis."
      ],
      decisions: [
        {
          t: "What needs me now, first",
          d: "The top of the console is a single strip of decisions waiting on a human. Activity, traces and reports sit below it in descending order of urgency."
        },
        {
          t: "Status is a sentence, not a colour",
          d: "Every state carries a label, the last action taken, and how long it has held. Colour is a fast cue, never the only one — important when several agents move at once."
        },
        {
          t: "Three levels of depth",
          d: "Summary → task → trace. The same interface works for a demo, a daily check-in and a debugging session, so users build one mental model instead of three."
        }
      ],
      outcome: "The result is a working multi-agent product: a live dashboard over a Python/FastAPI system with orchestration, persistent memory, web research and financial analysis tools. Complex activity becomes a readable sequence of states, decisions and artifacts.",
      next: "Add cost and latency per agent, plus a replay of any run. The next honest question for an ops interface isn’t “what happened” — it’s “was it worth it?”",
      stack: ["React / Next.js", "Python", "FastAPI", "pgvector", "Docker", "Tool use / orchestration"],
      nextSlug: "ai-inbox"
    },

    "ai-inbox": {
      index: "03",
      title: "An inbox that respects attention",
      client: "Personal product · AI SaaS",
      year: "2026",
      role: "Design + full-stack",
      timeline: "2026",
      team: "Solo build",
      focus: "Triage flows, OAuth trust, background jobs",
      theme: "sand",
      principle: "Automation should remove decisions, not add another feed to check.",
      annotation: "Interface principle / 03",
      flow: ["Thread", "Summary", "Draft reply", "Digest"],
      lede: "An AI email assistant for Gmail and Outlook, designed around one rule: remove decisions, don’t add another feed to check.",
      problem: [
        "Most AI inbox tools fail in one of two directions. They over-automate and make you nervous, or they add a second inbox of suggestions you now have to triage.",
        "The brief for this SaaS app was practical: summarise threads, draft replies and surface what matters — while keeping the user clearly in control of what gets sent."
      ],
      did: [
        "Designed and built the full-stack application with Node.js, Express, Prisma and Docker.",
        "Integrated Gmail and Microsoft Graph APIs behind Google and Microsoft OAuth.",
        "Built REST endpoints for thread summarisation, smart replies and inbox categorisation using prompt engineering.",
        "Engineered background jobs with Redis and BullMQ for scheduled emails, reminders and a daily AI digest.",
        "Wrote the interface copy for AI actions: what the model did, what it needs, and how to undo it."
      ],
      decisions: [
        {
          t: "Suggestions are drafts, not commands",
          d: "Every generated reply opens as an editable draft with its source thread attached. Accept, edit or dismiss — the user’s hand stays on the send button."
        },
        {
          t: "Priority needs a reason",
          d: "Instead of a red badge, priority items explain themselves: a deadline, a direct question, a thread you usually answer. The label summarises evidence, not a mystery score."
        },
        {
          t: "Automation should be quiet",
          d: "Scheduled sends, reminders and summaries live in one daily digest. Background work shouldn’t generate its own notification stream."
        }
      ],
      outcome: "A deployed assistant that connects to both major inbox providers, with OAuth, summarisation, smart replies, categorisation and reliable background processing. The interface keeps AI output inspectable and reversible.",
      next: "Measure how often suggested replies are accepted without edits — the honest signal of quality. Then add visible confidence and a one-click undo window for every automated action.",
      stack: ["Node.js", "Express", "Prisma", "Docker", "Redis", "BullMQ", "Gmail API", "Microsoft Graph", "OAuth"],
      nextSlug: "learning-paths"
    }
  };

  /* ---------------------------------------------------------------------
     Small utilities
     --------------------------------------------------------------------- */

  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const clockEl = $("#localTime");
  if (clockEl) {
    const timeFormat = new Intl.DateTimeFormat("en-IN", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true
    });
    const tick = () => { clockEl.textContent = timeFormat.format(new Date()) + " IST"; };
    tick();
    setInterval(tick, 30000);
  }

  const toastEl = $("#toast");
  let toastTimer = null;
  function showToast(message) {
    if (!toastEl) return;
    toastEl.textContent = message;
    toastEl.classList.add("is-show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("is-show"), 2600);
  }

  function trapFocus(e, container) {
    if (e.key !== "Tab") return;
    const items = $$('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])', container)
      .filter(el => el.getClientRects().length > 0);
    if (!items.length) return;
    const first = items[0];
    const last = items[items.length - 1];
    const active = document.activeElement;
    if (e.shiftKey) {
      if (active === first || !container.contains(active)) {
        e.preventDefault();
        last.focus();
      }
    } else if (active === last || !container.contains(active)) {
      e.preventDefault();
      first.focus();
    }
  }

  /* ---------------------------------------------------------------------
     Header progress + scroll state
     --------------------------------------------------------------------- */

  const headerEl = $("#siteHeader");
  const progressEl = $("#progressBar");
  const onScroll = () => {
    const y = window.scrollY || window.pageYOffset;
    if (headerEl) headerEl.classList.toggle("is-scrolled", y > 12);
    if (progressEl) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progressEl.style.width = (max > 0 ? Math.min(100, (y / max) * 100) : 0) + "%";
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------------------------------------------------------------------
     Mobile menu
     --------------------------------------------------------------------- */

  const menuEl = $("#mobileMenu");
  const menuToggle = $("#menuToggle");
  const menuCloseBtn = $(".mobile-menu-close");
  const mainEl = $("#main");
  const footerEl = $(".footer");
  let menuOpen = false;
  let caseOpen = false;

  function openMenu() {
    if (!menuEl || !menuToggle) return;
    menuOpen = true;
    menuEl.classList.add("is-open");
    menuEl.setAttribute("aria-hidden", "false");
    menuToggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("no-scroll");
    if (mainEl) mainEl.inert = true;
    if (footerEl) footerEl.inert = true;
    menuEl.getBoundingClientRect();
    if (menuCloseBtn) menuCloseBtn.focus({ preventScroll: true });
  }

  function closeMenu(restoreFocus = true) {
    if (!menuEl || !menuToggle) return;
    menuOpen = false;
    menuEl.classList.remove("is-open");
    menuEl.setAttribute("aria-hidden", "true");
    menuToggle.setAttribute("aria-expanded", "false");
    if (!caseOpen) document.body.classList.remove("no-scroll");
    if (mainEl) mainEl.inert = false;
    if (footerEl) footerEl.inert = false;
    if (restoreFocus) menuToggle.focus({ preventScroll: true });
  }

  if (menuEl && menuToggle) {
    menuToggle.addEventListener("click", () => (menuOpen ? closeMenu() : openMenu()));
    if (menuCloseBtn) menuCloseBtn.addEventListener("click", () => closeMenu());
    $$("[data-menu-link]").forEach(link => link.addEventListener("click", () => closeMenu(false)));
    menuEl.addEventListener("keydown", e => trapFocus(e, menuEl));
  }

  /* ---------------------------------------------------------------------
     Scroll reveal
     --------------------------------------------------------------------- */

  const revealEls = $$("[data-reveal]");
  if ("IntersectionObserver" in window && !reducedMotion) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        el.classList.add("is-in");
        revealObserver.unobserve(el);
        const delay = parseFloat(getComputedStyle(el).getPropertyValue("--delay")) || 0;
        setTimeout(() => el.removeAttribute("data-reveal"), 900 + delay);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    revealEls.forEach(el => revealObserver.observe(el));
  } else {
    revealEls.forEach(el => {
      el.classList.add("is-in");
      el.removeAttribute("data-reveal");
    });
  }

  /* ---------------------------------------------------------------------
     Hero console — tabs + gentle auto-advance
     --------------------------------------------------------------------- */

  const consoleEl = $("[data-console]");
  if (consoleEl) {
    const tabs = $$(".console-tab", consoleEl);
    const panels = $$(".console-panel", consoleEl);
    const counter = $("#consoleIndex");
    let current = 0;
    let consoleHover = false;
    let consoleFocused = false;
    let autoTimer = null;

    const activate = (next) => {
      current = (next + tabs.length) % tabs.length;
      tabs.forEach((tab, i) => {
        const active = i === current;
        tab.classList.toggle("is-active", active);
        tab.setAttribute("aria-selected", active ? "true" : "false");
        tab.tabIndex = active ? 0 : -1;
      });
      panels.forEach((panel, i) => panel.classList.toggle("is-active", i === current));
      if (counter) counter.textContent = String(current + 1).padStart(2, "0");
    };

    const stopAuto = () => {
      if (autoTimer) clearInterval(autoTimer);
      autoTimer = null;
    };

    tabs.forEach((tab, i) => {
      tab.addEventListener("click", () => {
        stopAuto();
        activate(i);
      });
      tab.addEventListener("keydown", (e) => {
        const dir = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
        if (!dir) return;
        e.preventDefault();
        stopAuto();
        activate(current + dir);
        tabs[current].focus();
      });
    });

    consoleEl.addEventListener("mouseenter", () => { consoleHover = true; });
    consoleEl.addEventListener("mouseleave", () => { consoleHover = false; });
    consoleEl.addEventListener("focusin", () => { consoleFocused = true; });
    consoleEl.addEventListener("focusout", (e) => {
      if (!consoleEl.contains(e.relatedTarget)) consoleFocused = false;
    });

    if (!reducedMotion) {
      autoTimer = setInterval(() => {
        if (document.hidden || consoleHover || consoleFocused || caseOpen || menuOpen) return;
        activate(current + 1);
      }, 5600);
    }
  }

  /* ---------------------------------------------------------------------
     Active nav
     --------------------------------------------------------------------- */

  const navLinks = $$("[data-nav]");
  const navSections = ["work", "approach", "experience", "toolkit", "contact"]
    .map(id => document.getElementById(id))
    .filter(Boolean);

  if ("IntersectionObserver" in window && navSections.length) {
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinks.forEach(link => {
          link.classList.toggle("is-active", link.dataset.nav === entry.target.id);
        });
      });
    }, { rootMargin: "-42% 0px -52% 0px", threshold: 0 });
    navSections.forEach(section => navObserver.observe(section));
  }

  /* ---------------------------------------------------------------------
     Copy email
     --------------------------------------------------------------------- */

  function legacyCopy(text) {
    const area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.top = "-1000px";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    let ok = false;
    try { ok = document.execCommand("copy"); } catch (err) { ok = false; }
    area.remove();
    return ok;
  }

  $$("[data-copy-email]").forEach(btn => {
    btn.addEventListener("click", async () => {
      const email = btn.getAttribute("data-copy-email") || "";
      if (!email) return;
      let copied = false;
      try {
        await navigator.clipboard.writeText(email);
        copied = true;
      } catch (err) {
        copied = legacyCopy(email);
      }
      showToast(copied ? "Email copied — talk soon" : "Email: " + email);
    });
  });

  /* ---------------------------------------------------------------------
     Case study overlay + hash routing
     --------------------------------------------------------------------- */

  const caseEl = $("#case");
  const caseContent = $("#caseContent");
  const caseCloseBtn = $(".case-close");
  let lastFocused = null;

  const arrowSvg = '<svg width="22" height="22" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 10 10 2M10 2H3.5M10 2V8.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  function renderCase(project) {
    const next = PROJECTS[project.nextSlug];
    const decisions = project.decisions.map((d, i) => (
      '<div class="case-decision">' +
        '<h3><span>0' + (i + 1) + '</span>' + d.t + '</h3>' +
        '<p>' + d.d + '</p>' +
      '</div>'
    )).join("");

    const flow = project.flow.map((step, i) => (
      (i ? '<i aria-hidden="true">→</i>' : "") + '<span>' + step + '</span>'
    )).join("");

    const problem = project.problem.map(paragraph => '<p>' + paragraph + '</p>').join("");
    const did = project.did.map(item => '<li>' + item + '</li>').join("");
    const stack = project.stack.map(item => '<span>' + item + '</span>').join("");

    return (
      '<article class="case-article">' +
        '<header class="case-intro">' +
          '<p class="case-kicker">Case study ' + project.index + ' — ' + project.client + ' · ' + project.year + '</p>' +
          '<h1 class="case-title" id="caseTitle">' + project.title + '</h1>' +
          '<p class="case-lede">' + project.lede + '</p>' +
        '</header>' +

        '<div class="case-visual case-visual--' + project.theme + '">' +
          '<span class="case-visual-label">' + project.annotation + '</span>' +
          '<p class="case-visual-quote">“' + project.principle + '”</p>' +
          '<span class="case-visual-mark" aria-hidden="true">' + project.index + '</span>' +
        '</div>' +

        '<div class="case-flow" aria-label="Project flow">' + flow + '</div>' +

        '<dl class="case-meta">' +
          '<div><dt>Role</dt><dd>' + project.role + '</dd></div>' +
          '<div><dt>Timeline</dt><dd>' + project.timeline + '</dd></div>' +
          '<div><dt>Context</dt><dd>' + project.team + '</dd></div>' +
          '<div><dt>Focus</dt><dd>' + project.focus + '</dd></div>' +
        '</dl>' +

        '<div class="case-body">' +
          '<section class="case-section">' +
            '<h2 data-num="01">The problem</h2>' +
            problem +
          '</section>' +
          '<section class="case-section">' +
            '<h2 data-num="02">What I did</h2>' +
            '<ul class="case-list">' + did + '</ul>' +
          '</section>' +
          '<section class="case-section">' +
            '<h2 data-num="03">Interface decisions</h2>' +
            '<div class="case-decisions">' + decisions + '</div>' +
          '</section>' +
          '<section class="case-section">' +
            '<h2 data-num="04">What shipped</h2>' +
            '<p>' + project.outcome + '</p>' +
            '<div class="case-stack" aria-label="Tools and technologies">' + stack + '</div>' +
          '</section>' +
          '<section class="case-section">' +
            '<h2 data-num="05">What I’d do next</h2>' +
            '<p>' + project.next + '</p>' +
          '</section>' +
        '</div>' +

        '<a class="case-next" href="#work/' + project.nextSlug + '" data-case-link="' + project.nextSlug + '">' +
          '<span class="case-next-copy"><span>Next case study</span><strong>' + (next ? next.title : "Back to work") + '</strong></span>' +
          arrowSvg +
        '</a>' +
      '</article>'
    );
  }

  function openCase(slug) {
    const project = PROJECTS[slug];
    if (!project || !caseEl || !caseContent) return;
    if (menuOpen) closeMenu(false);

    const wasOpen = caseOpen;
    if (!wasOpen) lastFocused = document.activeElement;

    caseContent.innerHTML = renderCase(project);
    caseEl.classList.add("is-open");
    caseEl.setAttribute("aria-hidden", "false");
    caseEl.scrollTop = 0;
    document.body.classList.add("no-scroll");
    if (mainEl) mainEl.inert = true;
    if (headerEl) headerEl.inert = true;
    if (footerEl) footerEl.inert = true;
    caseOpen = true;
    document.title = project.title + " — Krishna Kumar Maurya";

    if (!wasOpen && caseCloseBtn) {
      caseEl.getBoundingClientRect();
      caseCloseBtn.focus({ preventScroll: true });
    } else {
      const heading = $("#caseTitle", caseContent);
      if (heading) {
        heading.setAttribute("tabindex", "-1");
        heading.focus({ preventScroll: true });
      }
    }
  }

  function closeCase(restoreFocus = true) {
    if (!caseOpen || !caseEl) return;
    caseOpen = false;
    caseEl.classList.remove("is-open");
    document.title = baseTitle;
    if (!menuOpen) document.body.classList.remove("no-scroll");
    if (mainEl) mainEl.inert = false;
    if (headerEl) headerEl.inert = false;
    if (footerEl) footerEl.inert = false;

    if (restoreFocus) {
      const target = lastFocused && document.contains(lastFocused) ? lastFocused : null;
      if (target) target.focus({ preventScroll: true });
    }
    caseEl.setAttribute("aria-hidden", "true");
  }

  function closeCaseRequest() {
    if (history.state && history.state.case) {
      history.back();
    } else {
      history.replaceState({}, "", location.pathname + location.search);
      closeCase();
    }
  }

  const slugFromHash = () => {
    const match = location.hash.match(/^#work\/([a-z0-9-]+)$/i);
    return match ? match[1] : null;
  };

  if (caseEl) {
    document.addEventListener("click", (e) => {
      const projectTrigger = e.target.closest("[data-project]");
      if (projectTrigger) {
        const slug = projectTrigger.getAttribute("data-project");
        if (!PROJECTS[slug]) return;
        e.preventDefault();
        if (caseOpen) {
          history.replaceState({ case: slug }, "", "#work/" + slug);
        } else {
          history.pushState({ case: slug }, "", "#work/" + slug);
        }
        openCase(slug);
        return;
      }

      const caseLink = e.target.closest("[data-case-link]");
      if (caseLink) {
        const slug = caseLink.getAttribute("data-case-link");
        if (!PROJECTS[slug]) return;
        e.preventDefault();
        history.replaceState({ case: slug }, "", "#work/" + slug);
        openCase(slug);
        return;
      }

      const closeTrigger = e.target.closest("[data-close]");
      if (closeTrigger) {
        e.preventDefault();
        closeCaseRequest();
      }
    });

    caseEl.addEventListener("keydown", e => trapFocus(e, caseEl));

    document.addEventListener("keydown", (e) => {
      if (e.key !== "Escape") return;
      if (caseOpen) {
        closeCaseRequest();
      } else if (menuOpen) {
        closeMenu();
      }
    });

    window.addEventListener("popstate", () => {
      const slug = slugFromHash();
      if (slug && PROJECTS[slug]) {
        openCase(slug);
      } else {
        closeCase();
      }
    });

    const initialSlug = slugFromHash();
    if (initialSlug && PROJECTS[initialSlug]) openCase(initialSlug);
  }


})();
