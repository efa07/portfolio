let menulis = document.getElementById('menu-lis')
        let img = document.getElementById('menu-icon')
        function togglemenu(){
            if(menulis.style.display === 'block'){
                menulis.style.display = 'none';
            }else{
                menulis.style.display='block'
            }
        }
/* custom cursor */
        document.addEventListener('mousemove', e => {
            const cursor = document.querySelector('.cursor');
            cursor.style.left = e.pageX + 'px';
            cursor.style.top = e.pageY + 'px';
        });
        function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
    function changeColor() {
        const colorbtn = document.getElementById('color')
        const root = document.documentElement;
      const currentColor = getComputedStyle(root).getPropertyValue('--green').trim();
      if (currentColor === '#16db65' && 'rgba(136, 228, 90, 0.055)') {
        root.style.setProperty('--green', 'red');
        root.style.setProperty('--about-text', 'rgba(228, 90, 90, 0.055)');
        colorbtn.innerHTML = "Green"
        img.src='./icons/red menu.png'
      } else {
        root.style.setProperty('--green', '#16db65');
        root.style.setProperty('--about-text', 'rgba(136, 228, 90, 0.055)');
        colorbtn.innerHTML = "Red"
        img.src='./icons/menu.png'
      }
    }
/* card animation */
    document.addEventListener('DOMContentLoaded', function() {
    var cards = document.querySelectorAll('.project-container .card');
    var projectContainer = document.querySelector('.project-container');

    cards.forEach(function(card) {
        card.addEventListener('mouseover', function() {
            projectContainer.classList.add('blur');
        });

        card.addEventListener('mouseout', function() {
            projectContainer.classList.remove('blur');
        });
    });
});
/* section animation */
const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry);
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        });
    
        const hidenele = document.querySelectorAll('.hidden');
        hidenele.forEach((el) => observer.observe(el));

/* for the eye*/
        document.addEventListener('mousemove', (event) => {
            const eyes = document.querySelectorAll('.eye');
            eyes.forEach((eye) => {
              const pupil = eye.querySelector('.pupil');
              const eyeRect = eye.getBoundingClientRect();
              const eyeCenterX = eyeRect.left + eyeRect.width / 2;
              const eyeCenterY = eyeRect.top + eyeRect.height / 2;
              const angle = Math.atan2(event.clientY - eyeCenterY, event.clientX - eyeCenterX);
              const pupilX = 25 * Math.cos(angle);
              const pupilY = 25 * Math.sin(angle);
              pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
            });
          });
/* loader */
document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("#loader-2").style.display = "block";
  } else {
    document.querySelector("#loader-2").style.display = "none";
  }
};

/* background pulsating stars */
(function initStarBackground() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = 0;
  let height = 0;
  let dpr = window.devicePixelRatio || 1;
  let dots = [];

  function getThemeColor() {
    const root = document.documentElement;
    return getComputedStyle(root).getPropertyValue('--green').trim() || '#16db65';
  }

  function resize() {
    dpr = window.devicePixelRatio || 1;
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    initDots();
  }

  function initDots() {
    dots = [];
    const density = width * height < 450000 ? 14000 : 11000;
    const count = Math.max(30, Math.floor((width * height) / density));
    for (let i = 0; i < count; i += 1) {
      dots.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.2 + 0.6,
        speed: Math.random() * 0.002 + 0.001, // pulse speed
        offset: Math.random() * Math.PI * 2,
        sparkUntil: 0,
      });
    }
  }

  function draw(now = 0) {
    ctx.clearRect(0, 0, width, height);
    const color = getThemeColor();

    for (const dot of dots) {
      // random spark boost
      if (dot.sparkUntil < now && Math.random() < 0.002) {
        dot.sparkUntil = now + 600 + Math.random() * 600;
      }

      const base = 0.7 + 0.5 * (0.5 + 0.5 * Math.sin(now * dot.speed + dot.offset));
      const sparkBoost = dot.sparkUntil > now ? 1.6 : 1;
      const radius = dot.r * base * sparkBoost;
      const alpha = Math.min(1, 0.35 * sparkBoost + 0.25 * base);

      ctx.fillStyle = color;
      ctx.globalAlpha = alpha;
      ctx.beginPath();
      ctx.arc(dot.x, dot.y, radius, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  resize();
  requestAnimationFrame(draw);
})();