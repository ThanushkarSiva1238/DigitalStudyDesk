/* Digital Study Desk — data + behaviour */
// Each app: [name, url, emoji icon]
const CATS = [
  { id: 'ai', name: 'Generative AI', icon: '✨', a: '#A78BFA', b: '#5A4FE0', apps: [
    ['ChatGPT', 'https://chatgpt.com/', '💬'], ['Gemini', 'https://gemini.google.com/app', '♊'],
    ['Grok', 'https://grok.com/', '⚡'], ['Perplexity', 'https://www.perplexity.ai/', '🔭'],
    ['BlackBox', 'https://www.blackbox.ai/', '⬛'], ['Cohere', 'https://dashboard.cohere.com/playground/chat', '🧠'],
    ['Chatly', 'https://chatlyai.app/', '🗨️'], ['Notion AI', 'https://www.notion.so/ai', '📓'] ] },
  { id: 'dict', name: 'Dictionaries', icon: '📖', a: '#FFB25A', b: '#F0622D', apps: [
    ['Cambridge', 'https://dictionary.cambridge.org/', '🎓'], ['Merriam-Webster', 'https://www.merriam-webster.com/', '📖'],
    ['Oxford', 'https://www.oxfordlearnersdictionaries.com/', '🏛️'], ['Agarathi', 'https://agarathi.com/', '📚'],
    ['TamilDict', 'https://www.tamildict.com/english.php', '🔤'], ['Madura', 'https://www.maduraonline.com/', '🌺'],
    ['Glosbe', 'https://glosbe.com/', '🌍'], ['Kapruka', 'https://www.kapruka.com/dictionary/EnglishToSinhala.jsp', '🥥'],
    ['Collins French', 'https://www.collinsdictionary.com/', '🥐'] ] },
  { id: 'article', name: 'Articles & Research', icon: '📰', a: '#FF7A88', b: '#D9263C', apps: [
    ['Britannica', 'https://www.britannica.com/', '🏺'], ['Mendeley', 'https://www.mendeley.com/', '🗂️'],
    ['Google Scholar', 'https://scholar.google.com/', '🔬'], ['Elicit', 'https://elicit.com/', '🧪'],
    ['Jenni AI', 'https://jenni.ai/', '🖋️'], ['Techopedia', 'https://www.techopedia.com/', '💻'],
    ['Tech & Learning', 'https://www.techlearning.com/', '🧑‍🏫'], ['TechTarget', 'https://www.techtarget.com/searchnetworking/', '🎯'],
    ['Cloudflare Blog', 'https://blog.cloudflare.com/search', '☁️'] ] },
  { id: 'para', name: 'Paraphrasing', icon: '🔁', a: '#4FD8C4', b: '#0C9AA0', apps: [
    ['Stealth Writer', 'https://stealthwriter.ai/', '🥷'], ['QuillBot', 'https://quillbot.com/', '🪶'],
    ['Paraphraser', 'https://www.paraphraser.io/', '🔁'], ['Grammarly', 'https://www.grammarly.com/paraphrasing-tool', '✅'],
    ['Ahrefs', 'https://ahrefs.com/writing-tools/paraphrasing-tool', '📈'], ['Scribbr', 'https://www.scribbr.com/paraphrasing-tool/', '📝'],
    ['SpinBot', 'https://spinbot.com/paraphrasing-tool', '🌀'], ['Humanize AI', 'https://www.humanizeai.pro/', '🧑'] ] },
  { id: 'editor', name: 'Editing & Design', icon: '✏️', a: '#5DB4FF', b: '#0A6CE0', apps: [
    ['Canva', 'https://www.canva.com/', '🎨'], ['ProWritingAid', 'https://dashboard.prowritingaid.com/', '🧐'],
    ['Google Docs', 'https://docs.google.com/document/u/0/', '📄'], ['Lucid', 'https://lucid.app/documents#/home?folder_id=recent', '💡'],
    ['Draw.io', 'https://app.diagrams.net/', '📐'], ['MindMeister', 'https://www.mindmeister.com/app/home', '🧩'],
    ['iLovePDF', 'https://www.ilovepdf.com/', '💗'], ['Sejda', 'https://www.sejda.com/', '📎'],
    ['PDF AI', 'https://pdf.ai/documents', '🤖'], ['Humata', 'https://app.humata.ai/', '🔮'],
    ['Gamma', 'https://gamma.com.ai/ai-powerpoint', '🪄'] ] },
  { id: 'plag', name: 'Plagiarism Check', icon: '🛡️', a: '#9A9AA3', b: '#4A4A52', apps: [
    ['ZeroGPT', 'https://www.zerogpt.com/', '🎯'], ['GPTZero', 'https://gptzero.me/plagiarism-checker', '🕵️'],
    ['Copyscape', 'https://www.copyscape.com/', '🔍'], ['ChatGPT Checker', 'https://chatgpt.com/g/g-ifP7V7mmC-plagiarism-checker', '🛡️'],
    ['PapersOwl', 'https://papersowl.com/free-plagiarism-checker', '🦉'], ['Scribbr Checker', 'https://app.scribbr.com/plagiarism-checker', '📋'] ] },
  { id: 'script', name: 'Script Converters', icon: '🔤', a: '#4ADE9B', b: '#0A9A68', apps: [
    ['Google Translate', 'https://translate.google.lk/?hl=en&vi=c&sl=en&tl=ta&op=translate', '🌐'],
    ['Sinhala Unicode', 'https://sinhalaunicode.gishan.net/write', '🔡'], ['Easy Tamil Typing', 'https://www.easytamiltyping.com/', '⌨️'],
    ['Unicode ⇄ Tamil', 'https://ucsc.cmb.ac.lk/ltrl/services/feconverter/', '🔄'],
    ['TrackerDisk', 'https://trackerdisk.com/calculators/conversions/numbers-to-sinhala-words', '🔢'] ] }
];

