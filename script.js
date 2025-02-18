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
});