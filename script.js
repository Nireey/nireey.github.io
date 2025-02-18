document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: "smooth"
            });
        });
    });

    // Highlight active navigation link on scroll
    window.addEventListener("scroll", () => {
        let fromTop = window.scrollY + 60;

        navLinks.forEach(link => {
            const section = document.getElementById(link.getAttribute("href").substring(1));

            if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
                link.style.color = "#1abc9c";
            } else {
                link.style.color = "#2c3e50";
            }
        });
    });

    // Toggle project details
    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach(card => {
        card.addEventListener("click", () => {
            const details = card.querySelector(".project-details");
            details.classList.toggle("visible");
        });
    });

    // Toggle blog details
    const blogCards = document.querySelectorAll(".blog-card");

    blogCards.forEach(card => {
        card.addEventListener("click", () => {
            const details = card.querySelector(".blog-details");
            details.classList.toggle("visible");
        });
    });

    // Dark mode toggle
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "🌙";
    toggleButton.style.position = "fixed";
    toggleButton.style.bottom = "20px";
    toggleButton.style.right = "20px";
    toggleButton.style.background = "#2c3e50";
    toggleButton.style.color = "white";
    toggleButton.style.border = "none";
    toggleButton.style.borderRadius = "50%";
    toggleButton.style.width = "50px";
    toggleButton.style.height = "50px";
    toggleButton.style.cursor = "pointer";
    toggleButton.style.zIndex = "1000";
    document.body.appendChild(toggleButton);

    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});