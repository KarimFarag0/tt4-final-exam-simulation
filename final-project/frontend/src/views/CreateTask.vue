<template>
  <div class="container mt-5">
    <div class="card shadow-sm p-4">
      <h2 class="mb-4 text-center text-success">Create New Task</h2>
      <form @submit.prevent="submitTask">
        <div class="form-group mb-3">
          <label class="form-label">Title</label>
          <input type="text" class="form-control" v-model="task.title" required />
        </div>
        <div class="form-group mb-3">
          <label class="form-label">Description</label>
          <textarea class="form-control" rows="4" v-model="task.description" required></textarea>
        </div>
        <div class="form-check mb-4">
          <input type="checkbox" class="form-check-input" v-model="task.completed" id="completedCheck" />
          <label class="form-check-label" for="completedCheck">Completed</label>
        </div>
        <div class="d-grid">
          <button type="submit" class="btn btn-success">Create Task</button>
        </div>
      </form>
    </div>
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
  methods: {
    submitTask() {
      axios.post('http://localhost:5186/api/tasks', this.task)
        .then(() => {
          this.$router.push('/');
        })
        .catch(error => {
          console.error('Error creating task:', error);
        });
    }
  }
};
</script>

<style scoped>
.card {
  max-width: 600px;
  margin: 0 auto;
  border-radius: 1rem;
}
</style>