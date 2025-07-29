document.addEventListener("DOMContentLoaded", () => {
    // Set current year
    const currentYearSpan = document.getElementById("currentyear");
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Set last modified
    const lastModified = document.getElementById("lastModified");
    if (lastModified) {
        lastModified.textContent = `Last Modified: ${document.lastModified}`;
    }

    // Populate product select dropdown
    const productSelect = document.getElementById("productName");
    if (productSelect) {
        const products = [
            { id: "fc-1888", name: "Flux Capacitor" },
            { id: "fc-2050", name: "Power Laces" },
            { id: "fs-1987", name: "Time Circuits" },
            { id: "ac-2000", name: "Low Voltage Reactor" },
            { id: "jj-1969", name: "Warp Equalizer" }
        ];

        products.forEach(product => {
            const option = document.createElement("option");
            option.value = product.id;
            option.textContent = product.name;
            productSelect.appendChild(option);
        });
    }

    // Display review count on review.html
    const reviewCountPara = document.getElementById("reviewCount");
    if (reviewCountPara) {
        const countKey = "reviewSubmissionCount";
        let count = localStorage.getItem(countKey);

        if (!count) {
            count = 1;
        } else {
            count = parseInt(count, 10) + 1;
        }

        localStorage.setItem(countKey, count);
        reviewCountPara.textContent = `You have submitted ${count} review${count > 1 ? "s" : ""}.`;
    }
});
