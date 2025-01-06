// Function to check if an element is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add animation classes when the element is in the viewport
function animateOnScroll() {
    const heroSection = document.querySelector('.hero');
    const categoriesSection = document.querySelector('.categories');
    const sinceContainer = document.querySelector('.since-container');
    
    // Text elements for Welcome and Since
    const welcomeText = document.querySelector('.hero-title');
    const sinceText = document.querySelector('.since-container');
    
    // Check if the hero section is in the viewport
    if (isElementInViewport(heroSection)) {
        heroSection.classList.add('fadeInUp'); // Trigger animation for the entire hero section
    }

    // Check if the welcome text is in the viewport
    if (isElementInViewport(welcomeText)) {
        welcomeText.classList.add('fadeIn'); // Trigger animation for the "Welcome" text
    }

    // Check if the since text is in the viewport
    if (isElementInViewport(sinceText)) {
        sinceText.classList.add('fadeInLeft'); // Trigger animation for "Since" text
    }

    // Check if the categories section is in the viewport
    if (isElementInViewport(categoriesSection)) {
        categoriesSection.classList.add('fadeIn'); // Trigger animation for categories section
        const categoryItems = categoriesSection.querySelectorAll('li');
        categoryItems.forEach((item, index) => {
            // Add specific class for category items with a delay
            setTimeout(() => {
                item.classList.add('category-slide');
            }, index * 200); // Delay each animation slightly
        });
    }

    // Check if the since-container section is in the viewport
    if (isElementInViewport(sinceContainer)) {
        sinceContainer.classList.add('slideInLeft'); // Trigger animation for since-container
    }
}

// Add event listener for scroll event
window.addEventListener('scroll', animateOnScroll);

// Call function to check for initial state on page load
document.addEventListener('DOMContentLoaded', animateOnScroll);

// Get the video element
const video = document.getElementById('title-video');

// Ensure the video always starts playing when the page loads
window.addEventListener('load', () => {
    video.currentTime = 0; // Start from the beginning
    video.play(); // Play the video
});

// Replay the video when clicked and redirect to the home section
video.addEventListener('click', () => {
    video.currentTime = 0; // Restart the video
    video.play();
    window.location.href = "#home"; // Redirect to the home section
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth', // Smooth scroll
            block: 'start',
        });
    });
});

// Animation for sections as they scroll into view
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Add the visible class when in view
        } else {
            entry.target.classList.remove('visible'); // Remove it when out of view
        }
    });
}, {
    threshold: 0.1, // Trigger animation when 10% of the section is visible
});

// Observe each section
sections.forEach(section => observer.observe(section));

// Smooth fade-in effect on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.scrolling-section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
});
