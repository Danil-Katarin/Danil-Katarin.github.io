document.querySelectorAll('.icon-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.querySelector('img').style.transform = 'scale(1.2)';
    });
    link.addEventListener('mouseleave', () => {
        link.querySelector('img').style.transform = 'scale(1)';
    });
});
