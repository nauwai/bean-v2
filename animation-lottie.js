window.onload = () => {
    const animation = lottie.loadAnimation({
        container: document.getElementById('animation-container'), 
        renderer: 'svg',
        loop: false, 
        autoplay: true,
        path: 'assets/json/bean-animate.json', 
    });


    animation.addEventListener('complete', () => {
        const overlay = document.getElementById('animation-overlay');
        overlay.style.opacity = '0'; 
        setTimeout(() => {
            overlay.style.display = 'none'; 
        }, 500); 
    });
};