const $ = (s) => document.querySelector(s);
const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const host = (u) => new URL(u).hostname.replace(/^www\./, '');
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* storage unavailable */ } }
};

const ALL = CATS.flatMap((c) => c.apps.map(([n, u, e]) => ({ n, u, e, c })));
const favs = new Set(store.get('dsd-favs', []));
const state = { cat: 'all', q: '', view: store.get('dsd-view', 'grid') };

/* ---------- rendering ---------- */
function appHTML(a) {
  const on = favs.has(a.u);
  return `<div class="app" style="--a:${a.c.a};--b:${a.c.b}">
    <a href="${esc(a.u)}" target="_blank" rel="noopener"><span class="tile">${a.e}</span><span class="nm">${esc(a.n)}<small>${host(a.u)}</small></span></a>
    <button class="star${on ? ' on' : ''}" data-u="${esc(a.u)}" aria-pressed="${on}" aria-label="${on ? 'Remove from' : 'Add to'} favorites" title="Favorite">${on ? '★' : '☆'}</button></div>`;
}
const gridHTML = (apps) => `<div class="grid ${state.view === 'list' ? 'list' : ''}">${apps.map(appHTML).join('')}</div>`;

function greeting() {
  const h = new Date().getHours();
  return h < 5 ? 'Still up?' : h < 12 ? 'Good morning' : h < 18 ? 'Good afternoon' : 'Good evening';
}

function render() {
  const q = state.q.trim().toLowerCase();
  const cat = CATS.find((c) => c.id === state.cat);
  let html = '', title = 'All Apps';

  if (q) {
    const hits = ALL.filter((a) => `${a.n} ${host(a.u)} ${a.c.name}`.toLowerCase().includes(q));
    title = `Results for “${state.q.trim()}”`;
    html = hits.length ? gridHTML(hits)
      : `<div class="empty"><div>🔍</div>No apps match “${esc(state.q.trim())}”.<br>Try a shorter word or browse a folder.</div>`;
  } else if (state.cat === 'fav') {
    title = 'Favorites';
    const f = ALL.filter((a) => favs.has(a.u));
    html = f.length ? gridHTML(f)
      : '<div class="empty"><div>⭐</div>No favorites yet.<br>Hover over any app and click the star to pin it here.</div>';
  } else if (cat) {
    title = cat.name;
    html = gridHTML(ALL.filter((a) => a.c === cat));
  } else {
    html = `<div class="hello"><h1>${greeting()} 👋</h1><p>${ALL.length} tools in ${CATS.length} folders. Pick one to open it in a new tab.</p></div>` +
      CATS.map((c) => `<section class="sec"><h3>${c.icon} ${c.name}</h3>${gridHTML(ALL.filter((a) => a.c === c))}</section>`).join('');
  }

  $('#content').innerHTML = html;
  $('#title').textContent = title;
  $('#v-grid').classList.toggle('on', state.view === 'grid');
  $('#v-list').classList.toggle('on', state.view === 'list');
  renderNav();
}

