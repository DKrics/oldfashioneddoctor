document.querySelectorAll('[data-photos]').forEach(el => {
  el.dataset.photos.split(',').forEach(name => {
    const img = document.createElement('img');
    img.alt = '';
    el.appendChild(img);
    fetch('../assets/img/' + name.trim() + '.b64')
      .then(r => r.text())
      .then(b => { img.src = 'data:image/jpeg;base64,' + b; });
  });
});
