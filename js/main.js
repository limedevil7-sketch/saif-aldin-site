/* =====================================================================
   PERSONAL BRAND SITE — main.js
   -----------------------------------------------------------------
   ✏️  EVERYTHING YOU NEED TO EDIT LIVES IN THE "CONFIG" OBJECT BELOW.
   Change your name, photo, bio, interests and social links there —
   nothing else in this file needs to be touched.
   ===================================================================== */

const CONFIG = {
  // ---- Identity -------------------------------------------------
  name: "Seif",
  role: "Digital Creator",
  profileImage: "assets/profile.jpg",

  // ---- Hero -------------------------------------------------------
  shortBio: "Personal brand and digital creator.",

  // ---- About section ------------------------------------------------
  about: "Welcome to my personal space. Here you can learn more about me, explore my website, and connect with me across social platforms.",

  interests: [
    "Gaming",
    "Photography",
    "Music",
    "Travel",
  ],

  // ---- Socials ------------------------------------------------------
  socials: {
    instagram: {
      url: "https://www.instagram.com/marvo_181/",
      username: "@marvo_181",
      description: "Photos & moments",
    },
    snapchat: {
      url: "https://www.snapchat.com/add/seif_1280",
      username: "@seif_1280",
      description: "Day-to-day snaps",
    },
    discord: {
      userId: "1208892503412047883",
      description: "Chat with me directly",
    },
    whatsapp: {
      number: "201125316970",
      message: "Hey! I found your website and wanted to talk to you.",
      description: "Send me a direct message",
    },
  },

  // ---- My Website / Projects ----------------------------------------
  website: {
    name: "Saif Aldin Website",
    url: "https://saif-aldin-site-production.up.railway.app/index.html",
    description: "Check out my personal website and explore more about me.",
    previewImage: "",
  },
};

