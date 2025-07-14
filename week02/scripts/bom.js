document.addEventListener("DOMContentLoaded", () => {
    // Select elements
    const input = document.querySelector("#favchap");
    const button = document.querySelector("button");
    const list = document.querySelector("#list");

    // Event listener for the "Add Chapter" button
    button.addEventListener("click", () => {
        const chapter = input.value.trim();

        if (chapter !== "") {
            const li = document.createElement("li");
            const deleteButton = document.createElement("button");

            // Populate list item
            li.textContent = chapter;

            // Create and configure delete button
            deleteButton.textContent = "❌";
            deleteButton.setAttribute("aria-label", `Remove ${chapter}`);

            // Add delete functionality
            deleteButton.addEventListener("click", () => {
                list.removeChild(li);
                input.focus();
            });

            // Append button to li, and li to list
            li.appendChild(deleteButton);
            list.appendChild(li);

            // Clear input and refocus
            input.value = "";
        }

        input.focus();
    });
});
  