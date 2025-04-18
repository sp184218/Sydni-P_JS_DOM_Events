document.getElementById("title").innerText = "Text Changed via Console!";
// When the DOM is fully loaded, this will be fired
document.addEventListener("DOMContentLoaded", function() {
    // Get the element with an id of onload
    let onLoadEl = document.getElementById("onload");
    // Add some HTML within the element we grabbed
    onLoadEl.innerHTML = "<h1> I loaded cause the DOM was fully loaded</h1>";

    // Get the button by its ID
    let clickMeButton = document.getElementById("clickMe");
    // Add event listener to change the text when clicked
    clickMeButton.addEventListener("click", function() {
        clickMeButton.innerText = "You clicked me!";
    });
});

// Get the element that will show our key code
let directionEl = document.getElementById("direction");

// Can be changed with Key press or key up depending on what you might need
document.addEventListener("keydown", function(e) {
    // When a key is pressed, the element with the id of direction will show the message
    directionEl.innerText = `The Key you pressed is ${e.code}`;
});

// Function to generate a random hex color
function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Add event listener to change background color
document.getElementById("randomColorBtn").addEventListener("click", function() {
    document.body.style.backgroundColor = getRandomColor();
});

// Function to toggle button glow effect
function changeBtnStyle() {
    const btn = document.querySelector(".cool-btn");
    btn.classList.toggle("glow"); // Toggles the glow effect
}
document.getElementById("darkModeBtn").addEventListener("click", function() {
    let body = document.body;

    if (body.style.backgroundColor === "rgb(18, 18, 18)") {
        // Switch to light mode
        body.style.backgroundColor = "white";
        body.style.color = "black";
    } else {
        // Switch to dark mode
        body.style.backgroundColor = "#121212";
        body.style.color = "white";
    }
});
