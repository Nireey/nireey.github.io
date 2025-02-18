document.addEventListener("DOMContentLoaded", () => {
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

    window.addEventListener("scroll", () => {
        let fromTop = window.scrollY + 60;

        navLinks.forEach(link => {
            const section = document.getElementById(link.getAttribute("href").substring(1));

            if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
                link.style.color = "#1db954";
            } else {
                link.style.color = "white";
            }
        });
    });
});
