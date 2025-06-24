window.addEventListener('load', () => {
  const element = document.getElementById('floating-element');

  // Initial zoom animation
  gsap.to(element, { duration: 1, scale: 1, opacity: 1, ease: "power2.out" }); // Zoom in

  // Function to generate random movement
  function randomFloat() {
    const maxX = window.innerWidth - element.offsetWidth;
    const maxY = window.innerHeight - element.offsetHeight;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    return { x: randomX, y: randomY };
  }

  // Function for continuous floating
  function floatElement() {
    const { x, y } = randomFloat();
    gsap.to(element, { duration: 10, x, y, ease: "power1.inOut", onComplete: floatElement });
  }

  // Start floating after the zoom is complete
  gsap.to(element, { duration: 5, scale: 1, opacity: 1, ease: "power2.out", onComplete: floatElement });


});
