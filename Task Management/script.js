// Function to handle form submission (user registration)
document.getElementById('registration-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form data
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simulate sending registration data to server
    // Replace this with your actual server-side registration logic
    const registrationData = {
        username: username,
        email: email,
        password: password
    };

    // Simulate a successful registration response
    // You'll need to replace this with your actual server response handling
    const successResponse = {
        success: true,
        message: 'Registration successful!'
    };

    // Handle the response from the server
    if (successResponse.success) {
        alert(successResponse.message); // Display success message
        // Hide the registration form and show the dashboard or other sections
        document.getElementById('user-registration').style.display = 'none';
        document.getElementById('dashboard-section').style.display = 'block'; // Show the dashboard
        document.getElementById('tasks-section').style.display = 'none'; // Hide tasks
        document.getElementById('calendar-section').style.display = 'none'; // Hide calendar

        // Enable navigation links
        enableNavigationLinks();
    } else {
        alert('Registration failed. Please try again.'); // Display error message
    }
});

// Function to enable navigation links
function enableNavigationLinks() {
    const dashboardLink = document.getElementById('dashboard-link');
    const tasksLink = document.getElementById('tasks-link');
    const calendarLink = document.getElementById('calendar-link');

    dashboardLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior
        document.getElementById('dashboard-section').style.display = 'block'; // Show dashboard section
        document.getElementById('tasks-section').style.display = 'none'; // Hide tasks section
        document.getElementById('calendar-section').style.display = 'none'; // Hide calendar section
    });

    tasksLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior
        document.getElementById('dashboard-section').style.display = 'none'; // Hide dashboard section
        document.getElementById('tasks-section').style.display = 'block'; // Show tasks section
        document.getElementById('calendar-section').style.display = 'none'; // Hide calendar section
    });

    calendarLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior
        document.getElementById('dashboard-section').style.display = 'none'; // Hide dashboard section
        document.getElementById('tasks-section').style.display = 'none'; // Hide tasks section
        document.getElementById('calendar-section').style.display = 'block'; // Show calendar section
    });
}

// Function to add a new task
function addTask(title, description, priority) {
    // Create task element
    const taskElement = document.createElement('li');
    taskElement.classList.add('task');
    taskElement.classList.add(priority); // Add priority class to task

    // Construct task HTML
    taskElement.innerHTML = `
        <h3 class="task-title">${title}</h3>
        <p class="task-description">${description}</p>
        <button class="view-details-btn">View Details</button>
    `;

    // Add event listener for viewing task details
    taskElement.querySelector('.view-details-btn').addEventListener('click', function () {
        displayTaskDetails(taskElement);
    });

    // Add task element to the task list
    document.getElementById('tasks').appendChild(taskElement);
}

// Function to display task details
function displayTaskDetails(taskElement) {
    // Get task details
    const title = taskElement.querySelector('.task-title').textContent;
    const description = taskElement.querySelector('.task-description').textContent;

    // Display task details in modal
    const modal = document.getElementById('task-details-modal');
    const modalContent = modal.querySelector('.modal-content');
    const taskDetails = `
        <h2>${title}</h2>
        <p>${description}</p>
    `;
    modalContent.innerHTML = taskDetails;

    // Show modal
    modal.style.display = 'block';

    // Close modal when clicking outside of it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    // Close modal when clicking the close button
    const closeButton = modal.querySelector('.close');
    closeButton.onclick = function () {
        modal.style.display = 'none';
    }
}

// Function to filter tasks by priority
function filterTasks(priority) {
    const tasks = document.querySelectorAll('.task');
    tasks.forEach(task => {
        if (priority === 'all' || task.classList.contains(priority)) {
            task.style.display = 'block'; // Show task if priority matches or 'all' is selected
        } else {
            task.style.display = 'none'; // Hide task if priority doesn't match
        }
    });
}

// Event listener for filter select change
document.getElementById('filter-by-priority').addEventListener('change', function (event) {
    const selectedPriority = event.target.value;
    filterTasks(selectedPriority);
});

// Function to handle form submission (add task)
document.getElementById('task-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const title = document.getElementById('task-title').value;
    const description = document.getElementById('task-description').value;
    const priority = document.getElementById('task-priority').value; // Get priority value

    addTask(title, description, priority);

    // Clear form fields after adding task
    document.getElementById('task-title').value = '';
    document.getElementById('task-description').value = '';
});

// Show task form when clicking the button
document.getElementById('show-task-form-btn').addEventListener('click', function () {
    document.getElementById('task-form').style.display = 'block';
    document.getElementById('show-task-form-btn').style.display = 'none'; // Hide the button
});

// Disable navigation links initially
document.getElementById('dashboard-link').addEventListener('click', function (event) {
    event.preventDefault();
});
document.getElementById('tasks-link').addEventListener('click', function (event) {
    event.preventDefault();
});
document.getElementById('calendar-link').addEventListener('click', function (event) {
    event.preventDefault();
});
