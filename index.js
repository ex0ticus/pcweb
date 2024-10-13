// Get reference to the document's body
var body = document.body;
// Set up variables to track the mouse position and rainbow hue
var mouseX = 0;
var mouseY = 0;
var hue = 0;
// Create the rainbow trail
function createTrail(x, y) {
    // Create a new div element for the trail
    var trail = document.createElement("div");
    trail.className = "trail";
    // Set its position to the mouse coordinates
    trail.style.left = "".concat(x - 5, "px"); // Adjust for center positioning
    trail.style.top = "".concat(y - 5, "px");
    // Set the color using HSL to create a rainbow effect
    trail.style.backgroundColor = "hsl(".concat(hue, ", 100%, 50%)");
    // Increment the hue for the rainbow effect
    hue = (hue + 10) % 360;
    // Append the trail element to the body
    body.appendChild(trail);
    // Set a timeout to remove the trail element after 500ms
    setTimeout(function () {
        trail.remove();
    }, 500);
}
// Track the mouse movement and create the trail
document.addEventListener("mousemove", function (event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
    // Create the trail on each mouse move
    createTrail(mouseX, mouseY);
});
