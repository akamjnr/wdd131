// Set current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Set last modified date
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

// Lazy load with fade
const images = document.querySelectorAll('img[data-src]');

const loadImage = (img) => {
    if (!img.getAttribute('data-src')) return;
    img.src = img.getAttribute('data-src');
    img.onload = () => {
        img.removeAttribute('data-src');
        img.classList.add('fade-in');
    };
};

const options = {
    threshold: 0.1,
    rootMargin: "0px 0px 200px 0px"
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        loadImage(entry.target);
        observer.unobserve(entry.target);
    });
}, options);

images.forEach(img => observer.observe(img));
