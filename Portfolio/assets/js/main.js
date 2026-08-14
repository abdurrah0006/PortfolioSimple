// Grab DOM elements safely
const menuIcon = document.querySelector('#menu-icon');
const navLink = document.querySelector('.nav-links');

// Toggle active toggle class definitions on trigger click
menuIcon.onclick = () => {
    navLink.classList.toggle('active');
    
    // Switch menu icons smoothly depending on viewport open states
    if (navLink.classList.contains('active')) {
        menuIcon.className = 'bx bx-x';
    } else {
        menuIcon.className = 'bx bx-menu';
    }
};

// Auto-close overlay sidebar navigation when a text menu entry targets navigation points
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLink.classList.remove('active');
        menuIcon.className = 'bx bx-menu';
    });
});