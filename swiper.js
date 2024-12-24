document.addEventListener('DOMContentLoaded', () => {
    const leftArrow = document.getElementById('arrowLeft');
    const rightArrow = document.getElementById('arrowRight');
    const deepFilter = document.querySelector('.deep-filter');

    if (leftArrow && rightArrow && deepFilter) {
        leftArrow.addEventListener('click', function () {
            console.log('Défilement vers la gauche');
            deepFilter.scrollBy({
                left: -150,
                behavior: 'smooth'
            });
        });

        rightArrow.addEventListener('click', () => {
            console.log('Défilement vers la droite');
            deepFilter.scrollBy({
                left: 150,
                behavior: 'smooth'
            });
        });
    }
});
