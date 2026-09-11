const ENDPOINT = 'https://api.web3forms.com/submit';

const form = document.querySelector<HTMLFormElement>('[data-comments-form]');
const msgEl = document.querySelector<HTMLElement>('[data-comments-msg]');

function showMsg(text: string, kind: 'ok' | 'err' = 'ok') {
  if (!msgEl) return;
  msgEl.hidden = false;
  msgEl.textContent = text;
  msgEl.classList.toggle('is-error', kind === 'err');
}

if (form) {
  form.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const message = String(data.get('message') || '').trim();
    const honeypot = String(data.get('website') || '').trim();
    const botcheck = Boolean(data.get('botcheck'));

    if (!name) {
      showMsg('Name is required.', 'err');
      return;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showMsg('A valid email is required. It is never published.', 'err');
      return;
    }
    if (!message) {
      showMsg('Write a comment before sending.', 'err');
      return;
    }

    if (honeypot || botcheck) {
      form.reset();
      showMsg('Thanks — sent for review');
      return;
    }

    const accessKey = String(data.get('access_key') || '').trim();
    if (!accessKey) {
      showMsg('Comments are not connected yet.', 'err');
      return;
    }

    const submit = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    if (submit) submit.disabled = true;

    const payload = {
      access_key: accessKey,
      name,
      email,
      message,
      subject: String(data.get('subject') || `Comment: ${data.get('pageTitle') || ''}`),
      from_name: name,
      replyto: email,
      pageTitle: String(data.get('pageTitle') || ''),
      pageUrl: String(data.get('pageUrl') || ''),
      pageId: String(data.get('pageId') || ''),
    };

    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });
      const json = (await res.json().catch(() => null)) as
        | { success?: boolean; message?: string }
        | null;
      if (!res.ok || !json?.success) {
        throw new Error(json?.message || 'send failed');
      }
      form.reset();
      showMsg('Thanks — sent for review');
    } catch {
      showMsg('Could not send. Try again, or write to @OldFashionedDr on X.', 'err');
    } finally {
      if (submit) submit.disabled = false;
    }
  });
}
