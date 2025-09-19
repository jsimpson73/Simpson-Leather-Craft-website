document.addEventListener("DOMContentLoaded", function() {
    const videoItems = document.querySelectorAll('.video-item');
    const baseDelay = 0.2; // seconds between each animation

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                const index = Array.from(videoItems).indexOf(entry.target);
                entry.target.style.setProperty('--delay', `${index * baseDelay}s`);
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // animate once
            }
        });
    }, { threshold: 0.2 });

    videoItems.forEach(item => observer.observe(item));
});
