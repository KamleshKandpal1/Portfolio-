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
