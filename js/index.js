/* ========== Show Scroll top ========== */
const scrollTop = () => {
   const scrollTop = document.getElementById("scroll-top");
   if (this.scrollY >= 560) {
      scrollTop.classList.add("show-scroll");
   } else {
      scrollTop.classList.remove("show-scroll");
   }
};

window.addEventListener("scroll", scrollTop);

/* ========== Swipper ========== */
var mySwiper = new Swiper(".swiper-container", {
   // Optional parameters
   direction: "horizontal",
   spaceBetween: 55,
   loop: true,
   grabCursor: true,

   // If we need pagination
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },

   breakpoints: {
      500: {
         slidesPerView: 1,
      },

      1024: {
         slidesPerView: 1,
      },
   },
});

/* ========== Gsap Animation ========== */

/* ========== Navbar ========== */
gsap.from(".nav-item, .nav-logo", {
   opacity: 0,
   duration: 2,
   delay: 0.5,
   y: -100,
   ease: "expo-out",
   stagger: 0.6,
});

/* ========== Header ========== */
gsap.from(".embed-responsive-video", { opacity: 0, duration: 2, delay: 0.7, x: 60 });

gsap.from(".header-text, .header-button", {
   opacity: 0,
   duration: 3,
   delay: 0.8,
   y: 100,
   ease: "expo-out",
   stagger: 0.8,
});

/* ========== testimonials ========== */
gsap.from(".testimonials-item", {
   opacity: 0,
   duration: 4,
   delay: 1,
   y: 100,
   ease: "expo-out",
   stagger: 0.6,
});

gsap.registerPlugin(ScrollTrigger);

gsap.to(".testimonials-item", {
   scrollTrigger: {
      trigger: ".header-main",
      toggleActions: "restart none none none",
   },
   x: 100,
   rotation: 360,
   duration: 5,
});

/* ========== Spciality ========== */
gsap.from(".speciality-item-left", { opacity: 0, duration: 6, delay: 1.9, x: -100 });

gsap.from(".speciality-item-right", { opacity: 0, duration: 7, delay: 2, x: 100 });

/* ========== Contact ========== */
gsap.from("#contact-item-one", { opacity: 0, duration: 8, delay: 2.5, x: -150 });
gsap.from("#contact-item-two", { opacity: 0, duration: 9, delay: 2.6, y: -150 });
gsap.from("#contact-item-three", { opacity: 0, duration: 10, delay: 2.7, x: 150 });

/* ========== Live Class ========== */
gsap.from("#live-class-item-left", { opacity: 0, duration: 11, delay: 2.9, y: -150 });
gsap.from("#live-class-item-right", { opacity: 0, duration: 12, delay: 3, y: 150 });

/* ========== Courses, Books, Boards ========== */
gsap.from(".card", {
   opacity: 0,
   duration: 8,
   delay: 2.5,
   y: 100,
   ease: "expo-out",
   stagger: 0.8,
});

/* ========== Tutor ========== */
gsap.from("#tutor-one", { opacity: 0, duration: 10, delay: 6, y: -150 });
gsap.from("#tutor-two", { opacity: 0, duration: 10, delay: 6.1, y: 150 });
gsap.from("#tutor-three", { opacity: 0, duration: 10, delay: 6.2, x: -150 });
gsap.from("#tutor-four", { opacity: 0, duration: 10, delay: 6.3, x: 150 });
