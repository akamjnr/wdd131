// Set current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Set last modified date
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

const temp = 10; // °C
const wind = 5; // km/h

function calculateWindChill(t, v) {
    return (
        13.12 +
        0.6215 * t -
        11.37 * Math.pow(v, 0.16) +
        0.3965 * t * Math.pow(v, 0.16)
    ).toFixed(1);
}

function displayWindChill() {
    const chill = document.getElementById("chill");

    if (temp <= 10 && wind > 4.8) {
        chill.textContent = `${calculateWindChill(temp, wind)} °C`;
    } else {
        chill.textContent = "N/A";
    }
}

document.addEventListener("DOMContentLoaded", displayWindChill);
