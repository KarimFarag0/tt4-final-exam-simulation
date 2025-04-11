<template>
  <div class="container mt-4">
    <h1 class="text-center mb-4 text-primary">Task List</h1>
    <button class="btn btn-success mb-3" @click="createTask">Create Task</button>
    <ul class="list-group">
      <li v-for="task in tasks" :key="task.id" class="list-group-item d-flex justify-content-between align-items-center">
        <div class="task-info">
          <h5 class="task-title">{{ task.title }}</h5>
          <p class="task-description">{{ task.description }}</p>
          <span :class="task.completed ? 'badge bg-success' : 'badge bg-danger'">
            {{ task.completed ? 'Completed' : 'Not Completed' }}
          </span>
        </div>
        <div class="task-actions">
          <button class="btn btn-warning btn-sm mx-1" @click="editTask(task.id)">
            <i class="bi bi-pencil-square"></i> Edit
          </button>
          <button class="btn btn-danger btn-sm mx-1" @click="deleteTask(task.id)">
            <i class="bi bi-trash"></i> Delete
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      tasks: []
    };
  },
  mounted() {
    this.fetchTasks();
  },
  methods: {
    fetchTasks() {
      axios.get('http://localhost:5186/api/tasks') // Adjust this URL to match your API
        .then(response => {
          this.tasks = response.data;
        })
        .catch(error => {
          console.error('There was an error fetching the tasks!', error);
        });
    },
    createTask() {
      // Navigate to a form to create a new task (we'll implement this later)
      this.$router.push('/create-task');
    },
    editTask(id) {
      // Navigate to a form to edit the selected task (we'll implement this later)
      this.$router.push(`/edit-task/${id}`);
    },
    deleteTask(id) {
      axios.delete(`http://localhost:5186/api/tasks/${id}`)
        .then(() => {
          this.fetchTasks(); // Re-fetch the tasks after deleting
        })
        .catch(error => {
          console.error('There was an error deleting the task!', error);
        });
    }
  }
};
</script>

<style scoped>
/* Task List Styling */
.task-title {
  font-size: 1.25rem;
  font-weight: bold;
}

.task-description {
  font-size: 1rem;
  color: #555;
  margin-bottom: 0.5rem;
}

.task-info {
  max-width: 80%;
}

.task-actions button {
  font-size: 0.875rem;
}

/* Add some space between the task and buttons */
.list-group-item {
  margin-bottom: 1rem;
  border-radius: 0.5rem;
}

.list-group-item:hover {
  background-color: #f1f1f1;
  transition: background-color 0.3s ease;
}

.text-primary {
  font-family: 'Roboto', sans-serif;
}

.btn-success {
  background-color: #28a745;
  border-color: #28a745;
}

.btn-success:hover {
  background-color: #218838;
  border-color: #1e7e34;
}

.btn-warning {
  background-color: #ffc107;
  border-color: #ffc107;
}

.btn-warning:hover {
  background-color: #e0a800;
  border-color: #d39e00;
}

.btn-danger {
  background-color: #dc3545;
  border-color: #dc3545;
}

.btn-danger:hover {
  background-color: #c82333;
  border-color: #bd2130;
}

/* Add some padding and margin to the container */
.container {
  padding-left: 2rem;
  padding-right: 2rem;
}

/* Responsive styling */
@media (max-width: 768px) {
  .task-info {
    max-width: 100%;
  }

  .task-actions {
    display: flex;
    justify-content: flex-start;
  }
}
</style>