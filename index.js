document.addEventListener('DOMContentLoaded', function() {
    const input = document.querySelector(".nameInput");
    const button = document.querySelector(".button");
    const photo = document.querySelector(".photo");

    button.addEventListener("click", () => {
        const inputValue = input.value.toLowerCase();

        if (inputValue === 'tanjal') {
            // Create a video element
            const video = document.createElement('video');
            video.src = 'tanjal.mp4'; // Replace with the path to your video
            video.controls = true;
            video.autoplay = true;

            // Set dimensions for the video
            video.style.width = '100%'; // You can adjust this value
            video.style.height = '100%'; // You can adjust this value

            // Remove any existing content in the photo div
            photo.innerHTML = '';

            // Append the video element to the photo div
            photo.appendChild(video);
        } else {
            // Reset the content of the photo if the input is not 'tanjal'
            photo.innerHTML = 'please type your correct name';
        }
    });
});
