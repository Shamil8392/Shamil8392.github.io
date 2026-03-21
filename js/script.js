function openModal(id) {
  document.getElementById('modal-' + id).classList.add('open');
}
function closeModal(id) {
  document.getElementById('modal-' + id).classList.remove('open');
}
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.open').forEach(m => m.classList.remove('open'));
  }
});

function switchTab(name) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  document.getElementById('tab-' + name).classList.add('active');
  event.target.classList.add('active');
}

function copyScript(id) {
  const text = document.getElementById(id).innerText;
  navigator.clipboard.writeText(text).then(() => {
    const btn = event.target;
    btn.textContent = '✅ Скопировано!';
    setTimeout(() => btn.textContent = 'Копировать', 2000);
  });
}

function toggleDone(el) {
  el.classList.toggle('done');
  const fill = el.querySelector('.progress-fill');
  if (el.classList.contains('done')) {
    fill.style.width = '100%';
    el.querySelector('.tracker-label').textContent = '✅ Завершено';
  } else {
    fill.style.width = '0%';
    el.querySelector('.tracker-label').textContent = 'Нажмите после завершения';
  }
}