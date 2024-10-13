// Get reference to the document's body
const body = document.body;

// Set up variables to track the mouse position and rainbow hue
let mouseX = 0;
let mouseY = 0;
let hue = 0;

// Create the rainbow trail
function createTrail(x: number, y: number) {
  // Create a new div element for the trail
  const trail = document.createElement("div");
  trail.className = "trail";
  
  // Set its position to the mouse coordinates
  trail.style.left = `${x - 5}px`; // Adjust for center positioning
  trail.style.top = `${y - 5}px`;
  
  // Set the color using HSL to create a rainbow effect
  trail.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
  
  // Increment the hue for the rainbow effect
  hue = (hue + 10) % 360;
  
  // Append the trail element to the body
  body.appendChild(trail);
  
  // Set a timeout to remove the trail element after 500ms
  setTimeout(() => {
    trail.remove();
  }, 500);
}

// Track the mouse movement and create the trail
document.addEventListener("mousemove", (event: MouseEvent) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
  
  // Create the trail on each mouse move
  createTrail(mouseX, mouseY);
});