(() => {
  "use strict";
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  const ICONS = {
    instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none"/></svg>`,
    snapchat: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c2.9 0 4.9 2.2 4.9 5.1 0 1 .05 1.9.15 2.5.55.15 1.15.1 1.6-.2.35-.2.8-.15 1.05.15.25.35.2.85-.15 1.1-.55.4-1.35.75-2.05.9.05.35.35.75.95 1.25.7.55 1.6.85 2.15.95.4.05.65.45.55.85-.1.35-.4.55-.75.6-.4.05-.8.2-1 .55-.15.3-.45.5-.8.5-.35 0-.95-.1-1.55-.1-.5 0-.85.3-1.4.85-.75.75-1.75 1.7-3.65 1.7s-2.9-.95-3.65-1.7c-.55-.55-.9-.85-1.4-.85-.6 0-1.2.1-1.55.1-.35 0-.65-.2-.8-.5-.2-.35-.6-.5-1-.55-.35-.05-.65-.25-.75-.6-.1-.4.15-.8.55-.85.55-.1 1.45-.4 2.15-.95.6-.5.9-.9.95-1.25-.7-.15-1.5-.5-2.05-.9-.35-.25-.4-.75-.15-1.1.25-.3.7-.35 1.05-.15.45.3 1.05.35 1.6.2.1-.6.15-1.5.15-2.5 0-2.9 2-5.1 4.9-5.1z"/></svg>`,
    discord: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 5.3A16.5 16.5 0 0 0 15 4.1c-.17.3-.36.7-.5 1a15.3 15.3 0 0 0-5 0c-.14-.3-.33-.7-.5-1a16.4 16.4 0 0 0-3.9 1.2C2.6 9 1.9 12.6 2.2 16.1a16.6 16.6 0 0 0 5 2.5c.4-.55.75-1.13 1.05-1.75-.58-.22-1.13-.5-1.65-.82.14-.1.27-.2.4-.32 3.18 1.47 6.62 1.47 9.76 0 .13.11.26.22.4.32-.52.32-1.07.6-1.65.82.3.62.65 1.2 1.05 1.75a16.5 16.5 0 0 0 5-2.5c.4-4.05-.62-7.6-2.7-10.8ZM9.7 13.9c-.95 0-1.73-.87-1.73-1.95s.76-1.95 1.73-1.95c.98 0 1.75.88 1.73 1.95 0 1.08-.76 1.95-1.73 1.95Zm4.6 0c-.95 0-1.73-.87-1.73-1.95s.76-1.95 1.73-1.95c.98 0 1.75.88 1.73 1.95 0 1.08-.75 1.95-1.73 1.95Z"/></svg>`,
    whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.6 2 2.19 6.4 2.19 11.85c0 1.87.51 3.62 1.4 5.12L2 22l5.2-1.55a9.86 9.86 0 0 0 4.84 1.27h.01c5.44 0 9.85-4.4 9.85-9.85C21.9 6.4 17.5 2 12.04 2Zm5.75 14.05c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.12.11-1.8-.11-.42-.13-.96-.31-1.66-.6-2.92-1.26-4.83-4.2-4.98-4.4-.15-.2-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.03-2.46.27-.3.6-.37.8-.37h.57c.18 0 .43-.07.67.51.24.6.83 2.05.9 2.2.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.17-.3.38-.44.51-.15.14-.3.3-.13.6.17.3.76 1.25 1.62 2.02 1.12 1 2.06 1.3 2.36 1.45.3.15.47.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.66-.15.27.1 1.7.8 2 .95.3.15.5.22.57.35.08.13.08.75-.15 1.44Z"/></svg>`,
    arrow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>`,
    globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z"/></svg>`,
  };

  const BRAND_COLORS = {
    instagram: { bg: "rgba(225,48,108,0.14)", fg: "#f472b6", grad: "linear-gradient(135deg,#feda75,#d62976,#4f5bd5)" },
    snapchat: { bg: "rgba(255,252,0,0.12)", fg: "#fef08a", grad: "linear-gradient(135deg,#fffc00,#c9c400)" },
    discord: { bg: "rgba(88,101,242,0.16)", fg: "#a5b4fc", grad: "linear-gradient(135deg,#5865F2,#8b5cf6)" },
    whatsapp: { bg: "rgba(37,211,102,0.16)", fg: "#86efac", grad: "linear-gradient(135deg,#25D366,#22d3ee)" },
  };

  function buildSocialList() {
    const s = CONFIG.socials;
    const list = [];
    if (s.instagram) list.push({ key: "instagram", platform: "Instagram", handle: s.instagram.username || "", description: s.instagram.description || "", url: s.instagram.url || "" });
    if (s.snapchat) list.push({ key: "snapchat", platform: "Snapchat", handle: s.snapchat.username || "", description: s.snapchat.description || "", url: s.snapchat.url || "" });
    if (s.discord) list.push({ key: "discord", platform: "Discord", handle: "Add me / message me", description: s.discord.description || "", url: `https://discord.com/users/${s.discord.userId}` });
    if (s.whatsapp && s.whatsapp.number) list.push({ key: "whatsapp", platform: "WhatsApp", handle: "Start a chat", description: s.whatsapp.description || "", url: `https://wa.me/${s.whatsapp.number}?text=${encodeURIComponent(s.whatsapp.message || "")}` });
    return list;
  }

  function renderSocialCards() {
    const grid = $("[data-socials-grid]");
    if (!grid) return;
    grid.innerHTML = buildSocialList().map((item) => {
      const colors = BRAND_COLORS[item.key] || {};
      return `<a class="social-card" href="${item.url}" target="_blank" rel="noopener noreferrer" style="--icon-bg:${colors.bg || ""};--icon-fg:${colors.fg || ""};--card-grad:${colors.grad || ""}" data-reveal-card><span class="social-card__icon">${ICONS[item.key] || ""}</span><span class="social-card__body"><span class="social-card__platform">${item.platform}</span><span class="social-card__handle">${item.handle}</span><span class="social-card__desc">${item.description}</span></span><span class="social-card__arrow">${ICONS.arrow}</span></a>`;
    }).join("");
  }

  function renderFooterIcons() {
    const wrap = $("[data-footer-socials]");
    if (!wrap) return;
    wrap.innerHTML = buildSocialList().map((item) => `<a href="${item.url}" target="_blank" rel="noopener noreferrer" aria-label="${item.platform}">${ICONS[item.key] || ""}</a>`).join("");
  }

  function renderWebsiteCard() {
    const host = $("[data-website-card]");
    if (!host || !CONFIG.website?.url) return;
    const site = CONFIG.website;
    const preview = site.previewImage ? `<img src="${site.previewImage}" alt="${site.name} preview" class="project-card__img" />` : `<div class="project-card__placeholder"><span class="project-card__placeholder-glow"></span><span class="project-card__placeholder-icon">${ICONS.globe}</span></div>`;
    host.innerHTML = `<a class="project-card" href="${site.url}" target="_blank" rel="noopener noreferrer" data-reveal-card><div class="project-card__preview"><div class="project-card__browser-bar"><span></span><span></span><span></span></div><div class="project-card__preview-inner">${preview}</div></div><div class="project-card__body"><h3 class="project-card__title">${site.name}</h3><p class="project-card__desc">${site.description || ""}</p><span class="btn btn--primary project-card__btn"><span>Visit Website</span>${ICONS.arrow}</span></div></a>`;
  }

  function renderInterests() {
    const list = $("[data-interests-list]");
    if (list) list.innerHTML = CONFIG.interests.map((i) => `<li>${i}</li>`).join("");
  }

  function hydrateText() {
    document.title = `${CONFIG.name} — Personal Brand & Digital Creator`;
    const metaDesc = $('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", CONFIG.shortBio);
    $$('[data-hero-name], [data-hero-name-2], [data-brand], [data-footer-name], [data-footer-name-2], [data-about-name]').forEach((el) => (el.textContent = CONFIG.name));
    $$('[data-loader-name]').forEach((el) => (el.textContent = CONFIG.name));
    $$('[data-hero-role], [data-about-role]').forEach((el) => (el.textContent = CONFIG.role));
    const heroBio = $("[data-hero-bio]");
    if (heroBio) heroBio.textContent = CONFIG.shortBio;
    const aboutText = $("[data-about-text]");
    if (aboutText) aboutText.textContent = CONFIG.about;
    const profileImg = $("[data-profile-img]");
    if (profileImg) { profileImg.src = CONFIG.profileImage; profileImg.alt = `${CONFIG.name} profile photo`; }
    const profileImg2 = $("[data-profile-img-2]");
    if (profileImg2) { profileImg2.src = CONFIG.profileImage; profileImg2.alt = `${CONFIG.name} photo`; }
    const yearEl = $("[data-year]");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }

  function initLoader() { const loader = $("#loader"); if (!loader) return; window.setTimeout(() => loader.classList.add("is-hidden"), 900); }
  function initNav() {
    const nav = $("[data-nav]"), burger = $("[data-burger]"), menu = $("[data-mobile-menu]");
    if (nav) { const onScroll = () => window.scrollY > 12 ? nav.classList.add("is-scrolled") : nav.classList.remove("is-scrolled"); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); }
    if (burger && menu) { burger.addEventListener("click", () => { const open = menu.classList.toggle("is-open"); burger.setAttribute("aria-expanded", String(open)); }); $$(".mobile-menu a", menu).forEach((a) => a.addEventListener("click", () => { menu.classList.remove("is-open"); burger.setAttribute("aria-expanded", "false"); })); }
  }
  function initReveal() {
    const targets = $("body") ? $$('[data-reveal], [data-reveal-card]') : [];
    if (!("IntersectionObserver" in window)) { targets.forEach((t) => t.classList.add("is-visible")); return; }
    const io = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); io.unobserve(entry.target); } }), { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
    targets.forEach((t) => io.observe(t));
  }
  function initBackToTop() { const btn = $("[data-back-to-top]"); if (!btn) return; const onScroll = () => window.scrollY > 480 ? btn.classList.add("is-visible") : btn.classList.remove("is-visible"); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" })); }
  function initParticles() {
    const host = $("[data-particles]"); if (!host) return; const count = window.innerWidth < 640 ? 14 : 26; const colors = ["#8b5cf6", "#22d3ee", "#a78bfa"]; const frag = document.createDocumentFragment();
    for (let i = 0; i < count; i++) { const p = document.createElement("span"); p.className = "particle"; p.style.setProperty("--s", `${2 + Math.random() * 3}px`); p.style.setProperty("--c", colors[i % colors.length]); p.style.setProperty("--d", `${10 + Math.random() * 14}s`); p.style.setProperty("--delay", `${Math.random() * 8}s`); p.style.top = `${Math.random() * 100}%`; p.style.left = `${Math.random() * 100}%`; frag.appendChild(p); }
    host.appendChild(frag);
  }
  function initDesktopCursor() {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return; const glow = $("[data-cursor-glow]"); const cursor = document.createElement("div"); cursor.className = "custom-cursor"; document.body.appendChild(cursor); document.body.classList.add("has-custom-cursor"); let raf = null, mouseX = 0, mouseY = 0;
    window.addEventListener("mousemove", (e) => { mouseX = e.clientX; mouseY = e.clientY; if (glow) glow.classList.add("is-active"); if (!raf) raf = requestAnimationFrame(() => { if (glow) glow.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%,-50%)`; cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%,-50%)`; raf = null; }); }, { passive: true });
    window.addEventListener("mouseleave", () => glow && glow.classList.remove("is-active")); document.addEventListener("mouseover", (e) => { if (e.target.closest("a, button, .social-card, .project-card, li")) cursor.classList.add("is-hover"); }); document.addEventListener("mouseout", (e) => { if (e.target.closest("a, button, .social-card, .project-card, li")) cursor.classList.remove("is-hover"); });
  }
  function initCardTilt() { const card = $("[data-tilt]"); if (!card || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return; const strength = 8; card.addEventListener("mousemove", (e) => { const rect = card.getBoundingClientRect(); const x = (e.clientX - rect.left) / rect.width - 0.5; const y = (e.clientY - rect.top) / rect.height - 0.5; card.style.transform = `rotateY(${x * strength}deg) rotateX(${-y * strength}deg)`; }); card.addEventListener("mouseleave", () => card.style.transform = ""); }

  document.addEventListener("DOMContentLoaded", () => { hydrateText(); renderInterests(); renderSocialCards(); renderFooterIcons(); renderWebsiteCard(); initLoader(); initNav(); initReveal(); initBackToTop(); initParticles(); initDesktopCursor(); initCardTilt(); });
})();
