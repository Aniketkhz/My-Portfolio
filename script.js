// Import GSAP + ScrollTrigger
// (no need to install, just include in HTML)
gsap.registerPlugin(ScrollTrigger);

// HERO ANIMATION
gsap.from(".hero-text h1", {
  opacity: 0,
  y: -50,
  duration: 1,
  delay: 0.3,
  ease: "power3.out"
});

gsap.from(".hero-text p", {
  opacity: 0,
  y: 30,
  duration: 1,
  delay: 0.8,
  ease: "power3.out"
});

gsap.from(".hero-text .btn", {
  opacity: 0,
  scale: 0.8,
  duration: 1,
  delay: 1.2,
  ease: "back.out(1.7)"
});

gsap.from(".hero-img img", {
  opacity: 0,
  x: 100,
  duration: 1.5,
  delay: 1,
  ease: "power3.out"
});

// SKILLS SECTION REVEAL
gsap.utils.toArray(".skill-card").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 80%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 40,
    duration: 0.8,
    delay: i * 0.1
  });
});

// PROJECTS SECTION REVEAL
gsap.utils.toArray(".project-card").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 60,
    duration: 1,
    delay: i * 0.15
  });
});

// NAVBAR FADE-IN
gsap.from("header", {
  y: -100,
  opacity: 0,
  duration: 1,
  ease: "power2.out"
});
