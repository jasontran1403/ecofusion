// Script to handle the header background change on scroll
window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    
    if (window.scrollY > 50) {
        header.classList.remove('transparent');
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
        header.classList.add('transparent');
    }
});
