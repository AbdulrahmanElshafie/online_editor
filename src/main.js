import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
import './assets/style.css';
import '@svgdotjs/svg.select.js/src/svg.select.css';

import {createApp} from 'vue';
import EditorLayout from "./EditorLayout.vue";

import 'bootstrap';
import '@fortawesome/fontawesome-free/js/all.js';

const app = createApp(EditorLayout);
app.mount('#app');
