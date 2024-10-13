// Define a function to create mouse trails
function createTrail(x: number, y: number) {
    const trail = document.createElement('div');
    trail.className = 'trail';
    trail.style.width = '10px';
    trail.style.height = '10px';
    trail.style.backgroundColor = getRandomColor();
    trail.style.left = `${x}px`;
    trail.style.top = `${y}px`;
    document.body.appendChild(trail);

    // Fade out and remove the trail after a short time
    setTimeout(() => {
        trail.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(trail);
        }, 300);
    }, 50);
}

// Function to get a random color
function getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Add event listener for mouse movement
document.addEventListener('mousemove', (event: MouseEvent) => {
    createTrail(event.pageX, event.pageY);
});
