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

//Toastify.js

// Form Action
(function () {
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      if (response.ok) {
        console.log("sucess");
        Toastify({
          text: "Your message has been sent successfully! We'll get back to you soon.",

          duration: 3000, // duration in milliseconds
          close: false, // display close button
          gravity: "top", // `top` or `bottom`
          position: "right", // `left`, `center` or `right`
          style: {
            color: "#008a2e", // custom background color
            padding: "3px 15px",
            borderRadius: "10px",
            fontWeight: "500",
            background: "#f1f1f1",
            fontSize: "14px",
            boxShadow: "0 0 5px rgba(0,0,0,0.6)",
          }, // custom background color
          stopOnFocus: true, // stop timeout on focus
          onClick: function () {}, // callback function when the toast is clicked
        }).showToast();
        form.reset();
      } else {
        const data = await response.json();
        if (data.errors) {
          formMessage.textContent = data.errors
            .map((error) => error.message)
            .join(", ");
        } else {
          console.log("fail");
        }
        Toastify({
          text: "Oops! Something went wrong. Please try again later.",
          duration: 3000, // duration in milliseconds
          close: false, // display close button
          gravity: "top", // `top` or `bottom`
          position: "right", // `left`, `center` or `right`
          style: {
            color: "#e60000", // custom background color
            padding: "3px 15px",
            borderRadius: "10px",
            fontWeight: "500",
            background: "#f1f1f1",
            fontSize: "14px",
            boxShadow: "0 0 5px rgba(0,0,0,0.6)",
          }, // custom background color
          stopOnFocus: true, // stop timeout on focus
          onClick: function () {}, // callback function when the toast is clicked
        }).showToast();
      }
    } catch (error) {
      console.log("fail");
      Toastify({
        text: "Oops! Something went wrong. Please try again later.",
        duration: 3000, // duration in milliseconds
        close: false, // display close button
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        style: {
          color: "#e60000", // custom background color
          padding: "3px 15px",
          borderRadius: "10px",
          fontWeight: "500",
          background: "#f1f1f1",
          fontSize: "14px",
          boxShadow: "0 0 5px rgba(0,0,0,0.6)",
        },
        stopOnFocus: true, // stop timeout on focus
        onClick: function () {}, // callback function when the toast is clicked
      }).showToast();
    }
  });
})();
// Sticky Header
(function () {
  const header = document.querySelector(".navbar");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  function handleScrolls() {
    if (window.pageYOffset > window.innerHeight * 0.8) {
      header.classList.add("sticky");
      navbarCollapse.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
      navbarCollapse.classList.remove("sticky");
    }
  }

  const navItems = document.querySelectorAll(".navbar-nav .nav-link");
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      navbarCollapse.classList.remove("show");
    });
  });

  window.addEventListener("scroll", handleScrolls);
})();
// Navbar closer
// (function () {
//   const navbarToggler = document.querySelector(".navbar-toggler");
//   const navbarCollapse = document.querySelector(".navbar-collapse");
//   const navItems = document.querySelectorAll(".navbar-nav .nav-link");

//   // Toggle navbar on click of navbar-toggler
//   navbarToggler.addEventListener("click", function () {
//     if (navbarCollapse.classList.contains("show")) {
//       navbarCollapse.classList.remove("show");
//     }
//   });

//   // Close navbar when any nav-link is clicked
//   navItems.forEach((item) => {
//     item.addEventListener("click", function () {
//       navbarCollapse.classList.remove("show");
//     });
//   });
// })();