function renderNav() {
  const item = (id, icon, name, count, a = '#0A84FF', b = '#0060D0') =>
    `<button class="si${state.cat === id && !state.q ? ' on' : ''}" data-cat="${id}" style="--a:${a};--b:${b}">
      <span class="mini">${icon}</span><span class="n">${name}</span><span class="c">${count}</span></button>`;
  $('#side').innerHTML =
    '<div class="lights" aria-hidden="true"><i></i><i></i><i></i></div><h6>Library</h6>' +
    item('all', '🗂️', 'All Apps', ALL.length, '#7C8DFF', '#4B5BD8') +
    item('fav', '⭐', 'Favorites', favs.size, '#FFC84A', '#F09A0A') +
    '<h6>Folders</h6>' + CATS.map((c) => item(c.id, c.icon, c.name, c.apps.length, c.a, c.b)).join('');
}

function renderDock() {
  $('#dock').innerHTML =
    `<button class="di" data-cat="all" data-tip="All Apps" aria-label="All Apps" style="--a:#7C8DFF;--b:#4B5BD8">🗂️</button>` +
    CATS.map((c) => `<button class="di" data-cat="${c.id}" data-tip="${c.name}" aria-label="${c.name}" style="--a:${c.a};--b:${c.b}">${c.icon}</button>`).join('') +
    `<span class="dsep"></span><button class="di" id="d-about" data-tip="Contact" aria-label="Contact" style="--a:#FFB020;--b:#FF7A00">👤</button>`;
}

function go(cat) {
  state.cat = cat; state.q = ''; $('#q').value = '';
  render();
  $('#content').scrollTop = 0;
  document.querySelectorAll('.di[data-cat]').forEach((d) => d.classList.toggle('on', d.dataset.cat === cat));
}

/* ---------- events ---------- */
document.addEventListener('click', (e) => {
  const star = e.target.closest('.star');
  if (star) {
    const u = star.dataset.u;
    favs.has(u) ? favs.delete(u) : favs.add(u);
    store.set('dsd-favs', [...favs]);
    const top = $('#content').scrollTop;
    render(); $('#content').scrollTop = top;
    return;
  }
  const nav = e.target.closest('[data-cat]');
  if (nav) go(nav.dataset.cat);
});

$('#q').addEventListener('input', (e) => { state.q = e.target.value; render(); });
$('#q').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') { const a = $('#content .app a'); if (a) window.open(a.href, '_blank', 'noopener'); }
  if (e.key === 'Escape') { e.target.value = ''; state.q = ''; render(); e.target.blur(); }
});
const focusSearch = () => { $('#q').focus(); $('#q').select(); };
$('#btn-search').addEventListener('click', focusSearch);
document.addEventListener('keydown', (e) => {
  const typing = /INPUT|TEXTAREA/.test(document.activeElement.tagName);
  if (((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') || (e.key === '/' && !typing)) { e.preventDefault(); focusSearch(); }
});

['grid', 'list'].forEach((v) => $('#v-' + v).addEventListener('click', () => { state.view = v; store.set('dsd-view', v); render(); }));

/* dark mode */
function setTheme(t) {
  document.documentElement.dataset.theme = t;
  $('#btn-theme').textContent = t === 'dark' ? '☀️' : '🌙';
  store.set('dsd-theme', t);
}
setTheme(store.get('dsd-theme', matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
$('#btn-theme').addEventListener('click', () => setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'));

/* contact sheet */
document.addEventListener('click', (e) => { if (e.target.closest('#d-about')) $('#about').showModal(); });
$('#about-x').addEventListener('click', () => $('#about').close());
$('#about').addEventListener('click', (e) => { if (e.target === e.currentTarget) e.currentTarget.close(); });

/* notification */
const toast = $('#toast');
setTimeout(() => toast.classList.add('show'), 900);
setTimeout(() => toast.classList.remove('show'), 10000);
$('#toast-x').addEventListener('click', () => toast.classList.remove('show'));

/* menu bar clock */
function tick() {
  $('#clock').textContent = new Date().toLocaleString('en-US', { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' }).replace(',', '');
}
tick(); setInterval(tick, 15000);

/* dock magnification */
(function () {
  const dock = $('#dock');
  dock.addEventListener('mousemove', (e) => {
    dock.querySelectorAll('.di').forEach((i) => {
      const r = i.getBoundingClientRect(), d = Math.abs(e.clientX - (r.left + r.width / 2));
      i.style.transform = `scale(${d < 90 ? 1 + (1 - d / 90) * 0.5 : 1})`;
    });
  });
  dock.addEventListener('mouseleave', () => dock.querySelectorAll('.di').forEach((i) => (i.style.transform = '')));
})();

renderDock();
go('all');
