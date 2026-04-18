const PETAL_COLORS = [
  '#e74c3c','#c0392b','#f1948a','#e8b4b8',
  '#f5d020','#d4a017','#ffe066','#c0c0c0',
  '#ffd700','#ff69b4','#dc143c'
];
const SPARKLES = ['✦','✧','★','✩','💫','✨','🌟'];

function makePetal() {
  const p = document.createElement('div');
  p.className = 'petal';
  const c = PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)];
  const dur = 3.5 + Math.random() * 5;
  const delay = Math.random() * 2;
  Object.assign(p.style, {
    width:  (7  + Math.random() * 14) + 'px',
    height: (9  + Math.random() * 16) + 'px',
    background: c,
    left: Math.random() * 100 + 'vw',
    top: '-20px',
    animationDuration: dur + 's',
    animationDelay: delay + 's',
    transform: 'rotate(' + (Math.random() * 360) + 'deg)',
    borderRadius: Math.random() > 0.5 ? '50%' : '0 100% 0 100%',
    position: 'fixed'
  });
  document.body.appendChild(p);
  setTimeout(() => p.remove(), (dur + delay) * 1000 + 200);
}

function makeSparkle() {
  const s = document.createElement('div');
  s.className = 'sparkle';
  s.textContent = SPARKLES[Math.floor(Math.random() * SPARKLES.length)];
  Object.assign(s.style, {
    left: (10 + Math.random() * 80) + 'vw',
    top:  (10 + Math.random() * 70) + 'vh',
    fontSize: (14 + Math.random() * 16) + 'px',
    animationDuration: (1 + Math.random() * 1.5) + 's',
    animationDelay: Math.random() + 's'
  });
  document.body.appendChild(s);
  setTimeout(() => s.remove(), 3000);
}

function burst(n) {
  for (let i = 0; i < n; i++) makePetal();
  for (let i = 0; i < 18; i++) makeSparkle();
}

/* Ambient petals on cover */
setInterval(() => {
  if (document.getElementById('cover').style.display !== 'none') {
    makePetal();
  }
}, 700);

/* Open card */
document.getElementById('openBtn').addEventListener('click', function () {
  burst(60);
  setTimeout(() => {
    document.getElementById('cover').style.display = 'none';
    const card = document.getElementById('card');
    card.style.display = 'block';
    card.classList.add('animating');
    setTimeout(() => card.classList.remove('animating'), 600);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    burst(30);
  }, 200);
});

/* Close card */
document.getElementById('closeBtn').addEventListener('click', function () {
  document.getElementById('card').style.display = 'none';
  document.getElementById('cover').style.display = 'flex';
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
