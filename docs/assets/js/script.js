document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    const revealSections = () => {
        sections.forEach(sec => {
            let pos = sec.getBoundingClientRect().top;
            let winHeight = window.innerHeight;
            if (pos < winHeight - 100) {
                sec.style.opacity = "1";
                sec.style.transform = "translateY(0)";
            }
        });
    };

    window.addEventListener("scroll", revealSections);
    revealSections();

    document.addEventListener("DOMContentLoaded", function() {
        const timelineItems = document.querySelectorAll(".timeline-item");

        timelineItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = "1";
                item.style.transform = "translateX(0)";
            }, index * 300);
        });
    });

    // New functionality for the contact form submission and confirmation
    const form = document.getElementById('contactForm');
    const confirmationMessage = document.getElementById('confirmationMessage');
    
    // Prevent form submission and display the confirmation message
    form.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent the form from actually submitting
        
        // Hide the form and show the confirmation message
        form.style.display = 'none';
        confirmationMessage.style.display = 'block';
    });
});