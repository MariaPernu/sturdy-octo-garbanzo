<<<<<<< HEAD
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
=======
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
>>>>>>> 898b5a9117da178ef632e2e89b2c584658dd43fd
