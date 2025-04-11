<template>
    <div class="container mt-4">
      <h1>Task List</h1>
      <button class="btn btn-primary mb-3" @click="createTask">Create Task</button>
      <ul class="list-group">
        <li v-for="task in tasks" :key="task.id" class="list-group-item">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <strong>{{ task.title }}</strong>
              <p>{{ task.description }}</p>
              <span :class="task.completed ? 'text-success' : 'text-danger'">
                {{ task.completed ? 'Completed' : 'Not Completed' }}
              </span>
            </div>
            <div>
              <button class="btn btn-warning btn-sm" @click="editTask(task.id)">Edit</button>
              <button class="btn btn-danger btn-sm" @click="deleteTask(task.id)">Delete</button>
            </div>
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
        axios.get('http://localhost:5000/api/tasks') // Adjust this URL to match your API
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
        axios.delete(`http://localhost:5000/api/tasks/${id}`)
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