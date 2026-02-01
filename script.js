function startConfetti() {
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = '-10vh';
        heart.style.fontSize = Math.random() * 20 + 10 + 'px';
        heart.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
        document.body.appendChild(heart);
    }
}

// Add this to your style.css for the animation
/*
@keyframes fall {
    to {
        transform: translateY(110vh);
    }
}
*/
