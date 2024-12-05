// Replay Video and Navigate to Home Page
const video = document.getElementById('title-video');

// Check if the user is visiting for the first time
if (!localStorage.getItem('hasVisited')) {
    // If first time, play the video
    video.currentTime = 0; // Start from the beginning
    video.play();

    // Set a flag in localStorage
    localStorage.setItem('hasVisited', 'true');
} else {
    // Skip the video and show the home section
    video.currentTime = video.duration; // Move to the end of the video
    video.pause();
    document.getElementById('video-section').style.display = 'none'; // Optionally hide video
}

// Pause the video after it ends
video.addEventListener('ended', () => {
    video.pause();
});

// Replay the video when clicked and redirect to the home section
video.addEventListener('click', () => {
    video.currentTime = 0; // Start from the beginning
    video.play();

    // Redirect to Home Section
    window.location.href = "#home";
});

// Smooth Scrolling for Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
