document.addEventListener('DOMContentLoaded', function() {
    // document.getElementById("music").play();
    setTimeout(function() {
        document.getElementById('card').classList.add('show');
        setTimeout(startFireworks, 200);
    }, 300);
});

function getrandom(max, min) {
    return parseInt(Math.random() * max - min + 1) + min;
}

function startFireworks() {
    const container = document.querySelector('.fireworks-container');
    const numberOfParticles = 50;

    for (let i = 0; i < numberOfParticles; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        // Randomize position
        particle.style.backgroundColor = ["green", "teal", "cyan", "blue", "red", "cyan", "pink"][getrandom(0, 6)]
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = Math.random() * 100 + 'vh';
        container.appendChild(particle);
    }
}
