let tasks = [];
let taskId = 1;

function showMenu() {
    let choice;
    do {
        choice = prompt(
            "Task Manager Menu:\n" +
            "1. Add a task\n" +
            "2. View all tasks\n" +
            "3. Toggle task completion\n" +
            "4. Update a task description\n" +
            "5. Remove a task\n" +
            "6. Search tasks by name\n" +
            "7. Exit\n" +
            "Enter your choice (1-7):"
        );

        switch (choice) {
            case '1':
                addTask();
                break;
            case '2':
                viewTasks();
                break;
            case '3':
                toggleTaskCompletion();
                break;
            case '4':
                updateTaskDescription();
                break;
            case '5':
                removeTask();
                break;
            case '6':
                searchTasks();
                break;
            case '7':
                alert("Exiting Task Manager.");
                console.log("Exiting Task Manager.");
                break;
            default:
                alert("Invalid choice. Please try again.");
                console.log("Invalid choice. Please try again.");
        }
    } while (choice !== '7');
}

function addTask() {
    const taskDescription = prompt("Enter the task description:");
    if (taskDescription) {
        tasks.push({ id: taskId++, description: taskDescription, completed: false });
        alert("Task added successfully.");
        console.log("Task added successfully.");
    } else {
        alert("Task description cannot be empty.");
        console.log("Task description cannot be empty.");
    }
}

function viewTasks() {
    if (tasks.length === 0) {
        alert("No tasks available.");
        console.log("No tasks available.");
    } else {
        let taskList = tasks.map(task => {
            return `ID: ${task.id}, Description: ${task.description}, Completed: ${task.completed}`;
        }).join('\n');
        alert("Tasks:\n" + taskList);
        console.log("Tasks:\n" + taskList);
    }
}

function toggleTaskCompletion() {
    const id = parseInt(prompt("Enter the task ID to toggle completion status:"));
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.completed = !task.completed;
        alert(`Task ID: ${task.id} is now ${task.completed ? "completed" : "incomplete"}.`);
        console.log(`Task ID: ${task.id} is now ${task.completed ? "completed" : "incomplete"}.`);
    } else {
        alert("Task not found.");
        console.log("Task not found.");
    }
}

function updateTaskDescription() {
    const id = parseInt(prompt("Enter the task ID to update description:"));
    const task = tasks.find(task => task.id === id);
    if (task) {
        const newDescription = prompt("Enter the new task description:", task.description);
        if (newDescription) {
            task.description = newDescription;
            alert("Task description updated successfully.");
            console.log("Task description updated successfully.");
        } else {
            alert("Task description cannot be empty.");
            console.log("Task description cannot be empty.");
        }
    } else {
        alert("Task not found.");
        console.log("Task not found.");
    }
}

function removeTask() {
    const id = parseInt(prompt("Enter the task ID to remove:"));
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        alert("Task removed successfully.");
        console.log("Task removed successfully.");
    } else {
        alert("Task not found.");
        console.log("Task not found.");
    }
}

function searchTasks() {
    const searchTerm = prompt("Enter the task name to search for:");
    const results = tasks.filter(task => task.description.includes(searchTerm));
    if (results.length > 0) {
        let searchResults = results.map(task => {
            return `ID: ${task.id}, Description: ${task.description}, Completed: ${task.completed}`;
        }).join('\n');
        alert("Search Results:\n" + searchResults);
        console.log("Search Results:\n" + searchResults);
    } else {
        alert("No tasks match your search.");
        console.log("No tasks match your search.");
    }
}


showMenu();
