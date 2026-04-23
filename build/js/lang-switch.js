document.querySelectorAll('.lang-toggle').forEach(el => {
  if (!el.href || el.href === window.location.href) {
    el.style.display = 'none';
  }
});
