//fade-in

document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-visible");
            } else {
                entry.target.classList.remove("fade-visible");
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(el => observer.observe(el));
});


//dark mode

const toggleButton = document.getElementById("theme-toggle");
const body = document.body;
const blogSection = document.querySelector(".blog-section");

// Check local storage for user preference
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    toggleButton.classList.replace("ri-moon-fill", "ri-sun-fill");
}

toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    blogSection.classList.toggle("dark-mode");

    // Toggle icon
    if (body.classList.contains("dark-mode")) {
        toggleButton.classList.replace("ri-moon-fill", "ri-sun-fill");
        localStorage.setItem("theme", "dark"); // Store preference
    } else {
        toggleButton.classList.replace("ri-sun-fill", "ri-moon-fill");
        localStorage.setItem("theme", "light");
    }
});
