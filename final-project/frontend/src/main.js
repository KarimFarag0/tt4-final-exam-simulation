import { createApp } from 'vue';  // Make sure to import from 'vue'
import App from './App.vue';
import router from './router';  // Import your router

createApp(App)
  .use(router)  // Add router to the app
  .mount('#app');  // Mount to the DOM