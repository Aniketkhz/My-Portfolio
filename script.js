// DARK/LIGHT THEME TOGGLE with smooth transition
const toggle = document.getElementById('theme-toggle');
const icon = toggle.querySelector('i');

toggle.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  
  // Smooth icon transition
  if (document.body.classList.contains('light-theme')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
});

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// NAVBAR - Smooth entrance
gsap.from("header", {
  y: -100,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

// HERO SECTION - Staggered animations
const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });

heroTimeline
  .from(".hero-text h1", {
    opacity: 0,
    y: 60,
    duration: 1.2,
    delay: 0.3
  })
  .from(".hero-text p", {
    opacity: 0,
    y: 40,
    duration: 1,
    delay: 0.2
  }, "-=0.6")
  .from(".hero-text .btn", {
    opacity: 0,
    scale: 0.8,
    duration: 0.8,
    ease: "back.out(1.7)"
  }, "-=0.5")
  .from(".profile-placeholder", {
    opacity: 0,
    x: 80,
    duration: 1.2,
    ease: "power3.out"
  }, "-=1");

// SKILLS SECTION - Smooth stagger with enhanced effects
gsap.utils.toArray(".skill-category").forEach((category, i) => {
  // Animate category heading
  gsap.from(category.querySelector("h3"), {
    opacity: 0,
    x: -50,
    duration: 0.8,
    scrollTrigger: {
      trigger: category,
      start: "top 85%",
      toggleActions: "play none none none"
    }
  });

  // Animate skill cards with stagger
  const cards = category.querySelectorAll(".skill-card");
  gsap.from(cards, {
    opacity: 0,
    y: 50,
    scale: 0.9,
    duration: 0.6,
    stagger: {
      each: 0.08,
      from: "start"
    },
    ease: "power2.out",
    scrollTrigger: {
      trigger: category,
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });
});

// PROJECTS SECTION - Enhanced card animations
gsap.utils.toArray(".project-card").forEach((card, i) => {
  gsap.from(card, {
    opacity: 0,
    y: 80,
    scale: 0.95,
    duration: 0.8,
    delay: i * 0.1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: card,
      start: "top 88%",
      toggleActions: "play none none none"
    }
  });
});

// RESUME SECTION - Fade in animation
gsap.from(".resume h2", {
  opacity: 0,
  y: 40,
  duration: 1,
  scrollTrigger: {
    trigger: ".resume",
    start: "top 80%",
    toggleActions: "play none none none"
  }
});

gsap.from(".resume p, .resume .btn", {
  opacity: 0,
  y: 30,
  duration: 0.8,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".resume",
    start: "top 75%",
    toggleActions: "play none none none"
  }
});

// CONTACT SECTION - Smooth reveal
gsap.from(".contact h2", {
  opacity: 0,
  y: 40,
  duration: 1,
  scrollTrigger: {
    trigger: ".contact",
    start: "top 80%",
    toggleActions: "play none none none"
  }
});

gsap.from(".contact p", {
  opacity: 0,
  x: -30,
  duration: 0.8,
  stagger: 0.15,
  scrollTrigger: {
    trigger: ".contact",
    start: "top 75%",
    toggleActions: "play none none none"
  }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: target,
          offsetY: 80
        },
        ease: "power3.inOut"
      });
    }
  });
});

// Add parallax effect to hero image
gsap.to(".profile-placeholder", {
  y: -30,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});

// Add floating animation to hero button
gsap.to(".hero-text .btn", {
  y: -5,
  duration: 1.5,
  ease: "power1.inOut",
  repeat: -1,
  yoyo: true
});