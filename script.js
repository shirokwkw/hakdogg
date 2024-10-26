document.addEventListener("DOMContentLoaded", function() {
    const noButton = document.getElementById("no");

    noButton.addEventListener("click", function() {
        // Generate random position
        const container = document.querySelector('.container');
        const containerRect = container.getBoundingClientRect();
        const buttonRect = noButton.getBoundingClientRect();

        // Calculate random position within the container
        const maxX = containerRect.width - buttonRect.width;
        const maxY = containerRect.height - buttonRect.height;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        // Set the new position
        noButton.style.position = 'absolute';
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    });
});
