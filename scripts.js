// JavaScript-tiedosto

// Smooth scroll navigointilinkeille
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Estä oletustoiminto
        const targetId = this.getAttribute('href'); // Hae kohteen ID
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Vieritys kohteeseen
                behavior: 'smooth' // Sujuva vieritys
            });
        }
    });
});