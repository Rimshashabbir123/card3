// Stars
const starsEl = document.getElementById('stars');
for (let i = 0; i < 150; i++) {
  const s = document.createElement('div');
  s.className = 'star';
  const size = Math.random() * 2.5 + 0.5;
  s.style.cssText = `
    width:${size}px; height:${size}px;
    left:${Math.random()*100}%;
    top:${Math.random()*100}%;
    --d:${Math.random()*3+2}s;
    animation-delay:${Math.random()*4}s;
  `;
  starsEl.appendChild(s);
}

// Particles (gold & purple)
const particlesEl = document.getElementById('particles');
const colors = ['#d4af37','#f5d77e','#8a2be2','#e8c97a','#fff'];
for (let i = 0; i < 30; i++) {
  const p = document.createElement('div');
  p.className = 'particle';
  const size = Math.random() * 6 + 2;
  p.style.cssText = `
    width:${size}px; height:${size}px;
    left:${Math.random()*100}%;
    background:${colors[Math.floor(Math.random()*colors.length)]};
    --d:${Math.random()*6+4}s;
    animation-delay:${Math.random()*6}s;
  `;
  particlesEl.appendChild(p);
}

// Lanterns
const lanternsEl = document.getElementById('lanterns');
const emojis = ['🏮','🪔','✨','🌙','⭐'];
for (let i = 0; i < 8; i++) {
  const l = document.createElement('div');
  l.className = 'lantern';
  l.textContent = emojis[i % emojis.length];
  l.style.cssText = `
    left:${Math.random()*90+5}%;
    top:${Math.random()*30}%;
    font-size:${Math.random()*20+15}px;
    --d:${Math.random()*2+2}s;
    animation-delay:${Math.random()*2}s;
    opacity: 0.6;
  `;
  lanternsEl.appendChild(l);
}

// Fireworks
function createFirework() {
  const fw = document.createElement('div');
  fw.className = 'firework';
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight * 0.6;
  fw.style.cssText = `left:${x}px; top:${y}px;`;}