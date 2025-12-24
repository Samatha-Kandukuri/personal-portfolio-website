// Simple JavaScript for interaction

// Show alert when page loads
window.onload = function () {
    console.log("Portfolio website loaded successfully");
};

// Highlight section on click
const sections = document.querySelectorAll("section");

sections.forEach(section => {
    section.addEventListener("click", () => {
        section.style.border = "2px solid #2c3e50";
        setTimeout(() => {
            section.style.border = "none";
        }, 500);
    });
});
