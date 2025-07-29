document.addEventListener("DOMContentLoaded", () => {
    // Select DOM elements
    const input = document.querySelector("#favchap");
    const button = document.querySelector("button");
    const list = document.querySelector("#list");

    // Initialize chapters array from localStorage
    let chaptersArray = getChapterList() || [];

    // Display any existing chapters from localStorage
    chaptersArray.forEach(chapter => {
        displayList(chapter);
    });

    // Button click event handler
    button.addEventListener("click", () => {
        if (input.value !== '') {
            displayList(input.value);
            chaptersArray.push(input.value);
            setChapterList();
            input.value = '';
            input.focus();
        }
    });

    // Function to display a chapter item in the list
    function displayList(item) {
        const li = document.createElement("li");
        const deleteButton = document.createElement("button");

        li.textContent = item;
        deleteButton.textContent = "❌";
        deleteButton.classList.add("delete");
        deleteButton.setAttribute("aria-label", `Remove ${item}`);

        // Add delete functionality
        deleteButton.addEventListener("click", function () {
            list.removeChild(li);
            deleteChapter(li.textContent);
            input.focus();
        });

        li.appendChild(deleteButton);
        list.appendChild(li);
    }

    // Function to save the chapters array to localStorage
    function setChapterList() {
        localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
    }

    // Function to retrieve the chapters array from localStorage
    function getChapterList() {
        return JSON.parse(localStorage.getItem("myFavBOMList"));
    }

    // Function to delete a chapter from the array and update localStorage
    function deleteChapter(chapter) {
        chapter = chapter.slice(0, chapter.length - 1); // Remove ❌ from end
        chaptersArray = chaptersArray.filter(item => item !== chapter); // Remove from array
        setChapterList(); // Save updated array to localStorage
    }
});
