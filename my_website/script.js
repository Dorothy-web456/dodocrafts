// Smooth scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Order form interaction
document.getElementById("orderForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you! Your order request has been sent. We’ll respond within 24 hours.");
});

// Lightbox for gallery images
const paintings = document.querySelectorAll(".painting img");
paintings.forEach(img => {
  img.addEventListener("click", () => {
    const modal = document.createElement("div");
    modal.classList.add("lightbox");
    modal.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
    document.body.appendChild(modal);

    // Close lightbox when clicked
    modal.addEventListener("click", () => {
      modal.remove();
    });
  });
});
