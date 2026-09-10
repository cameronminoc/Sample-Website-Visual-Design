


  const projects = document.querySelectorAll('.proj');
  const preview = document.getElementById('preview');
  const defaultPh = preview.querySelector('[data-default]');

  projects.forEach(p => {
    p.addEventListener('mouseenter', () => {
      preview.innerHTML = '<div class="ph active">' + p.dataset.note + '</div>';
    });
  });
  preview.addEventListener('mouseleave', () => {
    preview.innerHTML = '';
    preview.appendChild(defaultPh.cloneNode(true));
    requestAnimationFrame(() => preview.querySelector('.ph').classList.add('active'));
  });