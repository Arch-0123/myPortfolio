window.addEventListener('load', () => {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Smooth scrolling for nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' });
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Floating astronaut animation
    const element = document.getElementById('floating-element');
    const astronaut = document.querySelector('#astronaut-container1 img');
    
    // Responsive astronaut size
    function updateAstronautSize() {
        const width = window.innerWidth;
        astronaut.style.width = width > 768 ? '120px' : '80px';
        astronaut.style.height = width > 768 ? '120px' : '80px';
    }
    updateAstronautSize();
    window.addEventListener('resize', updateAstronautSize);

    // Initial zoom animation
    gsap.set(element, { scale: 0, opacity: 0 });
    gsap.to(element, { 
        duration: 1.5, 
        scale: 1, 
        opacity: 1, 
        ease: "back.out(1.7)" 
    });

    // Continuous floating animation
    function floatAstronaut() {
        const maxX = window.innerWidth - 120;
        const maxY = window.innerHeight - 120;
        const randomX = (Math.random() - 0.5) * maxX * 0.8;
        const randomY = (Math.random() - 0.5) * maxY * 0.8;
        
        gsap.to('#astronaut-container1', { 
            duration: 15 + Math.random() * 10,
            x: randomX,
            y: randomY,
            rotation: Math.random() * 360,
            ease: "power1.inOut",
            onComplete: floatAstronaut
        });
    }

    // Start floating after zoom
    gsap.to(element, { 
        duration: 0.1, 
        onComplete: floatAstronaut 
    });

    // Button hover effect
    document.querySelector('.explore-btn').addEventListener('mouseenter', () => {
        gsap.to('.explore-btn', { scale: 1.05, duration: 0.3 });
    });
    document.querySelector('.explore-btn').addEventListener('mouseleave', () => {
        gsap.to('.explore-btn', { scale: 1, duration: 0.3 });
    });

    // Parallax effect on scroll
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        gsap.to('#astronaut-container1', {
            y: scrolled * 0.5,
            duration: 0.5
        });
    });
});
