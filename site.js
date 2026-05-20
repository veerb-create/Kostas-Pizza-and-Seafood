/* =====================================================================
   Kosta's Pizza & Seafood — Shared site behavior
   ---------------------------------------------------------------------
   Loaded on both index.html and menu.html. Handles:
     • Sticky nav background on scroll
     • Mobile menu toggle
     • Scroll-reveal animations
     • Menu rendering from window.KOSTAS_MENU (set by menu.js)
     • Current year in footer
   ===================================================================== */

(function () {

  // -- Sticky nav background on scroll --
  const nav = document.getElementById('nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 30);
    document.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // -- Mobile nav toggle --
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }

  // -- Menu rendering -----------------------------------------------------
  // Icons keyed by category id. Adding a new id? Drop a new <svg> here
  // (or just don't — the renderer falls back to a generic icon).
  const MENU_ICONS = {
    pizza:           '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l10 20H2z"/><circle cx="12" cy="11" r="1.3" fill="currentColor"/><circle cx="9.5" cy="15" r="1" fill="currentColor"/><circle cx="14.5" cy="16" r="1" fill="currentColor"/></svg>',
    "stuffed-pizza": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M5 12c2-2 5-2 7 0s5 2 7 0"/><circle cx="9" cy="9" r="0.9" fill="currentColor"/><circle cx="15" cy="14" r="0.9" fill="currentColor"/></svg>',
    calzones:        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12c0-5 4-9 9-9s9 4 9 9-9 9-9 9-9-4-9-9z" transform="rotate(20 12 12)"/><path d="M8 11c2 1 4 1 6 0"/></svg>',
    "create-own":    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v16M4 12h16"/><circle cx="12" cy="12" r="9"/></svg>',
    "special-wraps": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 6c4-2 10-2 14 0M5 6v12c0 1.5 3 3 7 3s7-1.5 7-3V6"/><path d="M9 9v9M15 9v9M12 9v9"/></svg>',
    "hot-subs":      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="9" width="18" height="7" rx="3.5"/><path d="M5 12c2-1 4-1 5 0s4 1 5 0 3-1 4 0"/></svg>',
    "wraps-cold-subs": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l9-12 9 12z"/><path d="M7 17l5-7 5 7"/></svg>',
    grill:           '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2c1 4.5 5 5.5 5 11a5 5 0 0 1-10 0c0-2.5 1.5-3 1.5-6 1.5 1 3.5 1 3.5-5z"/><path d="M9 16a3 3 0 0 0 6 0"/></svg>',
    plates:          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/></svg>',
    seafood:         '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12c4-5 9-5 14-3l4-2-1 5 1 5-4-2c-5 2-10 2-14-3z"/><circle cx="17" cy="11" r="0.9" fill="currentColor"/></svg>',
    pasta:           '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18h18M5 18c0-5 2-10 7-10s7 5 7 10"/><path d="M8 14c0-3 1-5 4-5s4 2 4 5"/></svg>',
    salads:          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11c0-1 1-2 2-2 1-2 4-2 5 0 1-2 4-2 5 0 1-2 4-2 5 0 1 0 2 1 2 2"/><path d="M3 11h18l-2 8H5z"/></svg>',
    wings:           '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 3a5 5 0 0 0-5 5c0 2-1 3-3 3-2 0-3 1.5-3 3.5a3.5 3.5 0 0 0 7 0c0-2 1-3 3-3a5 5 0 0 0 1-9.9z"/></svg>',
    "seafood-sides": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 7c3-3 11-3 14 0M19 7c0 3-1 5 0 9M19 16c-4 3-10 3-14 0M5 16c-2-2-3-5-3-9"/><circle cx="7" cy="10" r="0.8" fill="currentColor"/></svg>',
    fries:           '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8h12l-2 13H8z"/><path d="M9 8V4M12 8V3M15 8V5"/></svg>',
    apps:            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5l9 17 9-17z"/><circle cx="12" cy="11" r="1.2" fill="currentColor"/><circle cx="9" cy="15" r="1" fill="currentColor"/><circle cx="14" cy="16" r="1" fill="currentColor"/></svg>',
    "soup-desserts": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h20v2a8 8 0 0 1-16 0z"/><path d="M7 8c0-2 2-2 2-4M12 8c0-2 2-2 2-4M17 8c0-2 2-2 2-4"/></svg>',
    "default":       '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="9"/></svg>'
  };

  function escapeHtml(s){
    return String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  }

  function renderItem(item){
    if (item.sizes) {
      const pills = item.sizes.map(s =>
        `<span class="size">${escapeHtml(s.label)} <b>$${escapeHtml(s.price)}</b></span>`
      ).join('');
      return `<li>
        <span class="name">${escapeHtml(item.name)}</span>
        <span class="dots"></span>
        <span class="sizes">${pills}</span>
        ${item.desc ? `<span class="desc">${escapeHtml(item.desc)}</span>` : ''}
      </li>`;
    }
    if (item.price) {
      return `<li>
        <span class="name">${escapeHtml(item.name)}</span>
        <span class="dots"></span>
        <span class="price">$${escapeHtml(item.price)}</span>
        ${item.desc ? `<span class="desc">${escapeHtml(item.desc)}</span>` : ''}
      </li>`;
    }
    // Toppings — name only
    return `<li class="topping">${escapeHtml(item.name)}</li>`;
  }

  function renderCategory(cat){
    const icon  = MENU_ICONS[cat.id] || MENU_ICONS.default;
    const notes = (cat.notes && cat.notes.length)
      ? `<ul class="cat-notes">${cat.notes.map(n => `<li>${escapeHtml(n)}</li>`).join('')}</ul>`
      : '';
    const isToppings = cat.type === 'toppings';
    const listClass  = isToppings ? 'menu-list toppings-grid' : 'menu-list';
    return `
      <div class="menu-card reveal" id="cat-${escapeHtml(cat.id)}">
        <div class="menu-card-head">
          <span class="icon" aria-hidden="true">${icon}</span>
          <div>
            <h3>${escapeHtml(cat.title)}</h3>
            ${cat.subtitle ? `<small>${escapeHtml(cat.subtitle)}</small>` : ''}
          </div>
        </div>
        ${notes}
        <ul class="${listClass}">${cat.items.map(renderItem).join('')}</ul>
      </div>`;
  }

  function renderMenu(opts){
    opts = opts || {};
    const data = window.KOSTAS_MENU;
    const wrap = document.getElementById('menuCategories');
    const jump = document.getElementById('menuJump');
    if (!wrap || !Array.isArray(data)) return;

    // Optional `filter` lets index.html show only specific categories
    let cats = data;
    if (opts.filter && Array.isArray(opts.filter)) {
      cats = opts.filter.map(id => data.find(c => c.id === id)).filter(Boolean);
    }

    wrap.innerHTML = cats.map(renderCategory).join('');

    if (jump) {
      jump.innerHTML = cats.map(cat =>
        `<a href="#cat-${escapeHtml(cat.id)}">${escapeHtml(cat.title)}</a>`
      ).join('');
    }
  }

  // Expose for page-specific scripts that want a subset
  window.renderKostasMenu = renderMenu;

  // Render full menu by default if either container exists
  renderMenu();

  // -- Scroll reveal (runs AFTER renderMenu so dynamic cards animate too) --
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }});
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // -- Current year in footer --
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

})();
