document.addEventListener("DOMContentLoaded", function () {
    const observerOptions = {
        root: null, // viewport
        rootMargin: "0px",
        threshold: 0.1 // Trigger when 10% of the card is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
                if (entry.target.classList.contains('skill-card')) {
                    entry.target.classList.add("animate");
                } else {
                    entry.target.classList.add("animate-intro");
                }
                observer.unobserve(entry.target); // Run animation only once
            }
        });
    }, observerOptions);

    const cards = document.querySelectorAll(".skill-card");
    cards.forEach((card) => {
        observer.observe(card);
    });

    // Observe Intro Elements
    const introItems = document.querySelectorAll(".audience-card, .feature-item");
    introItems.forEach((item) => {
        observer.observe(item);
    });
});
