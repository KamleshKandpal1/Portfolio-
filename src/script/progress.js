// gsap.from("#skills .progress-bar", {
//   scrollTrigger: {
//     tigger: "#skills",
//     markers: true,
//   },
//   width: "0px",
//   ease: Power2.easeInOut,
//   duration: 5,
//   stagger: 0.2,
// });
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

// moveToTop function
const moveToTopButton = document.getElementById("moveToTopButton");

const handleScroll = () => {
  if (window.scrollY > window.innerHeight * 0.8) {
    moveToTopButton.classList.remove("hidden");
  } else {
    moveToTopButton.classList.add("hidden");
  }
};

const handleMoveToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

window.addEventListener("scroll", handleScroll);
moveToTopButton.addEventListener("click", handleMoveToTop);

// AOS
AOS.init();
