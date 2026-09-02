document.querySelectorAll('[data-photos]').forEach(el => {
  el.dataset.photos.split(',').forEach(name => {
    name = name.trim();
    if (!name) return;
    const img = document.createElement('img');
    img.alt = name.replace(/-/g, ' ');
    el.appendChild(img);
    fetch('../assets/img/' + name + '.b64')
      .then(r => {
        if (!r.ok) throw new Error(r.status);
        return r.text();
      })
      .then(b => { img.src = 'data:image/jpeg;base64,' + b.replace(/\s+/g, ''); })
      .catch(() => { img.remove(); });
  });
});
