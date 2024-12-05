// Get the video element
const video = document.getElementById('title-video');

// Ensure the video always starts playing when the page loads
window.addEventListener('load', () => {
    video.currentTime = 0; // Start from the beginning
    video.play(); // Play the video
});

// Pause the video when it ends
video.addEventListener('ended', () => {
    video.pause();
});

// Replay the video when clicked and redirect to the home section
video.addEventListener('click', () => {
    video.currentTime = 0; // Start from the beginning
    video.play();
    window.location.href = "#home"; // Redirect to the home section
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
        });
    });
});
