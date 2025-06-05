document.addEventListener("DOMContentLoaded", () => {
  if (typeof ScrollReveal !== "undefined") {
    ScrollReveal().reveal('.fade-in', {
      distance: '20px',
      duration: 1000,
      origin: 'top',
      easing: 'ease-out',
      reset: false,
      mobile: true
    });

    ScrollReveal().reveal('.fade-scroll', {
      distance: '50px',
      duration: 1000,
      origin: 'bottom',
      interval: 150,
      easing: 'ease-in-out',
      reset: false,
      mobile: true
    });
  }
});
