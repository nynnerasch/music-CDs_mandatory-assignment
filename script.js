// Select necessary elements
const form = document.querySelector('form');
const cdList = document.getElementById('cd-list');

// Add event listener for the form submission
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting

    // Get values from form inputs
    const author = document.getElementById('author').value;
    const title = document.getElementById('title').value;
    const year = document.getElementById('year').value;

        // Create a new CD entry (group of elements)
        const authorEntry = document.createElement('p');
        const titleEntry = document.createElement('p');
        const yearEntry = document.createElement('p');
        const deleteButton = document.createElement('p');

        // Assign content to the created elements
        authorEntry.textContent = author;
        titleEntry.textContent = title;
        yearEntry.textContent = year;
        deleteButton.innerHTML = '🗑️';
        deleteButton.classList.add('delete-btn');

        // Append the entries to the cdList section
        cdList.appendChild(authorEntry);
        cdList.appendChild(titleEntry);
        cdList.appendChild(yearEntry);
        cdList.appendChild(deleteButton);

        // Clear form fields after submission
        form.reset();

        // Add delete functionality
        deleteButton.addEventListener('click', function () {
            // Remove all associated entries (author, title, year, and delete button)
            authorEntry.remove();
            titleEntry.remove();
            yearEntry.remove();
            deleteButton.remove();
        });
    }
);
