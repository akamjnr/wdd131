const qs = (s) => document.querySelector(s);
const qsa = (s) => Array.from(document.querySelectorAll(s));

// Set current year
const yearSpan = qs("#currentyear");
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

// Last modified (if available)
const lastModifiedP = qs("#lastModified");
if (lastModifiedP && document.lastModified) {
    lastModifiedP.textContent = "Last Modified: " + document.lastModified;
}

// Menu Toggle (mobile)
const menuToggle = qs("#menu-toggle");
const navMenu = qs("#nav-menu");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        const isShown = navMenu.classList.toggle("show");
        menuToggle.setAttribute("aria-expanded", isShown ? "true" : "false");
    });
}


window.addEventListener("resize", () => {
    if (window.innerWidth >= 768 && navMenu.classList.contains("show")) {
        navMenu.classList.remove("show");
        menuToggle.setAttribute("aria-expanded", "false");
    }
});


const navLinks = qsa(".nav-link");
let currentPage = location.pathname.split("/").pop();
if (!currentPage || currentPage === "") currentPage = "index.html";
navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (!href) return;
    const hrefFile = href.split("/").pop();
    if (hrefFile === currentPage || (hrefFile === "index.html" && currentPage === "index.html")) {
        link.classList.add("active");
    }
});


const allAttractions = [
    {
        name: "Table Mountain",
        description: "Iconic flat-topped mountain with panoramic views over Cape Town and the Atlantic seaboard.",
        img: "images/table-mountain.jpg",
        alt: "Table Mountain",
    },
    {
        name: "V&A Waterfront",
        description: "Harbourfront with shops, restaurants, museums and boat tours.",
        img: "images/va-waterfront.jpg",
        alt: "V&A Waterfront",
    },
    {
        name: "Chapman's Peak Drive",
        description: "Scenic coastal drive with stunning viewpoints and photo stops.",
        img: "images/chapmans-peak.jpg",
        alt: "Chapman's Peak Drive",
    },
    {
        name: "Kirstenbosch Botanical Garden",
        description: "World-class botanical garden set against the eastern slopes of Table Mountain.",
        img: "images/kirstenbosch.jpg",
        alt: "Kirstenbosch Botanical Garden",
    },
    {
        name: "Cape Point",
        description: "Dramatic cliffs and walking trails at the southwestern tip of the Cape Peninsula.",
        img: "images/cape-point.jpg",
        alt: "Cape Point",
    },
    {
        name: "Robben Island",
        description: "Historical island and museum where Nelson Mandela was imprisoned; guided tours available.",
        img: "images/robben-island.jpg",
        alt: "Robben Island",
    },
    {
        name: "Boulders Beach",
        description: "Beach famous for its African penguin colony and sheltered sandy coves.",
        img: "images/boulders-beach.jpg",
        alt: "Boulders Beach",
    },
    {
        name: "Atlantic Seaboard",
        description: "Coastal route including Clifton and Camps Bay with famous beaches and seaside promenades.",
        img: "images/atlantic-seaboard.jpg",
        alt: "Atlantic Seaboard",
    },
    {
        name: "Two Oceans Aquarium",
        description: "Explore life from the Atlantic and Indian Oceans — interactive exhibits, touch pools, and colourful marine displays ideal for all ages.",
        img: "images/two-oceans-aquarium.jpg",
        alt: "Two Oceans Aquarium"
    }
];

const attractionsList = qs("#attractions-page-list");
if (attractionsList) {
    attractionsList.innerHTML = "";
    allAttractions.forEach(attraction => {
        const card = document.createElement("article");
        card.className = "card";
        card.innerHTML = `
      <img src="${attraction.img}" alt="${attraction.alt}" loading="lazy" />
      <h3>${attraction.name}</h3>
      <p>${attraction.description}</p>
    `;
        attractionsList.appendChild(card);
    });
}

// Contact form (client-side handling)
const contactForm = qs("#contact-form");
const formMessage = qs("#form-message");

if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const nameEl = qs("#name");
        const emailEl = qs("#email");
        const name = nameEl ? nameEl.value.trim() : "";
        const email = emailEl ? emailEl.value.trim() : "";

        if (!name || !email) {
            if (formMessage) {
                formMessage.textContent = "Please fill in required fields.";
                formMessage.style.color = "crimson";
            }
            return;
        }

        if (formMessage) {
            formMessage.textContent = `Thanks, ${name}! We'll send tips to ${email}.`;
            formMessage.style.color = "green";
        }
        contactForm.reset();
    });
}
