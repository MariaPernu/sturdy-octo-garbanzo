// JavaScript sulavaan siirtymiseen
document.querySelectorAll('nav a').forEach(linkki => {
    linkki.addEventListener('click', function(e) {
        e.preventDefault();
        const kohdeId = this.getAttribute('href').slice(1);
        const kohdeElementti = document.getElementById(kohdeId);

        window.scrollTo({
            top: kohdeElementti.offsetTop - 60,
            behavior: 'smooth'
        });
    });
});
