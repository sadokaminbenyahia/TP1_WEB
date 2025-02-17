
const fonts = [
    'Arial', 
    'Verdana', 
    'Helvetica', 
    'Times New Roman', 
    'Courier New', 
    'Georgia'
];


function initialize() {
    populateFonts();
    setupEventListeners();
}


function populateFonts() {
    const fontSelect = document.getElementById('fontFamily');
    fonts.forEach(font => {
        const option = document.createElement('option');
        option.value = font;
        option.textContent = font;
        fontSelect.appendChild(option);
    });
}

function setupEventListeners() {
    const controls = document.querySelectorAll('.controls input, .controls select');
    controls.forEach(control => {
        control.addEventListener('input', handleStyleUpdate);
    });
}


function handleStyleUpdate(e) {
    const element = document.getElementById('editableText');
    const property = e.target.dataset.style;
    const value = getFormattedValue(property, e.target.value);
    
    element.style[property] = value;
}

function getFormattedValue(property, value) {
    if (property === 'fontSize') return `${value}px`;
    if (property === 'fontFamily') return `"${value}"`;
    return value;
}

// Démarrer l'application
initialize();
