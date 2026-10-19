const colors = ['blue','red','green','yellow','orange','purple','pink'];
const heading = document.getElementById('heading');
const button = document.getElementById('colorButton');
button.addEventListener('click', function() {const randomIndex = Math.floor(Math.random() * colors.length); heading.style.color = colors[randomIndex];});
