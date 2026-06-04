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
paintings