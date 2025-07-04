function next() {
    const currentUrl = window.location.href;

    // Prüfe, ob du auf der index.html bist (oder auf der Startseite ohne Dateinamen)
    if (currentUrl.endsWith('index.html') || currentUrl.endsWith('/')) {
        window.location.href = 'Reason1.html';
        return;
    }

    // Versuche, die aktuelle Reason-Nummer zu extrahieren
    const match = currentUrl.match(/Reason(\d+)\.html/);
    if (match) {
        const currentNumber = parseInt(match[1]);
        const nextNumber = currentNumber + 1;
        const nextUrl = currentUrl.replace(`Reason${currentNumber}.html`, `Reason${nextNumber}.html`);
        window.location.href = nextUrl;
    }
}
function back() {
    const currentUrl = window.location.href;

    // Prüfe, ob du auf Reason1.html bist
    if (currentUrl.endsWith('Reason1.html')) {
        // Gehe zurück zur Startseite
        window.location.href = 'index.html';
        return;
    }

    // Versuche, die aktuelle Reason-Nummer zu extrahieren
    const match = currentUrl.match(/Reason(\d+)\.html/);
    if (match) {
        const currentNumber = parseInt(match[1]);
        const prevNumber = currentNumber - 1;
        const prevUrl = currentUrl.replace(`Reason${currentNumber}.html`, `Reason${prevNumber}.html`);
        window.location.href = prevUrl;
    }
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
