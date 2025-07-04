function next() {
    // Hole die aktuelle URL
    const currentUrl = window.location.href;

    // Extrahiere die aktuelle Zahl hinter "Reason"
    const currentNumber = parseInt(currentUrl.match(/Reason(\d+)\.html/)[1]);

    // Erhöhe die Zahl um 1
    const nextNumber = currentNumber + 1;

    // Erstelle die neue URL
    const nextUrl = currentUrl.replace(`Reason${currentNumber}.html`, `Reason${nextNumber}.html`);

    // Navigiere zur neuen Seite
    window.location.href = nextUrl;
}
const heart = document.getElementById('heart');

// Funktion, um das Herz an eine zufällige Position zu bewegen
function moveHeart() {
    heart.style.top = Math.random() * window.innerHeight + 'px';
    heart.style.left = Math.random() * window.innerWidth + 'px';
}

// Event-Listener für Maus und Touch
heart.addEventListener('mouseover', moveHeart); // Für Desktop
heart.addEventListener('touchstart', moveHeart); // Für Touchscreens