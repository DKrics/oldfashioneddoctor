type CommentItem = {
  id: string;
  by_nickname?: string;
  parsedContent?: string;
  content?: string;
  parsedCreatedAt?: string;
  createdAt?: string;
  moderator?: { displayName?: string } | null;
  replies?: { data?: CommentItem[] };
};

type ListPayload = {
  data?: {
    data?: CommentItem[];
    commentCount?: number;
  };
};

const root = document.querySelector<HTMLElement>('[data-comments-config]');
const form = document.querySelector<HTMLFormElement>('[data-comments-form]');
const listEl = document.querySelector<HTMLOListElement>('[data-comments-list]');
const emptyEl = document.querySelector<HTMLElement>('[data-comments-empty]');
const msgEl = document.querySelector<HTMLElement>('[data-comments-msg]');
const replyNote = document.querySelector<HTMLElement>('[data-comments-replying]');
const cancelReply = document.querySelector<HTMLButtonElement>('[data-comments-cancel-reply]');
const parentInput = form?.querySelector<HTMLInputElement>('input[name="parentId"]');

if (root && form && listEl) {
  const host = root.dataset.host || 'https://cusdis.com';
  const appId = root.dataset.appId || '';
  const pageId = root.dataset.pageId || '';
  const pageUrl = root.dataset.pageUrl || '';
  const pageTitle = root.dataset.pageTitle || '';
  const api = `${host}/api/open/comments`;

  function showMsg(text: string, kind: 'ok' | 'err' = 'ok') {
    if (!msgEl) return;
    msgEl.hidden = false;
    msgEl.textContent = text;
    msgEl.classList.toggle('is-error', kind === 'err');
  }

  function escapeText(value: string): string {
    const el = document.createElement('div');
    el.textContent = value;
    return el.innerHTML;
  }

  function safeHtml(html: string): string {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    doc.querySelectorAll('script, iframe, object, embed, form, link, meta').forEach((n) => n.remove());
    doc.querySelectorAll('*').forEach((el) => {
      for (const attr of [...el.attributes]) {
        const name = attr.name.toLowerCase();
        const val = attr.value.trim().toLowerCase();
        if (name.startsWith('on') || val.startsWith('javascript:')) el.removeAttribute(attr.name);
      }
    });
    return doc.body.innerHTML;
  }

  function renderItem(item: CommentItem): HTMLLIElement {
    const li = document.createElement('li');
    li.className = 'comment-item';
    const name = item.by_nickname || 'Reader';
    const when = item.parsedCreatedAt || '';
    const body = item.parsedContent ? safeHtml(item.parsedContent) : `<p>${escapeText(item.content || '')}</p>`;
    const mod = item.moderator?.displayName ? `<span class="comment-mod">MOD</span>` : '';
    li.innerHTML = `
      <header class="comment-meta">
        <strong>${escapeText(name)}</strong>
        ${mod}
        ${when ? `<time>${escapeText(when)}</time>` : ''}
      </header>
      <div class="comment-body">${body}</div>
      <button type="button" class="comment-reply" data-reply="${escapeText(item.id)}">Reply</button>
    `;
    const replies = item.replies?.data || [];
    if (replies.length) {
      const sub = document.createElement('ol');
      sub.className = 'comment-thread nested';
      replies.forEach((r) => sub.appendChild(renderItem(r)));
      li.appendChild(sub);
    }
    return li;
  }

  async function loadComments() {
    try {
      const offset = String(-new Date().getTimezoneOffset() / 60);
      const url = `${api}?appId=${encodeURIComponent(appId)}&pageId=${encodeURIComponent(pageId)}`;
      const res = await fetch(url, { headers: { 'x-timezone-offset': offset } });
      if (!res.ok) throw new Error('load failed');
      const json = (await res.json()) as ListPayload;
      const items = json.data?.data ?? [];
      listEl.innerHTML = '';
      items.forEach((item) => listEl.appendChild(renderItem(item)));
      if (emptyEl) emptyEl.hidden = items.length > 0;
    } catch {
      if (emptyEl) {
        emptyEl.hidden = false;
        emptyEl.textContent = 'Comments could not be loaded just now. Try again later, or write on X.';
      }
    }
  }

  function setReply(id: string | null) {
    if (!parentInput) return;
    parentInput.value = id || '';
    if (replyNote) replyNote.hidden = !id;
    if (id) form.querySelector<HTMLTextAreaElement>('textarea')?.focus();
  }

  listEl.addEventListener('click', (ev) => {
    const btn = (ev.target as HTMLElement).closest<HTMLButtonElement>('[data-reply]');
    if (!btn) return;
    setReply(btn.dataset.reply || null);
  });

  cancelReply?.addEventListener('click', () => setReply(null));

  form.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    const data = new FormData(form);
    const nickname = String(data.get('nickname') || '').trim();
    const email = String(data.get('email') || '').trim();
    const content = String(data.get('content') || '').trim();
    const parentId = String(data.get('parentId') || '').trim();
    const acceptNotify = Boolean(data.get('acceptNotify'));

    if (!nickname) {
      showMsg('Name is required.', 'err');
      return;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showMsg('A valid email is required. It is never published.', 'err');
      return;
    }
    if (!content) {
      showMsg('Write a comment before sending.', 'err');
      return;
    }

    const submit = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    if (submit) submit.disabled = true;
    try {
      const res = await fetch(api, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          appId,
          pageId,
          pageUrl,
          pageTitle,
          nickname,
          email,
          content,
          parentId: parentId || undefined,
          acceptNotify,
        }),
      });
      if (!res.ok) throw new Error('send failed');
      form.reset();
      setReply(null);
      showMsg('Sent. It will not appear until Old Fashioned Doctor approves it.');
    } catch {
      showMsg('Could not send just now. Try again, or write to @OldFashionedDr on X.', 'err');
    } finally {
      if (submit) submit.disabled = false;
    }
  });

  loadComments();
}
