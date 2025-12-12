// Mobile Menu Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Redirect #purchase link to scroll to #download
const purchaseLink = document.querySelector('a[href="#purchase"]');

if (purchaseLink) {
    purchaseLink.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent jumping to #purchase in URL
        document.querySelector('#download').scrollIntoView({
            behavior: 'smooth'
        });

        // Optional: Update URL to keep #purchase visible
        history.replaceState(null, null, '#purchase');
    });
}
