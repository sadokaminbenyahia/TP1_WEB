function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

document.querySelector('ol').addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.style.color = getRandomColor();
    }
});
