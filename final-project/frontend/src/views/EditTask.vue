<template>
    <div class="container mt-4">
      <h2>Edit Task</h2>
      <form @submit.prevent="updateTask">
        <div class="form-group">
          <label>Title</label>
          <input class="form-control" v-model="task.title" required>
        </div>
        <div class="form-group">
          <label>Description</label>
          <textarea class="form-control" v-model="task.description" required></textarea>
        </div>
        <div class="form-group form-check">
          <input class="form-check-input" type="checkbox" v-model="task.completed" />
          <label class="form-check-label">Completed</label>
        </div>
        <button class="btn btn-primary">Update</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        task: {
          title: '',
          description: '',
          completed: false
        }
      };
    },
    mounted() {
      axios.get(`http://localhost:5000/api/tasks/${this.$route.params.id}`)
        .then(response => {
          this.task = response.data;
        });
    },
    methods: {
      updateTask() {
        axios.put(`http://localhost:5000/api/tasks/${this.$route.params.id}`, this.task)
          .then(() => {
            this.$router.push('/');
          });
      }
    }
  };
  </script>