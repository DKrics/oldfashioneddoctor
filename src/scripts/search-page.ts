import Fuse from 'fuse.js';

type Item = {
  title: string;
  description: string;
  url: string;
  categories: string[];
  tags: string[];
};

const root = document.getElementById('search');
const fuseBox = document.getElementById('fuse-box');
if (!root) {
  // nothing to do
} else {
  const pagefindJs = root.dataset.pagefindJs || '';
  const bundlePath = root.dataset.bundle || '';
  const q = root.dataset.q || '';
  const indexHref = root.dataset.index || '';

  function loadScript(src: string) {
    return new Promise<void>((resolve, reject) => {
      const s = document.createElement('script');
      s.src = src;
      s.onload = () => resolve();
      s.onerror = () => reject(new Error('pagefind missing'));
      document.head.appendChild(s);
    });
  }

  async function startPagefind() {
    await loadScript(pagefindJs);
    const PagefindUI = (window as unknown as { PagefindUI: new (opts: object) => void }).PagefindUI;
    new PagefindUI({
      element: '#search',
      showImages: true,
      showSubResults: true,
      excerptLength: 28,
      bundlePath,
      autofocus: true,
    });
    if (q) {
      const input = document.querySelector('#search input') as HTMLInputElement | null;
      if (input) {
        input.value = q;
        input.dispatchEvent(new Event('input', { bubbles: true }));
      }
    }
  }

  async function startFuse() {
    if (fuseBox) fuseBox.hidden = false;
    const res = await fetch(indexHref);
    const items = (await res.json()) as Item[];
    const fuse = new Fuse(items, {
      keys: ['title', 'description', 'tags', 'categories'],
      threshold: 0.38,
      ignoreLocation: true,
    });
    const out = document.getElementById('fuse-results');
    const input = document.getElementById('fuse-q') as HTMLInputElement | null;
    const render = (query: string) => {
      if (!out) return;
      const hits = query
        ? fuse.search(query).slice(0, 20)
        : items.slice(0, 12).map((item) => ({ item }));
      out.innerHTML = hits
        .map((h) => {
          const item = h.item;
          return `<li><a href="${item.url}"><h2>${item.title}</h2><p class="byline">${(item.categories || []).join(' · ')}</p><p>${item.description}</p></a></li>`;
        })
        .join('');
    };
    render(q);
    input?.addEventListener('input', () => render(input.value.trim()));
  }

  startPagefind().catch(() => {
    startFuse().catch(() => {});
  });
}
