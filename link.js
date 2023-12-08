const topBarLogo = document.getElementById('topBarLogo');



topBarLogo.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

