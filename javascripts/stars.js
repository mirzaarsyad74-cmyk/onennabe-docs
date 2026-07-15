/* Ambient Steam Dust for MkDocs */
function setupSteamDust() {
  if (document.getElementById('steam-dust-canvas')) return;

  const canvas = document.createElement('canvas');
  canvas.id = 'steam-dust-canvas';
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.zIndex = '-1';
  canvas.style.pointerEvents = 'none';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  let particles = [];

  function init() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // 75 particles for a subtle, not overwhelming, effect
    particles = Array.from({ length: 75 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.2, // Very slow horizontal drift
      vy: (Math.random() - 0.5) * 0.2, // Very slow vertical drift
      size: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.5 + 0.1 // Random opacity for depth
    }));
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      
      // Wrap around screen edges smoothly
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      // Steam signature blue color with dynamic opacity
      ctx.fillStyle = `rgba(102, 192, 244, ${p.alpha})`; 
      ctx.fill();
    });
    requestAnimationFrame(animate);
  }

  window.addEventListener('resize', init);
  init();
  animate();
}

if (typeof document$ !== 'undefined') {
  document$.subscribe(setupSteamDust);
} else {
  document.addEventListener('DOMContentLoaded', setupSteamDust);
}