/*==================== SHOW MENU ====================*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

/*==================== SCROLL SPY ====================*/

let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header .navbar a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height) {
            navlinks.forEach.apply(link => {
                links.classList.remove("active");
                document.querySelector("header .navbar a[href*=" + id + "]").classList.add("active");
            })
        }
    })

    /*==================== NAVBAR ====================*/

    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);

    /*==================== REMOVE TOGGLE-NAVBAR ====================*/

    menuIcon.classList.remove("fa-xmark");
    navbar.classList.remove("active");
};

/*==================== SCROLL REVEAL ====================*/

ScrollReveal({
    distance: "80px",
    duration: 2000,
    delay: 20,
});

ScrollReveal().reveal(".home-content, heading", {origin: "top"});
ScrollReveal().reveal(".home-img, .curriculum-container, .projects-box", {origin: "bottom"});
ScrollReveal().reveal(".home-contact h1, .about-img", {origin: "left"});
ScrollReveal().reveal(".home-contact p, .about-content", {origin: "left"});

/*==================== TYPED JS ====================*/

const typed = new Typed('.multiple-text', {
    strings: ['PhD in Molecular Biology', 'Virologist', 'MSc in Bioinformatics'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

/*==================== CURRICULUM TABS ====================*/

const boxes = document.querySelectorAll(".timeline-box");

window.addEventListener("scroll", DisplayContent);
DisplayContent();

function DisplayContent() {
  const TriggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const topBox = box.getBoundingClientRect().top;

    if (topBox < TriggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}