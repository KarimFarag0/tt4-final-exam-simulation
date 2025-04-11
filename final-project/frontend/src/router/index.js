import { createRouter, createWebHistory } from 'vue-router';  // Import the correct functions
import TaskList from '../views/TaskList.vue';  // Import your views
import CreateTask from '../views/CreateTask.vue';
import EditTask from '../views/EditTask.vue';

const routes = [
  { path: '/', component: TaskList },
  { path: '/create-task', component: CreateTask },
  { path: '/edit/:id', component: EditTask }
];

// Use createRouter() and createWebHistory() for Vue 3
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;