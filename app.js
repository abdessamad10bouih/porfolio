// Register GSAP and ScrollTrigger plugin (only once)
gsap.registerPlugin(ScrollTrigger);


let togglebtn = document.querySelector('.sun');
const body = document.body;
let logo = document.querySelector('.darkLogo');
let footLogo = document.querySelector(".ftr-logo")
let respoImg = document.querySelector(".respo-img")
togglebtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")){
        logo.src = "./images/logo_white.png";
        togglebtn.src = "./images/sun.svg";
        togglebtn.style.color = "white";
        footLogo.src = "./images/logo.png";
        respoImg.src = "./images/respo-white.png"
    }
    else{
        logo.src = "./images/logo.png";
        togglebtn.src = "./images/moon.svg";
        footLogo.src = "./images/logo_white.png";
        respoImg.src = "./images/logo_respo.png"
    }
});
// Typed.js for dynamic text effect
const typed = new Typed('#changing', {
    strings: ['Abdessamad Bouih', 'FullStack', 'FrontEnd Developer', 'Designer'],
    typeSpeed: 50,
    loop: true
});

// Initial animation for logo
gsap.from(".logo img", {
    duration: 1,
    opacity: 0,
    y: -50,
    ease: "bounce"
});
// Animation for navigation items
gsap.from("nav ul li", {
    duration: 1,
    opacity: 0,
    stagger: 0.2,
    x: -50,
    ease: "power1.out"
});

// Animation for hero section text
gsap.from(".textHero h1", {
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "power2.out"
});

gsap.from(".textHero p", {
    duration: 1,
    opacity: 0,
    y: 50,
    delay: 0.5,
    ease: "power2.out"
});

// Animation for hero section icons with stagger
gsap.from(".icons .icon", {
    duration: 1,
    opacity: 0,
    stagger: 0.2,
    x: -30,
    ease: "power2.out",
    delay: 1
});

// Animation for the image in the hero section
gsap.from(".imgHero", {
    duration: 1,
    opacity: 0,
    x: 100,
    ease: "power2.out",
    delay: 1.5
});

gsap.from(".aboutImg img", {
    scrollTrigger: {
        trigger: ".aboutme",
        start: "top 90%", // Start when the section is 90% visible
        toggleActions: "play none none none",
    },
    opacity: 0,
    x: -100, // Slide in from the left
    duration: 1, // Animation duration
    ease: "power2.out" // Easing function
});

// Animation for the "About Me" section text
gsap.from(".aboutText", {
    scrollTrigger: {
        trigger: ".aboutme",
        start: "top 90%", // Same start point for text
        toggleActions: "play none none none",
    },
    opacity: 0,
    y: 50, // Slide in from below
    duration: 1, // Animation duration
    ease: "power2.out", // Easing function
    stagger: 0.2 // Staggered animation for each paragraph or text block
});

// GSAP and ScrollTrigger are already registered and imported

// Animation for the "projects" section
// Animate each project individually as it comes into view
gsap.utils.toArray('.prj').forEach((project, index) => {
    gsap.from(project, {
        scrollTrigger: {
            trigger: project,
            start: "top 85%", // Start animation when the project is 85% in view
            toggleActions: "play none none none",
        },
        x: index % 2 === 0 ? -100 : 100, // Alternate the animation direction
        opacity: 0, // Start with zero opacity
        duration: 1, // Animation duration
        ease: "power2.out", // Easing function
    });
});

// Animation for the "talk" section
gsap.from(".talk-text h1, .talk-text p, .talk-form form", {
    scrollTrigger: {
        trigger: ".talk", // The trigger point
        start: "top 85%", // Trigger when 85% of the section is in view
        toggleActions: "play none none none",
    },
    y: 50, // Slide in from below
    opacity: 0, // Start with zero opacity
    stagger: 0.2, // Stagger for smooth transitions
    duration: 1, // Animation duration
    ease: "power2.out", // Easing function
});

let openBtn = document.querySelector('#toggle');
let closeBtn = document.querySelector('.close-nav');
let nav = document.querySelector('.respo-nav');

let isOpen = false;

// Function to open the navigation
function openNav() {
    gsap.to(nav, {
        y: '0%',
        duration: 0.5,
        ease: 'power2.inOut',
    });
    isOpen = true;
}

// Function to close the navigation
function closeNav() {
    gsap.to(nav, {
        y: '-100%',
        duration: 0.5,
        ease: 'power2.inOut',
    });
    isOpen = false;
}

// Open the navigation when clicking the button
openBtn.addEventListener('click', openNav);

// Close the navigation when clicking the close button
closeBtn.addEventListener('click', closeNav);

// Optional: Close the navigation when clicking outside of it
document.addEventListener('click', (e) => {
    if (isOpen && !nav.contains(e.target) && e.target !== openBtn) {
        closeNav();
    }
});

