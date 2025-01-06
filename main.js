document.addEventListener('DOMContentLoaded', () => {
    // Animate banner image
    const bannerImg = document.querySelector('.banner-img');
    bannerImg.style.transition = 'transform 0.5s ease-in-out';
    setInterval(() => {
        bannerImg.style.transform = 'scale(1.1)';
        setTimeout(() => {
            bannerImg.style.transform = 'scale(1)';
        }, 250);
    }, 2000);

    // Hover animation for game images
    const gameImages = document.querySelectorAll('.game img');
    gameImages.forEach((img) => {
        img.addEventListener('mouseenter', () => {
            img.style.transition = 'transform 0.3s';
            img.style.transform = 'scale(1.05)';
        });
        img.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';
        });
    });

    // Animate download progress bar
    const progressBar = document.querySelector('.progress');
    let progress = 50; // Initial progress percentage

    const progressInterval = setInterval(() => {
        if (progress < 100) {
            progress += 1;
            progressBar.style.width = `${progress}%`;
        } else {
            clearInterval(progressInterval);
        }
    }, 100);
});