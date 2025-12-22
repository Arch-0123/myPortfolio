/* Eye tracking */
(function() {
  const face = document.querySelector('.face');
  const left = document.getElementById('pupilLeft');
  const right = document.getElementById('pupilRight');
  const maxOffset = 8;

  function movePupil(pupilEl, x, y) {
    const rect = face.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = x - cx;
    const dy = y - cy;
    const angle = Math.atan2(dy, dx);
    const dist = Math.min(Math.hypot(dx, dy) / 18, 1);
    const offsetX = Math.cos(angle) * maxOffset * dist;
    const offsetY = Math.sin(angle) * maxOffset * dist;
    pupilEl.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  }

  window.addEventListener('mousemove', e => {
    movePupil(left, e.clientX, e.clientY);
    movePupil(right, e.clientX, e.clientY);
  });

  window.addEventListener('mouseleave', () => {
    left.style.transform = 'translate(0,0)';
    right.style.transform = 'translate(0,0)';
  });
})();

/* Arm waves */
(function() {
  const leftArm = document.getElementById('armLeft');
  const rightArm = document.getElementById('armRight');

  function triggerWave() {
    const mode = Math.random();
    if (mode < 0.4) {
      leftArm.classList.add('wave');
      setTimeout(() => leftArm.classList.remove('wave'), 1800);
    } else if (mode < 0.8) {
      rightArm.classList.add('wave');
      setTimeout(() => rightArm.classList.remove('wave'), 1800);
    } else {
      leftArm.classList.add('wave');
      rightArm.classList.add('wave');
      setTimeout(() => {
        leftArm.classList.remove('wave');
        rightArm.classList.remove('wave');
      }, 1800);
    }
  }

  setTimeout(triggerWave, 1200);

  function scheduleNext() {
    const interval = 8000 + Math.random() * 4000;
    setTimeout(() => {
      triggerWave();
      scheduleNext();
    }, interval);
  }
  scheduleNext();
})();
(function() {
  const leftEye = document.querySelector('.eye-holder.left');
  const rightEye = document.querySelector('.eye-holder.right');

  function smileEyes() {
    leftEye.classList.add('eye-smile');
    rightEye.classList.add('eye-smile');
    setTimeout(() => {
      leftEye.classList.remove('eye-smile');
      rightEye.classList.remove('eye-smile');
    }, 2000); // reset after animation
  }

  // Example: trigger smile every 10s
  setInterval(smileEyes, 10000);
})();
