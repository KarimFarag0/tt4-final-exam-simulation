import Vue from 'vue';
import VueRouter from 'vue-router';
import TaskList from '../views/TaskList.vue';
import CreateTask from '../views/CreateTask.vue';
import EditTask from '../views/EditTask.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: TaskList },
  { path: '/create', component: CreateTask },
  { path: '/edit/:id', component: EditTask }
];

export default new VueRouter({
  mode: 'history',
  routes
});