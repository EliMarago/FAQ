const faq = document.querySelectorAll(".faq-toggle");

faq.forEach(function (i) {
  i.addEventListener("click", () => {
    i.parentNode.classList.toggle("active");
  });
});
