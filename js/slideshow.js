const slideshow = document.querySelector(".slideshow");

const slides = document.querySelectorAll(".slide");
const buttons = document.querySelectorAll(".slide-button");

const previousButton = document.querySelector(".slide-arrow-left");
const nextButton = document.querySelector(".slide-arrow-right");

let currentSlide = 0;

let slideshowTimer;
let isHovering = false;

const slideshowInterval = 4000;


/* ==============================
   Slide anzeigen
   ============================== */

function showSlide(index) {
    slides[currentSlide].classList.remove("active");
    buttons[currentSlide].classList.remove("active");

    currentSlide = index;

    slides[currentSlide].classList.add("active");
    buttons[currentSlide].classList.add("active");
}


/* ==============================
   Nächstes Bild
   ============================== */

function showNextSlide() {
    const nextSlide = (currentSlide + 1) % slides.length;

    showSlide(nextSlide);
}


/* ==============================
   Vorheriges Bild
   ============================== */

function showPreviousSlide() {
    const previousSlide =
        (currentSlide - 1 + slides.length) % slides.length;

    showSlide(previousSlide);
}


/* ==============================
   Timer starten
   ============================== */

function startSlideshowTimer() {
    slideshowTimer = setInterval(
        showNextSlide,
        slideshowInterval
    );
}


/* ==============================
   Timer zurücksetzen
   ============================== */

function resetSlideshowTimer() {
    clearInterval(slideshowTimer);

    if (!isHovering) {
        startSlideshowTimer();
    }
}


/* ==============================
   Punkt Navigation
   ============================== */

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        showSlide(index);

        resetSlideshowTimer();
    });
});


/* ==============================
   Pfeil Navigation
   ============================== */

previousButton.addEventListener("click", () => {
    showPreviousSlide();

    resetSlideshowTimer();
});

nextButton.addEventListener("click", () => {
    showNextSlide();

    resetSlideshowTimer();
});


/* ==============================
   Pause bei Hover
   ============================== */

slideshow.addEventListener("mouseenter", () => {
    isHovering = true;

    clearInterval(slideshowTimer);
});

slideshow.addEventListener("mouseleave", () => {
    isHovering = false;
    
    resetSlideshowTimer();
});


/* ==============================
   Slideshow starten
   ============================== */

startSlideshowTimer();