import { createApp } from 'vue';
import App from './App.vue';

// Router
import router from './router';

// i18n
import i18n from './plugins/i18n';

// Vuetify
import vuetify from './plugins/vuetify';

// Styles
import './styles/style.css';

createApp(App)
  .use(router)
  .use(i18n)
  .use(vuetify)
  .mount('#app');