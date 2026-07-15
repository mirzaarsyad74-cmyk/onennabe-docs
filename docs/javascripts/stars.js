/* Rising Stars for MkDocs */
function setupStars() {
  // Prevents duplicating the canvas when navigating pages (especially in Material theme)
  if (document.getElementById('rising-stars-canvas')) return;

  const canvas = document.createElement('canvas');
  canvas.id = 'rising-stars-canvas';
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
    particles = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.2,
      vy: -0.2,
      size: Math.random() * 3 + 1
    }));
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#3b82f633'; // Soft blue color with opacity
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(animate);
  }

  window.addEventListener('resize', init);
  init();
  animate();
}

// Runs on standard load, or hooks into Material Theme's page transitions
if (typeof document$ !== 'undefined') {
  document$.subscribe(setupStars);
} else {
  document.addEventListener('DOMContentLoaded', setupStars);
}