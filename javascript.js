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