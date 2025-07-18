// Get the button and message elements
const colorButton = document.getElementById('colorButton');
const message = document.getElementById('message');

// Function to change background color
function changeBackgroundColor() {
    const colors = ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0', '#9966ff'];
    // Randomly select a color from the array
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;

    // Display a message
    message.textContent = `Background color changed to ${randomColor}`;
}

// Add click event listener to the button
colorButton.addEventListener('click', changeBackgroundColor);
