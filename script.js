// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"});
  });
});

// DARK/LIGHT MODE TOGGLE with localStorage
const toggleBtn=document.getElementById("theme-toggle");
const body=document.body;

const savedTheme=localStorage.getItem('theme');
if(savedTheme){
  body.classList.add(savedTheme);
  if(savedTheme==='light-theme') toggleBtn.innerHTML='<i class="fas fa-sun"></i>';
}

toggleBtn.addEventListener("click",()=>{
  body.classList.toggle("light-theme");
  const isLight=body.classList.contains("light-theme");
  toggleBtn.innerHTML=isLight?'<i class="fas fa-sun"></i>':'<i class="fas fa-moon"></i>';
  localStorage.setItem('theme',isLight?'light-theme':'');
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// HERO
gsap.from(".hero-text h1",{opacity:0,y:-50,duration:1,delay:0.3,ease:"power3.out"});
gsap.from(".hero-text p",{opacity:0,y:30,duration:1,delay:0.8,ease:"power3.out"});
gsap.from(".hero-text .btn",{opacity:0,scale:0.8,duration:1,delay:1.2,ease:"back.out(1.7)"});
gsap.from(".hero-img img",{opacity:0,x:100,duration:1.5,delay:1,ease:"power3.out"});

// SKILLS
gsap.utils.toArray(".skill-card").forEach((card,i)=>{
  gsap.from(card,{scrollTrigger:{trigger:card,start:"top 80%",toggleActions:"play none none none"},opacity:0,y:40,duration:0.8,delay:i*0.1});
});

// PROJECTS
gsap.utils.toArray(".project-card").forEach((card,i)=>{
  gsap.from(card,{scrollTrigger:{trigger:card,start:"top 85%",toggleActions:"play none none none"},opacity:0,y:60,duration:1,delay:i*0.15});
});

// NAVBAR
gsap.from("header",{y:-100,opacity:0,duration:1,ease:"power2.out"});
