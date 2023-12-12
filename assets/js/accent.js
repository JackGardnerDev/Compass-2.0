// Function to set a new value for --clr-accent and save it to local storage
function setAccentColor(newColor) {
    document.documentElement.style.setProperty('--clr-accent', newColor);
    localStorage.setItem('accentColor', newColor);

    // Update the value attribute of the color picker input
    document.getElementById('colorPicker').value = newColor;

    // If in dark mode, update the color picker styles explicitly
    if (document.body.classList.contains('darkmode')) {
        document.getElementById('colorPicker').style.backgroundColor = newColor;
        document.getElementById('colorPicker').style.color = 'white';
    }
}

// Function to handle color picker change
function handleColorPickerChange(event) {
    const newColor = event.target.value;
    setAccentColor(newColor);
}

// Add event listener for color picker change
document.getElementById('colorPicker').addEventListener('input', handleColorPickerChange);

// Function to retrieve saved accent color from local storage
function retrieveAccentColor() {
    const savedColor = localStorage.getItem('accentColor');
    if (savedColor) {
        setAccentColor(savedColor);
    }
}

// Call the function to retrieve and apply the saved accent color
retrieveAccentColor();