// Set current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Set last modified date
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

// Hamburger menu toggle
const toggleButton = document.getElementById("menu-toggle");
const navMenu = document.querySelector(".navigation");

toggleButton.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    toggleButton.innerHTML = navMenu.classList.contains("show") ? "&#10006;" : "&#9776;";
});

// Temple Data
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Bern Switzerland",
        location: "Bern, Switzerland",
        dedicated: "1955, September, 11",
        area: 12500,
        imageUrl: "images/temples/bern-switzerland.webp"
    },
    {
        templeName: "San Diego California",
        location: "San Diego, California, United States",
        dedicated: "1993, April, 25",
        area: 52000,
        imageUrl: "images/temples/san-diego-california.webp"
    },
    {
        templeName: "Durban South Africa",
        location: "Durban, South Africa",
        dedicated: "2023, May, 7",
        area: 8000,
        imageUrl: "images/temples/durban-south-africa.webp"
    },
    {
        templeName: "Hamilton New Zealand",
        location: "Hamilton, New Zealand",
        dedicated: "2019, October, 20",
        area: 13000,
        imageUrl: "images/temples/hamilton-new-zealand.webp"
    },
    {
        templeName: "Salt Lake City",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253015,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-44913.jpg"
    }
];

// Render Function
function renderTemples(filteredTemples) {
    const container = document.getElementById("temples-container");
    container.innerHTML = "";

    filteredTemples.forEach((temple) => {
        const figure = document.createElement("figure");

        figure.innerHTML = `
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
      <figcaption>
        <strong>${temple.templeName}</strong><br>
        Location: ${temple.location}<br>
        Dedicated: ${temple.dedicated}<br>
        Area: ${temple.area.toLocaleString()} sq ft
      </figcaption>
    `;

        container.appendChild(figure);
    });
}

// Initial render
renderTemples(temples);

// Filter Menu Navigation
document.querySelectorAll(".navigation li a").forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const filter = link.textContent;

        let filteredTemples;

        switch (filter) {
            case "Old":
                filteredTemples = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
                break;
            case "New":
                filteredTemples = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
                break;
            case "Large":
                filteredTemples = temples.filter(t => t.area > 90000);
                break;
            case "Small":
                filteredTemples = temples.filter(t => t.area < 10000);
                break;
            default:
                filteredTemples = temples;
        }

        document.querySelector("h1").textContent = filter;
        renderTemples(filteredTemples);
    });
});
